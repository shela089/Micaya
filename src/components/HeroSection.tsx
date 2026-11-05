import { MapPin, BookOpen, Layers, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { NavTab } from './Navbar';
import { HERITAGE_SITES } from '../data/heritageSites';
import { DISASTER_ESSAYS } from '../data/disasterEssays';

interface HeroSectionProps {
  onSelectTab: (tab: NavTab) => void;
  onSelectSite?: (siteId: string) => void;
}

export default function HeroSection({ onSelectTab, onSelectSite }: HeroSectionProps) {
  const featuredSites = HERITAGE_SITES.slice(0, 3);
  const featuredEssays = DISASTER_ESSAYS.slice(0, 2);

  return (
    <div className="space-y-16 pb-16">
      {/* Editorial Marquee Hero */}
      <section className="relative pt-12 pb-16 md:py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Metadata Kicker without pill container */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-stone-600 mb-4 uppercase">
            <span>Platform Pembelajaran Sejarah & Mitigasi Bencana</span>
            <span aria-hidden="true">·</span>
            <span>Berbasis Riset Akademik</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800 font-semibold">Model MICAYA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Title & Mission */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Menautkan Sejarah Bencana, Lingkungan, dan Ketahanan Cagar Budaya.
              </h1>
              
              <p className="text-lg text-stone-700 leading-relaxed max-w-2xl">
                Indonesia berdiri di atas cincin api dan pertemuan lempeng tektonik dunia. 
                <strong className="font-semibold text-stone-900"> MICAYA</strong> (<em>Model Pembelajaran Mitigasi Cagar Budaya</em>) 
                hadir mengajak pendidik dan peserta didik merekonstruksi sejarah bencana masa lampau, 
                menganalisis kerentanan warisan pusaka, dan merumuskan langkah pelestarian nyata untuk masa depan.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectTab('peta')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>Jelajahi Peta Risiko Cagar Budaya</span>
                </button>
                <button
                  onClick={() => onSelectTab('model-micaya')}
                  className="px-6 py-3.5 text-sm font-semibold text-stone-900 bg-[#EFE9DF] hover:bg-[#E5DDCF] border border-stone-300 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-stone-700" />
                  <span>Pelajari 5 Sintaks MICAYA</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-stone-500">
                <span>Rujukan Riset: Shela Dwi Utari</span>
                <span aria-hidden="true">/</span>
                <span>Fase E & F Kurikulum Merdeka</span>
              </div>
            </div>

            {/* Right Column: Architectural Hero Showcase Graphic */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-[#F4EFE6] border border-stone-300 rounded-2xl space-y-5 shadow-xs">
                
                <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-stone-500">Kajian Geohistori</span>
                    <h3 className="text-lg font-serif font-bold text-stone-900">Cincin Api & Pusaka Budaya</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-900/10 flex items-center justify-center text-amber-900">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 text-sm text-stone-700">
                  <div className="p-3 bg-white/80 rounded-lg border border-stone-200">
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span className="font-medium text-stone-800">Candi Borobudur & Sambisari</span>
                      <span>Ancaman Vulkanik</span>
                    </div>
                    <p className="text-xs text-stone-600">
                      Terkubur endapan laharik Merapi purba dan ancaman korosi asam abu tefra pH 3,5.
                    </p>
                  </div>

                  <div className="p-3 bg-white/80 rounded-lg border border-stone-200">
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span className="font-medium text-stone-800">Candi Prambanan</span>
                      <span>Patahan Sesar Opak</span>
                    </div>
                    <p className="text-xs text-stone-600">
                      Goncangan gempa 2006 meluruhkan batu ratna kemuncak, memicu anastilosis presisi tinggi.
                    </p>
                  </div>

                  <div className="p-3 bg-white/80 rounded-lg border border-stone-200">
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span className="font-medium text-stone-800">Masjid Baiturrahman & Tsunami</span>
                      <span>Megathrust & Resiliensi</span>
                    </div>
                    <p className="text-xs text-stone-600">
                      Simbol ketahanan spiritual dan konstruksi pilar terbuka menghadapi gelombang Samudra Hindia 2004.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onSelectTab('esai')}
                  className="w-full py-2.5 px-4 bg-stone-900 text-amber-100 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Baca 6 Esai Sejarah Bencana Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>

          </div>

          {/* Operational Utility Ribbon / KPI Strip */}
          <div className="mt-14 pt-8 border-t border-stone-300 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">12+</div>
              <div className="text-xs font-medium text-stone-600 uppercase tracking-wider">Situs Cagar Budaya</div>
              <p className="text-xs text-stone-500">Terpetakan dari Sumatera hingga Maluku dengan protokol mitigasi.</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">5</div>
              <div className="text-xs font-medium text-stone-600 uppercase tracking-wider">Tahap Sintaks MICAYA</div>
              <p className="text-xs text-stone-500">Orientasi, Membaca, Mengontekstualisasi, Membuat, Mengomunikasikan.</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">6</div>
              <div className="text-xs font-medium text-stone-600 uppercase tracking-wider">Esai Geohistori Mendalam</div>
              <p className="text-xs text-stone-500">Dilengkapi analisis primer, kutipan prasasti, dan pertanyaan pemantik.</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-stone-900 tabular-nums">100%</div>
              <div className="text-xs font-medium text-stone-600 uppercase tracking-wider">Kurikulum Merdeka</div>
              <p className="text-xs text-stone-500">Dilengkapi modul ajar, LKPD interaktif terpadu, dan kuis diagnostik.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Conceptual Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800">Filosofi Pembelajaran</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            Tiga Pilar Utama Model MICAYA
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Mengintegrasikan sains kebumian, analisis sejarah kritis, dan pendidikan karakter pelestari budaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 hover:border-stone-400 transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-lg font-serif font-semibold text-stone-900">
              Historiografi Kritis Kebencanaan
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Memahami bahwa letusan Merapi, gempa bumi sesar, dan tsunami bukanlah peristiwa yang terisolasi dari peradaban manusia. Catatan prasasti, babad, dan arsip kolonial memuat respons adaptif nenek moyang kita menghadapi bencana.
            </p>
            <div className="pt-2 text-xs font-medium text-amber-900 flex items-center gap-1.5">
              <span>Sintaks: Orientasi & Membaca</span>
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 hover:border-stone-400 transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-lg font-serif font-semibold text-stone-900">
              Geospasial Risiko & Konservasi
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Menautkan koordinat cagar budaya dengan peta lempeng tektonik, sesar aktif, dan daerah aliran sungai. Siswa menelaah kerentanan material (batu andesit, bata merah, kayu ulin) serta langkah mitigasi preventif.
            </p>
            <div className="pt-2 text-xs font-medium text-stone-800 flex items-center gap-1.5">
              <span>Sintaks: Mengontekstualisasi</span>
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4 hover:border-stone-400 transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-lg font-serif font-semibold text-stone-900">
              Aksi Historiografi & Solusi Mitigasi
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Peserta didik tidak sekadar menjadi konsumen sejarah, melainkan produsen pengetahuan melalui karya esai, infografis mitigasi, dan presentasi kolaboratif yang menawarkan solusi pelestarian nyata di masyarakat.
            </p>
            <div className="pt-2 text-xs font-medium text-emerald-900 flex items-center gap-1.5">
              <span>Sintaks: Membuat & Mengomunikasikan</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Heritage Sites Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800">Eksplorasi Spasial</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Situs Cagar Budaya Unggulan
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Pusaka bersejarah dengan catatan kebencanaan dan protokol mitigasi terdokumentasi.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('peta')}
            className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Lihat Seluruh 12 Situs di Peta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSites.map((site) => (
            <div
              key={site.id}
              className="p-5 bg-white border border-stone-200 rounded-xl flex flex-col justify-between hover:border-stone-400 transition-all shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-mono text-stone-600">{site.province}</span>
                  <span className="text-amber-900 font-semibold">{site.primaryHazard}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {site.name}
                </h3>
                <p className="text-xs text-stone-500 italic">
                  {site.period}
                </p>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {site.overview}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">
                  Material: <strong className="text-stone-800 font-semibold">{site.materialType}</strong>
                </span>
                <button
                  onClick={() => {
                    onSelectTab('peta');
                    if (onSelectSite) onSelectSite(site.id);
                  }}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Kaji Situs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Essays Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-[#FAF5EC] border border-stone-300 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Historiografi Pilihan</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Esai Sejarah Bencana & Lingkungan Nusantara
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                Koleksi tulisan mendalam yang menyajikan fakta sejarah, bukti arkeologis, dan analisis komparatif untuk bahan bacaan peserta didik pada Sintaks Membaca.
              </p>
              <button
                onClick={() => onSelectTab('esai')}
                className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Buka Seluruh Koleksi Esai</span>
              </button>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {featuredEssays.map((essay) => (
                <div
                  key={essay.id}
                  onClick={() => onSelectTab('esai')}
                  className="p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-400 transition-all cursor-pointer shadow-2xs group"
                >
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                    <span>{essay.era}</span>
                    <span aria-hidden="true">·</span>
                    <span>Waktu baca: {essay.readTime}</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {essay.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {essay.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Callout: Download LKPD & Sintaks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-200 bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Perangkat Siap Ajar untuk Guru & Siswa</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Ingin Mengimplementasikan Model MICAYA di Kelas Anda?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Gunakan simulator skenario RPP interaktif, unduh Lembar Kerja Peserta Didik (LKPD), dan uji pemahaman siswa lewat kuis evaluasi 10 soal HOTS.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="./micaya-modul-interaktif.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-stone-800 bg-[#EFE9DF] hover:bg-[#E2D9CA] border border-stone-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Berkas HTML Offline</span>
              <span className="text-[10px] font-mono text-amber-800">↗</span>
            </a>
            <button
              onClick={() => onSelectTab('sumber-belajar')}
              className="px-4 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              Buka LKPD & Kuis
            </button>
            <button
              onClick={() => onSelectTab('model-micaya')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              Lihat Sintaks Lengkap
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
