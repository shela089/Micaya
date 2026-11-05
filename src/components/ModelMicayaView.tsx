import { useState } from 'react';
import { 
  Layers, 
  Compass, 
  BookOpen, 
  Link2, 
  PenTool, 
  MessageSquareShare, 
  Clock, 
  CheckCircle, 
  FileText, 
  Copy, 
  Check, 
  Eye, 
  Maximize2, 
  Sparkles, 
  Printer,
  X
} from 'lucide-react';
import { 
  MICAYA_MODEL_INFO, 
  MICAYA_SYNTAX, 
  CLASSROOM_SCENARIOS, 
  MicayaSyntaxStep 
} from '../data/micayaModel';
import { NavTab } from './Navbar';

interface ModelMicayaViewProps {
  initialScenarioSiteId?: string | null;
  onSelectTab?: (tab: NavTab) => void;
}

export default function ModelMicayaView({ 
  initialScenarioSiteId, 
  onSelectTab 
}: ModelMicayaViewProps) {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [activeScenarioKey, setActiveScenarioKey] = useState<string>(
    initialScenarioSiteId && CLASSROOM_SCENARIOS[initialScenarioSiteId]
      ? initialScenarioSiteId
      : 'prambanan'
  );
  const [showOriginalImageModal, setShowOriginalImageModal] = useState<boolean>(false);
  const [copiedScenario, setCopiedScenario] = useState<boolean>(false);
  const [activeTabSubView, setActiveTabSubView] = useState<'sintaks' | 'tabel-lengkap' | 'simulator-rpp' | 'rubrik'>('sintaks');

  const currentStepData = MICAYA_SYNTAX.find((s) => s.stepNumber === selectedStep) || MICAYA_SYNTAX[0];
  const activeScenario = CLASSROOM_SCENARIOS[activeScenarioKey] || CLASSROOM_SCENARIOS.prambanan;

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return Compass;
      case 2: return BookOpen;
      case 3: return Link2;
      case 4: return PenTool;
      case 5: return MessageSquareShare;
      default: return Layers;
    }
  };

  const handleCopyScenario = () => {
    let text = `SKENARIO PEMBELAJARAN MODEL MICAYA\n`;
    text += `Topik: ${activeScenario.heritageSiteName}\n`;
    text += `Bahaya: ${activeScenario.coreHazard}\n`;
    text += `Pertanyaan Pemantik: "${activeScenario.drivingQuestion}"\n\n`;
    
    MICAYA_SYNTAX.forEach((step) => {
      const details = activeScenario.stepDetails[step.stepNumber];
      text += `--- TAHAP ${step.stepNumber}: ${step.stepName.toUpperCase()} ---\n`;
      text += `Aktivitas Guru: ${details.teacherPrompt}\n`;
      text += `Aktivitas Peserta Didik: ${details.studentTask}\n`;
      text += `Media/Sumber: ${details.suggestedMedia}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedScenario(true);
    setTimeout(() => setCopiedScenario(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Deck & Research Citation */}
      <div className="border-b border-stone-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-800 uppercase">
            <span>Sintaks Pembelajaran Sejarah</span>
            <span aria-hidden="true">·</span>
            <span>Rujukan Riset Ilmiah</span>
          </div>

          <button
            onClick={() => setShowOriginalImageModal(true)}
            className="px-3 py-1.5 bg-[#EAE3D5] hover:bg-[#DDD3C2] text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-stone-700" />
            <span>Lihat Dokumen Asli Tabel 2</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Sintak Model
        </h1>

        <p className="text-base text-stone-700 font-serif italic max-w-3xl">
          Tabel 2. Sintaks Model Pembelajaran Micaya (Model Pembelajaran Mitigasi Cagar Budaya)
        </p>

        <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
          Dikembangkan berdasarkan penelitian: <strong className="text-stone-900 font-semibold">{MICAYA_MODEL_INFO.researchTitle}</strong> oleh <strong className="text-stone-900 font-semibold">{MICAYA_MODEL_INFO.author}</strong>. 
          Model ini memadukan literasi sejarah kebencanaan dengan mitigasi cagar budaya secara sistematis dalam lima tahapan pembelajaran.
        </p>

        {/* View Mode Tabs without pill containers */}
        <div className="pt-3 flex items-center gap-2 border-t border-stone-200 overflow-x-auto">
          <button
            onClick={() => setActiveTabSubView('sintaks')}
            className={`py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTabSubView === 'sintaks'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Alur Sintaks Bertahap (1 s.d. 5)
          </button>
          <button
            onClick={() => setActiveTabSubView('tabel-lengkap')}
            className={`py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTabSubView === 'tabel-lengkap'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tabel 2 Sintaks Lengkap (Sesuai Riset)
          </button>
          <button
            onClick={() => setActiveTabSubView('simulator-rpp')}
            className={`py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTabSubView === 'simulator-rpp'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Simulator RPP / Skenario Kelas
          </button>
          <button
            onClick={() => setActiveTabSubView('rubrik')}
            className={`py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTabSubView === 'rubrik'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Rubrik Penilaian Historiografi
          </button>
        </div>

      </div>

      {/* SUBVIEW 1: Interactive Stepper (Tahap 1 s.d. 5) */}
      {activeTabSubView === 'sintaks' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Stepper Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {MICAYA_SYNTAX.map((step) => {
              const Icon = getStepIcon(step.stepNumber);
              const isActive = selectedStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(step.stepNumber)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-mono font-bold ${isActive ? 'text-amber-300' : 'text-stone-400'}`}>
                      Tahap 0{step.stepNumber}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-500'}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold leading-tight">
                      {step.stepName}
                    </h3>
                    <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                      {step.timeAllocationMinutes} menit
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
            
            {/* Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                  Tahap Pembelajaran {currentStepData.stepNumber}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                  {currentStepData.stepName}
                </h2>
                <p className="text-sm text-stone-600 font-serif italic mt-0.5">
                  "{currentStepData.tagline}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 bg-[#FAF7F2] px-3 py-2 rounded-lg border border-stone-200">
                <Clock className="w-4 h-4 text-stone-600" />
                <span>Estimasi Waktu: <strong className="text-stone-800 font-semibold">{currentStepData.timeAllocationMinutes} Menit</strong></span>
              </div>
            </div>

            {/* Side-by-Side: Aktivitas Guru vs Aktivitas Peserta Didik (Direct Reproduction of Table 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Kolom 1: Aktivitas Guru */}
              <div className="p-5 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-stone-300/80">
                  <div className="w-7 h-7 rounded-md bg-stone-900 text-amber-100 flex items-center justify-center text-xs font-bold font-serif">
                    G
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    Aktivitas Guru
                  </h3>
                </div>

                <ol className="space-y-3 text-xs sm:text-sm text-stone-700 list-decimal list-outside pl-4 leading-relaxed">
                  {currentStepData.teacherActivities.map((act, idx) => (
                    <li key={idx} className="pl-1">
                      {act}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Kolom 2: Aktivitas Peserta Didik */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                  <div className="w-7 h-7 rounded-md bg-amber-900 text-white flex items-center justify-center text-xs font-bold font-serif">
                    S
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    Aktivitas Peserta Didik
                  </h3>
                </div>

                <ol className="space-y-3 text-xs sm:text-sm text-stone-700 list-decimal list-outside pl-4 leading-relaxed">
                  {currentStepData.studentActivities.map((act, idx) => (
                    <li key={idx} className="pl-1">
                      {act}
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Rasional Pedagogis & Bukti Belajar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                  Rasional Pedagogis (Mengapa Tahap Ini Penting)
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentStepData.pedagogicalRationale}
                </p>
              </div>

              <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-semibold block">
                  Target Produk & Hasil Belajar
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentStepData.expectedOutput}
                </p>
              </div>
            </div>

            {/* Stepper Navigation Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                disabled={selectedStep === 1}
                onClick={() => setSelectedStep(selectedStep - 1)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                  selectedStep === 1
                    ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                    : 'bg-white hover:bg-stone-100 text-stone-800 border-stone-300'
                }`}
              >
                ← Tahap Sebelumnya
              </button>

              <button
                onClick={() => setActiveTabSubView('simulator-rpp')}
                className="px-4 py-2 text-xs font-semibold bg-[#FAF7F2] hover:bg-stone-200 text-stone-900 rounded-lg border border-stone-300 transition-colors cursor-pointer"
              >
                Terapkan pada Kasus Nyata
              </button>

              <button
                disabled={selectedStep === 5}
                onClick={() => setSelectedStep(selectedStep + 1)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedStep === 5
                    ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                Tahap Selanjutnya →
              </button>
            </div>

          </div>

        </div>
      )}

      {/* SUBVIEW 2: Complete Table 2 Reproduction (Faithful to ResearchGate Image) */}
      {activeTabSubView === 'tabel-lengkap' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Transkrip Lengkap Publikasi</span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Tabel 2. Sintaks Model Pembelajaran Micaya
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Sumber: Shela Dwi Utari, <em>Pengembangan Model Pembelajaran Mitigasi Cagar Budaya (MICAYA) pada Pembelajaran Sejarah</em>.
              </p>
            </div>

            <button
              onClick={() => setShowOriginalImageModal(true)}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#FAF7F2] border border-stone-300 rounded-lg hover:bg-stone-200 flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5 text-stone-600" />
              <span>Bandingkan dengan Screenshot Asli</span>
            </button>
          </div>

          {/* Clean Editorial Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-900 bg-stone-50/80">
                  <th className="py-3 px-4 font-serif font-bold text-stone-900 w-1/5">
                    Tahap Pembelajaran
                  </th>
                  <th className="py-3 px-4 font-serif font-bold text-stone-900 w-2/5 border-l border-stone-200">
                    Aktivitas Guru
                  </th>
                  <th className="py-3 px-4 font-serif font-bold text-stone-900 w-2/5 border-l border-stone-200">
                    Aktivitas Peserta Didik
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                
                {/* Row 1: Orientasi */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-stone-900 align-top">
                    1. Orientasi
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Menjelaskan urgensi dan relevansi materi sejarah kebencanaan dengan kehidupan peserta didik.</p>
                    <p>2. Mengajukan pertanyaan pemantik mengenai satu atau beberapa peristiwa sejarah yang terdapat dalam buku teks atau modul pembelajaran.</p>
                    <p>3. Mengarahkan peserta didik untuk mengidentifikasi cara memperoleh informasi dan menjelaskan proses terjadinya peristiwa tersebut.</p>
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Merespons dan mengembangkan pertanyaan berdasarkan permasalahan yang disampaikan guru.</p>
                    <p>2. Mengidentifikasi peristiwa sejarah melalui penelusuran informasi dalam buku teks dan modul pembelajaran.</p>
                  </td>
                </tr>

                {/* Row 2: Membaca */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-stone-900 align-top">
                    2. Membaca
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Merumuskan pertanyaan analitis dan mengarahkan pembentukan kelompok kecil.</p>
                    <p>2. Menyediakan bahan ajar sebagai sumber utama kegiatan membaca dan diskusi kelompok.</p>
                    <p>3. Memfasilitasi penggunaan sumber tambahan untuk memperluas pemahaman terhadap peristiwa yang dikaji.</p>
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Membentuk kelompok kecil sesuai arahan guru.</p>
                    <p>2. Menentukan peristiwa sejarah yang akan dianalisis.</p>
                    <p>3. Membaca, menelaah, dan mendiskusikan sumber pembelajaran untuk menjawab pertanyaan yang telah dirumuskan.</p>
                  </td>
                </tr>

                {/* Row 3: Mengontekstualisasi */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-stone-900 align-top">
                    3. Mengontekstualisasi
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Mengarahkan peserta didik untuk menghubungkan peristiwa sejarah dengan kondisi kontemporer, terutama yang berkaitan dengan cagar budaya, lingkungan alam, dan dinamika sosial budaya.</p>
                    <p>2. Memfasilitasi analisis hubungan antara pengalaman masyarakat pada masa lalu dan persoalan kebencanaan pada masa kini.</p>
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Menghubungkan peristiwa sejarah dengan fenomena kontemporer berdasarkan sumber sejarah yang relevan.</p>
                    <p>2. Menganalisis keterkaitan antara perubahan lingkungan, risiko bencana, dan pelestarian cagar budaya.</p>
                  </td>
                </tr>

                {/* Row 4: Membuat */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-stone-900 align-top">
                    4. Membuat
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Mengarahkan peserta didik untuk mengembangkan produk pembelajaran berdasarkan hasil analisis dan diskusi kelompok.</p>
                    <p>2. Memberikan panduan penyusunan karya dalam bentuk esai, artikel sederhana, infografis, presentasi, atau media lainnya.</p>
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Menyusun karya secara kolaboratif berdasarkan hasil analisis sumber sejarah.</p>
                    <p>2. Mengembangkan historiografi sederhana yang memuat interpretasi historis dan alternatif solusi terhadap persoalan kebencanaan.</p>
                  </td>
                </tr>

                {/* Row 5: Mengomunikasikan */}
                <tr className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-stone-900 align-top">
                    5. Mengomunikasikan
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Memfasilitasi presentasi, diskusi, dan pertukaran gagasan antarkelompok.</p>
                    <p>2. Memberikan umpan balik terhadap hasil karya dan argumentasi peserta didik.</p>
                    <p>3. Mengarahkan kegiatan refleksi bersama untuk mengevaluasi proses dan hasil pembelajaran.</p>
                  </td>
                  <td className="py-4 px-4 border-l border-stone-200 align-top space-y-1.5">
                    <p>1. Mempresentasikan hasil historiografi sederhana di hadapan kelompok lain.</p>
                    <p>2. Membandingkan hasil interpretasi kelompok dengan narasi sejarah yang telah dipelajari dan hasil kelompok lainnya.</p>
                    <p>3. Menyusun simpulan dan melakukan refleksi bersama guru.</p>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-stone-200 border border-stone-300 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Tabel Sintaks</span>
            </button>
          </div>

        </div>
      )}

      {/* SUBVIEW 3: Simulator Skenario RPP MICAYA */}
      {activeTabSubView === 'simulator-rpp' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                Alat Bantu Perencanaan Pembelajaran
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Simulator Skenario Modul Ajar (RPP) MICAYA
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Pilih topik cagar budaya untuk menggenerate langkah konkret penerapan 5 sintaks MICAYA di kelas.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyScenario}
                className="px-4 py-2 bg-stone-900 text-amber-100 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedScenario ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedScenario ? 'Skenario Disalin!' : 'Salin Format RPP'}</span>
              </button>
            </div>
          </div>

          {/* Scenario Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(CLASSROOM_SCENARIOS).map((key) => {
              const sc = CLASSROOM_SCENARIOS[key];
              const isSelected = activeScenarioKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveScenarioKey(key)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-900 font-semibold shadow-xs'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-300 hover:border-stone-500'
                  }`}
                >
                  {sc.heritageSiteName}
                </button>
              );
            })}
          </div>

          {/* Scenario Dossier Card */}
          <div className="p-5 bg-[#FAF7F2] border border-stone-300/80 rounded-xl space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-mono">
              <span>Fokus Bahaya: <strong className="text-stone-900">{activeScenario.coreHazard}</strong></span>
              <span>Model: MICAYA (5 Sintaks)</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">Pertanyaan Pemantik Utama (Driving Question):</span>
              <p className="text-base sm:text-lg font-serif italic text-stone-900 mt-1 font-medium">
                "{activeScenario.drivingQuestion}"
              </p>
            </div>
          </div>

          {/* 5-Step Scenario Breakdown */}
          <div className="space-y-4">
            {MICAYA_SYNTAX.map((step) => {
              const detail = activeScenario.stepDetails[step.stepNumber];
              if (!detail) return null;
              return (
                <div
                  key={step.stepNumber}
                  className="p-5 bg-white border border-stone-200 rounded-xl space-y-3 hover:border-stone-400 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                        {step.stepNumber}
                      </span>
                      <h4 className="text-base font-serif font-bold text-stone-900">
                        Tahap {step.stepNumber}: {step.stepName}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-stone-500">
                      {step.timeAllocationMinutes} Menit
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                    <div className="p-3 bg-stone-50 rounded-lg space-y-1 border border-stone-100">
                      <span className="font-semibold text-stone-900 block">Aktivitas Guru:</span>
                      <p className="text-stone-700 leading-relaxed">{detail.teacherPrompt}</p>
                    </div>

                    <div className="p-3 bg-amber-50/50 rounded-lg space-y-1 border border-amber-200/50">
                      <span className="font-semibold text-amber-950 block">Aktivitas Peserta Didik:</span>
                      <p className="text-stone-700 leading-relaxed">{detail.studentTask}</p>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center gap-2 text-xs text-stone-500 font-mono">
                    <span>Sumber / Media Rujukan:</span>
                    <strong className="text-stone-800">{detail.suggestedMedia}</strong>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* SUBVIEW 4: Rubrik Penilaian */}
      {activeTabSubView === 'rubrik' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Instrumen Evaluasi Kurikulum Merdeka</span>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              Rubrik Penilaian Produk Historiografi & Mitigasi (Tahap 4 & 5)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Panduan penilaian autentik untuk mengukur kemampuan peserta didik dalam menganalisis kausalitas sejarah bencana dan merumuskan solusi konservasi.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-900 bg-stone-50">
                  <th className="py-3 px-3 font-serif font-bold text-stone-900 w-1/4">Dimensi Penilaian</th>
                  <th className="py-3 px-3 font-serif font-bold text-emerald-800 w-1/4">Sangat Baik (Skor 4)</th>
                  <th className="py-3 px-3 font-serif font-bold text-stone-800 w-1/4">Cukup / Baik (Skor 3)</th>
                  <th className="py-3 px-3 font-serif font-bold text-stone-500 w-1/4">Perlu Bimbingan (Skor 1–2)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="py-3 px-3 font-semibold text-stone-900 align-top">
                    1. Akurasi Fakta & Penelusuran Sumber Sejarah
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Menyajikan kronologi bencana secara presisi, mengutip prasasti/arsip primer dengan interpretasi kritis tanpa anakronisme.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Menyajikan urutan sejarah bencana dengan baik, rujukan sumber jelas meski belum membedah dokumen primer secara mendalam.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Kronologi peristiwa melompat-lompat dan belum didukung data sejarah atau dokumen otentik yang valid.
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-3 font-semibold text-stone-900 align-top">
                    2. Analisis Geospasial & Kerentanan Cagar Budaya
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Menjelaskan secara komparatif hubungan antara sifat material (andesit/bata), letak geologis (sesar/vulkanik), dan dampak kerusakan.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Menyebutkan ancaman bahaya dan jenis kerusakan situs, namun belum detail mengkaji faktor ketahanan material.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Hanya menyebutkan nama bencana tanpa menghubungkan dengan kerusakan fisik atau karakteristik situs.
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-3 font-semibold text-stone-900 align-top">
                    3. Kelayakan Alternatif Solusi Mitigasi (Pra, Saat, Pasca)
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Merumuskan rekomendasi mitigasi yang realistis, aplikatif bagi pengelola situs, serta memadukan sains modern dengan kearifan lokal.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Memberikan usulan mitigasi standar (seperti larangan memanjat), namun belum membagi tahapan pra, saat, dan pasca-bencana secara rinci.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Rekomendasi mitigasi tidak realistis atau tidak relevan dengan jenis ancaman yang dihadapi cagar budaya.
                  </td>
                </tr>

                <tr>
                  <td className="py-3 px-3 font-semibold text-stone-900 align-top">
                    4. Komunikasi & Argumentasi Ilmiah (Tahap 5)
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Mempresentasikan historiografi dengan bahasa runtut, percaya diri, mampu mempertahankan argumen saat tanya-jawab, dan reflektif.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Menyampaikan presentasi dengan jelas, merespons pertanyaan rekan dengan baik walau argumen masih bersifat umum.
                  </td>
                  <td className="py-3 px-3 align-top text-xs leading-relaxed">
                    Penyampaian ragu-ragu, belum mampu menjawab tanggapan dari audiens kelas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* Modal Viewer for Original Document Screenshot */}
      {showOriginalImageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                  Dokumen Asli Riset: {MICAYA_MODEL_INFO.tableReference}
                </h3>
              </div>
              <button
                onClick={() => setShowOriginalImageModal(false)}
                className="p-1 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-auto flex-1 bg-stone-100 flex items-center justify-center">
              <img
                src={MICAYA_MODEL_INFO.sourceImage}
                alt="Tabel 2 Sintaks Model Pembelajaran Micaya oleh Shela Dwi Utari"
                className="max-w-full h-auto object-contain rounded-lg shadow-md border border-stone-300"
              />
            </div>

            <div className="p-3 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>Peneliti: Shela Dwi Utari (ResearchGate Publication)</span>
              <button
                onClick={() => setShowOriginalImageModal(false)}
                className="px-3 py-1 bg-stone-900 text-white rounded text-xs font-medium cursor-pointer"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
