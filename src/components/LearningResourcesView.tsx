import { useState } from 'react';
import { 
  FileCheck, 
  HelpCircle, 
  BookMarked, 
  Search, 
  Printer, 
  RotateCcw, 
  Check, 
  X, 
  Sparkles, 
  Download, 
  Layers, 
  Award,
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import { 
  QUIZ_QUESTIONS, 
  GLOSSARY_ITEMS, 
  TEACHER_GUIDE, 
  GlossaryItem 
} from '../data/learningResources';
import { HERITAGE_SITES } from '../data/heritageSites';
import { NavTab } from './Navbar';

interface LearningResourcesViewProps {
  onSelectTab?: (tab: NavTab) => void;
}

export default function LearningResourcesView({ onSelectTab }: LearningResourcesViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'lkpd' | 'kuis' | 'modul-guru' | 'glosarium' | 'berkas-html'>('lkpd');

  // LKPD Form States
  const [lkpdData, setLkpdData] = useState({
    groupName: '',
    classGrade: 'X - Sejarah 1',
    selectedSiteId: 'prambanan',
    members: '',
    orientationProblem: '',
    sourceAnalysis: '',
    contextualAnalysis: '',
    mitigationSolutions: '',
    reflectionConclusion: ''
  });
  const [showLkpdPrintPreview, setShowLkpdPrintPreview] = useState(false);

  // Quiz States
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  // Glossary States
  const [glossarySearch, setGlossarySearch] = useState('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('Semua');

  // Selected site for LKPD
  const selectedSite = HERITAGE_SITES.find((s) => s.id === lkpdData.selectedSiteId) || HERITAGE_SITES[0];

  // Quiz calculations
  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 10;
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
    setCurrentQuizIndex(0);
  };

  // Filtered glossary
  const filteredGlossary = GLOSSARY_ITEMS.filter((item) => {
    const matchSearch =
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchCategory = glossaryCategory === 'Semua' || item.category === glossaryCategory;
    return matchSearch && matchCategory;
  });

  const glossaryCategories = ['Semua', 'Arkeologi & Konservasi', 'Geologi & Bencana', 'Pedagogi Sejarah', 'Kearifan Lokal'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Deck */}
      <div className="border-b border-stone-200 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-800 uppercase">
          <span>Perangkat Pembelajaran Terpadu</span>
          <span aria-hidden="true">·</span>
          <span>Kurikulum Merdeka</span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">
          Sumber Belajar & Toolkit Kelas MICAYA
        </h1>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Koleksi instrumen pembelajaran autentik mencakup Lembar Kerja Peserta Didik (LKPD) digital siap cetak, kuis diagnostik kebencanaan 10 soal HOTS, panduan modul ajar untuk guru, glosarium ilmiah, dan berkas HTML mandiri terintegrasi.
        </p>

        {/* Sub-tabs navigation */}
        <div className="pt-4 flex items-center gap-2 border-t border-stone-200 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('lkpd')}
            className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'lkpd'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span>LKPD Interaktif</span>
          </button>

          <button
            onClick={() => setActiveSubTab('kuis')}
            className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'kuis'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kuis HOTS Kebencanaan (10 Soal)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('modul-guru')}
            className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'modul-guru'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Modul Ajar & Panduan Guru</span>
          </button>

          <button
            onClick={() => setActiveSubTab('glosarium')}
            className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'glosarium'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Glosarium Istilah Terpadu</span>
          </button>

          <button
            onClick={() => setActiveSubTab('berkas-html')}
            className={`py-2 px-3.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'berkas-html'
                ? 'bg-amber-900 text-white font-semibold shadow-xs'
                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Berkas HTML Terintegrasi (Offline)</span>
          </button>
        </div>
      </div>

      {/* SUB-VIEW 1: LKPD INTERAKTIF (Lembar Kerja Peserta Didik) */}
      {activeSubTab === 'lkpd' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                Instrumen Kerja Siswa
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Lembar Kerja Peserta Didik (LKPD) Model MICAYA
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Studi Kasus: Rekonstruksi Sejarah Bencana dan Mitigasi Cagar Budaya Indonesia.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLkpdPrintPreview(!showLkpdPrintPreview)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-stone-700" />
                <span>{showLkpdPrintPreview ? 'Kembali ke Formulir' : 'Pratinjau / Cetak LKPD'}</span>
              </button>
            </div>
          </div>

          {!showLkpdPrintPreview ? (
            /* Interactive LKPD Input Form */
            <div className="space-y-6">
              
              {/* Header Identitas Kelompok */}
              <div className="p-4 bg-[#FAF7F2] border border-stone-300 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Nama Kelompok / Tim Peneliti:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Kelompok 3 - Sangiran"
                    value={lkpdData.groupName}
                    onChange={(e) => setLkpdData({ ...lkpdData, groupName: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Kelas / Jenjang:
                  </label>
                  <input
                    type="text"
                    value={lkpdData.classGrade}
                    onChange={(e) => setLkpdData({ ...lkpdData, classGrade: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Cagar Budaya yang Dikaji:
                  </label>
                  <select
                    value={lkpdData.selectedSiteId}
                    onChange={(e) => setLkpdData({ ...lkpdData, selectedSiteId: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden cursor-pointer"
                  >
                    {HERITAGE_SITES.map((site) => (
                      <option key={site.id} value={site.id}>
                        {site.name} ({site.primaryHazard})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-3">
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Anggota Kelompok:
                  </label>
                  <input
                    type="text"
                    placeholder="Tuliskan nama lengkap seluruh anggota kelompok..."
                    value={lkpdData.members}
                    onChange={(e) => setLkpdData({ ...lkpdData, members: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>
              </div>

              {/* 5 Syntax Step Fill-in Boxes */}
              <div className="space-y-6">
                
                {/* Tahap 1: Orientasi */}
                <div className="p-5 border border-stone-200 rounded-xl space-y-2 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      1
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900">
                      Tahap Orientasi: Identifikasi Peristiwa Sejarah & Pertanyaan Pemantik
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Berdasarkan paparan guru, tuliskan satu pertanyaan mendalam mengenai hubungan antara sejarah bencana di wilayah {selectedSite.name} dengan kehidupan masyarakat!
                  </p>
                  <textarea
                    rows={3}
                    placeholder="Ketik pertanyaan pemantik kelompok Anda di sini..."
                    value={lkpdData.orientationProblem}
                    onChange={(e) => setLkpdData({ ...lkpdData, orientationProblem: e.target.value })}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                {/* Tahap 2: Membaca */}
                <div className="p-5 border border-stone-200 rounded-xl space-y-2 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      2
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900">
                      Tahap Membaca: Ringkasan Sumber Pembelajaran & Catatan Kronologis
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Setelah membaca esai sejarah bencana dan modul {selectedSite.name}, tuliskan fakta-fakta sejarah penting mengenai tahun peristiwa, dampak kerusakan fisik, dan bukti arkeologis yang ditemukan:
                  </p>
                  <textarea
                    rows={4}
                    placeholder="Catatan hasil penelusuran pustaka dan arsip sejarah..."
                    value={lkpdData.sourceAnalysis}
                    onChange={(e) => setLkpdData({ ...lkpdData, sourceAnalysis: e.target.value })}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                {/* Tahap 3: Mengontekstualisasi */}
                <div className="p-5 border border-stone-200 rounded-xl space-y-2 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      3
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900">
                      Tahap Mengontekstualisasi: Analisis Lingkungan Masa Lalu vs Masa Kini
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Hubungkan peristiwa masa lalu dengan kondisi lingkungan saat ini (perubahan tata ruang, ancaman lempeng/vulkanik, dan perubahan iklim) di sekitar {selectedSite.name}:
                  </p>
                  <textarea
                    rows={4}
                    placeholder="Analisis keterkaitan kondisi lingkungan kontemporer dengan pelestarian cagar budaya..."
                    value={lkpdData.contextualAnalysis}
                    onChange={(e) => setLkpdData({ ...lkpdData, contextualAnalysis: e.target.value })}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                {/* Tahap 4: Membuat */}
                <div className="p-5 border border-stone-200 rounded-xl space-y-2 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      4
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900">
                      Tahap Membuat: Rekomendasi Solusi Mitigasi (Pra, Saat, Pasca)
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Rumuskan alternatif solusi mitigasi konkret yang dapat diterapkan untuk melindungi cagar budaya {selectedSite.name} dari ancaman {selectedSite.primaryHazard}:
                  </p>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan rekomendasi tindakan Pra-Bencana, Saat Bencana, dan Pasca-Bencana..."
                    value={lkpdData.mitigationSolutions}
                    onChange={(e) => setLkpdData({ ...lkpdData, mitigationSolutions: e.target.value })}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

                {/* Tahap 5: Mengomunikasikan */}
                <div className="p-5 border border-stone-200 rounded-xl space-y-2 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                      5
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900">
                      Tahap Mengomunikasikan: Simpulan & Komitmen Pelestarian
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Tuliskan refleksi kelompok Anda: Mengapa melestarikan warisan sejarah ini penting bagi identitas kebangsaan Indonesia?
                  </p>
                  <textarea
                    rows={3}
                    placeholder="Simpulan reflektif dan komitmen bersama..."
                    value={lkpdData.reflectionConclusion}
                    onChange={(e) => setLkpdData({ ...lkpdData, reflectionConclusion: e.target.value })}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:border-stone-600"
                  />
                </div>

              </div>

              {/* Action Submit / Print */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200">
                <span className="text-xs text-stone-500">
                  Data LKPD Anda tersimpan otomatis di peramban sesi ini.
                </span>
                <button
                  onClick={() => setShowLkpdPrintPreview(true)}
                  className="px-5 py-2.5 bg-stone-900 text-white hover:bg-stone-800 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Lihat Format Siap Cetak (PDF / Print)</span>
                </button>
              </div>

            </div>
          ) : (
            /* Printable Clean LKPD Sheet */
            <div className="p-8 bg-white border border-stone-300 rounded-xl space-y-6 text-stone-900 print:p-0 print:border-none">
              
              <div className="border-b-2 border-stone-900 pb-4 text-center space-y-1">
                <h3 className="text-xl font-serif font-bold tracking-tight uppercase">
                  LEMBAR KERJA PESERTA DIDIK (LKPD) SEJARAH
                </h3>
                <p className="text-xs font-mono tracking-widest text-stone-600 uppercase">
                  Model Pembelajaran Mitigasi Cagar Budaya (MICAYA)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-b border-stone-200 pb-4">
                <div>
                  <p>Nama Kelompok: <strong>{lkpdData.groupName || '(Belum diisi)'}</strong></p>
                  <p className="mt-1">Kelas: <strong>{lkpdData.classGrade}</strong></p>
                </div>
                <div>
                  <p>Situs Fokus: <strong>{selectedSite.name}</strong></p>
                  <p className="mt-1">Anggota: <strong>{lkpdData.members || '(Belum diisi)'}</strong></p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-stone-900 uppercase font-mono">
                    1. Orientasi & Pertanyaan Pemantik:
                  </h4>
                  <p className="p-3 bg-stone-50 rounded mt-1 border border-stone-200 text-stone-700">
                    {lkpdData.orientationProblem || 'Belum ada catatan.'}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 uppercase font-mono">
                    2. Telaah Sumber & Fakta Kronologi Sejarah:
                  </h4>
                  <p className="p-3 bg-stone-50 rounded mt-1 border border-stone-200 text-stone-700">
                    {lkpdData.sourceAnalysis || 'Belum ada catatan.'}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 uppercase font-mono">
                    3. Analisis Kontekstual Lingkungan & Kerentanan:
                  </h4>
                  <p className="p-3 bg-stone-50 rounded mt-1 border border-stone-200 text-stone-700">
                    {lkpdData.contextualAnalysis || 'Belum ada catatan.'}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 uppercase font-mono">
                    4. Alternatif Solusi Mitigasi (Pra, Saat, Pasca):
                  </h4>
                  <p className="p-3 bg-stone-50 rounded mt-1 border border-stone-200 text-stone-700">
                    {lkpdData.mitigationSolutions || 'Belum ada catatan.'}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 uppercase font-mono">
                    5. Simpulan Komunikasi & Refleksi Nilai Kebangsaan:
                  </h4>
                  <p className="p-3 bg-stone-50 rounded mt-1 border border-stone-200 text-stone-700">
                    {lkpdData.reflectionConclusion || 'Belum ada catatan.'}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-300 flex items-center justify-between text-xs">
                <button
                  onClick={() => setShowLkpdPrintPreview(false)}
                  className="px-4 py-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-100 cursor-pointer"
                >
                  Edit Kembali Formulir
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 cursor-pointer"
                >
                  Cetak Dokumen Ini
                </button>
              </div>

            </div>
          )}

        </div>
      )}

      {/* SUB-VIEW 2: KUIS HOTS 10 SOAL */}
      {activeSubTab === 'kuis' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                Evaluasi Kognitif HOTS
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Kuis Sejarah Bencana & Mitigasi Cagar Budaya
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Uji pemahaman komparatif geohistori, fisika batuan, dan protokol konservasi.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {isQuizSubmitted ? (
                <div className="text-right">
                  <span className="text-xs text-stone-500 font-mono">Skor Akhir:</span>
                  <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
                    {calculateScore()} / 100
                  </div>
                </div>
              ) : (
                <span className="text-xs font-mono text-stone-500">
                  {Object.keys(selectedAnswers).length} dari {QUIZ_QUESTIONS.length} Soal Dijawab
                </span>
              )}
            </div>
          </div>

          {/* Quiz Question Cards */}
          <div className="space-y-6">
            {QUIZ_QUESTIONS.map((q, qIndex) => {
              const userAnswer = selectedAnswers[q.id];
              const isAnswered = userAnswer !== undefined;
              const isCorrect = userAnswer === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isQuizSubmitted
                      ? isCorrect
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : 'bg-rose-50/40 border-rose-200'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                    <span>Soal 0{qIndex + 1} · {q.syntaxStep}</span>
                    {isQuizSubmitted && (
                      <span className={`font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Benar (+10)' : 'Salah'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-500 italic mb-1.5 font-serif">
                    Konteks: {q.context}
                  </p>

                  <h3 className="text-sm font-semibold text-stone-900 mb-3.5 leading-snug">
                    {q.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-2">
                    {q.options.map((opt, optIndex) => {
                      const isOptionSelected = userAnswer === optIndex;
                      const isCorrectOption = q.correctIndex === optIndex;

                      let optionStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
                      if (isOptionSelected) {
                        optionStyle = 'bg-stone-900 text-white border-stone-900';
                      }

                      if (isQuizSubmitted) {
                        if (isCorrectOption) {
                          optionStyle = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-600 text-white border-rose-600';
                        } else {
                          optionStyle = 'bg-stone-50 text-stone-400 border-stone-200 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIndex}
                          disabled={isQuizSubmitted}
                          onClick={() => setSelectedAnswers({ ...selectedAnswers, [q.id]: optIndex })}
                          className={`w-full text-left p-3 rounded-lg border text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${optionStyle}`}
                        >
                          <span className="font-mono font-bold shrink-0">
                            {String.fromCharCode(65 + optIndex)}.
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {isQuizSubmitted && (
                    <div className="mt-3.5 p-3 bg-white/90 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-1">
                      <span className="font-semibold text-stone-900 block font-mono">
                        Penjelasan Ilmiah & Geohistori:
                      </span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Actions */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            {!isQuizSubmitted ? (
              <button
                disabled={Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length}
                onClick={() => setIsQuizSubmitted(true)}
                className={`px-6 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length
                    ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    : 'bg-stone-900 text-white hover:bg-stone-800 shadow-xs'
                }`}
              >
                Kirim Jawaban & Lihat Hasil
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Kuis</span>
                </button>
                <span className="text-xs text-stone-500">
                  {calculateScore() >= 80 ? 'Predikat: Sangat Kompeten' : calculateScore() >= 60 ? 'Predikat: Kompeten' : 'Perlu Membaca Ulang Esai'}
                </span>
              </div>
            )}
          </div>

        </div>
      )}

      {/* SUB-VIEW 3: MODUL GURU & KURIKULUM MERDEKA */}
      {activeSubTab === 'modul-guru' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Panduan Akademik</span>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              Panduan Implementasi Guru (Fase E & F)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Penyelarasan Model Pembelajaran MICAYA dengan Capaian Pembelajaran Kurikulum Merdeka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                Capaian Pembelajaran (CP) Sejarah
              </span>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-serif">
                "{TEACHER_GUIDE.capaianPembelajaran}"
              </p>
              <div className="pt-2 text-xs text-stone-600 font-mono">
                Target: {TEACHER_GUIDE.fase} · Alokasi: {TEACHER_GUIDE.alokasiWaktu}
              </div>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold block">
                Profil Pelajar Pancasila yang Dibangun
              </span>
              <ul className="space-y-2 text-xs text-stone-700 list-disc list-inside">
                {TEACHER_GUIDE.profilPelajarPancasila.map((profil, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {profil}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="p-5 border border-stone-200 rounded-xl space-y-3">
            <h3 className="text-base font-serif font-bold text-stone-900">
              Tips Fasilitasi Kelas Berdasarkan 5 Sintaks
            </h3>
            <div className="space-y-2 text-xs text-stone-700">
              <p><strong>1. Saat Orientasi:</strong> Mulailah dengan menayangkan video atau foto dramatis kerusakan cagar budaya (misal candi tertimbun lahar atau ratna Prambanan jatuh) untuk membangkitkan rasa ingin tahu.</p>
              <p><strong>2. Saat Membaca:</strong> Berikan kebebasan siswa memilih salah satu dari 6 esai geohistori di web MICAYA agar kelompok memiliki keragaman topik yang saling melengkapi.</p>
              <p><strong>3. Saat Mengontekstualisasi:</strong> Buka peta interaktif cagar budaya dan perlihatkan garis sesar aktif di sekitar wilayah tempat tinggal siswa sendiri.</p>
              <p><strong>4. Saat Membuat:</strong> Dorong siswa menghasilkan produk kreatif non-tradisional, seperti infografis mitigasi Instagram, poster sekolah, atau naskah podcast sejarah.</p>
              <p><strong>5. Saat Mengomunikasikan:</strong> Gunakan metode 'Gallery Walk' atau debat santai di mana kelompok lain memberikan masukan konstruktif atas solusi mitigasi yang diajukan.</p>
            </div>
          </div>

        </div>
      )}

      {/* SUB-VIEW 4: GLOSARIUM ISTILAH */}
      {activeSubTab === 'glosarium' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Kamus Ilmiah Terpadu</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Glosarium Istilah Sejarah, Geologi & Konservasi
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Rujukan istilah teknis kebencanaan dan pelestarian cagar budaya.
              </p>
            </div>

            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari istilah..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {glossaryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGlossaryCategory(cat)}
                className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  glossaryCategory === cat
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Glossary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {item.term}
                  </h3>
                  <span className="font-mono text-stone-500 text-[10px]">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {item.definition}
                </p>

                <div className="pt-1 text-[11px] text-stone-500 border-t border-stone-200/80">
                  <strong className="text-stone-700 font-medium">Contoh Konteks:</strong> {item.exampleContext}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* SUB-VIEW 5: BERKAS HTML TERINTEGRASI */}
      {activeSubTab === 'berkas-html' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                Berkas Standalone Terintegrasi
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Modul HTML Mandiri MICAYA (Offline & Siap Cetak)
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Berkas HTML mandiri (<code>micaya-modul-interaktif.html</code>) yang menggabungkan seluruh sintaks, materi 12 cagar budaya, lembar LKPD, dan kuis dalam satu dokumen portabel.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="./micaya-modul-interaktif.html"
                download="MICAYA-Modul-Pembelajaran-Mitigasi-Cagar-Budaya.html"
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300"
              >
                <Download className="w-3.5 h-3.5 text-stone-700" />
                <span>Unduh Berkas .HTML</span>
              </a>
              <a
                href="./micaya-modul-interaktif.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Buka Layar Penuh</span>
                <span className="text-amber-300 font-mono text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* 3 Keunggulan Berkas HTML */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-1">
              <span className="text-xs font-bold text-stone-900 font-serif block">1. Pembelajaran Luring (Offline)</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dapat dibuka langsung dengan peramban (Chrome, Edge, Firefox) di laboratorium komputer sekolah tanpa membutuhkan koneksi internet.
              </p>
            </div>
            <div className="p-4 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-1">
              <span className="text-xs font-bold text-stone-900 font-serif block">2. Formulir LKPD Tersimpan Otomatis</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Data pengerjaan lembar kerja peserta didik disimpan pada penyimpanan lokal (localStorage) peramban sehingga tidak hilang saat ditutup.
              </p>
            </div>
            <div className="p-4 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-1">
              <span className="text-xs font-bold text-stone-900 font-serif block">3. Ramah Cetak (Print & PDF)</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dilengkapi stylesheet cetak khusus untuk mencetak Tabel 2 Sintaks dan LKPD langsung menjadi dokumen PDF siap nilai.
              </p>
            </div>
          </div>

          {/* Daftar 5 Berkas HTML Per Halaman */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-700 font-bold block">
              Daftar 5 Berkas HTML Terpisah (Per-Halaman):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-500">Halaman 01 (Beranda Utama)</span>
                  <h4 className="font-bold text-stone-900 mt-0.5">index.html</h4>
                  <p className="text-stone-600 text-[11px] mt-1">Halaman Beranda terintegrasi pengenalan model MICAYA, pilar riset, dan statistik mitigasi cagar budaya.</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <a href="./index.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 hover:underline">
                    Buka Halaman ↗
                  </a>
                  <a href="./index.html" download="index.html" className="text-stone-500 hover:text-stone-900">
                    Unduh .html
                  </a>
                </div>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-500">Halaman 02</span>
                  <h4 className="font-bold text-stone-900 mt-0.5">peta-cagar-budaya.html</h4>
                  <p className="text-stone-600 text-[11px] mt-1">Peta interaktif 12 cagar budaya dengan dossier risiko dan mitigasi 3 fase.</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <a href="./peta-cagar-budaya.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 hover:underline">
                    Buka Halaman ↗
                  </a>
                  <a href="./peta-cagar-budaya.html" download="peta-cagar-budaya.html" className="text-stone-500 hover:text-stone-900">
                    Unduh .html
                  </a>
                </div>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-500">Halaman 03</span>
                  <h4 className="font-bold text-stone-900 mt-0.5">esai-sejarah-bencana.html</h4>
                  <p className="text-stone-600 text-[11px] mt-1">Koleksi 6 esai geohistori kritis, kutipan sumber primer, dan catatan diskusi.</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <a href="./esai-sejarah-bencana.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 hover:underline">
                    Buka Halaman ↗
                  </a>
                  <a href="./esai-sejarah-bencana.html" download="esai-sejarah-bencana.html" className="text-stone-500 hover:text-stone-900">
                    Unduh .html
                  </a>
                </div>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-500">Halaman 04</span>
                  <h4 className="font-bold text-stone-900 mt-0.5">model-micaya.html</h4>
                  <p className="text-stone-600 text-[11px] mt-1">Tabel 2 sintaks lengkap (Aktivitas Guru vs Siswa) dan simulator RPP kelas.</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <a href="./model-micaya.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 hover:underline">
                    Buka Halaman ↗
                  </a>
                  <a href="./model-micaya.html" download="model-micaya.html" className="text-stone-500 hover:text-stone-900">
                    Unduh .html
                  </a>
                </div>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-500">Halaman 05</span>
                  <h4 className="font-bold text-stone-900 mt-0.5">sumber-belajar.html</h4>
                  <p className="text-stone-600 text-[11px] mt-1">Lembar LKPD siswa interaktif (tersimpan lokal), kuis HOTS, dan panduan guru.</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <a href="./sumber-belajar.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-900 hover:underline">
                    Buka Halaman ↗
                  </a>
                  <a href="./sumber-belajar.html" download="sumber-belajar.html" className="text-stone-500 hover:text-stone-900">
                    Unduh .html
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Live Interactive iFrame Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>Pratinjau Langsung Berkas HTML:</span>
              <span>./micaya-modul-interaktif.html</span>
            </div>
            <div className="w-full h-[650px] border-2 border-stone-300 rounded-xl overflow-hidden shadow-inner bg-white">
              <iframe
                src="./micaya-modul-interaktif.html"
                title="Pratinjau Modul HTML MICAYA"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
