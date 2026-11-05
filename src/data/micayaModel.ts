export interface MicayaSyntaxStep {
  stepNumber: number;
  stepName: string;
  tagline: string;
  iconName: string;
  teacherActivities: string[];
  studentActivities: string[];
  pedagogicalRationale: string;
  expectedOutput: string;
  timeAllocationMinutes: number;
}

export interface ScenarioTemplate {
  heritageSiteId: string;
  heritageSiteName: string;
  coreHazard: string;
  drivingQuestion: string;
  stepDetails: {
    [key: number]: {
      teacherPrompt: string;
      studentTask: string;
      suggestedMedia: string;
    };
  };
}

export const MICAYA_MODEL_INFO = {
  acronym: 'MICAYA',
  fullName: 'Model Pembelajaran Mitigasi Cagar Budaya',
  researchTitle: 'Pengembangan Model Pembelajaran Mitigasi Cagar Budaya (MICAYA) pada Pembelajaran Sejarah',
  author: 'Shela Dwi Utari',
  tableReference: 'Tabel 2. Sintaks Model Pembelajaran Micaya',
  sourceImage: './assets/aistudio/image_f3ec30a9.png',
  conceptualDefinition: 'MICAYA adalah model pembelajaran sejarah inovatif yang mengintegrasikan kajian historiografi kritis kebencanaan dan perubahan lingkungan dengan upaya pelestarian serta mitigasi struktural dan non-struktural pada cagar budaya di Indonesia.',
  philosophicalBase: [
    'Konstruktivisme Sosial: Peserta didik mengkonstruksi pengetahuan sejarah kebencanaan melalui dialog kolaboratif dan telaah sumber kritis.',
    'Pedagogi Kritis Lingkungan (Eco-pedagogy): Menumbuhkan kesadaran ekologis dan kerentanan geologis Indonesia sebagai bagian dari jati diri kebangsaan.',
    'Pembelajaran Berbasis Kontekstual (CTL): Menghubungkan peristiwa masa lalu (letusan, gempa purba) dengan fenomena masa kini dan solusi pelestarian nyata.'
  ]
};

