# PROPOSAL PERENCANAAN PROYEK (MILESTONE 1)
**Mata Kuliah:** Pemrograman Berbasis Web  
**Tema Proyek:** 1. Sistem Peminjaman Inventaris  
**Nama Sistem:** Sistem Informasi Peminjaman Inventaris (SIPINJAM)  
**Program Studi:** S1 Teknik Informatika - Universitas Dian Nuswantoro  

---

## 1. Latar Belakang & Identifikasi Masalah

Pengelolaan barang inventaris di lingkungan kampus, khususnya pada tingkat laboratorium praktikum, ruang perlengkapan program studi, maupun sekretariat organisasi mahasiswa, memerlukan pencatatan sirkulasi yang tertib. Peralatan seperti proyektor infocus, kabel converter/HDMI, pointer wireless, kamera dokumentasi, dan perangkat keras praktikum kerap dipinjam secara bergantian oleh dosen maupun mahasiswa.

Berdasarkan pengamatan di lapangan, proses pencatatan peminjaman sebagian besar masih dilakukan secara konvensional menggunakan buku agenda fisik atau lembaran formulir manual. Praktik pencatatan manual ini menimbulkan beberapa kendala operasional:

1. **Risiko Kerusakan dan Kehilangan Data:**  
   Buku catatan fisik mudah rusak, kotor, atau terselip di antara tumpukan berkas lainnya. Jika buku tersebut hilang, riwayat peminjaman barang sebelumnya tidak dapat dilacak kembali.
2. **Ketiadaan Pemantauan Status Secara Terpusat:**  
   Petugas inventaris tidak memiliki media pemantauan yang cepat untuk melihat ketersediaan barang. Setiap kali ada pihak yang ingin meminjam, petugas harus mencari barang secara fisik di rak penyimpanan untuk memastikan barang tersebut ada dan dalam kondisi baik.
3. **Kendala Monitoring Batas Pengembalian:**  
   Pencatatan manual tidak memberikan pengingat atau daftar khusus mengenai barang-barang yang telah melewati tanggal batas pengembalian. Hal ini sering menyebabkan barang inventaris terlambat dikembalikan hingga berminggu-minggu tanpa teguran dari petugas.

Melalui pengembangan **Sistem Informasi Peminjaman Inventaris (SIPINJAM)** berbasis web, proses pencatatan inventaris dan transaksi peminjaman akan dialihkan ke dalam sistem digital yang terpusat, terstruktur, dan mudah dipantau.

---

## 2. Tujuan dan Manfaat

### Tujuan Proyek
1. Membangun aplikasi web peminjaman inventaris sederhana yang memudahkan petugas mencatat data barang dan sirkulasi peminjaman.
2. Menerapkan materi perkuliahan Pemrograman Berbasis Web secara bertahap, mulai dari perancangan antarmuka HTML/CSS, validasi JavaScript, hingga pengolahan data PHP dan database MySQL.
3. Mengembangkan kebiasaan kerja terstruktur menggunakan version control Git sesuai tahapan milestone yang ditentukan.

### Manfaat Proyek
* **Bagi Petugas/Admin:** Mempercepat proses pengecekan stok barang, mengurangi kesalahan pencatatan, dan mempermudah rekapitulasi data peminjam.
* **Bagi Peminjam:** Mendapatkan kepastian informasi mengenai ketersediaan barang inventaris yang dibutuhkan untuk kegiatan perkuliahan atau acara kampus.

---

## 3. Profil dan Kebutuhan Pengguna

### Target Pengguna
Aplikasi ini ditujukan bagi:
1. **Admin / Pengelola Inventaris (Petugas Laboratorium/Perlengkapan):**  
   Pengguna dengan hak akses penuh yang bertanggung jawab mencatat barang masuk, memperbarui data kondisi barang, mengonfirmasi peminjaman, serta mencatat pengembalian barang.
2. **Peminjam (Mahasiswa / Dosen):**  
   Pengguna yang memerlukan fasilitas inventaris untuk kegiatan belajar mengajar atau kegiatan organisasi kampus.

### Analisis Kebutuhan Pengguna (User Needs)
* Pengguna membutuhkan antarmuka login yang jelas dan aman.
* Pengguna membutuhkan ringkasan jumlah barang (tersedia vs sedang dipinjam) pada halaman utama (dashboard).
* Pengguna membutuhkan formulir yang mudah dipahami saat menginput data barang maupun transaksi peminjaman baru.
* Pengguna membutuhkan fitur pencarian pada daftar barang agar tidak membuang waktu menggulir tabel yang panjang.
* Pengguna membutuhkan konfirmasi peringatan saat akan menghapus data penting.

---

## 4. Ruang Lingkup dan Rencana Fitur Aplikasi

