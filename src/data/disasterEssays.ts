export interface EssaySection {
  heading: string;
  content: string[];
  historicalQuote?: {
    text: string;
    source: string;
  };
}

export interface DisasterEssay {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  role: string;
  readTime: string;
  era: string;
  relatedHazards: string[];
  relatedSites: string[];
  summary: string;
  sections: EssaySection[];
  discussionQuestions: string[];
  references: string[];
}

export const DISASTER_ESSAYS: DisasterEssay[] = [
  {
    id: 'merapi-mataram-kuno',
    title: 'Amuk Merapi dan Misteri Eksodus Mataram Kuno',
    subtitle: 'Rekonstruksi Geohistori Terkuburnya Candi Sambisari dan Perpindahan Kekuasaan Abad ke-10 M',
    author: 'Tim Ahli Sejarah & Geoarkeologi Nusantara',
    role: 'Pusat Studi Mitigasi Warisan Budaya',
    readTime: '8 menit',
    era: 'Abad ke-8 s.d. 11 M',
    relatedHazards: ['Erupsi Vulkanik', 'Lahar Hujan', 'Gempa Vulkano-Tektonik'],
    relatedSites: ['Candi Borobudur', 'Candi Sambisari', 'Candi Prambanan'],
    summary: 'Bagaimana letusan dahsyat Gunung Merapi purba mengubur candi-candi megah di pedalaman Jawa Tengah sedalam bermeter-meter dan mengubah peta politik Jawa kuno dari Bhumi Mataram ke Lembah Brantas.',
    sections: [
      {
        heading: '1. Lembah Para Raja di Kaki Gunung Berapi',
        content: [
          'Pada kurun abad ke-8 hingga ke-10 Masehi, dataran Kedu dan Prambanan berkembang sebagai pusat peradaban agraris yang sangat makmur. Dinasti Sanjaya dan Syailendra mendirikan mahakarya arsitektur batu andesit: Candi Borobudur, Prambanan, Mendut, Sewu, hingga Sambisari. Namun kemakmuran tanah vulkanik yang subur menyimpan paradoks geologis: letak geografisnya persis berada di bawah bayang-bayang Gunung Merapi, salah satu gunung api teraktif di dunia.',
          'Catatan prasasti dan lapisan tanah memperlihatkan bahwa hubungan antara masyarakat Mataram Kuno dengan gunung bukan sekadar relasi religius kosmis (Mahameru), melainkan pertarungan terus-menerus melawan amuk lahar dan hujan abu vulkanik.'
        ],
        historicalQuote: {
          text: 'Pralaya ri Bhumi Jawa... guncangan tanah laksana gelombang samudra, kabut abu pekat menutup sang surya, dan sungai-sungai meluapkan pasir panas.',
          source: 'Fragmen interpretasi Prasasti Pucangan (1041 M) mengenai gejolak bencana di Jawa'
        }
      },
      {
        heading: '2. Kasus Candi Sambisari: 6,5 Meter di Bawah Permukaan Bumi',
        content: [
          'Bukti paling nyata dari kedahsyatan bencana vulkanik masa lalu adalah penemuan Candi Sambisari pada tahun 1966. Seorang petani di Desa Sambisari mencangkul tanah sawahnya dan membentur sebongkah batu andesit berukir. Setelah ekskavasi arkeologis berlangsung, dunia tercengang: sebuah kompleks candi Hindu abad ke-9 berdiri utuh di kedalaman 6,5 meter di bawah tanah!',
          'Analisis stratigrafi tanah membuktikan bahwa Candi Sambisari tidak runtuh perlahan oleh usia, melainkan terkubur secara katastropik oleh banjir lahar dingin dan material piroklastik Merapi purba sekitar awal abad ke-11. Lahar yang membawa pasir, kerikil, dan bongkah batu besar mengalir mengikuti alur sungai kuno, menenggelamkan kompleks pelataran candi secara bertahap namun mematikan.'
        ]
      },
      {
        heading: '3. Hipotesis Van Bemmelen dan Perpindahan Mpu Sindok ke Jawa Timur',
        content: [
          'Sejarawan dan geolog terkemuka R.W. van Bemmelen mengajukan teori bahwa letusan dahsyat Merapi pada tahun 1006 M memicu gempa bumi besar, merusak ratusan bangunan candi, menghancurkan jaringan irigasi sawah, dan memicu krisis pangan massal. Hal ini diduga menjadi pemicu utama Mpu Sindok memindahkan ibu kota Mataram Kuno dari Jawa Tengah ke Jawa Timur (Lembah Sungai Brantas) pada tahun 929 M.',
          'Walaupun sejarawan kontemporer melihat faktor perpindahan juga dipengaruhi dinamika politik dan jalur perdagangan maritim, aspek bencana ekologis tak terbantahkan sebagai faktor destabilisasi fundamental peradaban Mataram Kuno.'
        ]
      },
      {
        heading: '4. Pelajaran Mitigasi Cagar Budaya untuk Masa Kini',
        content: [
          'Kajian atas peristiwa ini memberikan protokol mitigasi penting bagi Balai Konservasi Borobudur dan Prambanan saat ini. Ketika Merapi meletus hebat pada 2010, tim konservator segera memasang penutup terpal anti-asam pada stupa Borobudur. Tindakan terencana ini menyelamatkan relief batu andesit berpori dari reaksi kimia berbahaya antara asam sulfat/klorida abu vulkanik dengan air hujan yang berpotensi memicu pelapukan cepat batuan pusaka bangsa.'
        ]
      }
    ],
    discussionQuestions: [
      'Mengapa masyarakat Jawa Kuno tetap memilih membangun monumen suci di dekat gunung api aktif meskipun mengetahui risiko letusannya?',
      'Bandingkan dampak erupsi Merapi purba terhadap Candi Sambisari dengan mitigasi yang dilakukan saat erupsi Merapi 2010 terhadap Candi Borobudur!',
      'Bagaimana perubahan lingkungan akibat abu vulkanik dapat melumpuhkan sendi-sendi sosial dan ekonomi suatu kerajaan besar?'
    ],
    references: [
      'Van Bemmelen, R.W. (1949). The Geology of Indonesia. The Hague: Government Printing Office.',
      'Boechari. (1976). Some Considerations on the Problem of the Shift of Mataram\'s Center of Government from Central to East Java. Jakarta: Lembaga Purbakala.',
      'Balai Konservasi Borobudur. (2011). Tanggap Darurat Erupsi Gunung Merapi 2010 terhadap Candi Borobudur. Magelang: Kementerian Pendidikan dan Kebudayaan.'
    ]
  },
  {
    id: 'sesar-opak-prambanan-2006',
    title: 'Goncangan Sesar Opak: Tragedi dan Kebangkitan Candi Prambanan',
    subtitle: 'Analisis Seismologi Gempa Yogyakarta 2006 dan Rekonstruksi Anastilosis Tahan Gempa',
    author: 'Shela Dwi Utari & Tim Ahli Konservasi Arkeologi',
    role: 'Peneliti Mitigasi Cagar Budaya',
    readTime: '7 menit',
    era: 'Mei 2006 s.d. Sekarang',
    relatedHazards: ['Gempa Tektonik Dangkal', 'Deformasi Sesar Aktif'],
    relatedSites: ['Candi Prambanan & Kompleks Roro Jonggrang'],
    summary: 'Bagaimana gempa dangkal Mw 6.3 pada 27 Mei 2006 mengguncang kompleks Candi Prambanan, meruntuhkan batu kemuncak ratna, serta memicu inovasi metode anastilosis dan perkuatan struktur seismik modern.',
    sections: [
      {
        heading: '1. Pagi Kelabu 27 Mei 2006 di Lembah Prambanan',
        content: [
          'Pukul 05.54 WIB, gempa bumi bermagnitudo Mw 6.3 mengguncang Yogyakarta dan Jawa Tengah. Dengan hiposentrum dangkal sekitar 10-12 km di dekat sesar aktif Sesar Opak, gempa ini menghasilkan percepatan tanah puncak (Peak Ground Acceleration) yang sangat merusak.',
          'Hanya dalam waktu kurang dari 60 detik, Kompleks Percandian Prambanan yang telah berdiri lebih dari seribu tahun mengalami kerusakan fisik terparah dalam sejarah modernnya. Candi Siwa setinggi 47 meter bergoyang keras, ratusan batu ratna kemuncak terlempar dari ketinggian, dan Candi Brahma serta Candi Wishnu mengalami keretakan vertikal yang mengancam keruntuhan total.'
        ],
        historicalQuote: {
          text: 'Suara gemuruh batu bertumbukan di udara terdengar mengerikan. Menara-menara kemuncak candi bergoyang kencang sebelum terlempar menghantam pelataran...',
          source: 'Laporan Saksi Mata Juru Pelihara Balai Pelestarian Peninggalan Purbakala Yogyakarta (2006)'
        }
      },
      {
        heading: '2. Karakteristik Konstruksi Kering (Dry Stone Masonry)',
        content: [
          'Untuk memahami mengapa Prambanan rentan sekaligus tangguh, kita perlu menelaah sistem konstruksi kuno. Candi-candi di Jawa tidak menggunakan semen atau spesi perekat modern. Blok-blok batu andesit dipahat dengan takik saling mengunci (knob and mortise / ekor burung).',
          'Sistem ini sesungguhnya memiliki keunggulan fleksibilitas alami: guncangan gempa diserap melalui gesekan mikro antar-batu (friction damping). Namun, karena bentuk menara Prambanan yang sangat ramping dan menjulang tinggi, momen inersia di bagian atas bangunan melampaui batas elastisitas gesek, mengakibatkan batu-batu puncak terlempar lepas.'
        ]
      },
      {
        heading: '3. Kebangkitan Ilmu Anastilosis dan Pemodelan 3D Laser',
        content: [
          'Pasca-gempa, UNESCO bersama Badan Pelestarian Cagar Budaya (BPCB) mengerahkan para ahli arkeologi, teknik sipil, dan geologi. Dilakukanlah proses anastilosis: teknik pembongkaran dan penataan ulang blok batu asli ke posisi semula dengan presisi milimeter.',
          'Sebelum disusun ulang, setiap batu didokumentasikan menggunakan Terrestrial Laser Scanner (TLS) 3D. Untuk mencegah keruntuhan serupa di masa depan, para insinyur memasukkan jangkar tak terlihat (concealed dynamic anchors) berbahan aramid fiber di titik-titik kritis tanpa mengubah keaslian estetika cagar budaya.'
        ]
      },
      {
        heading: '4. Sintaks Mitigasi Gempa untuk Generasi Masa Depan',
        content: [
          'Tragedi gempa 2006 menegaskan bahwa mitigasi cagar budaya harus menjadi bagian integral dari kurikulum pembelajaran sejarah. Peserta didik perlu diajak memahami bahwa pelestarian warisan bangsa bukan sekadar menghafal tahun berdirinya candi, melainkan menghargai sains rekayasa nenek moyang dalam merespons ketidakpastian alam Indonesia.'
        ]
      }
    ],
    discussionQuestions: [
      'Bagaimana sistem kuncian batu candi tanpa semen (dry stone) merespons gelombang gempa dibandingkan bangunan beton modern?',
      'Apa saja tantangan etis dan teknis dalam memadukan material modern (seperti serat aramid) ke dalam struktur cagar budaya kuno?',
      'Rancanglah sebuah rencana evakuasi darurat bagi pengunjung situs candi jika terjadi gempa bumi mendadak saat jam ramai wisatawan!'
    ],
    references: [
      'UNESCO. (2007). Post-Disaster Damage and Needs Assessment: Prambanan World Heritage Site. Paris & Jakarta.',
      'Subandrio, A., et al. (2008). Seismotectonic Analysis of the May 27, 2006 Yogyakarta Earthquake. Indonesian Journal of Geoscience.',
      'BPCB Jawa Tengah. (2015). Catatan Pemugaran Pasca Gempa 2006 Kompleks Candi Prambanan. Klaten: Kemendikbud.'
    ]
  },
  {
    id: 'tsunami-aceh-baiturrahman',
    title: 'Gelombang Samudra Hindia: Baiturrahman dan Simbol Resiliensi',
    subtitle: 'Arsitektur Ketahanan, Memori Kolektif Smong, dan Transformasi Situs Tsunami',
    author: 'Kajian Sejarah Maritim & Mitigasi Bencana',
    role: 'Pusat Dokumentasi Kebencanaan',
    readTime: '9 menit',
    era: '26 Desember 2004 s.d. Sekarang',
    relatedHazards: ['Gempa Megathrust', 'Tsunami Samudra', 'Salinitas & Korosi Garam'],
    relatedSites: ['Masjid Raya Baiturrahman & Situs Tsunami Aceh'],
    summary: 'Bagaimana Masjid Raya Baiturrahman dan kearifan lokal Smong Simeulue menjadi bukti nyata ketahanan arsitektur dan pengetahuan mitigasi tradisional menghadapi megathrust 2004.',
    sections: [
      {
        heading: '1. Gelombang Hitam 26 Desember 2004',
        content: [
          'Minggu pagi, 26 Desember 2004, gempa berkekuatan dahsyat Mw 9.1 terjadi di palung subduksi barat Sumatra. Sekitar 15 hingga 25 menit kemudian, gelombang tsunami setinggi lebih dari 15–30 meter menerjang pesisir Aceh, meratakan daratan sejauh beberapa kilometer dari garis pantai.',
          'Di tengah kehancuran total kota Banda Aceh, pemandangan udara yang disiarkan media internasional memperlihatkan satu keajaiban arsitektural: Masjid Raya Baiturrahman tetap berdiri kokoh dengan dinding putih dan kubah hitamnya, dikelilingi puing-puing bangunan modern yang hancur berkeping-keping.'
        ],
        historicalQuote: {
          text: 'Kami berlari ke dalam pelataran masjid saat air hitam pekat menderu. Di dalam masjid, ribuan orang bersujud bersama menanti air surut. Masjid ini telah menjadi bahtera penyelamat jiwa kami.',
          source: 'Kesaksian Penyintas Tsunami di Halaman Masjid Raya Baiturrahman (Desember 2004)'
        }
      },
      {
        heading: '2. Rahasia Struktural Ketahanan Arsitektur',
        content: [
          'Kajian teknik sipil forensik mengungkapkan bahwa bertahannya Masjid Baiturrahman didorong oleh beberapa faktor desain:',
          'Pertama, arsitektur masjid menggunakan sistem lengkungan terbuka (archways) dan pilar-pilar kokoh yang memungkinkan aliran hidrodinamis tsunami menerobos lewat tanpa menumpuk tekanan benturan frontal.',
          'Kedua, struktur fondasi dalam tertanam kuat pada lapisan tanah keras dasar, serta kualitas sambungan material kapur karang dan beton bertulang era 1881 yang dibuat dengan ketelitian tinggi.',
          'Ketiga, keberadaan pagar teras dan pelataran luas bertindak sebagai zona peredam energi kinetik air bah.'
        ]
      },
      {
        heading: '3. Kearifan Smong Simeulue: Sains Berbalut Tutur Lisan',
        content: [
          'Di saat ribuan korban berjatuhan di pesisir daratan utama Aceh karena ketidaktahuan tanda-tanda alam, masyarakat di Pulau Simeulue yang berjarak sangat dekat dengan pusat gempa hanya kehilangan segelintir jiwa. Rahasianya adalah kearifan lokal bernama "Smong".',
          'Smong adalah tradisi tutur turun-temurun sejak tsunami 1907: "Jika ada lindu kuat, dan air laut surut tiba-tiba, jangan mencari ikan, tetapi segera lari ke bukit yang tinggi!" Kearifan ini membuktikan bahwa sejarah dan mitigasi adalah dua sisi mata uang yang tak terpisahkan dalam kurikulum sekolah.'
        ]
      },
      {
        heading: '4. Transformasi Ruang: Dari Puing Menjadi Monumen Edukasi',
        content: [
          'Kini, situs-situs peninggalan tsunami seperti Kapal Apung PLTD di Punge Blang Cut, Kubah Al-Tsunami di Lamteungoh, dan Masjid Baiturrahman telah ditetapkan sebagai cagar budaya memori kebencanaan. Situs-situs ini menjadi laboratorium hidup bagi para pelajar untuk belajar tentang geodinamika bumi, resiliensi arsitektur, dan solidaritas kemanusiaan.'
        ]
      }
    ],
    discussionQuestions: [
      'Faktor arsitektural apa saja yang membuat Masjid Baiturrahman mampu menahan terjangan tsunami dibandingkan bangunan beton di sekitarnya?',
      'Bagaimana tradisi tutur lisan Smong di Simeulue dapat diadopsi menjadi metode pembelajaran sejarah yang kontekstual bagi generasi muda?',
      'Mengapa artefak bencana seperti Kapal PLTD Apung perlu dilindungi sebagai cagar budaya memori kebencanaan?'
    ],
    references: [
      'Sieh, K. (2006). Sumatran Megathrust Earthquakes: From Science to Saving Lives. Philosophical Transactions of the Royal Society.',
      'Syafwina. (2014). Recognizing Indigenous Knowledge for Disaster Risk Reduction: Smong in Simeulue Island. Procedia Environmental Sciences.',
      'Banda Aceh Heritage Conservation Council. (2019). Jejak Tsunami: Panduan Monumen dan Situs Memori Aceh.'
    ]
  },
  {
    id: 'krakatau-tambora-krisis-iklim',
    title: 'Tahun Tanpa Musim Panas: Tambora 1815 & Krakatau 1883',
    subtitle: 'Dampak Letusan Supervulkanik terhadap Ekologi, Arsip, dan Bangunan Bersejarah Nusantara',
    author: 'Kajian Sejarah Lingkungan & Iklim Masa Lalu',
    role: 'Peneliti Historiografi Ekologis',
    readTime: '8 menit',
    era: '1815 & 1883 M',
    relatedHazards: ['Letusan Supervulkanik', 'Krisis Iklim Global', 'Tsunami Selat Sunda'],
    relatedSites: ['Benteng Marlborough', 'Kawasan Kota Tua Jakarta & Sunda Kelapa'],
    summary: 'Mengeksplorasi bagaimana letusan Tambora 1815 dan Krakatau 1883 tidak hanya melenyapkan kerajaan-kerajaan lokal, melainkan mengubah iklim belahan bumi utara serta meninggalkan jejak erosi dan abu pada cagar budaya.',
    sections: [
      {
        heading: '1. Dentuman Tambora 1815: Runtuhnya Tiga Kerajaan Sumbawa',
        content: [
          'Pada April 1815, Gunung Tambora di Pulau Sumbawa meletus dengan Indeks Letusan Vulkanik (VEI) skala 7. Letusan ini mengeluarkan lebih dari 100 kilometer kubik magma dan memotong tinggi puncak gunung dari 4.300 mdpl menjadi tinggal 2.850 mdpl.',
          'Letusan ini seketika memusnahkan tiga kerajaan lokal: Kerajaan Tambora, Pekat, dan Sanggar. Seluruh istana kayu, perpustakaan naskah lontar kuno, dan pemukiman warga terkubur oleh aliran piroklastik panas tebal. Ekskavasi arkeologi modern kini menyebut situs pemukiman Tambora yang terkubur sebagai "Pompeii dari Timur".'
        ],
        historicalQuote: {
          text: 'Langit menggelap gulita di tengah siang selama tiga hari berturut-turut. Debu tebal menyelimuti atap hingga runtuh, daun-daun pohon terbakar oleh hujan belerang, dan laut berbusa dipenuhi batu apung raksasa...',
          source: 'Thomas Stamford Raffles, The History of Java (1817) mengutip laporan saksi letusan Tambora'
        }
      },
      {
        heading: '2. Dampak Global: Tahun Tanpa Musim Panas 1816',
        content: [
          'Gas sulfur dioksida yang disuntikkan ke stratosfer membentuk selimut aerosol sulfat yang memantulkan radiasi matahari. Akibatnya, tahun 1816 dikenal di seluruh dunia sebagai "Year Without a Summer" (Tahun Tanpa Musim Panas).',
          'Salju turun di bulan Juli di New England, panen gandum gagal massal di Eropa dan Tiongkok memicu kelaparan besar, dan badai salju tak terduga menginspirasi Mary Shelley menulis novel legendaris Frankenstein. Ini membuktikan bahwa peristiwa geologis di sebuah pulau di Nusantara mampu mengubah jalannya peradaban dunia.'
        ]
      },
      {
        heading: '3. Krakatau 1883 dan Hancurnya Pesisir Banten-Lampung',
        content: [
          'Enam puluh delapan tahun kemudian, pada 27 Agustus 1883, Gunung Krakatau di Selat Sunda meletus dengan kekuatan yang setara 200 megaton TNT. Gelombang tsunami setinggi 36 meter menyapu pesisir Anyer, Merak, hingga Kalianda.',
          'Benda-benda cagar budaya pesisir, mercusuar kolonial, hingga pelabuhan transit luluh lantak. Gelombang kejut atmosferik mengitari bumi hingga 7 kali dan dicatat oleh barometer di seluruh dunia. Di Batavia (Kota Tua Jakarta), langit tertutup debu abu-abu pekat selama berminggu-minggu, memperparah polusi kanal dan merusak fasad bangunan kolonial.'
        ]
      },
      {
        heading: '4. Relevansi bagi Pembelajaran Mitigasi Hari Ini',
        content: [
          'Mempelajari Tambora dan Krakatau membuka wawasan peserta didik bahwa kepulauan Indonesia berada di panggung geologi paling dinamis di muka bumi. Pelestarian cagar budaya tidak bisa dilepaskan dari pemantauan aktivitas vulkanik modern dan kesiapan menghadapi skenario bencana berskala megakatastropik.'
        ]
      }
    ],
    discussionQuestions: [
      'Mengapa situs pemukiman Kerajaan Tambora sering dijuluki oleh para arkeolog sebagai "Pompeii dari Timur"?',
      'Bagaimana letusan gunung api di Indonesia pada abad ke-19 dapat memicu krisis sosial, pangan, dan sastra di benua Eropa dan Amerika?',
      'Identifikasi langkah mitigasi apa yang harus dipersiapkan pengelola museum untuk melindungi naskah kertas dan manuskrip kuno dari bahaya abu vulkanik asam dan kelembapan ekstrem!'
    ],
    references: [
      'Oppenheimer, C. (2003). Climatic, Environmental and Human Consequences of the Largest Known Historic Eruption: Tambora 1815. Progress in Physical Geography.',
      'Winchester, S. (2003). Krakatoa: The Day the World Exploded, August 27, 1883. New York: HarperCollins.',
      'Raffles, T. S. (1817). The History of Java. London: Black, Parbury, and Allen.'
    ]
  },
  {
    id: 'kanal-batavia-dan-banjir-ciliwung',
    title: 'Kutukan Air Batavia: Kegagalan Kanal dan Pelapukan Kota Tua',
    subtitle: 'Ekologi Politik Air Hindia Belanda, Deforestasi Puncak, dan Ancaman Tenggelamnya Warisan Kolonial',
    author: 'Departemen Sejarah Perkotaan & Konservasi Arsitektur',
    role: 'Pakar Konservasi Kota Bersejarah',
    readTime: '7 menit',
    era: 'Abad ke-17 s.d. Abad ke-21',
    relatedHazards: ['Banjir Luapan Sungai', 'Penurunan Muka Tanah (Land Subsidence)', 'Banjir Rob Pasang Laut'],
    relatedSites: ['Kawasan Kota Tua Jakarta & Sunda Kelapa'],
    summary: 'Bagaimana ambisi VOC menduplikasi kanal Amsterdam di muara tropis Sungai Ciliwung berujung pada bencana ekologis berkepanjangan, lumpur banjir, dan ancaman pelapukan abadi cagar budaya Kota Tua Jakarta.',
    sections: [
      {
        heading: '1. Konsep Ruang Keliru: Memaksakan Amsterdam di Daerah Tropis',
        content: [
          'Ketika Jan Pieterszoon Coen menaklukkan Jayakarta pada tahun 1619 dan mendirikan Batavia, para insinyur VOC membawa cetak biru tanah air mereka: jaringan kanal-kanal lurus yang dikelilingi benteng pertahanan. Mereka membayangkan Batavia sebagai permata timur yang menyerupai kota Amsterdam.',
          'Namun iklim Belanda yang dingin dan bermusim teratur sangat berbeda dengan wilayah tropis Batavia yang dipengaruhi musim hujan monsun ekstrem dan aliran sedimen masif dari hulu Sungai Ciliwung di Pegunungan Megamendung.'
        ],
        historicalQuote: {
          text: 'Kanal-kanal Batavia tidak lagi mengalirkan air jernih, melainkan lumpur hitam berbau busuk. Rumah-rumah mewah di tepi kali menjadi kuburan bagi para pedagang yang terserang demam rawa berdarah...',
          source: 'Catatan Perjalanan Pelaut Swedia Carl Peter Thunberg di Batavia (1775)'
        }
      },
      {
        heading: '2. Deforestasi Hulu dan Lumpur Sedimentasi',
        content: [
          'Pada akhir abad ke-17, VOC membuka perkebunan tebu dan kayu bakar secara besar-besaran di pedalaman hulu Ciliwung (Buitenzorg / Bogor). Akibat hilangnya tutupan hutan, setiap musim hujan jutaan ton lumpur tererosi dan menyumbat kanal-kanal Batavia.',
          'Gempa bumi Gunung Salak pada tahun 1699 memperparah situasi: longsoran besar di hulu menggelontorkan sedimen pasir dan lumpur pekat ke muara, membuat kanal Batavia dangkal total. Air tergenang, nyamuk malaria berkembang biak, dan kota yang dijuluki "Keluarga Mahkota Asia" berubah nama menjadi "Graf der Hollanders" (Kuburan Orang Belanda).'
        ]
      },
      {
        heading: '3. Ancaman Modern: Penurunan Muka Tanah dan Banjir Rob',
        content: [
          'Kini, kawasan cagar budaya Kota Tua Jakarta menghadapi krisis baru yang jauh lebih berbahaya: penurunan muka tanah (land subsidence) hingga 5–10 cm per tahun akibat ekstraksi air tanah masif serta kenaikan air laut global.',
          'Gedung-gedung bersejarah seperti Museum Sejarah Jakarta (Stadhuis), Museum Seni Rupa dan Keramik, serta gudang rempah VOC di Museum Bahari terus terancam oleh rembesan air asin yang memicu fenomena kristalisasi garam dan pelapukan struktur kayu jati serta bata purba.'
        ]
      },
      {
        heading: '4. Pelajaran Tata Kelola Warisan Budaya Berkelanjutan',
        content: [
          'Sejarah banjir Batavia mengajarkan peserta didik bahwa pelestarian cagar budaya tidak bisa dipisahkan dari tata ruang ekologis hulu-hilir (DAS). Melindungi Kota Tua Jakarta bukan sekadar merestorasi cat dinding museum, tetapi menata kembali Daerah Aliran Sungai Ciliwung dan menghentikan eksploitasi air tanah demi warisan anak cucu.'
        ]
      }
    ],
    discussionQuestions: [
      'Mengapa konsep kanal terbuka ala Amsterdam gagal berfungsi secara ekologis saat diterapkan di muara tropis Batavia?',
      'Bagaimana korelasi antara alih fungsi lahan hutan di hulu Bogor dengan kerusakan fisik bangunan bersejarah di muara Jakarta?',
      'Diskusikan solusi inovatif teknik sipil dan kebijakan publik untuk menyelamatkan kawasan cagar budaya Kota Tua dari ancaman subsidensi tanah dan banjir rob!'
    ],
    references: [
      'Blussé, L. (1986). Strange Company: Chinese Settlers, Mestizo Women and the Dutch in VOC Batavia. Dordrecht: Foris Publications.',
      'Abeyasekere, S. (1989). Jakarta: A History. Singapore: Oxford University Press.',
      'Badan Pelestarian Cagar Budaya DKI Jakarta. (2020). Studi Penyelamatan Fisik Bangunan Kolonial Kawasan Kota Tua terhadap Ancaman Land Subsidence.'
    ]
  },
  {
    id: 'sistem-hidrolika-trowulan-majapahit',
    title: 'Kearifan Air Majapahit: Kanal, Waduk, dan Mitigasi Banjir Purba',
    subtitle: 'Arkeologi Lanskap Trowulan Menghadapi Amuk Lahar Brantas dan Air Limpasan Tropis',
    author: 'Tim Arkeologi Lanskap & Geografi Sejarah',
    role: 'Pusat Riset Peradaban Majapahit',
    readTime: '8 menit',
    era: 'Abad ke-13 s.d. 15 M',
    relatedHazards: ['Banjir Aluvial Kali Brantas', 'Sedimentasi Laharik', 'Degradasi Bata Merah'],
    relatedSites: ['Kawasan Cagar Budaya Trowulan (Ibu Kota Majapahit)'],
    summary: 'Bagaimana arsitek dan perencana kota Majapahit mendesain jaringan kanal, kolam retensi raksasa Kolam Segaran, dan Candi Tikus untuk mengendalikan banjir bandang sekaligus menyimpan air irigasi di ibu kota metropolitan abad ke-14.',
    sections: [
      {
        heading: '1. Metropolitan Trowulan dan Ancaman Banjir Brantas',
        content: [
          'Ibu kota Kemaharajaan Majapahit di Trowulan, Jawa Timur, diperkirakan dihuni oleh lebih dari ratusan ribu penduduk pada masa kejayaannya. Terletak di dataran aluvial antara lereng Gunung Anjasmoro-Welirang di selatan dan cekungan Sungai Brantas di utara, wilayah ini sangat rentan menerima gelontoran banjir lahar dingin dan air limpasan hujan ekstrem.',
          'Nenek moyang Majapahit tidak melarikan diri dari air, melainkan menundukkan dan memanfaatkannya melalui rekayasa hidrolika yang sangat brilian.'
        ],
        historicalQuote: {
          text: 'Kanal-kanal membelah kota dengan airnya yang bening mengalir menuju danau buatan tempat perahu-perahu berkilau laksana cermin surga...',
          source: 'Petikan Kakawin Nagarakretagama (Desawarnana) pupuh VIII gubahan Mpu Prapanca (1365 M)'
        }
      },
      {
        heading: '2. Kolam Segaran: Danau Buatan Multifungsi',
        content: [
          'Monumen mitigasi air terbesar di Trowulan adalah Kolam Segaran, kolam buatan raksasa seluas 6,5 hektar berukuran 375 x 175 meter yang dikelilingi dinding bata merah setebal 1,6 meter. Kolam ini berfungsi sebagai waduk retensi (retarding basin) penampung luapan air dari hulu.',
          'Pada musim penghujan, jutaan liter air bah ditampung di Segaran untuk mencegah banjir menggenangi kawasan pemukiman istana dan perwara candi. Sebaliknya pada musim kemarau panjang, air kolam dialirkan secara terukur melalui kanal-kanal bata bawah tanah untuk mengairi persawahan padi.'
        ]
      },
      {
        heading: '3. Misteri Candi Tikus: Laboratorium Hidrologi Bawah Tanah',
        content: [
          'Peninggalan lain yang menakjubkan adalah Candi Tikus, sebuah bangunan petirtaan yang sengaja dibangun 3,5 meter di bawah permukaan tanah. Di sekeliling kolam terdapat 46 pancuran air (jaladwara) berbahan terakota dan batu andesit.',
          'Candi Tikus berfungsi ganda: sebagai tempat peribadatan penyucian air suci amertha sekaligus instrumen pemantauan ketinggian muka air tanah (piezometer purba). Jika air di kolam naik melampaui batas ambang tertentu, petugas pengairan kota segera membuka saluran pembuangan menuju kanal utama.'
        ]
      },
      {
        heading: '4. Tantangan Konservasi Masa Kini',
        content: [
          'Sayangnya, modernisasi dan alih fungsi lahan menjadi pabrik pembuatan batu bata modern di Trowulan telah memutus banyak jaringan kanal purba. Hal ini mengakibatkan genangan air hujan mudah merendam situs-situs bersejarah seperti Candi Bajang Ratu dan Candi Brahu, memicu kelembapan yang melarutkan garam dan merapuhkan bata merah berharga tersebut.'
        ]
      }
    ],
    discussionQuestions: [
      'Bagaimana arsitek Majapahit memanfaatkan prinsip kolam retensi (Kolam Segaran) untuk memitigasi bencana banjir sekaligus mengatasi kekeringan?',
      'Bandingkan sistem tata air terencana Majapahit di Trowulan dengan kegagalan sistem kanal VOC di Batavia!',
      'Apa yang dapat kita pelajari dari teknik hidrolika kuno Trowulan untuk memecahkan problem banjir perkotaan di Indonesia hari ini?'
    ],
    references: [
      'Gomperts, A., Haag, A., & Carey, P. (2010). The Architecture of the Majapahit Kingdom: Water Management and Monumental Layout in Trowulan. Archipel.',
      'Mundardjito. (1993). Pertimbangan Ekologi dalam Penempatan Situs Masa Hindu-Buda di Daerah Yogyakarta dan Jawa Timur. Depok: Universitas Indonesia.',
      'Balai Pelestarian Kebudayaan Wilayah XI. (2022). Atlas Arkeologi Lanskap Kawasan Percandian Trowulan.'
    ]
  }
];