export const MICAYA_SYNTAX: MicayaSyntaxStep[] = [
  {
    stepNumber: 1,
    stepName: 'Orientasi',
    tagline: 'Membangun Relevansi & Menyalakan Pemantik Keingintahuan',
    iconName: 'Compass',
    teacherActivities: [
      'Menjelaskan urgensi dan relevansi materi sejarah kebencanaan dengan kehidupan peserta didik.',
      'Mengajukan pertanyaan pemantik mengenai satu atau beberapa peristiwa sejarah yang terdapat dalam buku teks atau modul pembelajaran.',
      'Mengarahkan peserta didik untuk mengidentifikasi cara memperoleh informasi dan menjelaskan proses terjadinya peristiwa tersebut.'
    ],
    studentActivities: [
      'Merespons dan mengembangkan pertanyaan berdasarkan permasalahan yang disampaikan guru.',
      'Mengidentifikasi peristiwa sejarah melalui penelusuran informasi dalam buku teks dan modul pembelajaran.'
    ],
    pedagogicalRationale: 'Menumbuhkan kesadaran awal peserta didik bahwa bencana alam bukan sekadar takdir acak, melainkan peristiwa berulang dalam sejarah geologi Nusantara yang membentuk pola peradaban dan tantangan kelestarian cagar budaya.',
    expectedOutput: 'Daftar pertanyaan kritis peserta didik mengenai hubungan antara letak situs bersejarah dan potensi ancaman alam di sekitarnya.',
    timeAllocationMinutes: 15
  },
  {
    stepNumber: 2,
    stepName: 'Membaca',
    tagline: 'Eksplorasi Sumber & Telaah Historiografi Kritis',
    iconName: 'BookOpen',
    teacherActivities: [
      'Merumuskan pertanyaan analitis dan mengarahkan pembentukan kelompok kecil.',
      'Menyediakan bahan ajar sebagai sumber utama kegiatan membaca dan diskusi kelompok.',
      'Memfasilitasi penggunaan sumber tambahan untuk memperluas pemahaman terhadap peristiwa yang dikaji.'
    ],
    studentActivities: [
      'Membentuk kelompok kecil sesuai arahan guru.',
      'Menentukan peristiwa sejarah yang akan dianalisis.',
      'Membaca, menelaah, dan mendiskusikan sumber pembelajaran untuk menjawab pertanyaan yang telah dirumuskan.'
    ],
    pedagogicalRationale: 'Melatih kemampuan literasi sejarah kritis tingkat tinggi (historical reading) melalui analisis dokumen arsip, laporan arkeologis, prasasti, dan esai geohistori cagar budaya.',
    expectedOutput: 'Catatan sintesis telaah pustaka kelompok yang memetakan kronologi peristiwa bencana, kerusakan cagar budaya, dan respons masyarakat pada masanya.',
    timeAllocationMinutes: 25
  },
  {
    stepNumber: 3,
    stepName: 'Mengontekstualisasi',
    tagline: 'Menghubungkan Masa Lalu dengan Realitas Kontemporer',
    iconName: 'Link2',
    teacherActivities: [
      'Mengarahkan peserta didik untuk menghubungkan peristiwa sejarah dengan kondisi kontemporer, terutama yang berkaitan dengan cagar budaya, lingkungan alam, dan dinamika sosial budaya.',
      'Memfasilitasi analisis hubungan antara pengalaman masyarakat pada masa lalu dan persoalan kebencanaan pada masa kini.'
    ],
    studentActivities: [
      'Menghubungkan peristiwa sejarah dengan fenomena kontemporer berdasarkan sumber sejarah yang relevan.',
      'Menganalisis keterkaitan antara perubahan lingkungan, risiko bencana, dan pelestarian cagar budaya.'
    ],
    pedagogicalRationale: 'Mencegah sejarah menjadi sekadar kumpulan memori mati dengan membangun jembatan kognitif antara masa lalu dan tantangan masa kini (perubahan iklim, pergeseran lempeng, dan konservasi modern).',
    expectedOutput: 'Matriks analisis komparatif: "Pengalaman Masa Lalu vs Risiko Kontemporer vs Pelestarian Cagar Budaya".',
    timeAllocationMinutes: 25
  },
  {
    stepNumber: 4,
    stepName: 'Membuat',
    tagline: 'Produksi Historiografi Sederhana & Solusi Mitigasi',
    iconName: 'PenTool',
    teacherActivities: [
      'Mengarahkan peserta didik untuk mengembangkan produk pembelajaran berdasarkan hasil analisis dan diskusi kelompok.',
      'Memberikan panduan penyusunan karya dalam bentuk esai, artikel sederhana, infografis, presentasi, atau media lainnya.'
    ],
    studentActivities: [
      'Menyusun karya secara kolaboratif berdasarkan hasil analisis sumber sejarah.',
      'Mengembangkan historiografi sederhana yang memuat interpretasi historis dan alternatif solusi terhadap persoalan kebencanaan.'
    ],
    pedagogicalRationale: 'Mendorong peserta didik mempraktikkan keterampilan berpikir kreatif dan sintesis dengan menuangkan solusi mitigasi nyata dalam bentuk produk historiografi yang dapat dinikmati publik.',
    expectedOutput: 'Karya historiografi sederhana (artikel pendek, infografis mitigasi cagar budaya, atau media digital) yang memuat interpretasi historis dan rekomendasi mitigasi preventif.',
    timeAllocationMinutes: 30
  },
  {
    stepNumber: 5,
    stepName: 'Mengomunikasikan',
    tagline: 'Diseminasi, Adu Gagasan & Refleksi Bersama',
    iconName: 'MessageSquareShare',
    teacherActivities: [
      'Memfasilitasi presentasi, diskusi, dan pertukaran gagasan antarkelompok.',
      'Memberikan umpan balik terhadap hasil karya dan argumentasi peserta didik.',
      'Mengarahkan kegiatan refleksi bersama untuk mengevaluasi proses dan hasil pembelajaran.'
    ],
    studentActivities: [
      'Mempresentasikan hasil historiografi sederhana di hadapan kelompok lain.',
      'Membandingkan hasil interpretasi kelompok dengan narasi sejarah yang telah dipelajari dan hasil kelompok lainnya.',
      'Menyusun simpulan dan melakukan refleksi bersama guru.'
    ],
    pedagogicalRationale: 'Meneguhkan pemahaman, membangun keterampilan komunikasi ilmiah dan empati sejarah, serta memupuk komitmen bersama untuk menjaga cagar budaya bangsa dari ancaman bencana.',
    expectedOutput: 'Presentasi kelompok, lembar evaluasi rekan sejawat (peer review), dan jurnal refleksi diri peserta didik.',
    timeAllocationMinutes: 25
  }
];

