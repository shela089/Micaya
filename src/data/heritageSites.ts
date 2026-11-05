export interface MitigationProtocol {
  preDisaster: string[];
  duringDisaster: string[];
  postDisaster: string[];
  indigenousKnowledge?: string; // Kearifan lokal / kearifan tradisional
}

export interface HeritageSite {
  id: string;
  name: string;
  period: string;
  category: 'Candi' | 'Kawasan Percandian' | 'Masjid Bersejarah' | 'Benteng' | 'Situs Prasejarah' | 'Kawasan Kota Kuno';
  location: string;
  province: string;
  island: 'Sumatera' | 'Jawa' | 'Bali-Nusa Tenggara' | 'Kalimantan' | 'Sulawesi' | 'Maluku-Papua';
  coordinates: {
    lat: number;
    lng: number;
    mapX: number; // percentage in custom SVG map (0 - 100)
    mapY: number; // percentage in custom SVG map (0 - 100)
  };
  primaryHazard: 'Vulkanik' | 'Gempa Tektonik' | 'Tsunami' | 'Banjir & Pelapukan' | 'Erosi & Longsor';
  hazardSeverity: 'Sangat Tinggi' | 'Tinggi' | 'Sedang';
  materialType: 'Batu Andesit' | 'Bata Merah Purba' | 'Kayu Ulin / Kayu Tradisional' | 'Kapur & Karang' | 'Sedimen Aluvial';
  historicalDisasters: {
    year: string;
    event: string;
    impact: string;
  }[];
  overview: string;
  vulnerabilityFactors: string[];
  mitigation: MitigationProtocol;
}

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'borobudur',
    name: 'Candi Borobudur',
    period: 'Abad ke-8 s.d. 9 M (Dinasti Syailendra)',
    category: 'Candi',
    location: 'Magelang, Jawa Tengah',
    province: 'Jawa Tengah',
    island: 'Jawa',
    coordinates: { lat: -7.6079, lng: 110.2038, mapX: 43.5, mapY: 69.2 },
    primaryHazard: 'Vulkanik',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Batu Andesit',
    overview: 'Monumen Buddha terbesar di dunia yang dibangun dari 55.000 m³ batu andesit berpori. Berada di lembah subur Kedu yang dikelilingi gunung api aktif, terutama Gunung Merapi (jarak ~28 km). Terancam endapan abu vulkanik ber-pH asam tinggi yang dapat merusak relief batuan jika bereaksi dengan air hujan.',
    historicalDisasters: [
      {
        year: '1006 M',
        event: 'Erupsi Dahsyat Merapi Purba & Gempa Bumi',
        impact: 'Candi terkubur di bawah lapisan tanah dan tefra vulkanik selama berabad-abad, serta diperkirakan mempercepat perpindahan pusat Kerajaan Mataram Kuno ke Jawa Timur oleh Mpu Sindok.'
      },
      {
        year: '2010 M',
        event: 'Erupsi Eksplosif Gunung Merapi 2010',
        impact: 'Abu vulkanik setebal 2,5 cm menutupi seluruh stupa dan lantai candi. Sifat abu yang asam (pH 3,5–4) menyumbat sistem drainase kuno dan mengancam korosi batu andesit.'
      }
    ],
    vulnerabilityFactors: [
      'Batu andesit memiliki porositas alami sehingga mudah menyerap keasaman abu tefra',
      'Sistem drainase kuno (saluran air jaladwara) rawan tersumbat endapan vulkanik',
      'Getaran seismik letusan vulkanik dan gempa tektonik dangkal dapat menggeser kuncian batu interlock'
    ],
    mitigation: {
      preDisaster: [
        'Pemasangan terpal pelindung (tarpaulin covers) pada stupa induk dan 72 stupa teras saat status Merapi Siaga',
        'Pemantauan mikroseismik dan deformasi batuan menggunakan tiltmeter digital bekerja sama dengan BPPTKG',
        'Penyediaan stok air ber-pH netral dan vacuum cleaner khusus batuan di kompleks Balai Konservasi'
      ],
      duringDisaster: [
        'Penghentian total akses wisatawan ke struktur atas candi',
        'Penutupan saluran pembuangan air terbuka untuk mencegah masuknya abu pekat',
        'Evakuasi tim konservator dan pengamanan pos observasi situs'
      ],
      postDisaster: [
        'Pembersihan kering abu vulkanik (dry cleaning) dengan sapu ijuk halus dan sikat nilon tanpa air',
        'Pencucian basah terkontrol dengan semprotan air bertekanan rendah dan larutan netralisasi',
        'Pengecekan kemiringan dinding lorong dan sambungan batu pasca-guncangan'
      ],
      indigenousKnowledge: 'Masyarakat sekitar mengenal tanda alami gempa dan Merapi melalui perubahan perilaku satwa lereng dan pengamatan arah abu condong.'
    }
  },
  {
    id: 'prambanan',
    name: 'Candi Prambanan & Kompleks Roro Jonggrang',
    period: 'Abad ke-9 M (Rakai Pikatan, Mataram Kuno)',
    category: 'Candi',
    location: 'Sleman & Klaten (DIY - Jateng)',
    province: 'D.I. Yogyakarta',
    island: 'Jawa',
    coordinates: { lat: -7.7520, lng: 110.4915, mapX: 44.5, mapY: 70.0 },
    primaryHazard: 'Gempa Tektonik',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Batu Andesit',
    overview: 'Kompleks candi Hindu terindah di Asia Tenggara yang menjulang setinggi 47 meter. Terletak persis di atas jalur zona sesar aktif Sesar Opak (Opak Fault Zone) yang membentang dari muara Sungai Opak hingga wilayah Prambanan dan Klaten.',
    historicalDisasters: [
      {
        year: '1584 M',
        event: 'Gempa Bumi Megathrust Jawa & Aktivitas Sesar',
        impact: 'Meruntuhkan sebagian besar struktur menara candi perwara dan candi induk hingga terbengkalai ratusan tahun sebelum dipugar kembali.'
      },
      {
        year: '27 Mei 2006',
        event: 'Gempa Bumi Yogyakarta Mw 6.3',
        impact: 'Guncangan gempa dangkal mematahkan ratna kemuncak, retakan vertikal pada tubuh Candi Siwa, runtuhnya ornamen relief, dan terlemparnya ratusan blok batu andesit berbobot tonase besar.'
      }
    ],
    vulnerabilityFactors: [
      'Bentuk bangunan candi yang ramping dan sangat tinggi (47 m) memperbesar momen inersia ayunan saat gempa',
      'Konstruksi batu tumpuk tanpa adukan semen perekat modern (dry stone masonry dengan sistem takik ekor burung)',
      'Kedekatan hanya berjarak beberapa kilometer dari bidang patahan Sesar Opak'
    ],
    mitigation: {
      preDisaster: [
        'Pemasangan sensor akselerograf gempa real-time di bilik Candi Siwa dan Candi Brahma',
        'Penguatan jangkar elastis (aramid fiber / stainless anchor) di sambungan blok batu kunci yang rentan',
        'Pemodelan Digital 3D Terrestrial Laser Scanner (TLS) untuk inventarisasi posisi tiap batu (anastilosis cadangan)'
      ],
      duringDisaster: [
        'Zonasi perimeter pengaman bebas manusia minimal 50 meter dari kaki candi',
        'Instruksi evakuasi cepat ke tanah lapang pelataran kedua',
        'Pemberlakuan protokol darurat penutupan gerbang kompleks'
      ],
      postDisaster: [
        'Pelabelan dan katalogisasi fotogrametri setiap blok batu yang jatuh untuk rekonstruksi anastilosis presisi',
        'Injeksi grouting cairan kapur hidrolik khusus untuk menstabilkan retakan mikro struktur',
        'Evaluasi struktural seismik sebelum izin buka kembali untuk edukasi publik'
      ],
      indigenousKnowledge: 'Sistem sambungan batu takik purba (knob and mortise) sesungguhnya dirancang leluhur Nusantara untuk menyerap energi guncangan dengan disipasi friksi gesek terkontrol.'
    }
  },
  {
    id: 'sambisari',
    name: 'Candi Sambisari',
    period: 'Abad ke-9 M (Rakai Garung / Mataram Kuno)',
    category: 'Candi',
    location: 'Kalasan, Sleman, DIY',
    province: 'D.I. Yogyakarta',
    island: 'Jawa',
    coordinates: { lat: -7.7625, lng: 110.4470, mapX: 44.0, mapY: 70.3 },
    primaryHazard: 'Vulkanik',
    hazardSeverity: 'Tinggi',
    materialType: 'Batu Andesit',
    overview: 'Candi Hindu unik yang ditemukan secara tidak sengaja oleh petani pada tahun 1966. Posisi candi ini berada 6,5 meter di bawah permukaan tanah modern karena terkubur material lahar dingin dan piroklastik banjir lahar Merapi purba ratusan tahun lalu.',
    historicalDisasters: [
      {
        year: 'Abad ke-11 M (~1006 M)',
        event: 'Banjir Lahar Dingin Merapi Purba',
        impact: 'Seluruh struktur candi dan pagar keliling tertimbun sedimentasi pasir dan kerikil vulkanik setebal 6,5 meter sehingga hilang dari catatan sejarah selama 1.000 tahun.'
      }
    ],
    vulnerabilityFactors: [
      'Berada di dalam cekungan galian (pit) di bawah kontur permukaan tanah sekitarnya',
      'Sangat rentan genangan air hujan ekstrem dan rembesan air tanah yang dapat merusak stabilitas fondasi',
      'Jalur aliran lahar hujan jika terjadi erupsi besar Merapi dengan debit curah hujan ekstrem'
    ],
    mitigation: {
      preDisaster: [
        'Pembangunan saluran pompa drainase otomatis berkapasitas tinggi di dasar pelataran candi',
        'Pemantauan tinggi muka air tanah (piezometer) di sekeliling dinding penahan tanah cekungan',
        'Pemberian perkuatan lereng tebing galian untuk mencegah bahaya longsor timbunan tanah purba'
      ],
      duringDisaster: [
        'Aktivasi pompa darurat bertenaga genset mandiri untuk membuang luapan air',
        'Pemasangan tanggul pasir sementara di bibir atas tebing cekungan'
      ],
      postDisaster: [
        'Pengerukan lumpur aluvial halus tanpa alat berat mekanik kontak langsung batuan candi',
        'Pemeriksaan mikrobiologis pertumbuhan alga dan lumut kerak akibat kelembapan tinggi'
      ]
    }
  },
  {
    id: 'baiturrahman',
    name: 'Masjid Raya Baiturrahman & Situs Tsunami Aceh',
    period: '1881 M (Rekonstruksi era Kolonial) / Asal Mula Abad ke-17',
    category: 'Masjid Bersejarah',
    location: 'Banda Aceh, Aceh',
    province: 'Aceh',
    island: 'Sumatera',
    coordinates: { lat: 5.5537, lng: 95.3193, mapX: 9.8, mapY: 26.5 },
    primaryHazard: 'Tsunami',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Kapur & Karang',
    overview: 'Monumen spiritual dan arsitektural megah dengan kubah hitam khas Moghul. Menjadi saksi bisu dan simbol ketangguhan saat gelombang tsunami Samudra Hindia 26 Desember 2004 menerjang Banda Aceh. Struktur utamanya tetap berdiri kokoh dan menyelamatkan ribuan warga pengungsi.',
    historicalDisasters: [
      {
        year: '26 Desember 2004',
        event: 'Gempa Megathrust Sumatra-Andaman Mw 9.1 & Tsunami',
        impact: 'Gelombang tsunami setinggi lebih dari 10 meter menyapu halaman masjid dan pagar luar, namun struktur pilar utama, kubah, dan dinding lengkung berhasil bertahan menahan gaya hidrodinamis air laut.'
      }
    ],
    vulnerabilityFactors: [
      'Jarak yang relatif dekat dengan garis pantai Teluk Banda Aceh (~3 km)',
      'Kerentanan salinitas air laut terhadap korosi besi tulangan dan pelapukan lapisan cat kubah',
      'Ancaman pengulangan gempa megathrust busur Sunda di masa depan'
    ],
    mitigation: {
      preDisaster: [
        'Penguatan struktural berkala pada menara azan dan kubah menggunakan komposit serat karbon',
        'Integrasi halaman masjid sebagai Tempat Evakuasi Sementara (TES) vertikal tsunami terpadu',
        'Pemasangan sirine sistem peringatan dini tsunami (TEWS BMKG) di area sekitar'
      ],
      duringDisaster: [
        'Pemanfaatan lantai atas dan mezzanine bangunan utama untuk evakuasi vertikal massa',
        'Penutupan katup saluran pipa gas dan utilitas listrik bawah tanah'
      ],
      postDisaster: [
        'Pembersihan residu lumpur laut berkadar garam tinggi secara cepat untuk mencegah kristalisasi garam (haloclasty)',
        'Konservasi dokumen arsip sejarah dan manuskrip Islam yang terdampak kelembapan air laut'
      ],
      indigenousKnowledge: 'Masyarakat Aceh memiliki kearifan lisan "Smong" (kisah tsunami di Pulau Simeulue 1907) yang kini diajarkan sebagai materi kurikulum mitigasi bencana berbasis sejarah.'
    }
  },
  {
    id: 'muaro-jambi',
    name: 'Kompleks Percandian Muaro Jambi',
    period: 'Abad ke-7 s.d. 14 M (Kerajaan Melayu Kuno & Sriwijaya)',
    category: 'Kawasan Percandian',
    location: 'Muaro Jambi, Jambi',
    province: 'Jambi',
    island: 'Sumatera',
    coordinates: { lat: -1.4795, lng: 103.6660, mapX: 25.5, mapY: 52.0 },
    primaryHazard: 'Banjir & Pelapukan',
    hazardSeverity: 'Tinggi',
    materialType: 'Bata Merah Purba',
    overview: 'Kawasan percandian terluas di Asia Tenggara (3.988 hektar) yang dibangun dari bata merah tanpa semen perekat. Terletak di tepi Sungai Batanghari, situs ini merupakan pusat studi agama Buddha internasional pada masanya. Kerentanan terbesarnya adalah banjir luapan musiman Batanghari dan pelapukan bata akibat kelembapan tinggi dan lumut tropis.',
    historicalDisasters: [
      {
        year: 'Periode Berkala (1955, 2003, 2021)',
        event: 'Banjir Luapan Musiman Sungai Batanghari',
        impact: 'Merendam pelataran Candi Gumpung, Candi Kedaton, dan Candi Tinggi hingga kedalaman 1–1,5 meter selama berminggu-minggu, memicu degradasi kristal garam pada bata merah purba.'
      }
    ],
    vulnerabilityFactors: [
      'Bata merah purba dibakar pada temperatur tradisional yang menghasilkan porositas rapuh terhadap rendaman air',
      'Deforestasi hulu DAS Batanghari yang memperparah debit limpasan banjir dan erosi tebing sungai',
      'Akar pohon menapo (pohon beringin dan kenari purba) yang meretakkan struktur bata jika tidak dikendalikan'
    ],
    mitigation: {
      preDisaster: [
        'Pemeliharaan tanggul alam dan kanalisasi purba di sekeliling kompleks candi untuk mengalirkan air',
        'Aplikasi biocide organik ramah lingkungan untuk mencegah pertumbuhan mikroorganisme pemakan mineral bata',
        'Monitoring ketinggian permukaan sungai Batanghari dengan telemetri otomatis'
      ],
      duringDisaster: [
        'Penyekatan dinding pelataran utama dengan geobag pelindung rembesan',
        'Pengalihan aliran air luapan ke kanal-kanal kuno Majapahit/Melayu di sekitarnya'
      ],
      postDisaster: [
        'Pengeringan perlahan struktur bata agar tidak terjadi pengeringan cepat yang memicu keretakan termal',
        'Penggantian bata lapuk dengan replika bata konservasi berbahan tanah liat lokal berdensitas teruji'
      ]
    }
  },
  {
    id: 'sangiran',
    name: 'Situs Manusia Purba Sangiran',
    period: 'Pleistosen (1,8 juta - 200.000 tahun lalu)',
    category: 'Situs Prasejarah',
    location: 'Sragen & Karanganyar, Jawa Tengah',
    province: 'Jawa Tengah',
    island: 'Jawa',
    coordinates: { lat: -7.4589, lng: 110.8322, mapX: 45.2, mapY: 68.2 },
    primaryHazard: 'Erosi & Longsor',
    hazardSeverity: 'Tinggi',
    materialType: 'Sedimen Aluvial',
    overview: 'Situs Warisan Dunia UNESCO kubah (dome) Sangiran yang menyimpan lebih dari 50% fosil hominid Homo erectus dunia. Lapisan stratigrafi tanah purba (Formasi Kalibeng, Pucangan, Kabuh, dan Notopuro) sangat rentan terhadap erosi air hujan lebat dan tanah longsor yang dapat menghanyutkan lapisan fosil bernilai sejarah tinggi.',
    historicalDisasters: [
      {
        year: 'Berkala Musim Hujan',
        event: 'Longsor Tebing Stratigrafi & Erosi Sungai Cemoro',
        impact: 'Tergerusnya lapisan tanah pembawa fosil (fauna purba dan alat batu paleolitik) yang terbawa hanyut ke hilir sungai.'
      }
    ],
    vulnerabilityFactors: [
      'Struktur tanah lempung hitam (black clay) yang mengembang saat basah dan retak dalam saat kering',
      'Topografi perbukitan terjal tanpa tutupan vegetasi hutan lebat',
      'Aktivitas penambangan liar tanah urug oleh masyarakat sekitar'
    ],
    mitigation: {
      preDisaster: [
        'Penanaman vegetasi penguat lereng berakar dalam (seperti tanaman vetiver / rumput akar wangi)',
        'Pembuatan bronjong batu kawat dan terasering di tebing rawan runtuh tepi Sungai Cemoro',
        'Pemberdayaan warga lokal sebagai "Relawan Penyelamat Fosil" yang dilatih melapor saat singkapan tanah baru terbuka'
      ],
      duringDisaster: [
        'Pemberian garis pengaman (safety line) di area tebing longsor',
        'Penyelamatan darurat fosil yang tersingkap sebelum rusak tergerus air'
      ],
      postDisaster: [
        'Ekskavasi penyelamatan kilat (salvage archaeology) pada temuan fosil di bidang runtuhan',
        'Dokumentasi stratigrafi 3D untuk merekam lapisan geologis sebelum tertutup erosi baru'
      ]
    }
  },
  {
    id: 'trowulan',
    name: 'Kawasan Cagar Budaya Trowulan (Ibu Kota Majapahit)',
    period: 'Abad ke-13 s.d. 15 M (Kemaharajaan Majapahit)',
    category: 'Kawasan Kota Kuno',
    location: 'Mojokerto, Jawa Timur',
    province: 'Jawa Timur',
    island: 'Jawa',
    coordinates: { lat: -7.5583, lng: 112.3833, mapX: 50.0, mapY: 71.0 },
    primaryHazard: 'Banjir & Pelapukan',
    hazardSeverity: 'Sedang',
    materialType: 'Bata Merah Purba',
    overview: 'Satu-satunya situs kota peninggalan kerajaan klasik di Indonesia seluas 99 km² yang mencakup Candi Tikus, Candi Bajang Ratu, Kolam Segaran, dan Candi Brahu. Memiliki peninggalan teknologi tata air dan kanal kuno mitigasi banjir yang sangat maju di masanya.',
    historicalDisasters: [
      {
        year: 'Abad ke-15 M',
        event: 'Banjir Bandang Purba & Sedimentasi Laharik Sungai Brantas',
        impact: 'Sebagian besar fondasi pemukiman perkotaan Majapahit terkubur lumpur banjir aluvial Kali Brantas sedalam 1–3 meter.'
      }
    ],
    vulnerabilityFactors: [
      'Struktur bata merah tanpa perekat yang sensitif terhadap genangan air tanah dan garam terlarut',
      'Peralihan fungsi lahan menjadi industri pabrik pembuatan bata merah modern yang merusak situs arkeologi',
      'Tersumbatnya jaringan kanal kuno oleh limbah domestik dan sedimentasi lumpur'
    ],
    mitigation: {
      preDisaster: [
        'Revitalisasi jaringan kanal kuno Majapahit dan Kolam Segaran sebagai kolam retensi pengendali air hujan',
        'Zonasi kawasan cagar budaya nasional untuk menghentikan eksploitasi galian tanah',
        'Pengaplikasian lapisan konsolidan berbasis silika pada bata merah candi'
      ],
      duringDisaster: [
        'Pengoperasian pintu air dan saluran suplesi pengendali limpasan',
        'Pemasangan pompa mobile di cekungan Candi Tikus yang berada di bawah elevasi tanah'
      ],
      postDisaster: [
        'Pembersihan lumpur sedimentasi secara bertahap dengan sikat halus basah',
        'Pemulihan elevasi drainase gravitasi alami'
      ]
    }
  },
  {
    id: 'kota-tua-jakarta',
    name: 'Kawasan Kota Tua Jakarta & Sunda Kelapa',
    period: 'Abad ke-17 s.d. 20 M (Jayakarta & Batavia Kolonial)',
    category: 'Kawasan Kota Kuno',
    location: 'Jakarta Barat & Utara',
    province: 'DKI Jakarta',
    island: 'Jawa',
    coordinates: { lat: -6.1352, lng: 106.8133, mapX: 37.0, mapY: 65.0 },
    primaryHazard: 'Banjir & Pelapukan',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Kayu Ulin / Kayu Tradisional',
    overview: 'Kawasan bersejarah bekas benteng dan pusat perdagangan VOC Batavia. Menghadapi tantangan lingkungan terberat di pesisir: banjir rob akibat kenaikan air laut, penurunan muka tanah (land subsidence) hingga 10 cm/tahun, dan luapan banjir sungai Ciliwung.',
    historicalDisasters: [
      {
        year: '1699 & 1740 M',
        event: 'Gempa Gunung Salak & Wabah Malaria Kanal Batavia',
        impact: 'Sedimentasi hebat menyumbat kanal VOC, memicu genangan air beracun dan wabah penyakit yang memaksa VOC memindahkan pusat kota ke Weltevreden.'
      },
      {
        year: 'Januari 2013 & 2020',
        event: 'Banjir Besar Jakarta & Rob Pesisir',
        impact: 'Merendam basemen dan lantai dasar Museum Sejarah Jakarta (Fatahillah), Museum Bahari, dan merusak material kayu pintu purba.'
      }
    ],
    vulnerabilityFactors: [
      'Penurunan muka tanah Jakarta akibat ekstraksi air tanah berlebih dan beban infrastruktur',
      'Tingkat kelembapan dan keasinan udara laut yang memicu pelapukan kayu jati/ulin dan korosi besi engsel kuno',
      'Sistem drainase kota yang terjebak di bawah permukaan pasang air laut'
    ],
    mitigation: {
      preDisaster: [
        'Pembangunan tanggul laut pelindung (sea wall) di sepanjang pesisir Sunda Kelapa dan Pasar Ikan',
        'Pemberian perlakuan fungisida dan antipelapukan pada elemen kayu kolonial Museum Fatahillah',
        'Penghentian pemompaan air tanah mandiri di seluruh cagar budaya Kota Tua'
      ],
      duringDisaster: [
        'Aktivasi polder pengendali air dan pompa waduk Pluit',
        'Pemindahan arsip langka dan benda pameran ke lantai 2 museum'
      ],
      postDisaster: [
        'Pengeringan ruangan dengan dehumidifier industri untuk mencegah tumbuhnya jamur pembusuk kayu',
        'Audit kekuatan fondasi tiang kayu gelondong (cerucuk) di bawah bangunan kolonial'
      ]
    }
  },
  {
    id: 'marlborough',
    name: 'Benteng Marlborough (Fort Marlborough)',
    period: '1714–1719 M (East India Company / EIC Inggris)',
    category: 'Benteng',
    location: 'Kota Bengkulu, Bengkulu',
    province: 'Bengkulu',
    island: 'Sumatera',
    coordinates: { lat: -3.7885, lng: 102.2505, mapX: 21.0, mapY: 57.0 },
    primaryHazard: 'Gempa Tektonik',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Kapur & Karang',
    overview: 'Benteng peninggalan Inggris terbesar kedua di Asia dengan luas 44.100 m² yang berdiri menghadap langsung Samudra Hindia. Terletak tepat di zona subduksi aktif Megathrust Mentawai-Bengkulu dan rentan terhadap gempa kuat serta abrasi gelombang samudra.',
    historicalDisasters: [
      {
        year: '12 September 2007',
        event: 'Gempa Bumi Bengkulu Mw 8.4',
        impact: 'Guncangan gempa dahsyat menimbulkan retakan lebar di dinding benteng bastiun barat dan merusak gerbang utama benteng.'
      }
    ],
    vulnerabilityFactors: [
      'Dinding bata tebal terikat adukan kapur tradisional yang rentan terhadap pergeseran geser seismik',
      'Terpaan aerosol garam laut secara konstan yang mempercepat degradasi plesteran kapur benteng',
      'Tebing pantai di depan benteng mengalami abrasi gelombang laut berkesinambungan'
    ],
    mitigation: {
      preDisaster: [
        'Pemasangan pemecah gelombang (breakwater) di bibir pantai Tapak Paderi di bawah benteng',
        'Penyuntikan adukan nat kapur elastis pengikat bata untuk meningkatkan daktilitas dinding',
        'Sistem jalur evakuasi gempa dan tsunami yang terhubung dengan ruang terbuka bagian dalam benteng'
      ],
      duringDisaster: [
        'Instruksi evakuasi ke lapangan terbuka Bastion atau ke bukit yang lebih tinggi jika ada peringatan tsunami',
        'Protokol pemadaman aliran kelistrikan darurat'
      ],
      postDisaster: [
        'Penyangga balok kayu darurat (shoring) pada dinding bastion yang mengalami lendutan',
        'Restorasi dengan bahan adukan kapur tohor lokal tanpa semen Portland biasa agar pori dinding tetap bernapas'
      ]
    }
  },
  {
    id: 'belgica',
    name: 'Benteng Belgica & Warisan Jalur Rempah Banda',
    period: '1611 M (Gubernur Jenderal VOC Pieter Both)',
    category: 'Benteng',
    location: 'Banda Neira, Kepulauan Banda, Maluku Tengah',
    province: 'Maluku',
    island: 'Maluku-Papua',
    coordinates: { lat: -4.5262, lng: 129.9042, mapX: 84.0, mapY: 62.5 },
    primaryHazard: 'Vulkanik',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Kapur & Karang',
    overview: 'Benteng segilima megah di puncak bukit Banda Neira yang menjadi saksi sejarah monopoli rempah pala dunia. Menghadap langsung ke Gunung Api Banda (Gunung Ganapus) yang berjarak kurang dari 1 km di seberang selat sempit.',
    historicalDisasters: [
      {
        year: 'Mei 1988',
        event: 'Letusan Gunung Api Banda 1988',
        impact: 'Hujan batu pijar dan abu vulkanik pekat menghantam atap benteng dan memicu evakuasi massal seluruh penduduk pulau Banda Neira.'
      }
    ],
    vulnerabilityFactors: [
      'Jarak amat dekat (< 1 km) dari ventilasi kawah aktif Gunung Api Banda',
      'Risiko tsunami vulkanik akibat runtuhnya lereng gunung api ke laut (flank collapse)',
      'Akses transportasi laut yang terbatas untuk pengiriman bahan material konservasi khusus saat darurat'
    ],
    mitigation: {
      preDisaster: [
        'Pembersihan vegetasi liar di sela batu karang benteng untuk mencegah retakan akar',
        'Penyimpanan cadangan penutup darurat terpal pelindung meriam kuno dan lantai bastion',
        'Integrasi sistem peringatan dini PVMBG pos pengamatan Gunung Api Banda dengan pengelola benteng'
      ],
      duringDisaster: [
        'Evakuasi seluruh personel melalui pelabuhan darurat ke pulau seberang (Banda Besar)',
        'Penutupan pintu-pintu gerbang besi benteng'
      ],
      postDisaster: [
        'Penyiraman air tawar untuk membilas partikel sulfur asam vulkanik dari meriam perunggu VOC dan dinding karang',
        'Stabilisasi lereng bukit fondasi benteng dari potensi bahaya longsoran hujan pasca-letusan'
      ]
    }
  },
  {
    id: 'bawomataluo',
    name: 'Desa Adat Bawömataluo (Omo Sebua Nias)',
    period: 'Abad ke-18 M (Tradisi Megalitik Nias)',
    category: 'Situs Prasejarah',
    location: 'Nias Selatan, Sumatera Utara',
    province: 'Sumatera Utara',
    island: 'Sumatera',
    coordinates: { lat: 0.6125, lng: 97.7712, mapX: 13.5, mapY: 42.0 },
    primaryHazard: 'Gempa Tektonik',
    hazardSeverity: 'Sangat Tinggi',
    materialType: 'Kayu Ulin / Kayu Tradisional',
    overview: 'Perkampungan megalitik dan rumah adat tradisional bangsawan Nias (Omo Sebua) yang dibangun di atas puncak bukit setinggi 324 mdpl. Merupakan mahakarya arsitektur vernakular tahan gempa terbaik di dunia berkat struktur tiang kayu diagonal tiga dimensi (diagonal bracing) dan sendi tumpuan batu tanpa paku besi.',
    historicalDisasters: [
      {
        year: '28 Maret 2005',
        event: 'Gempa Dahsyat Nias Mw 8.6',
        impact: 'Meruntuhkan ribuan rumah beton modern di Kota Teluk Dalam dan Gunungsitoli, namun rumah adat tradisional Omo Sebua di Bawömataluo tetap berdiri tegak tanpa kerusakan struktural fatal.'
      }
    ],
    vulnerabilityFactors: [
      'Bahaya kebakaran permukiman padat akibat material serba kayu dan atap daun rumbia kering',
      'Kelangkaan pasokan kayu keras tradisional (seperti kayu manawadano dan kayu eho) untuk perawatan restorasi',
      'Kenaikan risiko sambaran petir di puncak bukit perkampungan'
    ],
    mitigation: {
      preDisaster: [
        'Pemasangan instalasi penangkal petir terpadu dan jaringan hidran air bertekanan tinggi pencegah api',
        'Peremajaan pasak kayu (patek) dan tali ijuk secara berkala oleh tetua adat (si’ila)',
        'Pengawetan kayu menggunakan minyak alami tradisional pengusir rayap dan jamur kayu'
      ],
      duringDisaster: [
        'Warga memanfaatkan struktur elastis rumah adat yang fleksibel menyerap energi getaran',
        'Penyiapan tangga evakuasi batu megalit menuju lapangan desa'
      ],
      postDisaster: [
        'Pengecekan kemiringan tiang tumpuan sendi batu bulat (naitö) yang menjadi peredam getaran seismik alami',
        'Gotong royong adat (falöwa) untuk memperbaiki komponen non-struktural yang terlepas'
      ],
      indigenousKnowledge: 'Leluhur Nias telah menguji ratusan tahun bahwa arsitektur rangka tiang silang diagonal (drifting wood base) mampu bergoyang harmonis meredam gempa besar Samudra Hindia.'
    }
  },
  {
    id: 'muara-takus',
    name: 'Candi Muara Takus',
    period: 'Abad ke-11 s.d. 12 M (Kerajaan Sriwijaya)',
    category: 'Candi',
    location: 'Kampar, Riau',
    province: 'Riau',
    island: 'Sumatera',
    coordinates: { lat: 0.3375, lng: 100.6406, mapX: 19.5, mapY: 44.5 },
    primaryHazard: 'Banjir & Pelapukan',
    hazardSeverity: 'Sedang',
    materialType: 'Bata Merah Purba',
    overview: 'Kompleks stupa Buddha tertua di daratan Riau yang terdiri dari Candi Mahligai, Candi Bungsu, Candi Palangka, dan Candi Tua. Dibangun dari kombinasi batu bata cetak purba dan batu pasir (sandstone) di tepian aliran Sungai Kampar Kanan.',
    historicalDisasters: [
      {
        year: '1978 & 2017',
        event: 'Banjir Luapan Sungai Kampar Kanan & Kelembapan Tropis',
        impact: 'Rembesan air permukaan menaikkan salinitas dan memicu pengelupasan lapisan permukaan bata pada stupa Candi Mahligai.'
      }
    ],
    vulnerabilityFactors: [
      'Bahan batu pasir yang lunak dan mudah terkelupas oleh fluktuasi kelembapan udara tropis basah',
      'Tingkat keasaman air tanah gambut di sekeliling wilayah Riau',
      'Penyusupan lumut dan kerak kerak hitam (black crust) pada ornamen stupa'
    ],
    mitigation: {
      preDisaster: [
        'Pemasangan membrane kedap air bawah tanah untuk memutus rembesan kapiler air gambut',
        'Pembersihan mekanis berkala lumut dengan air demineralisasi',
        'Pembangunan parit keliling pengendali air limpasan hujan'
      ],
      duringDisaster: [
        'Pengoperasian pintu pengatur limpasan menuju kanal luar situs',
        'Penutupan area bilik stupa agar terhindar dari benturan serpihan dahan hanyut'
      ],
      postDisaster: [
        'Konsolidasi kimiawi menggunakan etil silikat untuk mengikat kembali butiran batu pasir yang rapuh',
        'Pemeriksaan rutin kelurusan poros menara silindris Candi Mahligai'
      ]
    }
  }
];
