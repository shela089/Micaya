# MICAYA: Model Pembelajaran Mitigasi Cagar Budaya

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](LICENSE)

Platform digital edukatif interaktif untuk pembelajaran sejarah kebencanaan dan mitigasi pelestarian cagar budaya di Indonesia, dikembangkan berdasarkan publikasi penelitian:
> **"Pengembangan Model Pembelajaran Mitigasi Cagar Budaya (MICAYA) pada Pembelajaran Sejarah"**  
> *Oleh: Shela Dwi Utari*

---

## 🏛️ Latar Belakang & Urgensi

Indonesia terletak di pertemuan tiga lempeng tektonik utama dunia dan jalur cincin api aktif (*Pacific Ring of Fire*). Kondisi geologis ini menjadikan ratusan warisan budaya tak ternilai (candi, benteng, masjid bersejarah, situs megalitik) rentan terhadap ancaman erupsi vulkanik, guncangan sesar aktif, tsunami, likuifaksi, dan pelapukan air tropis.

**MICAYA** hadir untuk menghubungkan pembelajaran sejarah kritis dengan sains mitigasi bencana, melatih peserta didik agar tidak hanya memahami masa lampau tetapi juga memiliki kepedulian aktif dalam menjaga warisan budaya bangsa.

---

## ✨ Fitur-Fitur Utama

### 1. Peta Interaktif Risiko Cagar Budaya & Mitigasi
* **Peta Vektor Kepulauan Indonesia:** Proyeksi geografis dari Sumatera hingga Papua.
* **Layer Ancaman Geologis:** Visualisasi jalur *Sunda Megathrust*, sesar aktif daratan (*Sesar Opak, Sesar Semangko, Sesar Palu-Koro*), dan *Busur Vulkanik Cincin Api*.
* **12 Situs Terpetakan:** Candi Borobudur, Prambanan, Sambisari, Masjid Raya Baiturrahman, Muaro Jambi, Trowulan Majapahit, Sangiran, Kota Tua Jakarta, Benteng Marlborough, Benteng Belgica Banda, Rumah Adat Bawömataluo Nias, dan Candi Muara Takus.
* **Dossier 3 Fase Mitigasi:** Rekomendasi terpadu tindakan *Pra-Bencana (Preventif)*, *Saat Bencana (Tanggap Darurat)*, dan *Pasca-Bencana (Restorasi/Anastilosis)* beserta kearifan lokal (*Smong*, pasak kayu gempa).

### 2. Koleksi 6 Esai Historiografi Kebencanaan
1. *Amuk Merapi dan Penguburan Peradaban Mataram Kuno (Candi Sambisari 6,5 meter).*
2. *Goncangan Sesar Opak 2006: Tragedi & Anastilosis Candi Prambanan.*
3. *Gelombang Samudra Hindia 2004: Masjid Baiturrahman & Kearifan Smong Simeulue.*
4. *Tahun Tanpa Musim Panas: Dampak Letusan Tambora 1815 & Krakatau 1883.*
5. *Kutukan Air Batavia: Deforestasi Hulu Ciliwung & Pelapukan Kawasan Kota Tua.*
6. *Kearifan Air Majapahit: Kolam Segaran, Candi Tikus, dan Mitigasi Banjir Purba Trowulan.*
* Dilengkapi kutipan prasasti, arsip kolonial, dan lembar catatan refleksi siswa yang tersimpan di *localStorage*.

### 3. Model MICAYA (Sesuai Naskah Riset Shela Dwi Utari)
* **Tabel 2. Sintaks Model Pembelajaran Micaya:**
  1. **Orientasi:** Penjelasan urgensi sejarah bencana & pertanyaan pemantik guru.
  2. **Membaca:** Pembentukan kelompok & telaah mendalam bahan ajar sejarah.
  3. **Mengontekstualisasi:** Analisis korelasi lingkungan masa lalu dengan ancaman cagar budaya masa kini.
  4. **Membuat:** Produksi historiografi sederhana & formulasi alternatif solusi mitigasi.
  5. **Mengomunikasikan:** Presentasi kelompok, pertukaran argumentasi, dan refleksi bersama.
* **Simulator Skenario RPP:** Menghasilkan modul ajar langkah demi langkah siap pakai berdasarkan cagar budaya pilihan guru.
* **Rubrik Penilaian:** Instrumen autentik untuk asesmen Kurikulum Merdeka.

### 4. Perangkat Ajar & Sumber Belajar
* **Lembar Kerja Peserta Didik (LKPD) Interaktif:** Dapat diisi langsung oleh siswa, tersimpan otomatis di peramban, dan memiliki tata letak ramah cetak (*print to PDF*).
* **Kuis Diagnostik HOTS (10 Soal):** Penilaian instan dengan penjelasan ilmiah fisika batuan dan sejarah.
* **Panduan Guru & Kurikulum Merdeka:** Pemetaan Capaian Pembelajaran (CP) dan Profil Pelajar Pancasila.
* **Glosarium Istilah:** Kamus istilah konservasi, geologi, dan arkeologi.

