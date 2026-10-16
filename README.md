# PINJES - Sistem Informasi Peminjaman Inventaris
> Proyek PjBL Pemrograman Berbasis Web  
> S1 Teknik Informatika - Universitas Dian Nuswantoro (UDINUS)  
> Milestone saat ini: **Milestone 2** (Front-End & Interaksi Dasar)

---

## Anggota Kelompok

| Nama | NIM | Peran |
| :--- | :--- | :--- |
| Mohammad Adam Mahfud | A11.2025.16614 | Anggota 1 |
| Muhammad Daffa Dhiya Ulhaq | A11.2025.16515 | Anggota 2 |

---

## Pembagian Tugas

### Milestone 1 — Perencanaan & Persiapan
* **Adam Mahfud:**
  * Identifikasi masalah nyata peminjaman barang di kampus dan manfaat digitalisasi sistem.
  * Analisis target pengguna (petugas inventaris & peminjam) serta kebutuhan mereka.
  * Menyusun daftar fitur utama yang akan dikembangkan sesuai panduan PjBL.
  * Inisialisasi repositori Git, `.gitignore`, dan struktur folder awal.
  * Menulis dokumentasi `README.md` dan proposal perencanaan proyek.
* **Daffa Dhiya Ulhaq:**
  * Merancang konsep wireframe antarmuka pengguna.
  * Membuat prototipe wireframe interaktif di `wireframe/index.html` (login, dashboard, tabel data, form tambah).

### Milestone 2 — Front-End & Interaksi Dasar
* **Adam Mahfud:**
  * Membuat halaman login statis (`index.html`) dengan tata letak dua kolom (panel aksen + form masuk).
  * Membuat halaman dashboard (`dashboard.html`) dengan sidebar terang, topbar sticky, ringkasan statistik, bar ketersediaan, dan tabel peminjaman terbaru.
  * Mengembangkan fitur jam dan tanggal real-time menggunakan JavaScript (`js/main.js`) yang menampilkan waktu format Indonesia di navbar.
  * Memperbarui dokumentasi README dan catatan AI Usage Log.
* **Daffa Dhiya Ulhaq:**
  * Membuat halaman daftar data barang (`data-barang.html`) dengan tabel, badge status, filter pencarian, dan pagination statis.
  * Membuat formulir tambah barang (`tambah-barang.html`) dan edit barang (`edit-barang.html`) dilengkapi validasi JavaScript.
  * Membuat halaman transaksi peminjaman (`peminjaman.html`).
  * Membangun desain stylesheet (`css/style.css`) yang responsif untuk semua halaman.
  * Mengembangkan validasi formulir dan dialog konfirmasi hapus data di JavaScript.

---

## Latar Belakang Masalah

Di lingkungan kampus, khususnya laboratorium praktikum, ruang perlengkapan prodi, maupun sekretariat organisasi mahasiswa, peminjaman barang inventaris (proyektor, kamera, pointer, kabel HDMI, modul praktikum) kebanyakan masih dicatat manual pakai buku agenda fisik.

Masalah yang sering muncul:
1. **Buku catatan gampang rusak atau hilang** — riwayat peminjaman sebelumnya jadi susah dicari kalau bukunya lecek atau terselip.
2. **Status ketersediaan barang nggak jelas** — petugas harus cek langsung ke lemari buat mastiin barang ada di tempat atau lagi dipinjam orang.
3. **Pengembalian sering telat tanpa terdeteksi** — nggak ada sistem yang ngingetin kapan batas waktu kembali, jadi barang sering nggak balik-balik.

### Tujuan Aplikasi
PINJES dirancang untuk:
* Mendigitalkan pencatatan keluar-masuk barang inventaris biar datanya tersimpan rapi.
* Membantu petugas memantau status barang secara cepat tanpa harus cek fisik ke lemari.
* Memberikan informasi ketersediaan barang ke mahasiswa/dosen yang mau meminjam.

---

## Target Pengguna

1. **Admin / Petugas Inventaris:** Orang yang mengelola data barang, mencatat transaksi peminjaman, dan mengupdate status barang kembali.
2. **Peminjam (Mahasiswa / Dosen):** Pihak yang meminjam barang untuk kegiatan perkuliahan atau acara kampus.

