import { Landmark, Compass, BookOpen, MapPin, Award, Layers } from 'lucide-react';
import { NavTab } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export default function Footer({ onSelectTab }: FooterProps) {
  const handleNav = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4EFE6] border-t border-stone-300 text-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Attribution Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-lg shadow-xs">
                M
              </div>
              <div>
                <span className="text-xl font-serif font-bold tracking-tight text-stone-900">
                  MICAYA
                </span>
                <span className="text-[11px] block text-stone-600 font-mono tracking-wider uppercase">
                  Model Pembelajaran Mitigasi Cagar Budaya
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Platform pembelajaran sejarah dan kebencanaan Indonesia yang mengintegrasikan sejarah kritis, geospasial risiko cagar budaya, serta sintaks pedagogis berbasis riset ilmiah.
            </p>

            <div className="text-xs text-stone-500 pt-1 border-t border-stone-300/80">
              <p>Rujukan Model: <strong className="text-stone-800">Shela Dwi Utari</strong></p>
              <p className="italic text-[11px] text-stone-500 mt-0.5">
                "Pengembangan Model Pembelajaran Mitigasi Cagar Budaya (MICAYA) pada Pembelajaran Sejarah"
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold block">
              Menu Utama
            </span>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Beranda & Konsep Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('peta')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Peta Cagar Budaya & Risiko Bencana
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('esai')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Esai Sejarah Bencana & Arsip
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('model-micaya')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Sintaks Model MICAYA (Tabel 2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sumber-belajar')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  LKPD & Kuis Interaktif
                </button>
              </li>
              <li>
                <a
                  href="./micaya-modul-interaktif.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors flex items-center gap-1 text-amber-900 font-semibold"
                >
                  <span>Berkas HTML Mandiri (Offline)</span>
                  <span className="text-[10px] font-mono">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Education & Disaster Scope */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold block">
              Pilar Pendidikan & Konservasi
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Materi disesuaikan dengan Capaian Pembelajaran Kurikulum Merdeka Fase E & F (SMA/MA sederajat) untuk mata pelajaran Sejarah Indonesia dan Geografi.
            </p>
            <div className="p-3 bg-white/70 rounded-lg border border-stone-300 text-[11px] text-stone-700 space-y-1">
              <span className="font-semibold text-stone-900 block">Komitmen Pelestarian:</span>
              <p>Mendorong generasi muda menjadi agen perlindungan warisan pusaka bangsa di wilayah rawan bencana gempa, tsunami, dan erupsi vulkanik.</p>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright Line */}
        <div className="pt-6 border-t border-stone-300 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
          <div>
            © {new Date().getFullYear()} MICAYA · Model Pembelajaran Mitigasi Cagar Budaya Indonesia.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Pendidikan Sejarah</span>
            <span aria-hidden="true">·</span>
            <span>Mitigasi Bencana</span>
            <span aria-hidden="true">·</span>
            <span>Pelestarian Cagar Budaya</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
