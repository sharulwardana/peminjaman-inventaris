# PINJES - Sistem Informasi Peminjaman Inventaris
> Proyek Project Based Learning (PjBL) - Pemrograman Berbasis Web  
> Program Studi S1 Teknik Informatika, Universitas Dian Nuswantoro (UDINUS)  
> **Milestone 1:** Perencanaan Proyek & Persiapan Lingkungan Kerja

---

## Anggota Kelompok & Pembagian Tugas
Proyek ini dikerjakan secara berkelompok oleh dua mahasiswa dengan pembagian tugas sebagai berikut:

* **Anggota 1: Mohammad Adam Mahfud (A11.2025.16614)**
  * Mengidentifikasi latar belakang masalah nyata dan manfaat sistem di lingkungan kampus.
  * Menganalisis target pengguna dan merumuskan kebutuhan pengguna (*user requirements*).
  * Menyusun daftar kebutuhan fitur utama sistem sesuai panduan PjBL.
  * Menginisialisasi repositori Git lokal, menyiapkan `.gitignore`, dan menyusun struktur folder awal proyek.
  * Menyusun dokumen proposal perencanaan proyek dan berkas `README.md`.
* **Anggota 2: Muhammad Daffa Dhiya Ulhaq (A11.2025.16515)**
  * Merancang konsep tata letak antarmuka pengguna (UI/UX).
  * Membuat berkas wireframe antarmuka interaktif pada berkas `wireframe/index.html`.
  * Merancang tampilan halaman login, dashboard ringkasan inventaris, daftar data barang, dan form penambahan barang.

---

## 1. Identifikasi Masalah & Latar Belakang

Di lingkungan kampus, khususnya pada tingkat laboratorium praktikum, ruang perlengkapan program studi, maupun sekretariat organisasi mahasiswa, proses peminjaman barang inventaris (seperti proyektor, pointer wireless, kabel converter HDMI, kamera dokumentasi, dan modul praktikum) saat ini masih banyak dicatat secara manual di buku agenda fisik.

Pencatatan manual tersebut menimbulkan kendala nyata:
1. **Pencatatan rentan terselip atau rusak:** Buku catatan fisik mudah rusak atau hilang, sehingga riwayat peminjaman sebelumnya sulit dicari.
2. **Status ketersediaan barang sulit dipantau:** Petugas harus memeriksa fisik barang secara langsung ke lemari untuk memastikan apakah barang sedang ada di tempat atau sedang dipinjam orang lain.
3. **Batas waktu pengembalian sering terlewat:** Petugas kesulitan memantau barang mana saja yang sudah melewati batas tanggal peminjaman karena tidak adanya rekapitulasi status yang terpusat.

### Manfaat Aplikasi
Aplikasi **PINJES (Peminjaman Inventaris)** ini dirancang untuk:
* Mendigitalkan proses pencatatan sirkulasi barang inventaris agar data tersimpan rapi dan aman.
* Memudahkan petugas memantau status barang secara cepat (kapan barang dipinjam dan kapan harus dikembalikan).
* Membantu peminjam (mahasiswa/dosen) mendapatkan kepastian informasi mengenai barang yang tersedia.

---

## 2. Target Pengguna & Kebutuhan Pengguna

### Target Pengguna
1. **Admin / Petugas Inventaris:**  
   Petugas yang mengelola data barang, mencatat transaksi peminjaman, serta memperbarui status barang kembali.
2. **Peminjam (Mahasiswa / Dosen):**  
   Pihak yang meminjam barang untuk kegiatan perkuliahan atau acara kampus.

### Kebutuhan Pengguna
* Petugas membutuhkan sistem yang memiliki fitur login untuk keamanan data.
* Petugas membutuhkan halaman dashboard yang menampilkan ringkasan jumlah barang (total barang, barang tersedia, dan barang sedang dipinjam).
* Petugas membutuhkan tabel data inventaris yang rapi, lengkap dengan kolom status kondisi dan ketersediaan barang.
* Petugas membutuhkan formulir pencatatan peminjaman yang mudah diisi (nama peminjam, barang yang dipilih, tanggal pinjam, dan batas waktu pengembalian).
* Petugas membutuhkan fitur pencarian agar dapat menemukan data barang tanpa harus mencari satu per satu.

---

## 3. Rencana Kebutuhan Fitur Utama (Sesuai Panduan PjBL)

1. **Autentikasi Pengguna:** Halaman login, logout, dan sistem session.
2. **Dashboard Pengelolaan:** Ringkasan statistik barang (total, tersedia, dipinjam, transaksi) dan waktu real-time.
3. **Manajemen Kategori Barang:** Pengelompokan jenis barang inventaris (Elektronik, Multimedia, Alat Lab).
4. **Manajemen Data Barang:** Pencatatan kode barang, nama, kategori, kondisi, dan status ketersediaan.
5. **Manajemen Peminjaman:** Formulir peminjaman barang, pencatatan batas tanggal pengembalian, dan perubahan status transaksi (Dipinjam / Tersedia).
6. **Pencarian Data & Konfirmasi Aksi:** Kotak pencarian data dan dialog konfirmasi sebelum menghapus data.

---

## 4. Rancangan Wireframe Antarmuka

Rancangan wireframe antarmuka sistem dikerjakan oleh **Muhammad Daffa Dhiya Ulhaq** dan diimplementasikan ke dalam prototipe interaktif pada berkas [`wireframe/index.html`](wireframe/index.html) yang mencakup:
1. **Wireframe Login:** Formulir masuk akun petugas kampus dengan input email/username dan kata sandi.
2. **Wireframe Dashboard:** Tampilan statistik 4 kartu ringkasan (Total Barang: 124, Tersedia: 102, Dipinjam: 22, Transaksi: 845), area aktivitas, dan jam *real-time* berbasis JavaScript.
3. **Wireframe Daftar Data Barang:** Tabel data inventaris lengkap dengan pencarian nama barang, tombol aksi Edit/Hapus, status badge (Tersedia/Dipinjam), dan navigasi pagination.
4. **Wireframe Form Tambah Data:** Formulir penambahan data barang baru (nama barang, kategori, deskripsi kondisi fisik, dan tombol simpan/batal).

*Berkas wireframe dapat langsung diuji pada peramban melalui:* [`wireframe/index.html`](wireframe/index.html)

---

## 5. Struktur Folder Awal Repositori (Milestone 1)

```text
peminjaman-inventaris/
├── docs/
│   └── AI_USAGE_LOG.md           # Catatan log penggunaan AI sesuai panduan PjBL
├── wireframe/
│   └── index.html                # Prototipe wireframe interaktif (oleh M. Daffa)
├── .gitignore                    # Konfigurasi pengabaian file sampah Git
└── README.md                     # Berkas dokumentasi utama proyek
```

---

## 6. Riwayat Commit Git (Milestone 1)

1. `commit 1`: `feat: inisialisasi struktur folder awal dan konfigurasi gitignore`
2. `commit 2`: `docs: menambahkan proposal perencanaan proyek dan dokumentasi README milestone 1`
3. `commit 3`: `ui: mengintegrasikan hasil wireframe antarmuka interaktif dari rekan kelompok`
