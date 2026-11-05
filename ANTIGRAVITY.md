# Panduan Integrasi Proyek MICAYA dengan Google Antigravity

Dokumen ini menjelaskan cara menggunakan proyek **MICAYA** (*Model Pembelajaran Mitigasi Cagar Budaya*) di dalam aplikasi **Google Antigravity** tanpa mengalami error terminasi agen.

---

## ⚠️ Mengapa Muncul Error "Agent execution terminated due to error"?

Jika Anda melihat pesan:
```text
You can prompt the model to try again or start a new conversation if the error persists.
See our troubleshooting guide for more help.
Unknown: Agent execution terminated due to error.
```

Penyebab utamanya adalah:
1. **Mengunggah File ZIP / Folder utuh langsung ke kolom Chat Antigravity**:
   Ketika folder proyek diseret (*drag-and-drop*) langsung ke kotak obrolan, Antigravity mencoba membaca seluruh file termasuk folder raksasa `node_modules` (ribuan file binary dan JavaScript), file lock (`bun.lock`), atau folder `.git`. Hal ini melebihi kapasitas memori dan *token context limit* agen sandbox Antigravity, sehingga sistem langsung memutus eksekusi (*Agent execution terminated*).
2. **Ketiadaan Konfigurasi Ignore**:
   Antigravity memerlukan file konfigurasi `.antigravityignore` untuk mengetahui file apa saja yang harus diabaikan saat membaca repositori.

---

## ✅ Cara Benar Membuka Proyek di Google Antigravity

### Metode 1: Buka Folder Kerja (Recommended)
1. **Jangan** seret file ZIP ke kotak chat model.
2. Ekstrak file repositori ini ke folder di komputer Anda (misalnya `D:\Projects\micaya`).
3. Buka aplikasi **Google Antigravity** (ikon huruf **A** biru di taskbar Windows Anda).
4. Klik menu **File** -> **Open Folder...** (atau tekan `Ctrl + K, Ctrl + O`).
5. Pilih folder proyek `micaya`.
6. Antigravity secara otomatis membaca file konfigurasi `.antigravity/instructions.md` dan mengabaikan file berat berkat `.antigravityignore` yang sudah kami sediakan!

### Metode 2: Clone dari GitHub
1. Di Antigravity, pilih **Clone Repository**.
2. Masukkan URL repositori GitHub Anda: `https://github.com/USERNAME/micaya-cagar-budaya.git`.
3. Buka workspace yang telah di-clone.

---

## 🤖 Peran dan Kemampuan Agen Antigravity pada MICAYA

Proyek ini telah dikonfigurasi secara presisi sehingga Agen Antigravity langsung memahami:
1. **Sintaks 5 Tahap Pembelajaran MICAYA (Tabel 2 - Penelitian Shela Dwi Utari)**:
   - **Tahap 1: Orientasi** (Urgensi, pertanyaan pemantik kebencanaan)
   - **Tahap 2: Membaca** (Kelompok kecil, literasi sumber sejarah primer & sekunder)
   - **Tahap 3: Mengontekstualisasi** (Menghubungkan masa lalu dengan ancaman cagar budaya masa kini)
   - **Tahap 4: Membuat** (Produk pembelajaran, historiografi sederhana, infografis)
   - **Tahap 5: Mengomunikasikan** (Presentasi silang kelompok, refleksi, umpan balik guru)
2. **Basis Data 12 Cagar Budaya Indonesia**: Borobudur, Prambanan, Muaro Jambi, Benteng Marlborough, Baiturrahman, Gunung Padang, Sangiran, Keraton Yogya, Trowulan, Benteng Somba Opu, Kota Lama Semarang, Banda Neira.
3. **Analisis Mitigasi 3 Fase**: Pra-Bencana, Saat Bencana, dan Pasca-Bencana (struktural & kearifan lokal seperti *Smong*, *Saka Guru*, pasak purus).

---

## 💬 Contoh Prompt Siap Pakai di Antigravity

Setelah membuka folder di Antigravity, ketikkan perintah di kolom chat Antigravity:

### 1. Membuat Modul Ajar / RPP Berbasis MICAYA
> *"Antigravity, buatkan Modul Ajar Sejarah Fase E (SMA Kelas X) materi Mitigasi Gempa Sesar Opak pada Candi Prambanan menggunakan 5 sintaks Model Pembelajaran MICAYA lengkap dengan aktivitas guru dan peserta didik."*

### 2. Evaluasi Hasil Esai Siswa
> *"Antigravity, evaluasi draf historiografi siswa berikut menggunakan 4 rubrik penilaian MICAYA: [paste teks esai siswa di sini]. Berikan skor dan rekomendasi perbaikan."*

### 3. Analisis Mitigasi Cagar Budaya Spesifik
> *"Jelaskan kerentanan struktural Kompleks Percandian Muaro Jambi terhadap banjir musiman Sungai Batanghari dan rumuskan matriks mitigasi 3 fase (Pra, Saat, Pasca) yang sesuai dengan prinsip pelestarian cagar budaya."*

---

## 🚀 Menjalankan Server Lokal MICAYA

Jika ingin menjalankan aplikasi web interaktif di komputer Anda:
```bash
# 1. Install dependensi
npm install

# 2. Jalankan server pengembangan
npm run dev
```
Buka browser pada alamat `http://localhost:3000`.
Di dalam aplikasi web juga tersedia tombol **Asisten Antigravity** untuk berkonsultasi langsung tanpa membuka terminal!
