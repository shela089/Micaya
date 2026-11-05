import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

// Initialize GoogleGenAI server-side with safe key lookup
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION_MICAYA = `
Anda adalah Asisten Antigravity Spesialis MICAYA (Model Pembelajaran Mitigasi Cagar Budaya).
Landasan teoretis Anda didasarkan pada penelitian akademik Shela Dwi Utari mengenai sintaks pembelajaran sejarah berbasis mitigasi cagar budaya.

Sintaks 5 Tahap Model Pembelajaran MICAYA:
1. Orientasi: Menjelaskan urgensi sejarah kebencanaan, pertanyaan pemantik, identifikasi proses sejarah.
2. Membaca: Pembentukan kelompok kecil, membaca sumber utama dan sumber tambahan.
3. Mengontekstualisasi: Menghubungkan sejarah masa lalu dengan kondisi kontemporer, lingkungan, dan pelestarian cagar budaya masa kini.
4. Membuat: Menyusun karya kolaboratif (historiografi sederhana, esai, infografis, media mitigasi).
5. Mengomunikasikan: Presentasi silang kelompok, perbandingan narasi sejarah, refleksi bersama guru.

Cagar Budaya Utama di Indonesia:
- Candi Borobudur (Erupsi Merapi & Gempa Tektonik)
- Candi Prambanan (Gempa Sesar Opak)
- Kawasan Cagar Budaya Muaro Jambi (Banjir Luapan Batanghari)
- Benteng Marlborough (Gempa Megathrust & Tsunami Samudra Hindia)
- Masjid Raya Baiturrahman (Tsunami Aceh 2004)
- Situs Megalitikum Gunung Padang (Longsor, Gempa Sesar Cimandiri)
- Situs Sangiran (Erosi Bengawan Solo, Sedimentasi)
- Keraton Yogyakarta (Gempa Sesar Opak, Erupsi Merapi)
- Trowulan Majapahit (Banjir, Pelapukan Bata Kuno)
- Benteng Somba Opu (Banjir Muara Jeneberang, Intrusi Air Laut)
- Kota Lama Semarang (Banjir Rob & Penurunan Muka Tanah)
- Banda Neira / Benteng Belgica (Letusan Gunung Api Banda Api & Tsunami)

Tugas Anda: Memberikan jawaban terstruktur, ilmiah, edukatif, dan aplikatif dalam bahasa Indonesia yang santun dan profesional.
`;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'MICAYA Antigravity Engine',
      hasApiKey: Boolean(apiKey),
    });
  });

  // Antigravity AI consultation endpoint
  app.post('/api/antigravity', async (req, res) => {
    try {
      const { prompt, mode, siteName } = req.body;

      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Prompt pertanyaan wajib diisi.' });
        return;
      }

      // If GEMINI_API_KEY is available, call the Gemini Interactions API
      if (ai) {
        let taskPrefix = '';
        if (mode === 'rpp') {
          taskPrefix = 'Susunlah RPP / Modul Ajar Sejarah menggunakan 5 sintaks Model Pembelajaran MICAYA secara lengkap dengan aktivitas guru dan peserta didik untuk: ';
        } else if (mode === 'mitigation') {
          taskPrefix = 'Buatkan analisis komprehensif risiko bencana dan matriks mitigasi 3 fase (Pra, Saat, Pasca) untuk cagar budaya: ';
        } else if (mode === 'review') {
          taskPrefix = 'Evaluasi dan berikan umpan balik konstruktif terhadap draf esai/LKPD siswa berikut berdasarkan 4 rubrik MICAYA: ';
        }

        const inputContent = siteName
          ? `${taskPrefix}${siteName}. Pertanyaan/Instruksi: ${prompt}`
          : `${taskPrefix}${prompt}`;

        const interaction = await ai.interactions.create({
          model: 'gemini-3.8-flash',
          input: inputContent,
          system_instruction: SYSTEM_INSTRUCTION_MICAYA,
          generation_config: {
            max_output_tokens: 2048,
          },
        });

        // Collect combined text from all model_output steps
        let fullOutput = '';
        if (interaction.steps) {
          for (const step of interaction.steps) {
            if (step.type === 'model_output') {
              const textContent: any = step.content?.find((c: any) => c.type === 'text');
              if (textContent && typeof textContent.text === 'string') {
                fullOutput += textContent.text;
              }
            }
          }
        }

        if (!fullOutput && interaction.output_text) {
          fullOutput = interaction.output_text;
        }

        res.json({
          success: true,
          source: 'antigravity-gemini-cloud',
          response: fullOutput || 'Mohon maaf, respons tidak dapat dirangkum. Silakan ulangi pertanyaan Anda.',
        });
        return;
      }

      // Fallback local smart response engine if GEMINI_API_KEY is not configured
      const fallbackResponse = generateLocalSmartResponse(prompt, mode, siteName);
      res.json({
        success: true,
        source: 'antigravity-local-engine',
        response: fallbackResponse,
      });

    } catch (error: any) {
      console.error('Antigravity API Error:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Terjadi kesalahan saat memproses permintaan agen Antigravity.',
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[MICAYA] Server berjalan di http://0.0.0.0:${PORT}`);
  });
}