export const CLASSROOM_SCENARIOS: Record<string, ScenarioTemplate> = {
  prambanan: {
    heritageSiteId: 'prambanan',
    heritageSiteName: 'Candi Prambanan & Gempa Sesar Opak 2006',
    coreHazard: 'Gempa Bumi Tektonik Sesar Dangkal',
    drivingQuestion: 'Bagaimana sebuah candi setinggi 47 meter yang dibangun abad ke-9 tanpa semen mampu bertahan dari gempa berulang, dan mengapa guncangan 2006 meruntuhkan ratna puncaknya?',
    stepDetails: {
      1: {
        teacherPrompt: 'Guru menampilkan foto ratna Candi Prambanan yang berserakan pasca gempa 27 Mei 2006 dan mengajukan pertanyaan: "Mengapa batu-batu puncak candi terlempar jatuh sementara lantai dasarnya tetap utuh?"',
        studentTask: 'Siswa mengidentifikasi keterkaitan antara getaran gelombang gempa Sesar Opak dengan struktur bangunan candi yang ramping dan tinggi.',
        suggestedMedia: 'Foto arsip BPCB 2006 & Peta Geologi Sesar Opak DIY'
      },
      2: {
        teacherPrompt: 'Guru membagikan esai "Goncangan Sesar Opak 2006" di web MICAYA dan modul rekonstruksi anastilosis.',
        studentTask: 'Dalam kelompok beranggotakan 4-5 siswa, membaca penjelasan mengenai sistem konstruksi batu kunci (ekor burung) dan cara pemugaran anastilosis dilakukan.',
        suggestedMedia: 'Esai Sejarah Bencana MICAYA & Diagram Kuncian Batu Andesit'
      },
      3: {
        teacherPrompt: 'Guru memandu analisis: "Apakah bangunan modern di sekitar kita saat ini lebih tahan gempa daripada konstruksi candi kuno nenek moyang kita?"',
        studentTask: 'Siswa membandingkan respons getaran batu tanpa spesi semen dengan beton bertulang, serta menganalisis risiko gempa masa kini di Yogyakarta.',
        suggestedMedia: 'Data gempa BMKG & Hasil uji getaran shake table BPCB'
      },
      4: {
        teacherPrompt: 'Guru memberikan rubrik tugas: "Susun infografis atau esai historiografi mitigasi yang memuat 3 rekomendasi pelestarian fisik Candi Prambanan dari gempa masa depan!"',
        studentTask: 'Kelompok membuat infografis digital/poster bertema: "Anastilosis dan Mitigasi Seismik Candi Prambanan: Belajar dari Tragedi 2006".',
        suggestedMedia: 'Template Infografis / Format Esai Mini MICAYA'
      },
      5: {
        teacherPrompt: 'Guru memoderasi sesi pameran galeri (gallery walk) dan mengajukan pertanyaan reflektif: "Nilai apa yang bisa kita pelajari dari ketangguhan juru pelihara cagar budaya?"',
        studentTask: 'Siswa mempresentasikan karya di depan kelas, saling memberi masukan konstruktif, dan menuliskan 1 komitmen menjaga warisan sejarah lokal.',
        suggestedMedia: 'Lembar Umpan Balik Rekan & Jurnal Refleksi Siswa'
      }
    }
  },
  borobudur: {
    heritageSiteId: 'borobudur',
    heritageSiteName: 'Candi Borobudur & Erupsi Abu Asam Merapi 2010',
    coreHazard: 'Erupsi Vulkanik & Korosi Kimiawi Tefra Asam',
    drivingQuestion: 'Mengapa abu vulkanik Merapi yang tampak seperti debu biasa bisa menjadi ancaman mematikan bagi relief batu Candi Borobudur?',
    stepDetails: {
      1: {
        teacherPrompt: 'Guru memperlihatkan foto stupa Borobudur yang tertutup terpal biru saat erupsi Merapi 2010: "Mengapa para arkeolog bersusah payah membungkus candi dengan terpal plastik raksasa?"',
        studentTask: 'Siswa merespons dugaan ancaman abu vulkanik terhadap batu andesit berpori dan saluran air kuno jaladwara.',
        suggestedMedia: 'Video Dokumentasi Erupsi Merapi 2010 & Foto Terpal Borobudur'
      },
      2: {
        teacherPrompt: 'Guru membagikan artikel penelitian mengenai tingkat keasaman abu Merapi (pH 3.5 - 4) dan potensi korosi mineral felspar pada andesit.',
        studentTask: 'Siswa membaca data uji laboratorium kimiawi dan mencatat bagaimana asam vulkanik dapat melarutkan ukiran relief riwayat hidup sang Buddha.',
        suggestedMedia: 'Hasil Uji Laboratorium Balai Konservasi Borobudur'
      },
      3: {
        teacherPrompt: 'Guru mengajak siswa menghubungkan peristiwa erupsi 2010 dengan hipotesis letusan Merapi tahun 1006 yang mengubur candi selama seribu tahun.',
        studentTask: 'Siswa membuat perbandingan: apa perbedaan nasib candi pada era kuno (ditinggalkan hingga terkubur) dengan era modern (mitigasi aktif cepat terpal & pembersihan kering)?',
        suggestedMedia: 'Peta Geohistori Jalur Lahar Merapi Purba'
      },
      4: {
        teacherPrompt: 'Guru membimbing siswa membuat brosur panduan SOP: "Prosedur Evakuasi dan Penyelamatan Cagar Budaya saat Erupsi Gunung Api Terjadi".',
        studentTask: 'Siswa menyusun karya kolaboratif panduan mitigasi pra-bencana, saat bencana, dan pasca-bencana untuk kawasan wisata pusaka.',
        suggestedMedia: 'Panduan Konservasi Cagar Budaya Kemendikbud'
      },
      5: {
        teacherPrompt: 'Guru memfasilitasi presentasi simulasi pos komando darurat bencana candi.',
        studentTask: 'Perwakilan kelompok berperan sebagai kepala konservator, mempresentasikan rencana aksi cepat penyelamatan batu relief.',
        suggestedMedia: 'Panggung Simulasi Peran & Rubrik Penilaian HOTS'
      }
    }
  },
  baiturrahman: {
    heritageSiteId: 'baiturrahman',
    heritageSiteName: 'Masjid Raya Baiturrahman & Tsunami Samudra Hindia 2004',
    coreHazard: 'Gelombang Tsunami Megathrust & Salinitas',
    drivingQuestion: 'Bagaimana arsitektur Masjid Baiturrahman dan tradisi tutur Smong di Simeulue membuktikan pentingnya memori sejarah dalam menyelamatkan nyawa?',
    stepDetails: {
      1: {
        teacherPrompt: 'Guru menampilkan rekaman video citra satelit Banda Aceh sebelum dan sesudah 26 Desember 2004, menyorot Masjid Raya Baiturrahman yang tetap kokoh di tengah hamparan puing.',
        studentTask: 'Siswa mendiskusikan rasa kagum dan merumuskan rasa ingin tahu mengenai rahasia arsitektural di balik bertahannya bangunan tersebut.',
        suggestedMedia: 'Citra Satelit NOAA 2004 & Foto Udara Baiturrahman'
      },
      2: {
        teacherPrompt: 'Guru mengarahkan siswa menelaah kearifan lisan Smong dari Pulau Simeulue yang berhasil menyelamatkan 99% penduduk pulau saat tsunami.',
        studentTask: 'Siswa meneliti lirik syair Smong: "Engon ma he, teu geulanteue, i laot teu surut..." dan membedah maknanya dalam kacamata mitigasi modern.',
        suggestedMedia: 'Naskah Syair Lisan Smong & Esai Resiliensi Aceh MICAYA'
      },
      3: {
        teacherPrompt: 'Guru mengarahkan siswa mengkaji bagaimana situs cagar budaya pasca-bencana (seperti Kapal Apung PLTD) dapat diubah menjadi monumen pengingat masa depan.',
        studentTask: 'Siswa menganalisis konsep "Heritage as Living Memorial" bagi ketahanan bencana generasi mendatang.',
        suggestedMedia: 'Foto Monumen PLTD Apung Punge Blang Cut'
      },
      4: {
        teacherPrompt: 'Guru menugaskan penulisan artikel opini sejarah: "Menolak Lupa: Mentransformasikan Memori Tsunami Menjadi Budaya Sadar Bencana".',
        studentTask: 'Siswa menyusun naskah artikel opini kelompok yang siap dipublikasikan di mading sekolah atau blog edukasi.',
        suggestedMedia: 'Rubrik Penulisan Historiografi & Artikel Opini'
      },
      5: {
        teacherPrompt: 'Guru mengajak siswa berdiskusi pleno mengenai integrasi kearifan lokal daerah masing-masing dalam menghadapi potensi bahaya alam setempat.',
        studentTask: 'Siswa membacakan intisari opini dan menarik simpulan komparatif dengan kearifan lokal wilayahnya.',
        suggestedMedia: 'Papan Curah Gagasan & Refleksi Nilai Kebangsaan'
      }
    }
  }
};
