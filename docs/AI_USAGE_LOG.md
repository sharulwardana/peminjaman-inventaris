# Log Penggunaan AI (AI Usage Log)
**Mata Kuliah:** Pemrograman Berbasis Web  
**Proyek:** Sistem Informasi Peminjaman Inventaris (SIPINJAM)  
**Tahapan:** Milestone 1 (Perencanaan dan Persiapan Lingkungan Kerja)

---

### Catatan Penggunaan 1
* **Tanggal:** 9 Oktober 2026
* **Tujuan Penggunaan AI:**  
  Mendapatkan referensi struktur direktori proyek web PHP native yang rapi dan standar untuk memisahkan berkas aset, konfigurasi, dokumentasi, dan rancangan antarmuka.
* **Prompt / Pertanyaan:**  
  "Bagaimana susunan folder proyek web PHP native sederhana yang baik untuk tugas kuliah, agar file CSS, JS, konfigurasi database, dan dokumen perancangan terpisah secara rapi?"
* **Bagian yang Dihasilkan / Dibantu AI:**  
  Rekomendasi pemisahan folder menjadi `assets/`, `config/`, `docs/`, dan `wireframe/`.
* **Penjelasan Mahasiswa dengan Bahasa Sendiri:**  
  Pemisahan struktur folder bertujuan agar file-file dengan fungsi berbeda tidak tercampur dalam satu direktori utama. Folder `assets/` digunakan khusus untuk file statis seperti CSS dan JS yang dipanggil oleh peramban, folder `config/` digunakan untuk berkas logika internal seperti koneksi database, dan folder `docs/` digunakan untuk menyimpan berkas dokumentasi proposal.
* **Penyesuaian / Perbaikan oleh Mahasiswa:**  
  Menambahkan subfolder `wireframe/` khusus untuk menyimpan rancangan antarmuka Milestone 1 agar file HTML wireframe tidak bertabrakan dengan file PHP aplikasi yang akan dibangun pada milestone berikutnya.
* **Hasil Pengujian:**  
  Struktur folder berhasil dibuat dan tertata dengan rapi pada repositori Git proyek.

---

### Catatan Penggunaan 2
* **Tanggal:** 9 Oktober 2026
* **Tujuan Penggunaan AI:**  
  Mencari ide penataan tata letak (*layout*) wireframe untuk dashboard inventaris agar informasi status barang (tersedia vs dipinjam) dapat dilihat secara cepat oleh admin.
* **Prompt / Pertanyaan:**  
  "Komponen informasi apa saja yang umumnya ditampilkan pada dashboard sistem peminjaman barang inventaris agar informatif bagi admin?"
* **Bagian yang Dihasilkan / Dibantu AI:**  
  Saran komponen: kartu statistik ringkasan data di bagian atas (total barang, barang ada, barang keluar), widget jam/tanggal, serta tabel ringkas transaksi peminjaman terakhir.
* **Penjelasan Mahasiswa dengan Bahasa Sendiri:**  
  Dashboard adalah halaman pertama yang dilihat admin setelah berhasil login. Penempatan kartu statistik angka di bagian paling atas memudahkan admin mengetahui kondisi inventaris tanpa perlu membuka menu data barang satu per satu.
* **Penyesuaian / Perbaikan oleh Mahasiswa:**  
  Mengimplementasikan susunan kartu statistik dan tabel tersebut ke dalam file `wireframe/dashboard.html` dengan desain wireframe monokrom abu-abu yang sederhana dan mudah dipahami.
* **Hasil Pengujian:**  
  File `wireframe/dashboard.html` dibuka melalui browser dan seluruh elemen tata letak tampil proporsional serta mudah dibaca.