function generateLocalSmartResponse(prompt: string, mode?: string, siteName?: string): string {
  const target = siteName || 'Candi Borobudur & Prambanan';

  if (mode === 'rpp') {
    return `### 📋 Rancangan Modul Ajar MICAYA: Studi Kasus ${target}

**Tingkat / Fase:** SMA Fase E / F (Kelas X / XI)  
**Alokasi Waktu:** 2 x 45 Menit  
**Materi Pokok:** Historiografi Kebencanaan & Mitigasi Cagar Budaya ${target}

---

#### 1. Tahap Orientasi (15 Menit)
- **Aktivitas Guru:** Guru menayangkan foto komparasi ${target} sebelum dan sesudah terdampak bencana (misal: gempa bumi atau erupsi abu vulkanik). Guru mengajukan pertanyaan pemantik: *"Bagaimana peradaban masa lalu beradaptasi dengan lingkungan cincin api, dan mengapa cagar budaya ini rentan terhadap ancaman geologis kontemporer?"*
- **Aktivitas Peserta Didik:** Menyimak tayangan, mencatat fenomena kebencanaan pada modul MICAYA, dan merumuskan hipotesis awal mengenai ancaman struktural cagar budaya.

#### 2. Tahap Membaca (20 Menit)
- **Aktivitas Guru:** Membagi peserta didik menjadi kelompok beranggotakan 4-5 orang. Membagikan teks esai sejarah bencana dan data teknis kerentanan cagar budaya.
- **Aktivitas Peserta Didik:** Menelaah sumber bacaan secara kritis, mengidentifikasi data kronologis bencana masa lalu, serta mendiskusikan mekanisme kerusakan batu/material cagar budaya.

#### 3. Tahap Mengontekstualisasi (20 Menit)
- **Aktivitas Guru:** Membimbing peserta didik menghubungkan data sejarah dengan kondisi nyata di sekitar situs cagar budaya masa kini (perubahan tata guna lahan, urbanisasi, iklim ekstrem).
- **Aktivitas Peserta Didik:** Menganalisis korelasi antara posisi geografis sesar aktif / gunung api dengan kerentanan ${target}, serta mengkaji kearifan lokal masa lampau.

#### 4. Tahap Membuat (20 Menit)
- **Aktivitas Guru:** Memberikan instruksi pembuatan produk historiografi ringkas atau infografis rencana mitigasi 3 fase (Pra, Saat, Pasca bencana).
- **Aktivitas Peserta Didik:** Bekerja sama menyusun karya mitigasi struktural dan non-struktural yang dapat diimplementasikan oleh pengelola situs maupun generasi muda.

#### 5. Tahap Mengomunikasikan (15 Menit)
- **Aktivitas Guru:** Memfasilitasi pameran karya atau presentasi silang (*gallery walk*) antarkelompok dan memberikan umpan balik penguatan.
- **Aktivitas Peserta Didik:** Mempresentasikan solusi mitigasi, menanggapi masukan kelompok lain, dan menuliskan lembar refleksi personal tentang tanggung jawab pelestarian warisan budaya bangsa.`;
  }

  if (mode === 'mitigation') {
    return `### 🛡️ Analisis Risiko & Matriks Mitigasi 3 Fase: ${target}

Berdasarkan tinjauan historiografi dan rekayasa konservasi cagar budaya Indonesia:

#### 1. Karakteristik Ancaman & Kerentanan Struktural
- **Jenis Bahaya Utama:** Guncangan seismik tektonik, pelapukan kimiawi akibat abu asam vulkanik, atau perendaman hidrometeorologi.
- **Titik Lemah Struktur:** Sambungan batu tanpa perekat modern (sambungan takik/ekor burung), beban gempa horizontal pada stupa/kemuncak, dan penurunan fondasi tanah akibat infiltrasi air.

#### 2. Matriks Mitigasi 3 Fase Terpadu:
| Fase | Tindakan Struktural (Fisik) | Tindakan Non-Struktural (Edukasi & SOP) |
|---|---|---|
| **Pra-Bencana** | Pemasangan sensor akselerograf/tiltmeter, perbaikan saluran drainase kuno (*jaladwara*), pemasangan tudung penutup stupa (*tarpaulin cover*) saat siaga erupsi. | Penyusunan peta jalur evakuasi pengunjung, pelatihan simulasi berkala untuk pengelola & masyarakat lokal, digitalisasi 3D fotogrametri cagar budaya. |
| **Saat Bencana** | Penutupan akses zona rawan keruntuhan, pengamanan ornamen lepas ke zona penyangga aman (*safe refuge*). | Aktivasi sirine peringatan dini, evakuasi pengunjung ke titik kumpul terbuka, penghentian total operasional komersial. |
| **Pasca-Bencana** | Pembersihan abu vulkanik dengan kuas lembut & air bertekanan rendah terukur (tanpa bahan kimia abrasif), audit stabilitas struktur oleh tim balai konservasi. | Inventarisasi batu runtuh menggunakan sistem penomoran blok (*anastilosis*), trauma healing bagi komunitas cagar budaya, pemulihan aksesibilitas. |`;
  }

  return `### 💡 Pandangan Spesialis MICAYA & Antigravity

Mengenai pertanyaan Anda: *"${prompt}"*

1. **Perspektif Sejarah Kritis:**
   Kepulauan Nusantara secara alamiah terbentuk oleh pertemuan tiga lempeng tektonik utama (Indo-Australia, Eurasia, dan Pasifik). Nenek moyang bangsa Indonesia telah mendirikan mahakarya seperti Candi Borobudur, Prambanan, hingga Muaro Jambi dengan memahami ritme alam melalui sistem pasak kayu fleksibel (*knock-down*), fondasi batu berundak terasering, serta pemanfaatan jalur hidrologis alami.

2. **Integrasi dalam Pembelajaran Sejarah:**
   Pembelajaran sejarah kebencanaan melalui model **MICAYA** tidak sekadar menghafal tanggal peristiwa letusan atau gempa bumi, melainkan membangun kesadaran kritis (*critical disaster awareness*) bahwa warisan budaya yang kita nikmati hari ini adalah penyintas sejarah yang membutuhkan komitmen pelestarian lintas generasi.

3. **Rekomendasi Praktis:**
   Gunakan menu **Peta Cagar Budaya** untuk memvisualisasikan zonasi risiko sesar aktif, serta buka tab **Sumber Belajar** untuk mengunduh LKPD interaktif bagi peserta didik.`;
}

startServer();
