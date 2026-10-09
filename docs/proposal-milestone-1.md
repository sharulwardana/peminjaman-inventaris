# PROPOSAL PERENCANAAN PROYEK (MILESTONE 1)
**Mata Kuliah:** Pemrograman Berbasis Web  
**Tema Pilihan:** 1. Sistem Peminjaman Inventaris  
**Nama Proyek:** PINJES (Sistem Informasi Peminjaman Inventaris)  
**Program Studi:** S1 Teknik Informatika - Universitas Dian Nuswantoro  

---

## 1. Identitas Kelompok & Pembagian Kontribusi

Proyek ini dikerjakan secara berkelompok (2 orang) dengan pembagian tugas yang jelas:

* **Anggota 1: Mohammad Adam Mahfud (A11.2025.16614)**
  * Bertanggung jawab pada analisis latar belakang masalah dan perumusan manfaat aplikasi di lingkungan kampus.
  * Menganalisis target pengguna dan mengidentifikasi kebutuhan pengguna (*user requirements*).
  * Menyusun daftar kebutuhan fitur utama sistem sesuai rubrik panduan PjBL.
  * Menginisialisasi repositori Git lokal, menyiapkan berkas `.gitignore`, dan menyusun struktur folder proyek awal.
  * Menyusun dokumen proposal perencanaan proyek dan berkas `README.md`.
* **Anggota 2: Muhammad Daffa Dhiya Ulhaq (A11.2025.16515)**
  * Bertanggung jawab pada perancangan antarmuka pengguna (*wireframing/mockup*).
  * Membuat berkas rancangan prototipe interaktif pada berkas `wireframe/index.html`.
  * Merancang tata letak halaman Login, Dashboard ringkasan inventaris, Tabel Data Barang, dan Formulir Tambah Data.
  * Menambahkan simulasi navigasi antarmuka dan tampilan waktu *real-time* berbasis JavaScript pada bilah atas (*navbar*).

---

## 2. Latar Belakang & Identifikasi Masalah

Peralatan inventaris seperti proyektor infocus, kabel converter/HDMI, pointer wireless presentasi, kamera dokumentasi, dan perangkat praktikum laboratorium sering kali dipinjam oleh mahasiswa maupun dosen untuk menunjang kegiatan perkuliahan dan acara kemahasiswaan.

Berdasarkan pengamatan di lingkungan kampus, proses pencatatan peminjaman barang sebagian besar masih mengandalkan buku agenda fisik atau formulir manual. Metode manual ini menimbulkan beberapa masalah operasional:

1. **Catatan Mudah Terselip atau Hilang:**  
   Buku catatan fisik berisiko rusak, robek, atau terselip di tumpukan berkas lain. Jika buku tersebut hilang, riwayat peminjaman barang sebelumnya tidak dapat dilacak kembali.
2. **Sulit Memantau Ketersediaan Barang:**  
   Petugas inventaris tidak memiliki informasi langsung mengenai status barang. Petugas harus mengecek lemari penyimpanan secara langsung untuk memastikan apakah barang yang ingin dipinjam sedang tersedia atau sedang dibawa orang lain.
3. **Keterlambatan Pengembalian Sulit Dipantau:**  
   Tidak adanya catatan status yang terpusat menyebabkan petugas kesulitan melacak barang apa saja yang sudah melewati batas waktu pengembalian.

### Solusi dan Manfaat Aplikasi
Melalui pengembangan aplikasi **PINJES (Peminjaman Inventaris)**, proses pencatatan dialihkan ke sistem digital berbasis web yang terstruktur:
* **Bagi Petugas:** Mempermudah pencatatan data barang, memantau barang yang sedang keluar secara cepat, dan mencatat riwayat peminjaman dengan lebih tertib.
* **Bagi Peminjam:** Memperoleh kepastian ketersediaan alat yang dibutuhkan untuk kegiatan perkuliahan tanpa harus menunggu lama.

---

