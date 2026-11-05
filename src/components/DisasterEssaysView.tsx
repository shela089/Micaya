import { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Layers, 
  Share2, 
  Printer, 
  HelpCircle, 
  ChevronRight, 
  Sparkles, 
  Check, 
  BookmarkCheck
} from 'lucide-react';
import { DisasterEssay, DISASTER_ESSAYS } from '../data/disasterEssays';
import { NavTab } from './Navbar';

interface DisasterEssaysViewProps {
  onSelectTab?: (tab: NavTab) => void;
}

export default function DisasterEssaysView({ onSelectTab }: DisasterEssaysViewProps) {
  const [activeEssayId, setActiveEssayId] = useState<string>(DISASTER_ESSAYS[0].id);
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [copiedNotification, setCopiedNotification] = useState(false);

  const activeEssay = DISASTER_ESSAYS.find((e) => e.id === activeEssayId) || DISASTER_ESSAYS[0];

  const handleCopyCitation = () => {
    const citation = `${activeEssay.author}. "${activeEssay.title}: ${activeEssay.subtitle}". Platform Pembelajaran MICAYA.`;
    navigator.clipboard.writeText(citation);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Deck */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-800 uppercase mb-1">
          <span>Kajian Historiografi Kritis & Ekologi</span>
          <span aria-hidden="true">·</span>
          <span>Bahan Bacaan Sintaks Membaca</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Esai Sejarah Bencana & Lingkungan Nusantara
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Kumpulan esai penelitian sejarah yang menelaah secara kritis bagaimana letusan vulkanik, guncangan seismik, dan banjir membentuk peradaban, menghancurkan cagar budaya, serta menguji daya lenting leluhur Indonesia.
        </p>
      </div>

      {/* Main Grid: Sidebar Navigator + Reading Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Essay Selector Sidebar */}
        <aside className="lg:col-span-4 space-y-3 sticky top-22">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Koleksi Esai ({DISASTER_ESSAYS.length})
            </span>
            <span className="text-xs text-stone-400">Pilih untuk membaca</span>
          </div>

          <div className="space-y-2">
            {DISASTER_ESSAYS.map((essay, index) => {
              const isSelected = essay.id === activeEssay.id;
              return (
                <button
                  key={essay.id}
                  onClick={() => setActiveEssayId(essay.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className={`font-mono ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                      0{index + 1} · {essay.era}
                    </span>
                    <span className={`flex items-center gap-1 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                      <Clock className="w-3 h-3" />
                      <span>{essay.readTime}</span>
                    </span>
                  </div>

                  <h3 className={`text-sm font-serif font-bold leading-snug ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {essay.title}
                  </h3>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {essay.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Quick Classroom Helper Box */}
          <div className="p-4 bg-[#F5EFE6] border border-stone-300 rounded-xl space-y-2 text-xs text-stone-700">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Petunjuk untuk Peserta Didik</span>
            </div>
            <p className="leading-relaxed text-stone-600">
              Gunakan esai ini pada <strong>Tahap 2 (Membaca)</strong> dan <strong>Tahap 3 (Mengontekstualisasi)</strong>. Bacalah secara saksama, telusuri bukti sejarah primer, lalu jawab pertanyaan pemantik di bagian akhir esai.
            </p>
          </div>
        </aside>

        {/* Right: Editorial Reading Canvas */}
        <article className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
          
          {/* Article Header & Metadata */}
          <header className="space-y-4 border-b border-stone-200 pb-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 font-mono">
              <div className="flex items-center gap-2">
                <span>Era: {activeEssay.era}</span>
                <span aria-hidden="true">·</span>
                <span>Waktu Baca: {activeEssay.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCitation}
                  className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center gap-1 text-[11px] cursor-pointer transition-colors"
                  title="Salin Sitasi Ilmiah"
                >
                  {copiedNotification ? <Check className="w-3 h-3 text-emerald-600" /> : <Share2 className="w-3 h-3" />}
                  <span>{copiedNotification ? 'Disalin!' : 'Sitasi'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center gap-1 text-[11px] cursor-pointer transition-colors"
                  title="Cetak Esai"
                >
                  <Printer className="w-3 h-3" />
                  <span>Cetak</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {activeEssay.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-serif italic leading-relaxed">
              {activeEssay.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span>Penulis: <strong className="text-stone-800">{activeEssay.author}</strong></span>
              <span aria-hidden="true">·</span>
              <span>{activeEssay.role}</span>
            </div>

            {/* Tags without pills */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
              <span>Bahaya:</span>
              {activeEssay.relatedHazards.map((h, i) => (
                <span key={i} className="text-amber-900 font-semibold">
                  {h}{i < activeEssay.relatedHazards.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>

          </header>

          {/* Executive Summary deck */}
          <div className="p-4 bg-[#FAF7F2] border-y border-stone-200 text-stone-700 text-sm leading-relaxed italic font-serif">
            "{activeEssay.summary}"
          </div>

          {/* Article Body Sections */}
          <div className="space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base">
            {activeEssay.sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl font-serif font-bold text-stone-900 tracking-tight">
                  {section.heading}
                </h2>

                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`leading-relaxed text-stone-700 ${
                      idx === 0 && pIdx === 0
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Historical Quote blockquote */}
                {section.historicalQuote && (
                  <div className="my-5 py-4 px-5 bg-stone-50 border-y border-stone-200/90 space-y-1.5">
                    <p className="font-serif italic text-base text-stone-900 leading-snug">
                      "{section.historicalQuote.text}"
                    </p>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-mono">
                      — {section.historicalQuote.source}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Pertanyaan Pemantik Diskusi Siswa (Syntax 1 & 2) */}
          <section className="border-t border-stone-200 pt-8 space-y-5">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-800" />
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Pertanyaan Pemantik & Analisis Kritis
              </h3>
            </div>
            
            <p className="text-xs text-stone-600">
              Diskusikan pertanyaan-pertanyaan ini dalam kelompok kecil sesuai dengan <strong>Sintaks Membaca & Mengontekstualisasi MICAYA</strong>:
            </p>

            <div className="space-y-4">
              {activeEssay.discussionQuestions.map((q, qIdx) => (
                <div key={qIdx} className="p-4 bg-[#FAF7F2] border border-stone-200 rounded-xl space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <p className="text-sm font-medium text-stone-900 leading-relaxed">
                      {q}
                    </p>
                  </div>

                  {/* Interactive Student Note Box */}
                  <div className="pt-2 pl-8">
                    <textarea
                      rows={2}
                      placeholder="Ketik catatan analisis atau jawaban kelompok di sini..."
                      value={studentNotes[`${activeEssay.id}-${qIdx}`] || ''}
                      onChange={(e) =>
                        setStudentNotes({
                          ...studentNotes,
                          [`${activeEssay.id}-${qIdx}`]: e.target.value,
                        })
                      }
                      className="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-stone-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Daftar Rujukan & Sumber Primer */}
          <footer className="border-t border-stone-200 pt-6 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block">
              Daftar Referensi & Sumber Primer
            </span>
            <ul className="space-y-1 text-xs text-stone-600 list-disc list-inside">
              {activeEssay.references.map((ref, rIdx) => (
                <li key={rIdx} className="leading-relaxed">
                  {ref}
                </li>
              ))}
            </ul>
          </footer>

        </article>

      </div>

    </div>
  );
}
