# Log Penggunaan AI (AI Usage Log)
**Mata Kuliah:** Pemrograman Berbasis Web  
**Proyek:** PINJES (Sistem Informasi Peminjaman Inventaris)  
**Kelompok:** Adam Mahfud & Daffa Dhiya Ulhaq

---

## Milestone 1 — Perencanaan Proyek

### Catatan 1
* **Tanggal:** 9 Oktober 2026
* **Tujuan:**  
  Mencari referensi masalah yang sering terjadi kalau peminjaman barang di kampus masih dicatat manual.
* **Prompt:**  
  "Apa saja kendala nyata yang sering terjadi jika peminjaman barang inventaris di kampus seperti proyektor dan alat lab masih dicatat secara manual di buku?"
* **Hasil dari AI:**  
  Poin-poin: buku catatan gampang hilang/rusak, status barang keluar-masuk susah dipantau, keterlambatan pengembalian nggak terdeteksi karena nggak ada rekapan digital.
* **Pemahaman saya:**  
  Dari pengalaman sendiri di kampus, kalau mau pinjam proyektor atau alat lab memang sering nggak jelas statusnya. Petugasnya harus buka lemari satu-satu buat ngecek. Buku catatannya juga kadang terselip di bawah tumpukan berkas lain.
* **Yang saya ubah:**  
  Poin-poinnya saya susun ulang pakai bahasa saya sendiri dan saya masukkan ke bagian Latar Belakang Masalah di `README.md`.
* **Hasil:**  
  Bagian latar belakang jadi lebih kuat dan relevan dengan kondisi nyata di kampus.

---

### Catatan 2
* **Tanggal:** 9 Oktober 2026
* **Tujuan:**  
  Belajar fungsi file `.gitignore` untuk proyek web yang baru diinisialisasi.
* **Prompt:**  
  "Apa fungsi file .gitignore pada repository Git dan file apa saja yang sebaiknya dimasukkan ke dalamnya untuk proyek web pemula?"
* **Hasil dari AI:**  
  `.gitignore` gunanya menyaring file yang nggak perlu masuk ke repositori, misalnya folder `.vscode/`, file `Thumbs.db` dari Windows, atau `.DS_Store` dari Mac.
* **Pemahaman saya:**  
  Tanpa `.gitignore`, file-file sampah dari komputer lokal akan ikut terunggah ke Git dan bikin repo berantakan. Makanya penting dibuat sejak commit pertama.
* **Yang saya ubah:**  
  Saya buat file `.gitignore` sendiri di folder utama proyek, isinya cuma yang relevan buat proyek kami (file editor dan file temp OS).
* **Hasil:**  
  Repo Git bersih dari file-file yang nggak relevan.

---

## Milestone 2 — Front-End & Interaksi Dasar

### Catatan 3
* **Tanggal:** 12 Oktober 2026
* **Tujuan:**  
  Mempelajari cara menampilkan jam dan tanggal secara real-time di halaman web pakai JavaScript.
* **Prompt:**  
  "Bagaimana cara bikin jam digital real-time di halaman web pakai JavaScript murni yang formatnya bahasa Indonesia?"
* **Hasil dari AI:**  
  Contoh penggunaan `new Date()` untuk ambil waktu dari komputer, `getDay()` buat ambil indeks hari, `getMonth()` buat indeks bulan, lalu `setInterval()` dengan jeda 1000ms (1 detik) biar jamnya update terus.
* **Pemahaman saya:**  
  Objek `Date` di JavaScript itu ngambil waktu dari komputer user, bukan dari server. `getDay()` dan `getMonth()` hasilnya berupa angka (indeks), jadi harus dicocokin manual sama array nama hari/bulan Indonesia. `setInterval` fungsinya menjalankan fungsi tertentu berulang-ulang setiap sekian milidetik.
* **Yang saya ubah:**  
  Saya tulis ulang fungsinya di `js/main.js` dengan nama fungsi bahasa Indonesia (`perbaruiJam`), pakai `padStart(2, '0')` biar angka jam/menit/detik selalu 2 digit, dan format outputnya saya sesuaikan jadi "Senin, 12 Okt 2026 • 10:30:45". Lalu saya sambungkan ke elemen `<div id="realtime-clock">` yang ada di navbar tiap halaman.
* **Hasil:**  
  Jam digital jalan lancar di semua halaman, update setiap detik tanpa error di konsol browser.

---

### Catatan 4
* **Tanggal:** 12 Oktober 2026
* **Tujuan:**  
  Mempelajari cara validasi form di sisi browser supaya kolom wajib nggak bisa disubmit kosong.
* **Prompt:**  
  "Gimana cara bikin validasi form HTML sederhana pakai JavaScript tanpa library, biar muncul pesan error kalau inputnya kosong?"
* **Hasil dari AI:**  
  Penjelasan tentang `event.preventDefault()` untuk mencegah halaman reload saat tombol submit diklik, pengecekan `input.value.trim()` untuk cek apakah isian kosong, dan penambahan class CSS untuk menandai input yang error.
* **Pemahaman saya:**  
  Kalau form di-submit tanpa `preventDefault()`, halaman langsung reload dan user nggak sempat lihat pesan errornya. Dengan JavaScript, kita bisa tahan dulu submit-nya, cek satu-satu tiap input, kalau ada yang kosong kita tandai inputnya (misalnya border jadi merah), dan baru boleh submit kalau semuanya sudah terisi.
* **Yang saya ubah:**  
  Saya sesuaikan nama ID input dengan field yang kita pakai (`kode_barang`, `nama_barang`, `kategori`, `jumlah`). Pesan error saya tulis dalam bahasa Indonesia yang jelas. Kalau validasi lolos, saya tambahkan notifikasi sukses warna hijau dan redirect otomatis ke halaman daftar barang setelah 1 detik.
* **Hasil:**  
  Form tambah dan edit barang berhasil menolak input kosong dengan tampilan error yang jelas, dan menampilkan pesan sukses kalau data lengkap.
