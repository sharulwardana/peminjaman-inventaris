# Sistem Informasi Peminjaman Inventaris (SIPINJAM)
> Proyek Project Based Learning (PjBL) - Mata Kuliah Pemrograman Berbasis Web  
> Program Studi Teknik Informatika, Universitas Dian Nuswantoro (UDINUS)

---

## 1. Identifikasi Masalah & Latar Belakang

Di lingkungan kampus, pengelolaan peminjaman barang inventaris (seperti proyektor, kabel konverter/HDMI, pointer presentasi, kamera dokumentasi, dan modul praktikum laboratorium) pada umumnya masih dicatat menggunakan buku agenda fisik atau formulir kertas. 

Pencatatan manual ini menimbulkan beberapa kendala nyata di lapangan:
1. **Pencatatan rentan tercecer dan tidak rapi:** Buku peminjaman sering terselip, tulisan tangan sulit dibaca, dan riwayat peminjaman lama sulit dicari saat dibutuhkan.
2. **Status ketersediaan barang sulit dipantau:** Petugas inventaris harus mengecek fisik barang secara langsung di lemari penyimpanan untuk mengetahui apakah suatu barang sedang tersedia, sedang dipinjam, atau sedang dalam perbaikan.
3. **Keterlambatan pengembalian sulit terlacak:** Petugas kesulitan memantau barang apa saja yang sudah melewati batas waktu pengembalian karena tidak ada rekapitulasi status yang jelas.

### Manfaat Aplikasi
Aplikasi **Sistem Informasi Peminjaman Inventaris (SIPINJAM)** ini dirancang untuk:
* Menggantikan buku catatan manual menjadi sistem digital berbasis web yang terstruktur.
* Mempermudah petugas/admin dalam mencatat data inventaris, memantau status barang secara *real-time* (tersedia / dipinjam), serta mencatat transaksi peminjaman dan pengembalian barang.
* Menyediakan ringkasan data inventaris dan riwayat transaksi peminjaman yang dapat diakses dengan cepat.

---

## 2. Target Pengguna & Kebutuhan Pengguna

### Target Pengguna
1. **Admin / Petugas Inventaris (Pengguna Utama):**
   * Staf pengelola laboratorium atau divisi perlengkapan organisasi kampus yang bertanggung jawab penuh terhadap data fisik barang dan sirkulasi peminjaman.
2. **Peminjam (Mahasiswa / Dosen):**
   * Pihak yang meminjam barang inventaris untuk keperluan perkuliahan, praktikum, atau kegiatan kemahasiswaan.

### Kebutuhan Pengguna
* **Kebutuhan Admin:**
  * Memerlukan halaman login yang aman untuk masuk ke sistem.
  * Memerlukan dashboard ringkas untuk melihat jumlah total barang, barang yang tersedia, dan barang yang sedang dipinjam.
  * Memerlukan fitur untuk mengelola kategori barang (misal: Elektronik, Alat Lab, Aksesoris).
  * Memerlukan fitur untuk menambah, mengubah, dan menghapus data barang inventaris.
  * Memerlukan fitur untuk mencatat transaksi peminjaman baru serta memperbarui status (dipinjam / dikembalikan).
  * Memerlukan fitur pencarian cepat agar tidak perlu mencari data barang satu per satu.

---

## 3. Daftar Fitur Aplikasi (Berdasarkan Panduan PjBL)

### Fitur Wajib:
* **Autentikasi Pengguna:** Login, logout, dan proteksi session untuk membatasi akses halaman.
* **Dashboard:** Ringkasan statistik jumlah total inventaris, barang tersedia, barang dipinjam, dan transaksi aktif, dilengkapi tampilan tanggal dan jam interaktif berbasis JavaScript.
* **Kelola Kategori Barang:** Manajemen data kategori (CRUD: Create, Read, Update, Delete).
* **Kelola Data Barang (Inventaris):** Manajemen data barang mencakup kode barang, nama, kategori, kondisi, dan status ketersediaan.
* **Kelola Peminjaman:** Pencatatan nama peminjam, kontak/NIM, barang yang dipinjam, tanggal peminjaman, estimasi pengembalian, dan perubahan status transaksi (Dipinjam / Selesai / Dibatalkan).
* **Konfirmasi Aksi:** Dialog konfirmasi sebelum menghapus data untuk mencegah kesalahan klik.
* **Pencarian & Pagination:** Pencarian data dan pembagian halaman (pagination) pada tabel daftar barang.

### Rencana Fitur Pengembangan (Opsional):
* Filter riwayat peminjaman berdasarkan status (sedang dipinjam / sudah kembali).
* Tampilan peringatan visual untuk barang yang melewati batas tanggal pengembalian.
* Cetak tanda bukti / lembar peminjaman sederhana.

---

## 4. Struktur Folder Proyek

```text
peminjaman-inventaris/
├── assets/
│   ├── css/
│   │   └── style.css            # File stylesheet utama aplikasi
│   ├── js/
│   │   └── main.js              # Script interaktivitas & waktu
│   └── images/                  # Aset gambar & icon
├── config/
│   └── koneksi.php              # Konfigurasi koneksi database MySQL
├── docs/
│   ├── proposal-milestone-1.md  # Dokumen detail perencanaan proyek
│   └── AI_USAGE_LOG.md          # Log penggunaan AI sesuai panduan PjBL
├── wireframe/                   # Rancangan antarmuka (Milestone 1)
│   ├── index.html               # Navigasi tinjauan wireframe
│   ├── login.html               # Wireframe halaman login
│   ├── dashboard.html           # Wireframe halaman dashboard
│   ├── daftar-barang.html       # Wireframe tabel daftar data inventaris
│   └── form-peminjaman.html     # Wireframe form input transaksi peminjaman
├── .gitignore                   # Berkas pengabaian file Git
└── README.md                    # Dokumentasi utama proyek
```

---

## 5. Cara Membuka Wireframe (Milestone 1)

Rancangan wireframe dibuat dalam format HTML sederhana yang dapat langsung dibuka tanpa memerlukan web server lokal (Apache/XAMPP):
1. Buka folder `wireframe/`.
2. Buka file `index.html` menggunakan peramban (Google Chrome, Microsoft Edge, atau Mozilla Firefox).
3. Halaman index wireframe menyediakan navigasi langsung untuk melihat seluruh rancangan halaman inti:
   * Wireframe Login
   * Wireframe Dashboard
   * Wireframe Daftar Data Inventaris
   * Wireframe Form Input Peminjaman

---

## 6. Riwayat Commit Git (Milestone 1)

Berikut tahapan commit yang dilakukan pada Milestone 1:
1. `commit 1`: `feat: inisialisasi struktur folder awal dan konfigurasi gitignore`
2. `commit 2`: `docs: menambahkan proposal perencanaan proyek dan dokumentasi README milestone 1`
3. `commit 3`: `ui: membuat rancangan wireframe antarmuka login, dashboard, daftar data, dan form`
