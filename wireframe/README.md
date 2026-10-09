# Rancangan Wireframe Antarmuka Sistem (PINJES)
> Dikerjakan oleh: **Muhammad Daffa Dhiya Ulhaq (A11.2025.16515)**  
> Berkas Wireframe: [`wireframe/index.html`](index.html)

---

## Deskripsi Wireframe
Wireframe antarmuka sistem **PINJES** dirancang menggunakan HTML dan CSS terpadu dalam satu berkas prototipe interaktif (*Single Page Prototype*) agar dosen maupun tim dapat menguji langsung alur antarmuka di peramban tanpa instalasi tambahan.

### Halaman Inti yang Dirancang:
1. **Halaman Login (`#login-page`):**  
   * Form autentikasi petugas kampus (input email/username dan kata sandi).
   * Tombol "Masuk" yang langsung mensimulasikan alur transisi menuju tampilan dashboard.
2. **Halaman Dashboard (`#view-dashboard`):**  
   * Bilah atas (*navbar*) memuat logo PINJES, jam *real-time* berbasis JavaScript, dan profil admin.
   * Menu navigasi samping (*sidebar*): Beranda, Kategori Barang, Kelola Barang, Transaksi Peminjaman, dan Keluar.
   * 4 kartu statistik: Total Barang (124), Barang Tersedia (102), Sedang Dipinjam (22), dan Total Transaksi (845).
   * Area ringkasan aktivitas peminjaman terbaru.
3. **Halaman Daftar Data Barang (`#view-data`):**  
   * Header tabel dilengkapi kotak pencarian nama barang dan tombol "+ Tambah Barang".
   * Tabel daftar barang memuat kolom No, Nama Barang, Kategori, Status (*badge* Tersedia / Dipinjam), serta tombol aksi Edit dan Hapus.
   * Komponen navigasi pembagian halaman (*pagination*).
4. **Halaman Form Tambah Data (`#view-form`):**  
   * Formulir input barang baru mencakup nama barang, pemilihan kategori, dan deskripsi kondisi fisik barang.
   * Tombol aksi "Simpan Barang" dan "Batal".

---

## Cara Menjalankan Wireframe
1. Buka folder `wireframe/`.
2. Klik dua kali pada berkas `index.html` untuk membukanya di browser (Google Chrome, Microsoft Edge, Mozilla Firefox).
3. Klik tombol **"Masuk"** pada halaman login untuk masuk ke dashboard.
4. Gunakan menu sidebar atau tombol di halaman untuk berpindah antar-tampilan (Beranda &rarr; Kelola Barang &rarr; Tambah Barang).