### Kebutuhan Pengguna
* Login untuk keamanan akses data.
* Dashboard yang menampilkan ringkasan jumlah barang (total, tersedia, dipinjam).
* Tabel data barang yang rapi dengan status kondisi dan ketersediaan.
* Form pencatatan peminjaman yang mudah diisi.
* Pencarian data dan konfirmasi sebelum menghapus.

---

## Fitur yang Direncanakan

1. **Login & Logout** — halaman autentikasi petugas.
2. **Dashboard** — statistik ringkas dan jam real-time.
3. **Manajemen Barang** — CRUD data barang inventaris (kode, nama, kategori, kondisi, status).
4. **Manajemen Peminjaman** — pencatatan sirkulasi barang, batas tanggal, status aktif.
5. **Pencarian & Konfirmasi** — filter data dan dialog konfirmasi hapus.

---

## Hasil Milestone 2

Halaman statis sudah selesai dibangun menggunakan **HTML**, **CSS murni**, dan **JavaScript**:

| Halaman | File | Deskripsi |
| :--- | :--- | :--- |
| Login | `index.html` | Form username/password, layout dua kolom |
| Dashboard | `dashboard.html` | Sidebar fixed, topbar dengan jam real-time, ringkasan statistik, tabel peminjaman terbaru |
| Daftar Barang | `data-barang.html` | Tabel inventaris, status, pencarian + filter kategori, pagination statis |
| Tambah Barang | `tambah-barang.html` | Form input barang baru + validasi JavaScript |
| Edit Barang | `edit-barang.html` | Form perbarui data barang + validasi |
| Peminjaman | `peminjaman.html` | Daftar transaksi peminjaman aktif |

### Fitur JavaScript (Milestone 2):
* **Jam & tanggal real-time** — menampilkan hari, tanggal, bulan, tahun, serta jam di navbar atas yang diperbarui otomatis setiap detik dalam format Bahasa Indonesia.

---

## Struktur Folder

```
peminjaman-inventaris/
├── css/
│   └── style.css              # stylesheet utama
├── js/
│   └── main.js                # jam realtime, validasi, pencarian
├── docs/
│   └── AI_USAGE_LOG.md        # catatan penggunaan AI
├── wireframe/
│   └── index.html             # prototipe wireframe (milestone 1)
├── index.html                 # halaman login
├── dashboard.html             # halaman dashboard
├── data-barang.html           # halaman daftar barang
├── tambah-barang.html         # form tambah barang
├── edit-barang.html           # form edit barang
├── peminjaman.html            # halaman transaksi peminjaman
├── .gitignore
└── README.md
```

---

## Cara Menjalankan

Aplikasi ini masih berupa halaman statis (belum ada backend/database), jadi tinggal:
1. Buka folder `peminjaman-inventaris/`
2. Klik dua kali file `index.html` di browser (Chrome, Firefox, Edge)
3. Klik tombol **Masuk ke Dashboard** untuk masuk dan menjelajahi semua menu

---

## Riwayat Commit

### Milestone 1:
1. `feat: inisialisasi struktur folder awal dan konfigurasi gitignore`
2. `docs: menambahkan proposal perencanaan proyek dan dokumentasi README milestone 1`
3. `ui: membuat rancangan wireframe antarmuka login, dashboard, daftar data, dan form`
4. `ui: integrasi hasil wireframe antarmuka interaktif PINJES dari rekan kelompok`
5. `chore: perapian berkas gitignore dan struktur dokumentasi milestone 1`
6. `docs: sinkronisasi catatan log penggunaan AI dengan berkas proyek`

### Milestone 2:
7. `feat: membuat halaman login statis dan file css utama`
8. `feat: membuat halaman dashboard dengan layout sidebar dan kartu statistik`
9. `feat: membuat halaman data barang, form tambah dan edit barang`
10. `feat: menambahkan javascript jam realtime dan validasi form`
11. `docs: memperbarui readme dan ai usage log untuk milestone 2`