## 3. Target Pengguna & Kebutuhan Pengguna

### Target Pengguna
1. **Admin / Petugas Inventaris:**  
   Pengguna utama yang memiliki wewenang untuk mengelola data barang inventaris, mencatat transaksi peminjaman baru, serta memperbarui status saat barang telah dikembalikan.
2. **Peminjam (Mahasiswa / Dosen):**  
   Pengguna yang meminjam barang inventaris untuk kegiatan belajar mengajar atau kegiatan organisasi kampus.

### Kebutuhan Pengguna (User Requirements)
* Petugas membutuhkan antarmuka login untuk mengamankan data inventaris dari pihak luar.
* Petugas membutuhkan tampilan dashboard yang menampilkan ringkasan angka: total barang, barang yang tersedia, dan barang yang sedang dipinjam.
* Petugas membutuhkan tabel daftar inventaris yang rapi, dilengkapi status ketersediaan (*badge* Tersedia / Dipinjam) serta tombol aksi Edit dan Hapus.
* Petugas membutuhkan formulir input yang mudah diisi dengan data nama barang, kategori, dan deskripsi kondisi fisik.
* Petugas membutuhkan fitur pencarian pada tabel data agar mudah menemukan barang tertentu.

---

## 4. Kebutuhan Fitur Utama Sistem

Mengacu pada ketentuan panduan PjBL, daftar kebutuhan fitur utama yang direncanakan meliputi:

1. **Fitur Autentikasi:** Form login, logout, dan sistem session untuk membatasi akses halaman.
2. **Fitur Dashboard:** Ringkasan statistik jumlah barang, barang tersedia, barang dipinjam, total transaksi, dan informasi waktu real-time.
3. **Fitur Kelola Kategori:** Pengelompokan barang berdasarkan jenis (misal: Elektronik, Multimedia, Alat Lab).
4. **Fitur Kelola Data Inventaris:** Menambah, menampilkan, mengubah, dan menghapus data barang inventaris.
5. **Fitur Kelola Peminjaman:** Formulir pencatatan transaksi peminjaman baru serta pembaruan status transaksi.
6. **Fitur Pencarian & Konfirmasi Hapus:** Pencarian cepat nama barang dan konfirmasi sebelum melakukan penghapusan data.

---

## 5. Perancangan Wireframe Antarmuka

Perancangan antarmuka telah diselesaikan oleh **Muhammad Daffa Dhiya Ulhaq** dalam berkas prototipe terpadu `wireframe/index.html` dengan rincian:

1. **Wireframe Login (`#login-page`):** Form masuk akun petugas kampus dengan input email/username, kata sandi, dan tombol masuk.
2. **Wireframe Dashboard (`#view-dashboard`):** Menampilkan navbar dengan jam real-time, sidebar navigasi, 4 kartu ringkasan (Total Barang: 124, Tersedia: 102, Dipinjam: 22, Total Transaksi: 845), dan area aktivitas terbaru.
3. **Wireframe Daftar Data Barang (`#view-data`):** Tabel daftar inventaris memuat kolom No, Nama Barang, Kategori, Status ketersediaan, kotak pencarian, tombol aksi Edit/Hapus, dan pagination.
4. **Wireframe Form Tambah Data (`#view-form`):** Formulir input penambahan barang baru dengan input nama barang, pilihan dropdown kategori, textarea deskripsi/kondisi fisik, dan tombol simpan/batal.

---

## 6. Persiapan Lingkungan Kerja (Milestone 1)

Pada Milestone 1 ini, persiapan lingkungan kerja yang telah diselesaikan meliputi:
* Inisialisasi repositori Git lokal untuk pencatatan riwayat progres pengerjaan proyek.
* Penyiapan berkas `.gitignore` untuk menyaring file sementara bawaan editor dan sistem operasi.
* Penyusunan struktur folder proyek awal (`docs/` dan `wireframe/`).
* Dokumentasi perencanaan lengkap pada berkas `README.md` dan proposal ini.