### 5. Berkas HTML Mandiri (Offline Learning Support)
Tersedia berkas HTML mandiri di root `/` dan folder `/public` yang dapat dibuka langsung tanpa internet (luring) maupun di GitHub Pages:
* `index.html` (Halaman Beranda Utama & Portal Interaktif Terpadu)
* `peta-cagar-budaya.html`
* `esai-sejarah-bencana.html`
* `model-micaya.html`
* `sumber-belajar.html`
* `micaya-modul-interaktif.html` (All-in-one standalone file)

### 6. Integrasi Google Antigravity & Asisten AI
* **Konfigurasi Workspace:** Dilengkapi berkas `.antigravity/instructions.md`, `.antigravity/config.json`, dan `.antigravityignore`.
* **Bebas Error Terminasi Agen:** Mencegah error `Agent execution terminated due to error` dengan mengabaikan direktori berat `node_modules` dan file binary secara otomatis saat dibuka di aplikasi Google Antigravity.
* **Asisten AI Interaktif:** Menyediakan konsultasi pembuatan RPP 5 sintaks MICAYA, analisis matriks mitigasi 3 fase, dan penilaian esai/LKPD otomatis baik di dalam web app maupun di Antigravity desktop.
* Panduan lengkap: lihat berkas [`ANTIGRAVITY.md`](./ANTIGRAVITY.md).

---

## 🚀 Panduan Menjalankan Proyek Lokal

### Prasyarat
* [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
* Git terpasang di komputer Anda.

### Langkah Instalasi
```bash
# 1. Kloning repositori ini
git clone https://github.com/USERNAME/micaya-pembelajaran-cagar-budaya.git

# 2. Masuk ke direktori proyek
cd micaya-pembelajaran-cagar-budaya

# 3. Pasang semua dependensi
npm install

# 4. Jalankan server pengembangan lokal
npm run dev
```

Buka peramban Anda di `http://localhost:3000`.

### Perintah Lainnya
```bash
# Memeriksa sintaks TypeScript
npm run lint

# Membangun versi produksi (Build)
npm run build

# Menjalankan pratinjau hasil build
npm run preview
```

---

## 📦 Struktur Folder Repositori

```text
├── index.html                   # Halaman Beranda Utama & Portal Interaktif Terpadu
├── metadata.json                # Metadata AI Studio & App Info
├── package.json                 # Konfigurasi dependensi dan skrip
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Konfigurasi Vite & Tailwind v4
├── public/                      # Berkas statis & modul HTML mandiri
│   ├── assets/aistudio/         # Screenshot riset asli Tabel 2
│   ├── peta-cagar-budaya.html   # Berkas HTML mandiri: Peta Interaktif
│   ├── esai-sejarah-bencana.html# Berkas HTML mandiri: Esai Sejarah
│   ├── model-micaya.html        # Berkas HTML mandiri: Sintak Model
│   ├── sumber-belajar.html      # Berkas HTML mandiri: LKPD & Kuis
│   └── micaya-modul-interaktif.html # Modul mandiri terintegrasi
└── src/
    ├── App.tsx                  # Komponen utama & router state
    ├── main.tsx                 # Mounting React root
    ├── index.css                # CSS Global Tailwind v4 & font rules
    ├── components/
    │   ├── Navbar.tsx           # Navigasi atas (Top Bar Contract)
    │   ├── HeroSection.tsx      # Bagian hero editorial & indikator
    │   ├── InteractiveMap.tsx   # Peta vektor Indonesia & drawer mitigasi
    │   ├── DisasterEssaysView.tsx # Pembaca esai editorial & catatan
    │   ├── ModelMicayaView.tsx  # Halaman Sintaks MICAYA & simulator RPP
    │   ├── LearningResourcesView.tsx # LKPD interaktif, kuis, & glosarium
    │   └── Footer.tsx           # Kaki halaman institusional & sitasi
    └── data/
        ├── heritageSites.ts     # Dataset 12 cagar budaya & protokol mitigasi
        ├── disasterEssays.ts    # Dataset 6 esai historiografi & kutipan
        ├── micayaModel.ts       # Dataset sintaks MICAYA & skenario kelas
        └── learningResources.ts # Dataset kuis HOTS, glosarium, panduan guru
```

---

## 🌐 Panduan Upload ke GitHub

Jalankan perintah berikut di terminal komputer Anda untuk mengunggah proyek ini ke repositori GitHub baru:

```bash
# 1. Inisialisasi Git lokal (jika belum)
git init

# 2. Tambahkan semua file yang sudah disiapkan
git add .

# 3. Buat commit pertama
git commit -m "feat: inisialisasi platform pembelajaran MICAYA"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Sambungkan ke repositori GitHub Anda (ganti USERNAME dan REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 6. Unggah kode ke GitHub
git push -u origin main
```

---

## 📄 Hak Cipta & Lisensi
Platform ini didedikasikan untuk pendidikan sejarah, sains kebencanaan, dan pelestarian cagar budaya Indonesia.
* **Model Pembelajaran:** Berdasarkan model MICAYA oleh Shela Dwi Utari.
* **Lisensi Kode:** Apache-2.0 License.
