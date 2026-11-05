import { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Flame, 
  Waves, 
  CloudRain, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  X, 
  Compass, 
  Info,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { HeritageSite, HERITAGE_SITES } from '../data/heritageSites';
import { NavTab } from './Navbar';

interface InteractiveMapProps {
  initialSelectedSiteId?: string | null;
  onSelectTab?: (tab: NavTab) => void;
  onStudySiteInMicaya?: (siteId: string) => void;
}

export default function InteractiveMap({ 
  initialSelectedSiteId, 
  onSelectTab,
  onStudySiteInMicaya 
}: InteractiveMapProps) {
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(
    initialSelectedSiteId || 'borobudur'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [selectedHazard, setSelectedHazard] = useState<string>('Semua');

  // Map layer visibility toggles
  const [showRingOfFire, setShowRingOfFire] = useState(true);
  const [showMegathrust, setShowMegathrust] = useState(true);
  const [showDrainageZones, setShowDrainageZones] = useState(false);

  // Active selected site object
  const activeSite = useMemo(() => {
    return HERITAGE_SITES.find((s) => s.id === selectedSiteId) || HERITAGE_SITES[0];
  }, [selectedSiteId]);

  // Filtered sites list
  const filteredSites = useMemo(() => {
    return HERITAGE_SITES.filter((site) => {
      const matchSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.materialType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchIsland = selectedIsland === 'Semua' || site.island === selectedIsland;
      const matchHazard = selectedHazard === 'Semua' || site.primaryHazard === selectedHazard;

      return matchSearch && matchIsland && matchHazard;
    });
  }, [searchQuery, selectedIsland, selectedHazard]);

  const islands = ['Semua', 'Sumatera', 'Jawa', 'Maluku-Papua'];
  const hazards = ['Semua', 'Vulkanik', 'Gempa Tektonik', 'Tsunami', 'Banjir & Pelapukan', 'Erosi & Longsor'];

  const getHazardBadge = (hazard: HeritageSite['primaryHazard']) => {
    switch (hazard) {
      case 'Vulkanik':
        return { icon: Flame, color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'Gempa Tektonik':
        return { icon: AlertTriangle, color: 'text-amber-800 bg-amber-50 border-amber-200' };
      case 'Tsunami':
        return { icon: Waves, color: 'text-sky-800 bg-sky-50 border-sky-200' };
      case 'Banjir & Pelapukan':
        return { icon: CloudRain, color: 'text-teal-800 bg-teal-50 border-teal-200' };
      case 'Erosi & Longsor':
        return { icon: Layers, color: 'text-stone-800 bg-stone-100 border-stone-200' };
      default:
        return { icon: AlertTriangle, color: 'text-stone-800 bg-stone-100 border-stone-200' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header and Context Deck */}
      <div className="border-b border-stone-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-800 uppercase mb-1">
          <span>Geospasial Risiko Bencana</span>
          <span aria-hidden="true">·</span>
          <span>Inventarisasi Cagar Budaya Indonesia</span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">
          Peta Cagar Budaya & Mitigasi Kebencanaan
        </h1>
        <p className="text-sm text-stone-600 mt-1 max-w-3xl">
          Visualisasi spasial hubungan antara sebaran cagar budaya dengan jalur bahaya gempa bumi (Sunda Megathrust & sesar darat), busur gunung api aktif (Cincin Api), serta risiko hidrometeorologi banjir di Indonesia.
        </p>
      </div>

      {/* Control Bar: Search & Interactive Filter Toggles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-white p-4 border border-stone-200 rounded-xl shadow-2xs">
        
        {/* Search */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari situs, kota, atau material..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-stone-500 transition-colors"
          />
        </div>

        {/* Island filter */}
        <div className="lg:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          <span className="text-xs font-medium text-stone-500 whitespace-nowrap shrink-0">Wilayah:</span>
          {islands.map((island) => (
            <button
              key={island}
              onClick={() => setSelectedIsland(island)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedIsland === island
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {island}
            </button>
          ))}
        </div>

        {/* Hazard filter */}
        <div className="lg:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          <span className="text-xs font-medium text-stone-500 whitespace-nowrap shrink-0">Ancaman:</span>
          <select
            value={selectedHazard}
            onChange={(e) => setSelectedHazard(e.target.value)}
            className="w-full py-1.5 px-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-hidden cursor-pointer"
          >
            {hazards.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Main Map View & Inspection Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Indonesia Vector Map Canvas */}
        <div className="lg:col-span-7 bg-[#EFE9DF] border border-stone-300 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xs">
          
          {/* Map Layers Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-300/80">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-stone-600" />
              <span className="text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
                Proyeksi Spasial Kepulauan Nusantara
              </span>
            </div>

            {/* Layer Toggles */}
            <div className="flex items-center gap-2 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer text-stone-700 hover:text-stone-900">
                <input
                  type="checkbox"
                  checked={showRingOfFire}
                  onChange={(e) => setShowRingOfFire(e.target.checked)}
                  className="rounded border-stone-300 text-stone-800 focus:ring-0"
                />
                <span className="text-[11px] font-medium">Busur Vulkanik</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer text-stone-700 hover:text-stone-900">
                <input
                  type="checkbox"
                  checked={showMegathrust}
                  onChange={(e) => setShowMegathrust(e.target.checked)}
                  className="rounded border-stone-300 text-stone-800 focus:ring-0"
                />
                <span className="text-[11px] font-medium">Megathrust & Sesar</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer text-stone-700 hover:text-stone-900">
                <input
                  type="checkbox"
                  checked={showDrainageZones}
                  onChange={(e) => setShowDrainageZones(e.target.checked)}
                  className="rounded border-stone-300 text-stone-800 focus:ring-0"
                />
                <span className="text-[11px] font-medium">DAS & Banjir</span>
              </label>
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[16/10] bg-[#E8E2D7] rounded-xl border border-stone-300/70 overflow-hidden">
            
            {/* SVG Illustration of Indonesian Archipelago */}
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full select-none"
              style={{ background: 'radial-gradient(ellipse at center, #E8E2D7 0%, #DFD7CA 100%)' }}
            >
              {/* Subtle Latitude / Longitude Grid lines */}
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D1C7B7" strokeWidth="0.5" strokeDasharray="3 3" />
                </pattern>
                
                {/* Glow filter for active faults */}
                <filter id="glow-fault" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <rect width="1000" height="600" fill="url(#grid)" />

              {/* Equator Line (Khatulistiwa 0°) */}
              <line x1="0" y1="260" x2="1000" y2="260" stroke="#C5BBAA" strokeWidth="1" strokeDasharray="6 4" />
              <text x="20" y="254" fill="#9C907E" fontSize="10" fontFamily="monospace">Khatulistiwa 0°</text>

              {/* TECTONIC LAYER 1: Sunda Megathrust Arc (Subduksi Samudra Hindia) */}
              {showMegathrust && (
                <g id="megathrust-layer" className="transition-opacity duration-300">
                  {/* Outer Subduction Trench Curve */}
                  <path
                    d="M 60 120 Q 90 260, 180 340 T 360 410 T 520 425 T 660 435 T 820 420"
                    fill="none"
                    stroke="#B45309"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    opacity="0.75"
                  />
                  {/* Sesar Semangko (Sumatra Fault Line) */}
                  <path
                    d="M 90 140 Q 150 250, 220 330"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    opacity="0.8"
                  />
                  {/* Sesar Opak (Yogyakarta) */}
                  <path
                    d="M 435 410 L 450 430"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="3.5"
                    opacity="0.9"
                  />
                  {/* Sesar Palu Koro (Sulawesi) */}
                  <path
                    d="M 640 260 L 655 330"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    opacity="0.8"
                  />
                  <text x="140" y="380" fill="#B45309" fontSize="9" fontFamily="monospace" fontWeight="600">
                    Jalur Sunda Megathrust (Subduksi Indo-Australia)
                  </text>
                  <text x="415" y="445" fill="#DC2626" fontSize="8" fontFamily="monospace" fontWeight="700">
                    Sesar Opak
                  </text>
                </g>
              )}

              {/* TECTONIC LAYER 2: Ring of Fire / Busur Vulkanik */}
              {showRingOfFire && (
                <g id="volcanic-arc" className="transition-opacity duration-300">
                  {/* Volcano Belt line through Sumatra, Java, Bali, Nusa Tenggara, Banda Arc */}
                  <path
                    d="M 85 150 Q 160 260, 240 330 Q 340 380, 440 405 Q 520 415, 600 420 Q 720 425, 840 375"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                  {/* Active Volcano Points */}
                  <circle cx="100" cy="180" r="3" fill="#DC2626" /> {/* Marapi/Sinabung */}
                  <circle cx="210" cy="310" r="3" fill="#DC2626" /> {/* Dempo/Krakatau */}
                  <circle cx="270" cy="350" r="3.5" fill="#EF4444" /> {/* Krakatau */}
                  <circle cx="430" cy="405" r="4" fill="#DC2626" /> {/* Gunung Merapi */}
                  <circle cx="490" cy="410" r="3.5" fill="#DC2626" /> {/* Kelud / Semeru */}
                  <circle cx="580" cy="420" r="3" fill="#DC2626" /> {/* Agung */}
                  <circle cx="650" cy="425" r="3.5" fill="#DC2626" /> {/* Tambora */}
                  <circle cx="840" cy="375" r="3.5" fill="#DC2626" /> {/* Gunung Api Banda */}
                </g>
              )}

              {/* TECTONIC LAYER 3: Drainage & River Flood Zones */}
              {showDrainageZones && (
                <g id="drainage-layer">
                  {/* Sungai Batanghari */}
                  <path d="M 210 280 Q 240 300, 270 305" fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 2" />
                  {/* Sungai Ciliwung */}
                  <path d="M 370 375 L 368 395" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                  {/* Sungai Brantas */}
                  <path d="M 480 420 Q 510 410, 520 415" fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 2" />
                </g>
              )}

              {/* ISLAND MASSES (Accurate stylized outlines of major Indonesian islands) */}
              <g id="islands" fill="#D3C7B5" stroke="#BAAE9B" strokeWidth="1.5">
                
                {/* 1. PULAU SUMATERA */}
                <path
                  d="M 70 110 
                     C 100 130, 130 170, 160 210 
                     C 190 250, 220 290, 250 330 
                     C 270 350, 275 365, 260 370 
                     C 240 375, 215 350, 185 300 
                     C 155 250, 115 190, 75 140 
                     Z"
                />

                {/* 2. PULAU NIAS */}
                <path d="M 125 240 Q 135 255, 130 265 Q 120 255, 125 240 Z" />

                {/* 3. PULAU JAWA & MADURA */}
                <path
                  d="M 340 380 
                     C 380 375, 430 380, 480 390 
                     C 520 395, 545 405, 540 425 
                     C 520 435, 480 435, 430 430 
                     C 380 425, 345 410, 335 395 
                     Z"
                />
                {/* Madura */}
                <path d="M 505 385 Q 540 385, 535 398 Q 505 400, 505 385 Z" />

                {/* 4. BALI, LOMBOK, SUMBAWA, FLORES */}
                <path d="M 555 422 Q 570 422, 568 433 Q 553 433, 555 422 Z" /> {/* Bali */}
                <path d="M 580 423 Q 598 423, 595 434 Q 578 434, 580 423 Z" /> {/* Lombok */}
                <path d="M 610 420 Q 645 418, 640 435 Q 608 435, 610 420 Z" /> {/* Sumbawa */}
                <path d="M 660 420 Q 720 422, 715 435 Q 655 435, 660 420 Z" /> {/* Flores */}

                {/* 5. PULAU KALIMANTAN */}
                <path
                  d="M 370 200 
                     C 430 180, 490 200, 520 230 
                     C 540 270, 530 310, 510 330 
                     C 480 350, 440 360, 400 350 
                     C 370 335, 350 280, 370 200 
                     Z"
                />

                {/* 6. PULAU SULAWESI */}
                <path
                  d="M 620 230 
                     Q 650 210, 680 235 
                     Q 660 260, 645 280 
                     Q 675 300, 690 325 
                     Q 670 345, 650 330 
                     Q 635 310, 630 270 
                     Z"
                />

                {/* 7. KEPULAUAN MALUKU & BANDA */}
                <path d="M 760 280 Q 780 275, 775 305 Q 755 305, 760 280 Z" /> {/* Halmahera */}
                <path d="M 770 335 Q 795 330, 790 350 Q 765 350, 770 335 Z" /> {/* Seram */}
                <circle cx="840" cy="375" r="4" fill="#A89B85" /> {/* Kepulauan Banda */}

                {/* 8. PULAU PAPUA */}
                <path
                  d="M 830 310 
                     C 860 290, 920 300, 970 320 
                     C 990 360, 980 420, 950 440 
                     C 910 450, 870 430, 850 390 
                     C 835 360, 810 330, 830 310 
                     Z"
                />

              </g>

              {/* Map Title Legend inside SVG */}
              <text x="30" y="550" fill="#6B5E4F" fontSize="11" fontFamily="serif" fontWeight="bold">
                PETA RISIKO CAGAR BUDAYA INDONESIA
              </text>
              <text x="30" y="568" fill="#8C7E6C" fontSize="9" fontFamily="monospace">
                Merah: Vulkanik · Kuning: Gempa Sesar · Biru: Tsunami & Banjir
              </text>
            </svg>

            {/* Interactive HTML Markers positioned by Percentage */}
            {filteredSites.map((site) => {
              const isSelected = site.id === activeSite.id;
              
              // Marker color based on hazard
              let markerColor = 'bg-stone-900 border-amber-400';
              if (site.primaryHazard === 'Vulkanik') markerColor = 'bg-rose-700 border-rose-300';
              if (site.primaryHazard === 'Gempa Tektonik') markerColor = 'bg-amber-600 border-amber-200';
              if (site.primaryHazard === 'Tsunami') markerColor = 'bg-blue-700 border-blue-200';
              if (site.primaryHazard === 'Banjir & Pelapukan') markerColor = 'bg-teal-700 border-teal-200';

              return (
                <div
                  key={site.id}
                  style={{
                    left: `${site.coordinates.mapX}%`,
                    top: `${site.coordinates.mapY}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  onClick={() => setSelectedSiteId(site.id)}
                >
                  {/* Subtle Radar Ring when selected */}
                  {isSelected && (
                    <div className="absolute -inset-2 rounded-full border-2 border-stone-800 animate-ping opacity-60 pointer-events-none" />
                  )}

                  {/* Marker Pin */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-white border-2 shadow-md transition-transform duration-200 ${
                      isSelected
                        ? 'scale-125 ring-2 ring-stone-900 ring-offset-2 ring-offset-[#FAF7F2]'
                        : 'group-hover:scale-110'
                    } ${markerColor}`}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>

                  {/* Tooltip on hover */}
                  <div className="hidden sm:group-hover:flex absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex-col items-center pointer-events-none whitespace-nowrap">
                    <div className="bg-stone-900 text-white text-[11px] py-1 px-2.5 rounded-md shadow-lg flex items-center gap-1.5 font-medium">
                      <span>{site.name}</span>
                      <span className="text-[9px] text-amber-300 font-mono">({site.primaryHazard})</span>
                    </div>
                    <div className="w-2 h-2 bg-stone-900 rotate-45 -mt-1" />
                  </div>
                </div>
              );
            })}

          </div>

          {/* Map Footer Information */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
            <div>
              Menampilkan <span className="font-semibold text-stone-800">{filteredSites.length}</span> dari {HERITAGE_SITES.length} situs cagar budaya.
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-700 inline-block" /> Vulkanik
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" /> Gempa
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700 inline-block" /> Tsunami
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-700 inline-block" /> Banjir
              </span>
            </div>
          </div>

        </div>

        {/* Right: Comprehensive Site Disaster & Mitigation Dossier */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 space-y-6 shadow-xs sticky top-22">
          
          {/* Dossier Header */}
          <div className="space-y-2 border-b border-stone-200 pb-4">
            
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                {activeSite.province} · {activeSite.island}
              </span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${getHazardBadge(activeSite.primaryHazard).color}`}>
                Ancaman: {activeSite.primaryHazard}
              </span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
              {activeSite.name}
            </h2>

            <div className="flex items-center gap-2 text-xs text-stone-600 font-serif italic">
              <span>{activeSite.period}</span>
              <span aria-hidden="true">·</span>
              <span className="not-italic font-sans text-stone-500">Kategori: {activeSite.category}</span>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
              <span>Bahan: <strong className="text-stone-800">{activeSite.materialType}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Tingkat Risiko: <strong className="text-rose-700">{activeSite.hazardSeverity}</strong></span>
            </div>

          </div>

          {/* Overview text */}
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {activeSite.overview}
          </p>

          {/* Catatan Sejarah Bencana Masa Lalu */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>Rekam Jejak Sejarah Bencana</span>
            </h3>

            <div className="space-y-2.5">
              {activeSite.historicalDisasters.map((disaster, idx) => (
                <div key={idx} className="p-3 bg-[#FAF7F2] border border-stone-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900">{disaster.event}</span>
                    <span className="font-mono text-stone-500">{disaster.year}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-normal">
                    {disaster.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Faktor Kerentanan Fisik & Material */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-stone-600" />
              <span>Faktor Kerentanan Material & Struktur</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-600 list-disc list-inside">
              {activeSite.vulnerabilityFactors.map((factor, idx) => (
                <li key={idx} className="leading-relaxed">
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          {/* Protokol Mitigasi 3 Fase */}
          <div className="space-y-3 border-t border-stone-200 pt-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              <span>Protokol Mitigasi Bencana Berkelanjutan</span>
            </h3>

            <div className="space-y-2 text-xs">
              
              {/* Pra-Bencana */}
              <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-lg space-y-1">
                <span className="font-semibold text-amber-900 block">1. Tindakan Pra-Bencana (Preventif):</span>
                <ul className="space-y-1 text-stone-700 list-disc list-inside pl-1">
                  {activeSite.mitigation.preDisaster.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Saat Bencana */}
              <div className="p-2.5 bg-rose-50/70 border border-rose-200/80 rounded-lg space-y-1">
                <span className="font-semibold text-rose-900 block">2. Tindakan Tanggap Darurat (Saat Terjadi):</span>
                <ul className="space-y-1 text-stone-700 list-disc list-inside pl-1">
                  {activeSite.mitigation.duringDisaster.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Pasca Bencana */}
              <div className="p-2.5 bg-teal-50/70 border border-teal-200/80 rounded-lg space-y-1">
                <span className="font-semibold text-teal-900 block">3. Tindakan Pasca-Bencana (Restorasi):</span>
                <ul className="space-y-1 text-stone-700 list-disc list-inside pl-1">
                  {activeSite.mitigation.postDisaster.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Kearifan Lokal if any */}
              {activeSite.mitigation.indigenousKnowledge && (
                <div className="p-2.5 bg-stone-100 border border-stone-300 rounded-lg text-stone-700">
                  <span className="font-semibold text-stone-900 block mb-0.5">Kearifan Lokal / Tradisi Nenek Moyang:</span>
                  <p className="italic">{activeSite.mitigation.indigenousKnowledge}</p>
                </div>
              )}

            </div>
          </div>

          {/* Quick Action to study this site in MICAYA */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                if (onStudySiteInMicaya) {
                  onStudySiteInMicaya(activeSite.id);
                } else if (onSelectTab) {
                  onSelectTab('model-micaya');
                }
              }}
              className="w-full py-2.5 px-4 bg-stone-900 text-amber-100 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kaji {activeSite.name} di Sintaks MICAYA</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
