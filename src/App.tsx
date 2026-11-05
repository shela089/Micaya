import { useState, useEffect } from 'react';
import Navbar, { NavTab } from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import DisasterEssaysView from './components/DisasterEssaysView';
import ModelMicayaView from './components/ModelMicayaView';
import LearningResourcesView from './components/LearningResourcesView';
import AntigravityAssistantModal from './components/AntigravityAssistantModal';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('beranda');
  const [targetSiteForMap, setTargetSiteForMap] = useState<string | null>(null);
  const [targetSiteForMicaya, setTargetSiteForMicaya] = useState<string | null>(null);
  const [isAntigravityOpen, setIsAntigravityOpen] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleStudySiteInMicaya = (siteId: string) => {
    setTargetSiteForMicaya(siteId);
    setCurrentTab('model-micaya');
  };

  const handleSelectSiteFromHero = (siteId: string) => {
    setTargetSiteForMap(siteId);
    setCurrentTab('peta');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-amber-200 selection:text-amber-900 font-sans relative">
      
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'peta') setTargetSiteForMap(null);
          if (tab !== 'model-micaya') setTargetSiteForMicaya(null);
        }}
        onOpenAntigravity={() => setIsAntigravityOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'beranda' && (
          <HeroSection
            onSelectTab={setCurrentTab}
            onSelectSite={handleSelectSiteFromHero}
          />
        )}

        {currentTab === 'peta' && (
          <InteractiveMap
            initialSelectedSiteId={targetSiteForMap}
            onSelectTab={setCurrentTab}
            onStudySiteInMicaya={handleStudySiteInMicaya}
          />
        )}

        {currentTab === 'esai' && (
          <DisasterEssaysView onSelectTab={setCurrentTab} />
        )}

        {currentTab === 'model-micaya' && (
          <ModelMicayaView
            initialScenarioSiteId={targetSiteForMicaya}
            onSelectTab={setCurrentTab}
          />
        )}

        {currentTab === 'sumber-belajar' && (
          <LearningResourcesView onSelectTab={setCurrentTab} />
        )}
      </main>

      {/* Floating Antigravity Assistant Trigger */}
      <button
        onClick={() => setIsAntigravityOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-stone-900 text-amber-200 hover:text-white hover:bg-amber-950 border border-amber-400/50 rounded-full px-4 py-3 shadow-xl flex items-center gap-2.5 transition-all hover:scale-105 group cursor-pointer"
        title="Buka Asisten Antigravity MICAYA"
        aria-label="Asisten Antigravity AI"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
        </span>
        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold tracking-wide">
          Asisten Antigravity
        </span>
      </button>

      {/* Antigravity AI Assistant & Troubleshooting Modal */}
      <AntigravityAssistantModal
        isOpen={isAntigravityOpen}
        onClose={() => setIsAntigravityOpen(false)}
        initialSiteId={targetSiteForMap || targetSiteForMicaya}
      />

      {/* Institutional Academic Footer */}
      <Footer onSelectTab={setCurrentTab} />

    </div>
  );
}