Sesuai dengan panduan Project Based Learning (PjBL), aplikasi ini dirancang dengan fitur inti sebagai berikut:

### A. Fitur Wajib (Core Features)
1. **Autentikasi & Sesi (Session):**
   * Halaman login dengan username dan password.
   * Session PHP untuk mengamankan halaman internal (dashboard dan manajemen data).
   * Fitur logout untuk mengakhiri sesi pengguna secara aman.
2. **Dashboard Interaktif:**
   * Kartu ringkasan informasi: Total Barang, Barang Tersedia, Barang Sedang Dipinjam, dan Transaksi Berjalan.
   * Widget tanggal dan jam real-time menggunakan JavaScript.
   * Tabel cuplikan aktivitas transaksi peminjaman terbaru.
3. **Manajemen Kategori Barang:**
   * Menambah kategori baru (contoh: Peralatan Audio Visual, Aksesoris Komputer, Alat Praktikum).
   * Mengubah dan menghapus data kategori.
4. **Manajemen Data Barang (Inventaris):**
   * Mencatat informasi barang: Kode Barang, Nama Barang, Kategori, Kondisi (Baik/Rusak Ringan), dan Status (Tersedia/Dipinjam).
   * Menampilkan data dalam tabel dengan fitur pencarian dan pagination AJAX.
   * Form tambah dan edit data barang.
   * Hapus data barang dengan konfirmasi peringatan.
5. **Manajemen Transaksi Peminjaman:**
   * Form pencatatan peminjaman (nama peminjam, NIM/kontak, barang yang dipinjam, tanggal pinjam, batas kembali).
   * Pembaruan status transaksi: `Dipinjam` -> `Dikembalikan` / `Dibatalkan`.
   * Saat barang dipinjam, status ketersediaan barang otomatis berubah menjadi "Dipinjam".

### B. Rencana Fitur Tambahan (Pengembangan Opsional)
* Filter data peminjaman berdasarkan status (aktif / selesai).
* Tanda peringatan visual (warna merah) untuk transaksi peminjaman yang telah melewati jatuh tempo.
* Cetak lembar bukti peminjaman format sederhana untuk arsip fisik.

---

## 5. Rencana Wireframe Antarmuka

Pada Milestone 1 ini, dibuat empat rancangan antarmuka dasar dalam bentuk dokumen HTML responsif dan terstruktur:

1. **Wireframe Login (`wireframe/login.html`):**  
   Menampilkan form masuk terpusat dengan input username, password, dan tombol aksi login.
2. **Wireframe Dashboard (`wireframe/dashboard.html`):**  
   Menampilkan navigasi samping (sidebar), bilah atas dengan jam JavaScript, 4 kartu ringkasan data, dan tabel peminjaman terkini.
3. **Wireframe Daftar Data Barang (`wireframe/daftar-barang.html`):**  
   Menampilkan tabel inventaris lengkap dengan tombol tambah data, kotak pencarian, badge status kondisi/ketersediaan, tombol aksi Edit/Hapus, serta komponen navigasi halaman (pagination).
4. **Wireframe Form Input Peminjaman (`wireframe/form-peminjaman.html`):**  
   Menampilkan formulir bertingkat dengan input nama peminjam, nomor identitas (NIM/NIDN), dropdown pemilihan barang, pemilih tanggal pinjam, batas kembali, dan textarea catatan.

---

## 6. Jadwal & Rencana Kerja Bertahap (Roadmap PjBL)

| Milestone | Minggu | Topik Pembelajaran | Target Utama |
| :--- | :---: | :--- | :--- |
| **Milestone 1** | 1–2 | Perencanaan & Wireframe | Identifikasi masalah, proposal fitur, wireframe antarmuka, struktur repo Git. |
| **Milestone 2** | 3–4 | Front-end & Interaktivitas | Implementasi antarmuka HTML/CSS responsif, validasi input, tampilan waktu JS. |
| **Milestone 3** | 5–6 | Autentikasi PHP | Pembuatan form login, session PHP, proteksi halaman, logout. |
| **Milestone 4** | 7–8 | Database & Read Data | Skema tabel MySQL, koneksi PHP-MySQL, pembacaan data ke dashboard & tabel. |
| **Milestone 5** | 9–10 | Create & Update Data | Form tambah/edit data inventaris dan peminjaman, validasi sisi server. |
| **Milestone 6** | 11–12 | Delete & Pagination AJAX | Fitur hapus data berkonfirmasi, pagination dengan jQuery AJAX, filter pencarian. |
| **Milestone 7** | 13–14 | Testing & Deployment | Pengujian sistem, penyelesaian bug, upload ke web hosting, dokumentasi akhir. |
