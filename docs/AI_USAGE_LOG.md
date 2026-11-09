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
* **Tujuan:** Belajar menampilkan tanggal dan jam real-time berbahasa Indonesia dengan JavaScript sederhana.
* **Prompt:**
  "Bagaimana cara menampilkan tanggal dan jam digital real-time di halaman web dengan format bahasa Indonesia menggunakan JavaScript sederhana?"
* **Hasil dari AI:**
  ```javascript
  function tampilkanWaktu() {
      const sekarang = new Date();
      const opsiTanggal = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
      const tanggalStr = sekarang.toLocaleDateString('id-ID', opsiTanggal);
      const jam = String(sekarang.getHours()).padStart(2, '0');
      const menit = String(sekarang.getMinutes()).padStart(2, '0');
      const detik = String(sekarang.getSeconds()).padStart(2, '0');
      const jamStr = `${jam}:${menit}:${detik}`;
      document.getElementById('jam').innerText = `${tanggalStr} - ${jamStr}`;
  }
  setInterval(tampilkanWaktu, 1000);
  ```
* **Bagian yang dibantu AI:** Kerangka fungsi jam di `js/main.js`, yaitu pemakaian `toLocaleDateString('id-ID')`, `padStart(2, '0')`, dan `setInterval`.
* **Penjelasan cara kerja kode (bahasa sendiri):** `new Date()` mengambil waktu dari komputer pengguna. `'id-ID'` membuat nama hari dan bulan otomatis berbahasa Indonesia, jadi tidak perlu membuat array nama hari sendiri. `padStart(2, '0')` membuat angka selalu dua digit (09, bukan 9). `setInterval(updateWaktu, 1000)` menjalankan fungsi tiap 1 detik supaya jam terus berjalan tanpa me-refresh halaman.
* **Perubahan yang dilakukan:** Nama fungsi diganti menjadi `updateWaktu()`. Kami menambahkan `if (elemenJam)` supaya tidak error di halaman tanpa elemen jam, seperti halaman login. Hasilnya dihubungkan ke elemen `<div id="jam" class="jam">` di header, dan fungsi dipanggil sekali saat halaman dibuka supaya jam langsung tampil.
* **Hasil pengujian:** Jam dan tanggal tampil dan berdetik di header halaman yang punya header, berformat bahasa Indonesia, dan konsol browser tidak menampilkan error. Diuji di Google Chrome dan Mozilla Firefox.