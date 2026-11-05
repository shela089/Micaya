import { useState } from 'react';
import { Menu, X, Landmark, Compass, BookOpen, MapPin, Award, Layers, Sparkles } from 'lucide-react';

export type NavTab = 'beranda' | 'peta' | 'esai' | 'model-micaya' | 'sumber-belajar';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenAntigravity?: () => void;
}

export default function Navbar({ currentTab, onSelectTab, onOpenAntigravity }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavTab; label: string; icon: typeof Landmark }[] = [
    { id: 'beranda', label: 'Beranda', icon: Compass },
    { id: 'peta', label: 'Peta Cagar Budaya', icon: MapPin },
    { id: 'esai', label: 'Esai Sejarah Bencana', icon: BookOpen },
    { id: 'model-micaya', label: 'Sintak Model', icon: Layers },
    { id: 'sumber-belajar', label: 'Sumber Belajar', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-lg shadow-xs group-hover:bg-amber-900 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900 whitespace-nowrap">
                MICAYA
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-stone-500 whitespace-nowrap hidden sm:block">
                Mitigasi Cagar Budaya
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-stone-900 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {onOpenAntigravity && (
              <button
                onClick={onOpenAntigravity}
                className="px-3 py-2 text-xs font-semibold text-amber-950 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 border border-amber-400 rounded-lg hover:from-amber-300 hover:to-amber-300 transition-all whitespace-nowrap shrink-0 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                title="Buka Asisten Antigravity AI & Panduan"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                <span>Asisten Antigravity</span>
              </button>
            )}
            <a
              href="./micaya-modul-interaktif.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold text-stone-800 bg-[#EFE9DF] hover:bg-[#E5DDCF] border border-stone-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-2xs flex items-center gap-1.5"
              title="Buka File HTML Mandiri & Siap Cetak"
            >
              <span>Berkas HTML</span>
              <span className="text-[10px] text-amber-800 font-mono font-bold">↗</span>
            </a>
            <button
              onClick={() => handleNavClick('model-micaya')}
              className="px-3 py-2 text-xs font-semibold text-stone-900 bg-amber-100 border border-amber-300 rounded-lg hover:bg-amber-200 transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            >
              Sintak Model
            </button>
            <button
              onClick={() => handleNavClick('peta')}
              className="px-3 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Peta
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-hidden"
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                  isActive
                    ? 'bg-stone-200/70 text-stone-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4 text-stone-600" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            {onOpenAntigravity && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAntigravity();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-amber-950 bg-gradient-to-r from-amber-200 to-amber-300 border border-amber-400 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                <span>Buka Asisten Antigravity AI</span>
              </button>
            )}
            <a
              href="./micaya-modul-interaktif.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-stone-800 bg-[#EFE9DF] border border-stone-300 rounded-lg"
            >
              Buka Berkas HTML Mandiri (Offline)
            </a>
            <button
              onClick={() => handleNavClick('model-micaya')}
              className="w-full text-center py-2.5 text-xs font-semibold text-stone-900 bg-amber-100 border border-amber-300 rounded-lg"
            >
              Pelajari Sintaks Model MICAYA
            </button>
            <button
              onClick={() => handleNavClick('peta')}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg"
            >
              Jelajahi Peta Risiko Cagar Budaya
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
