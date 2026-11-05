export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  syntaxStep: string;
}

export interface GlossaryItem {
  term: string;
  category: 'Arkeologi & Konservasi' | 'Geologi & Bencana' | 'Pedagogi Sejarah' | 'Kearifan Lokal';
  definition: string;
  exampleContext: string;
}

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: 'Anastilosis',
    category: 'Arkeologi & Konservasi',
    definition: 'Teknik rekonstruksi atau pemugaran monumen bersejarah dengan membongkar dan menyusun kembali elemen batu asli ke posisi semula dengan intervensi material modern seminimal mungkin.',
    exampleContext: 'Diterapkan secara intensif pasca-gempa Yogyakarta 2006 di Kompleks Candi Prambanan untuk mengembalikan balok batu ratna.'
  },
  {
    term: 'Tefra (Abu Vulkanik)',
    category: 'Geologi & Bencana',
    definition: 'Fragmen batuan dan partikel mineral halus yang dikeluarkan oleh ventilasi vulkanik saat erupsi eksplosif, seringkali memiliki tingkat keasaman tinggi (pH 3–4).',
    exampleContext: 'Menyelimuti stupa Candi Borobudur saat letusan Merapi 2010 dan berisiko merusak batuan andesit berpori.'
  },
  {
    term: 'Sesar Opak (Opak Fault)',
    category: 'Geologi & Bencana',
    definition: 'Zona patahan tektonik aktif di Daerah Istimewa Yogyakarta yang berarah timur laut–barat daya di sepanjang lembah Sungai Opak.',
    exampleContext: 'Pemicu utama gempa bumi dangkal Mw 6.3 pada 27 Mei 2006 yang merusak Candi Prambanan.'
  },
  {
    term: 'Smong',
    category: 'Kearifan Lokal',
    definition: 'Kearifan lokal masyarakat Pulau Simeulue, Aceh, berupa tuturan lisan mengenai tanda-tanda alam tsunami setelah gempa bumi besar dan keharusan segera lari ke tempat tinggi.',
    exampleContext: 'Menyelamatkan ribuan warga Simeulue pada bencana megathrust 26 Desember 2004.'
  },
  {
    term: 'Dry Stone Masonry (Konstruksi Batu Kering)',
    category: 'Arkeologi & Konservasi',
    definition: 'Teknik pembangunan dinding atau bangunan batu tanpa menggunakan spesi semen perekat, mengandalkan presisi potongan dan gaya gesek antarbatu.',
    exampleContext: 'Karakteristik utama candi-candi di Jawa yang memiliki fleksibilitas alami terhadap guncangan seismik mikro.'
  },
  {
    term: 'Land Subsidence (Penurunan Muka Tanah)',
    category: 'Geologi & Bencana',
    definition: 'Penurunan elevasi permukaan tanah akibat pemadatan lapisan sedimen aluvial, ekstraksi air tanah berlebih, dan beban struktur kota modern.',
    exampleContext: 'Mengancam stabilitas fondasi bangunan bersejarah di Kawasan Kota Tua Jakarta dan Pelabuhan Sunda Kelapa.'
  },
  {
    term: 'Historiografi Kritis',
    category: 'Pedagogi Sejarah',
    definition: 'Metode penulisan dan rekonstruksi peristiwa sejarah dengan menguji kebenaran sumber primer, menganalisis faktor lingkungan, dan menghindari narasi tunggal.',
    exampleContext: 'Ditekankan pada sintaks ke-4 model pembelajaran MICAYA (Membuat produk historiografi sederhana).'
  },
  {
    term: 'Haloklasti (Haloclasty)',
    category: 'Arkeologi & Konservasi',
    definition: 'Bentuk pelapukan fisik pada batu atau bata purba yang disebabkan oleh kristalisasi garam terlarut di dalam pori-pori batuan saat air menguap.',
    exampleContext: 'Terjadi pada bata Candi Muaro Jambi dan fasad batu karang Benteng Marlborough akibat paparan air banjir dan garam laut.'
  },
  {
    term: 'Jaladwara',
    category: 'Arkeologi & Konservasi',
    definition: 'Saluran pancuran air kuno berukir kepala makara atau hewan mitologis pada dinding candi untuk mengalirkan air hujan keluar dari lantai pelataran.',
    exampleContext: 'Berfungsi sebagai sistem drainase mitigasi banjir pada Candi Borobudur dan Candi Sambisari.'
  },
  {
    term: 'Piezometer',
    category: 'Geologi & Bencana',
    definition: 'Instrumen atau sumur pantau yang digunakan untuk mengukur tekanan hidrolik dan kedalaman muka air tanah di bawah suatu situs.',
    exampleContext: 'Dipasang di sekeliling cekungan galian Candi Sambisari untuk memantau ancaman rembesan air tanah berlebih.'
  },
  {
    term: 'Kolam Retensi Segaran',
    category: 'Kearifan Lokal',
    definition: 'Waduk buatan zaman Majapahit seluas 6,5 hektar di Trowulan yang dirancang leluhur untuk menampung limpasan air banjir sekaligus cadangan air irigasi.',
    exampleContext: 'Bukti teknologi tata air hidrolika mitigasi bencana air masa klasik abad ke-14.'
  },
  {
    term: 'Konsolidasi Batuan (Consolidation)',
    category: 'Arkeologi & Konservasi',
    definition: 'Aplikasi bahan kimia pengikat (seperti ester etil silikat) ke dalam batuan rapuh untuk mengembalikan kekuatan kohesi partikel mineral tanpa menutup pori alami.',
    exampleContext: 'Digunakan untuk memperkuat relief stupa Candi Muara Takus dan batuan candi yang mengalami pelapukan kimiawi.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Mengapa abu vulkanik erupsi Gunung Merapi tahun 2010 sangat membahayakan batu andesit pada Candi Borobudur jika tidak segera dimitigasi?',
    context: 'Erupsi Merapi 2010 menyemburkan abu tefra yang menyelimuti seluruh pelataran Candi Borobudur hingga ketebalan 2,5 cm.',
    options: [
      'Abu vulkanik bersuhu panas lebih dari 600°C yang melelehkan batuan candi seketika',
      'Abu vulkanik mengandung senyawa sulfur dan klorida yang bersifat asam (pH 3,5–4) dan memicu korosi mineral andesit jika bercampur air hujan',
      'Abu vulkanik menarik kawanan serangga pemakan batuan andesit purba',
      'Abu vulkanik menambah beban candi hingga fondasi amblas lebih dari 10 meter'
    ],
    correctIndex: 1,
    explanation: 'Abu tefra vulkanik Merapi memiliki sifat asam yang tajam. Saat terkena air hujan, ia membentuk asam sulfat/klorida encer yang mampu melarutkan mineral feldspar dan kalsit pada batu andesit berpori, mengakibatkan relief rapuh dan berpori membesar.',
    syntaxStep: 'Tahap 2: Membaca & Analisis Fakta'
  },
  {
    id: 2,
    question: 'Pada 27 Mei 2006, gempa Yogyakarta menyebabkan batu kemuncak (ratna) Candi Prambanan terlempar jatuh. Fenomena struktural apa yang menyebabkannya?',
    context: 'Candi Prambanan setinggi 47 meter dibangun dengan sistem dry stone masonry (batu tumpuk bertakik tanpa semen perekat).',
    options: [
      'Fondasi candi tidak tertanam di tanah melainkan hanya diletakkan di atas pasir apung',
      'Bentuk menara yang ramping dan tinggi memperbesar momen inersia ayunan di bagian puncak melebihi batas elastisitas gesek kuncian batu',
      'Batu andesit yang digunakan adalah batu palsu yang mudah lapuk terkena panas matahari',
      'Pemerintah Hindia Belanda sengaja melepas baut penyambung besi antar-batu'
    ],
    correctIndex: 1,
    explanation: 'Pada bangunan tinggi ramping tanpa semen spesi elastis, percepatan getaran tanah gempa dangkal menghasilkan goyangan inersia paling kuat di puncak menara, sehingga batu ratna puncak mengalami gaya lentur dan sentrifugal yang melemparkannya dari struktur.',
    syntaxStep: 'Tahap 3: Mengontekstualisasi'
  },
  {
    id: 3,
    question: 'Di bawah ini, manakah yang merupakan tindakan mitigasi PREVENTIF (Pra-Bencana) yang tepat untuk melindungi candi dari abu letusan gunung berapi?',
    context: 'Balai Konservasi Borobudur memiliki Prosedur Operasional Standar (SOP) saat status gunung api meningkat menjadi Siaga.',
    options: [
      'Menyemprotkan air bertekanan tinggi (water cannon) ke seluruh relief saat abu masih turun',
      'Memasang terpal pelindung tahan asam (tarpaulin covers) pada stupa dan menutup saluran drainase kuno (jaladwara)',
      'Mengganti seluruh batu andesit dengan batu granit buatan pabrik',
      'Membakar dupa di sekeliling candi untuk menolak arah angin pembawa debu'
    ],
    correctIndex: 1,
    explanation: 'Pemasangan terpal pelindung khusus adalah langkah preventif utama untuk mencegah abu menempel langsung pada permukaan relief berpori dan mencegah abu masuk menyumbat sistem saluran air kuno.',
    syntaxStep: 'Tahap 3 & 4: Solusi Mitigasi'
  },
  {
    id: 4,
    question: 'Tradisi tutur lisan "Smong" di Pulau Simeulue terbukti menyelamatkan ribuan nyawa saat tsunami 2004. Apa inti pesan mitigasi dari Smong?',
    context: 'Kearifan lokal masyarakat kepulauan barat Sumatra yang diwariskan turun-temurun sejak tragedi tsunami 1907.',
    options: [
      'Jika laut surut tiba-tiba setelah gempa kuat, segera berlari ke tempat yang tinggi (perbukitan) tanpa menunggu air datang',
      'Jika terjadi gempa, segera menuju pantai untuk menangkap ikan yang terdampar di pasir kering',
      'Membangun rumah di tepi laut dengan dinding semen yang tebal tanpa jendela',
      'Menyelam ke dasar laut agar terhindar dari hempasan ombak permukaan'
    ],
    correctIndex: 0,
    explanation: 'Syair Smong berpesan bahwa surutnya air laut secara mendadak pasca-lindu (gempa kuat) adalah pertanda gelombang raksasa akan datang, sehingga masyarakat wajib segera lari ke tempat tinggi.',
    syntaxStep: 'Tahap 1 & 2: Kearifan Sejarah'
  },
  {
    id: 5,
    question: 'Mengapa Candi Sambisari ditemukan pada tahun 1966 terkubur sedalam 6,5 meter di bawah permukaan sawah?',
    context: 'Candi Hindu abad ke-9 di Kalasan, Sleman ini hilang dari catatan sejarah selama seribu tahun.',
    options: [
      'Penduduk masa lampau sengaja menimbun candi karena takut dirusak oleh penjajah Eropa',
      'Terjadinya proses sedimentasi aluvial banjir lahar dingin dan material vulkanik Gunung Merapi purba abad ke-11',
      'Tanah di sekeliling candi mengalami pengangkatan tektonik setinggi 10 meter dalam sehari',
      'Akibat penggalian parit pertahanan perang Diponegoro'
    ],
    correctIndex: 1,
    explanation: 'Analisis lapisan tanah stratigrafi membuktikan Candi Sambisari terkubur oleh aliran lahar hujan dan endapan tefra banjir lahar Merapi purba berulang kali sejak abad ke-11 M.',
    syntaxStep: 'Tahap 2: Menelaah Sumber Sejarah'
  },
  {
    id: 6,
    question: 'Dalam Model Pembelajaran MICAYA, apa yang dilakukan peserta didik pada tahap "Mengontekstualisasi"?',
    context: 'Sesuai dengan Tabel 2 Sintaks Model Pembelajaran Micaya oleh Shela Dwi Utari.',
    options: [
      'Menghafalkan tahun-tahun letusan gunung api tanpa mengaitkannya dengan situs',
      'Menghubungkan peristiwa sejarah kebencanaan dengan fenomena kontemporer serta menganalisis keterkaitan perubahan lingkungan, risiko bencana, dan pelestarian cagar budaya',
      'Membeli tiket masuk ke museum cagar budaya secara mandiri',
      'Menggambar logo sekolah di atas foto candi yang rusak'
    ],
    correctIndex: 1,
    explanation: 'Pada tahap Mengontekstualisasi, peserta didik bertugas menghubungkan peristiwa sejarah masa lalu dengan fenomena kontemporer serta menganalisis keterkaitan antara perubahan lingkungan, risiko bencana, dan pelestarian cagar budaya.',
    syntaxStep: 'Tahap 3: Mengontekstualisasi'
  },
  {
    id: 7,
    question: 'Fasilitas hidrolika kuno peninggalan Kerajaan Majapahit yang berfungsi sebagai danau retensi pengendali banjir di Trowulan adalah...',
    context: 'Arsitektur lanskap kota kuno abad ke-14 di Mojokerto, Jawa Timur.',
    options: [
      'Kolam Segaran seluas 6,5 hektar dengan dinding bata tebal',
      'Kanal Amsterdam Batavia',
      'Waduk Jatiluhur Jawa Barat',
      'Parit Benteng Marlborough'
    ],
    correctIndex: 0,
    explanation: 'Kolam Segaran adalah waduk buatan purba seluas 6,5 hektar yang dirancang insinyur Majapahit untuk menampung limpasan air hujan tropis dan mencegah banjir melanda kawasan perumahan istana kota metropolitan Trowulan.',
    syntaxStep: 'Tahap 2: Membaca Bahan Ajar'
  },
  {
    id: 8,
    question: 'Apa ancaman degradasi lingkungan utama yang dihadapi oleh cagar budaya Kompleks Percandian Muaro Jambi?',
    context: 'Kawasan percandian bata merah terluas di Asia Tenggara yang terletak di tepian Sungai Batanghari.',
    options: [
      'Suhu udara dingin membeku di bawah 0°C (frost)',
      'Banjir luapan musiman Sungai Batanghari dan pelapukan kelembapan tinggi yang menumbuhkan lumut pemakan mineral bata merah',
      'Hantaman badai tornado gurun pasir',
      'Erupsi gunung es di Selat Malaka'
    ],
    correctIndex: 1,
    explanation: 'Muaro Jambi dibangun dari bata merah tanpa semen di bantaran Sungai Batanghari. Banjir musiman dan kelembapan ekstrem memicu pelarutan kristal garam (haloklasti) serta perkembangbiakan lumut dan mikroorganisme pada bata.',
    syntaxStep: 'Tahap 2 & 3: Analisis Risiko'
  },
  {
    id: 9,
    question: 'Berdasarkan sintaks ke-4 model MICAYA ("Membuat"), produk apa yang diharapkan disusun secara kolaboratif oleh peserta didik?',
    context: 'Tahap pembuktian kompetensi analitis dan kreativitas peserta didik.',
    options: [
      'Membeli miniatur candi dari toko suvenir terdekat',
      'Mengembangkan historiografi sederhana (esai/artikel/infografis) yang memuat interpretasi historis dan alternatif solusi mitigasi bencana',
      'Membuat puisi bebas tanpa ada kaitan dengan sejarah kebencanaan',
      'Menulis laporan absensi harian kelas'
    ],
    correctIndex: 1,
    explanation: 'Pada tahap Membuat, peserta didik menyusun karya kolaboratif dengan mengembangkan historiografi sederhana yang memuat interpretasi historis dan alternatif solusi terhadap persoalan kebencanaan.',
    syntaxStep: 'Tahap 4: Membuat'
  },
  {
    id: 10,
    question: 'Mengapa kawasan Kota Tua Jakarta kini mengalami ancaman banjir rob yang semakin parah dibandingkan era VOC abad ke-17?',
    context: 'Studi penurunan tanah dan geomorfologi pesisir Teluk Jakarta.',
    options: [
      'Karena seluruh kapal pinisi tradisional sengaja ditenggelamkan di muara',
      'Adanya fenomena penurunan muka tanah (land subsidence) masif akibat ekstraksi air tanah dan beban infrastruktur berpadu dengan kenaikan muka air laut global',
      'Karena laut Jawa berpindah tempat ke pedalaman Bogor',
      'Karena Sungai Ciliwung ditutup total oleh pemerintah Belanda'
    ],
    correctIndex: 1,
    explanation: 'Penurunan muka tanah (land subsidence) hingga 5–10 cm per tahun di pesisir Jakarta dan kenaikan muka air laut global membuat elevasi bangunan Kota Tua lebih rendah dari permukaan pasang air laut.',
    syntaxStep: 'Tahap 3: Mengontekstualisasi'
  }
];

export const TEACHER_GUIDE = {
  fase: 'Fase E (Kelas X) & Fase F (Kelas XI/XII)',
  capaianPembelajaran: 'Peserta didik mampu memahami konsep dasar ilmu sejarah, menganalisis hubungan sebab-akibat peristiwa sejarah dengan kondisi lingkungan dan kebencanaan di Indonesia, serta merumuskan gagasan solutif dalam melestarikan cagar budaya bangsa.',
  alokasiWaktu: '2 Pertemuan x 2 Jam Pelajaran (4 x 45 Menit)',
  profilPelajarPancasila: [
    'Bernalar Kritis: Menganalisis keterkaitan kausalitas sejarah bencana dan kerusakan material cagar budaya.',
    'Gotong Royong: Bekerja sama dalam kelompok menyusun karya historiografi dan peta mitigasi.',
    'Kreatif: Menghasilkan alternatif solusi pelestarian dalam bentuk infografis atau esai populer.',
    'Berkebinekaan Global & Kepedulian Lingkungan: Menghargai warisan pusaka bangsa serta sadar akan kondisi geologis Indonesia.'
  ]
};
