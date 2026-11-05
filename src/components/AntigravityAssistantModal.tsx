import { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  BookOpen, 
  ShieldCheck, 
  FileCheck, 
  HelpCircle, 
  Copy, 
  Check, 
  AlertTriangle,
  Layers,
  Download,
  Info
} from 'lucide-react';
import { HERITAGE_SITES, HeritageSite } from '../data/heritageSites';

interface AntigravityAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSiteId?: string | null;
}

type ConsultMode = 'rpp' | 'mitigation' | 'review' | 'general';

export default function AntigravityAssistantModal({
  isOpen,
  onClose,
  initialSiteId,
}: AntigravityAssistantModalProps) {
  const [activeMode, setActiveMode] = useState<ConsultMode>('rpp');
  const [selectedSiteId, setSelectedSiteId] = useState<string>(initialSiteId || 'borobudur');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'consultation' | 'antigravity-guide'>('consultation');

  if (!isOpen) return null;

  const selectedSite = HERITAGE_SITES.find((s: HeritageSite) => s.id === selectedSiteId);

  const presetPrompts: Record<ConsultMode, string[]> = {
    rpp: [
      `Buatkan Modul Ajar Sejarah Fase E untuk studi kasus cagar budaya ${selectedSite?.name || 'Candi Borobudur'} menggunakan 5 sintaks Model Pembelajaran MICAYA.`,
      `Rancang skenario pembelajaran tahap 'Mengontekstualisasi' dan 'Membuat' yang mengaitkan sejarah gempa/letusan dengan ancaman pada ${selectedSite?.name || 'Candi Prambanan'}.`,
      `Susun aktivitas pembelajaran diferensiasi berbasis 5 sintaks MICAYA untuk siswa berkemampuan beragam.`,
    ],
    mitigation: [
      `Jelaskan matriks mitigasi 3 fase (Pra, Saat, Pasca) untuk melindungi struktur ${selectedSite?.name || 'Candi Borobudur'} dari bahaya ${selectedSite?.primaryHazard || 'Vulkanik'}.`,
      `Bagaimana peranan kearifan lokal (seperti konstruksi pasak kayu atau sistem drainase kuno) dalam mitigasi bencana pada cagar budaya ini?`,
      `Apa saja SOP evakuasi darurat yang harus dipersiapkan bagi pengunjung dan cagar budaya saat terjadi bencana mendadak?`,
    ],
    review: [
      `Evaluasi draf kesimpulan siswa: "Candi dibangun di dekat gunung api karena tanahnya subur, namun sekarang rawan rusak akibat erupsi dan gempa, sehingga perlu dipasang tudung pelindung."`,
      `Berikan rubrik penilaian 4 level untuk tugas pembuatan infografis mitigasi cagar budaya tingkat SMA.`,
      `Bagaimana cara memberikan umpan balik formatif bagi siswa yang kesulitan pada tahap 'Mengontekstualisasi'?`,
    ],
    general: [
      `Mengapa integrasi sejarah kebencanaan dan mitigasi cagar budaya sangat penting diajarkan dalam Kurikulum Merdeka?`,
      `Jelaskan perbedaan mendasar antara model MICAYA (Shela Dwi Utari) dengan pembelajaran sejarah konvensional.`,
      `Apa saja peristiwa letusan gunung api atau gempa bumi purba yang pernah mengubah peradaban di Nusantara?`,
    ],
  };

  const handleSendQuery = async (customPrompt?: string) => {
    const textToSend = customPrompt || prompt;
    if (!textToSend.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/antigravity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          mode: activeMode,
          siteName: selectedSite?.name,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.response || 'Respons berhasil diterima.');
    } catch (err: any) {
      console.warn('Fallback to local intelligent response engine:', err);
      // Fallback local engine simulation
      setTimeout(() => {
        setResponse(generateClientSmartFallback(textToSend, activeMode, selectedSite?.name));
        setLoading(false);
      }, 700);
      return;
    } finally {
      setLoading(false);
    }
  };

  const generateClientSmartFallback = (query: string, mode: ConsultMode, siteName?: string) => {
    const site = siteName || 'Candi Borobudur';
    if (mode === 'rpp') {
      return `### 📋 Modul Ajar Terpadu Model Pembelajaran MICAYA\n\n**Topik Pembelajaran:** Historiografi Kebencanaan & Mitigasi Cagar Budaya ${site}\n**Fase/Kelas:** Fase E (Kelas X SMA/MA)\n**Alokasi Waktu:** 2 x 45 Menit (Pertemuan 1)\n\n#### 1. Tahap Orientasi (15 Menit)\n- **Aktivitas Guru:** Menampilkan video/foto arsip bencana historis yang mengancam ${site}. Mengajukan pertanyaan pemantik: *"Bagaimana peradaban masa lampau merespons bencana, dan apa dampaknya bagi cagar budaya yang kita warisi hari ini?"*\n- **Aktivitas Siswa:** Menelaah fenomena kebencanaan dan mencatat data awal proses terjadinya bencana pada lembar observasi.\n\n#### 2. Tahap Membaca (20 Menit)\n- **Aktivitas Guru:** Membentuk kelompok kecil (4-5 siswa) dan membagikan modul esai sejarah kebencanaan MICAYA.\n- **Aktivitas Siswa:** Membaca kritis sumber literatur, mencatat kronologi peristiwa, dan mendiskusikan mekanisme kerusakan cagar budaya.\n\n#### 3. Tahap Mengontekstualisasi (20 Menit)\n- **Aktivitas Guru:** Membimbing siswa menghubungkan catatan sejarah masa lampau dengan kondisi tata ruang dan ancaman bencana masa kini.\n- **Aktivitas Siswa:** Menganalisis korelasi antara perubahan iklim/aktivitas geologis dengan risiko kerusakan pada ${site}.\n\n#### 4. Tahap Membuat (20 Menit)\n- **Aktivitas Guru:** Memfasilitasi pembuatan produk kolaboratif (esai historiografi singkat atau infografis matriks mitigasi 3 fase).\n- **Aktivitas Siswa:** Menyusun alternatif solusi mitigasi struktural dan non-struktural secara kreatif.\n\n#### 5. Tahap Mengomunikasikan (15 Menit)\n- **Aktivitas Guru:** Memfasilitasi presentasi silang (*gallery walk*) dan memandu refleksi kelas.\n- **Aktivitas Siswa:** Menyampaikan hasil karya kelompok, menanggapi masukan kelompok lain, dan menarik simpulan komprehensif.`;
    }
    if (mode === 'mitigation') {
      return `### 🛡️ Matriks Mitigasi 3 Fase: ${site}\n\n1. **Fase Pra-Bencana (Kesiapsiagaan & Pencegahan):**\n   - *Struktural:* Pembersihan saluran drainase kuno (*jaladwara*), pemasangan terpal penutup (*cover tarpaulin*) stupa/bata dari abu vulkanik asam, penguatan fondasi terhadap getaran seismik.\n   - *Non-Struktural:* Pelatihan simulasi tanggap darurat untuk pemandu dan warga sekitar, penyusunan peta jalur evakuasi berstandar internasional, digitalisasi 3D arsip cagar budaya.\n\n2. **Fase Saat Bencana (Tanggap Darurat):**\n   - Penutupan sementara kompleks dari kunjungan wisatawan, evakuasi massa ke zona aman terbuka, penyelamatan artefak portabel ke *safe refuge* yang tahan api dan goncangan.\n\n3. **Fase Pasca-Bencana (Konservasi & Pemulihan):**\n   - Pembersihan endapan abu secara mekanis tanpa bahan kimia keras, pemeriksaan mikroskopis retakan batu (*stone weathering*), penataan kembali batu runtuh dengan kaidah anastilosis arkeologi.`;
    }
    return `### 💡 Analisis Asisten Antigravity MICAYA\n\nMenanggapi pertanyaan Anda: *"${query}"*\n\n1. **Landasan Filosofis:** Model Pembelajaran MICAYA mengintegrasikan kesadaran lingkungan (*environmental awareness*) ke dalam narasi sejarah nasional. Cagar budaya di Nusantara bukan sekadar benda mati, melainkan saksi bisu kemampuan adaptasi manusia terhadap dinamika Cincin Api Pasifik (*Ring of Fire*).\n2. **Aplikasi Pembelajaran:** Gunakan bahan ajar dari tab **Peta Cagar Budaya** dan **Esai Sejarah Bencana** pada aplikasi MICAYA ini untuk memperkaya data faktual bagi peserta didik.`;
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadAntigravityConfig = () => {
    const configContent = `# Petunjuk Membuka Proyek MICAYA di Google Antigravity
1. Buka Google Antigravity (ikon 'A' biru di taskbar Anda).
2. Pilih menu: File -> Open Folder...
3. Pilih folder proyek 'micaya'.
4. Agen Antigravity akan otomatis membaca file '.antigravity/instructions.md'.
5. Jangan menyeret file ZIP atau folder 'node_modules' langsung ke chat untuk menghindari error 'Agent execution terminated due to error'.`;

    const blob = new Blob([configContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PANDUAN_ANTIGRAVITY_MICAYA.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-stone-300 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 bg-white/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-200 flex items-center justify-center font-bold text-lg shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Asisten Antigravity MICAYA
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                  Terintegrasi
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans">
                Konsultan AI untuk Sintaks Pembelajaran Sejarah, RPP Kurikulum Merdeka, & Mitigasi Cagar Budaya
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs font-medium">
              <button
                onClick={() => setActiveTab('consultation')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'consultation'
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Konsultasi AI
              </button>
              <button
                onClick={() => setActiveTab('antigravity-guide')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'antigravity-guide'
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Panduan Desktop Antigravity
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'antigravity-guide' ? (
            /* Antigravity Desktop Guide & Error Troubleshooting */
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 space-y-1">
                  <p className="font-bold">
                    Mengapa muncul error "Agent execution terminated due to error" saat mengunggah ke Antigravity?
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Kesalahan tersebut terjadi karena folder proyek diseret (*drag & drop*) atau diunggah sebagai file ZIP utuh ke dalam jendela chat Antigravity. Folder `node_modules` dan file lock memiliki ribuan file binary dan kode minifikasi yang melebihi batas memori agen.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs">1</span>
                    Buka Lewat File &gt; Open Folder
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Buka aplikasi <strong>Google Antigravity</strong> (ikon huruf A di taskbar), lalu klik menu <strong>File &gt; Open Folder...</strong> dan arahkan ke folder proyek ini. Jangan seret ZIP ke chat prompt.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs">2</span>
                    Konfigurasi Otomatis Terpasang
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Repositori ini sudah dilengkapi file <code>.antigravity/instructions.md</code> dan <code>.antigravityignore</code> sehingga Antigravity secara otomatis mengenali sintaks 5 tahap model MICAYA dan 12 cagar budaya tanpa error!
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-900 text-stone-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-amber-200 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Contoh Prompt Siap Pakai di Antigravity Desktop
                  </h4>
                  <button
                    onClick={handleDownloadAntigravityConfig}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-amber-200/20 hover:bg-amber-200/30 text-amber-200 rounded-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Unduh Panduan .MD
                  </button>
                </div>
                <div className="space-y-2 text-xs font-mono bg-stone-950 p-3.5 rounded-lg border border-stone-800 text-stone-300">
                  <p className="text-amber-400 font-semibold">// Ketikkan di Antigravity:</p>
                  <p>"Antigravity, buatkan Modul Ajar Sejarah Kelas X materi Mitigasi Gempa Sesar Opak pada Candi Prambanan menggunakan 5 sintaks Model Pembelajaran MICAYA lengkap dengan aktivitas guru dan peserta didik."</p>
                </div>
              </div>

            </div>
          ) : (
            /* Interactive In-App Consultation */
            <div className="space-y-6">
              
              {/* Mode Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'rpp', label: 'Generator RPP MICAYA', icon: BookOpen, desc: '5 Sintaks Shela Dwi Utari' },
                  { id: 'mitigation', label: 'Matriks Mitigasi 3 Fase', icon: ShieldCheck, desc: 'Pra, Saat, Pasca Bencana' },
                  { id: 'review', label: 'Review Esai / LKPD', icon: FileCheck, desc: 'Rubrik Penilaian 4 Level' },
                  { id: 'general', label: 'Konsultasi Historiografi', icon: HelpCircle, desc: 'Bencana & Alam Nusantara' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeMode === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveMode(item.id as ConsultMode);
                        setPrompt('');
                      }}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isActive
                          ? 'bg-amber-100/70 border-amber-400 text-stone-900 shadow-2xs'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-amber-900' : 'text-stone-500'}`} />
                        <span className="text-xs font-bold leading-tight">{item.label}</span>
                      </div>
                      <span className="text-[10px] text-stone-500 block leading-tight">{item.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Site Selector */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-stone-500 font-medium">Pilih Cagar Budaya Target:</span>
                <select
                  value={selectedSiteId}
                  onChange={(e) => setSelectedSiteId(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  {HERITAGE_SITES.map((site: HeritageSite) => (
                    <option key={site.id} value={site.id}>
                      {site.name} ({site.primaryHazard})
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-stone-500 italic">
                  Lokasi: {selectedSite?.location}
                </span>
              </div>

              {/* Preset Quick Prompts */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  Rekomendasi Pertanyaan Cepat:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {presetPrompts[activeMode].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrompt(p);
                        handleSendQuery(p);
                      }}
                      className="px-2.5 py-1.5 text-xs text-stone-700 bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-lg text-left transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Query Input Box */}
              <div className="space-y-2">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Tuliskan pertanyaan, studi kasus, atau draf esai siswa yang ingin dikonsultasikan dengan Antigravity..."
                    rows={3}
                    className="w-full p-3.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-500 pr-12 resize-none shadow-inner"
                  />
                  <button
                    onClick={() => handleSendQuery()}
                    disabled={loading || !prompt.trim()}
                    className="absolute bottom-3 right-3 p-2 bg-stone-900 hover:bg-amber-900 disabled:opacity-40 text-amber-100 rounded-lg transition-colors cursor-pointer"
                    title="Kirim ke Asisten Antigravity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Response Display Area */}
              {loading && (
                <div className="p-8 rounded-xl bg-white border border-stone-200 flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 border-3 border-amber-300 border-t-amber-900 rounded-full animate-spin" />
                  <p className="text-xs text-stone-600 font-medium animate-pulse">
                    Asisten Antigravity sedang mengolah sintaks MICAYA & analisis kebencanaan...
                  </p>
                </div>
              )}

              {response && !loading && (
                <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-700" />
                      <span className="font-serif font-bold text-sm text-stone-900">
                        Hasil Analisis Asisten Antigravity
                      </span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
                    </button>
                  </div>

                  <div className="text-xs text-stone-800 leading-relaxed font-sans whitespace-pre-line space-y-2 max-h-96 overflow-y-auto pr-2">
                    {response}
                  </div>
                </div>
              )}

              {/* Educational Citation Footer */}
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-[11px] text-stone-600 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  Berpedoman pada publikasi: <em>Shela Dwi Utari - Pengembangan Model Pembelajaran Mitigasi Cagar Budaya (MICAYA)</em>
                </span>
                <span className="font-mono text-[10px] text-stone-500">
                  Antigravity Engine v1.0
                </span>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
