/*
    main.js
    PINJES - Sistem Peminjaman Inventaris Kampus
    ─────────────────────────────────────────────
    Fitur JavaScript:
    1. Jam dan tanggal real-time (format Indonesia)
    2. Validasi form input barang
    3. Pencarian data di tabel
    4. Konfirmasi hapus data
*/


// Tunggu sampai seluruh struktur HTML selesai dimuat browser
document.addEventListener('DOMContentLoaded', function() {


    // ═══════════════════════════════════════════
    // 1. JAM DAN TANGGAL REAL-TIME
    //    Ditampilkan di navbar bagian kanan atas
    // ═══════════════════════════════════════════

    var elemenJam = document.getElementById('realtime-clock');

    // daftar nama hari dan bulan dalam bahasa indonesia
    var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var namaBulan = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'
    ];

    function perbaruiJam() {
        if (!elemenJam) return;

        var skrg = new Date();

        var hari = namaHari[skrg.getDay()];
        var tgl  = skrg.getDate();
        var bln  = namaBulan[skrg.getMonth()];
        var thn  = skrg.getFullYear();

        // tambahkan angka 0 di depan kalau cuma 1 digit
        var jam   = String(skrg.getHours()).padStart(2, '0');
        var menit = String(skrg.getMinutes()).padStart(2, '0');
        var detik = String(skrg.getSeconds()).padStart(2, '0');

        elemenJam.textContent = hari + ', ' + tgl + ' ' + bln + ' ' + thn + '  •  ' + jam + ':' + menit + ':' + detik;
    }

    // panggil langsung biar nggak delay 1 detik pertama kali
    if (elemenJam) {
        perbaruiJam();
        setInterval(perbaruiJam, 1000);
    }


    // ═══════════════════════════════════════════
    // 2. VALIDASI FORM TAMBAH / EDIT BARANG
    //    Mencegah submit kalau ada field kosong
    // ═══════════════════════════════════════════

    var formBarang = document.getElementById('form-barang');
    var kotakNotif = document.getElementById('form-alert');

    if (formBarang) {
        formBarang.addEventListener('submit', function(e) {
            e.preventDefault();

            // ambil semua input yang perlu dicek
            var kode     = document.getElementById('kode_barang');
            var nama     = document.getElementById('nama_barang');
            var kategori = document.getElementById('kategori');
            var jumlah   = document.getElementById('jumlah');

            var valid = true;
            var daftarError = [];

            // bersihkan tanda error sebelumnya
            hapusSemuaError([kode, nama, kategori, jumlah]);

            // cek kode barang
            if (kode && kode.value.trim() === '') {
                tandaiError(kode, 'Kode barang harus diisi.');
                daftarError.push('Kode barang kosong');
                valid = false;
            }

            // cek nama barang (minimal 3 huruf)
            if (nama && nama.value.trim() === '') {
                tandaiError(nama, 'Nama barang harus diisi.');
                daftarError.push('Nama barang kosong');
                valid = false;
            } else if (nama && nama.value.trim().length < 3) {
                tandaiError(nama, 'Nama barang minimal 3 karakter.');
                daftarError.push('Nama barang terlalu pendek');
                valid = false;
            }

            // cek dropdown kategori
            if (kategori && (kategori.value === '' || kategori.value === 'Pilih Kategori')) {
                tandaiError(kategori, 'Pilih salah satu kategori.');
                daftarError.push('Kategori belum dipilih');
                valid = false;
            }

            // cek jumlah (angka, lebih dari 0)
            if (jumlah && (jumlah.value.trim() === '' || parseInt(jumlah.value) <= 0)) {
                tandaiError(jumlah, 'Jumlah harus lebih dari 0.');
                daftarError.push('Jumlah tidak valid');
                valid = false;
            }

            // tampilkan hasil validasi
            if (!valid) {
                if (kotakNotif) {
                    kotakNotif.className = 'notif notif-gagal tampil';
                    kotakNotif.textContent = 'Mohon periksa: ' + daftarError.join(', ') + '.';
                }
            } else {
                if (kotakNotif) {
                    kotakNotif.className = 'notif notif-sukses tampil';
                    kotakNotif.textContent = 'Data berhasil disimpan! Mengalihkan ke halaman daftar barang...';
                }
                // redirect ke halaman daftar barang setelah 1 detik
                setTimeout(function() {
                    window.location.href = 'data-barang.html';
                }, 1200);
            }
        });
    }


    // ═══════════════════════════════════════════
    // 3. PENCARIAN LIVE DI TABEL
    //    Langsung filter baris saat user mengetik
    // ═══════════════════════════════════════════

    var inputCari = document.getElementById('search-barang');
    var bodyTabel = document.querySelector('.tabel-data tbody');

    if (inputCari && bodyTabel) {
        inputCari.addEventListener('keyup', function() {
            var kata = inputCari.value.toLowerCase();
            var baris = bodyTabel.querySelectorAll('tr');

            for (var i = 0; i < baris.length; i++) {
                var teks = baris[i].textContent.toLowerCase();
                if (teks.indexOf(kata) !== -1) {
                    baris[i].style.display = '';
                } else {
                    baris[i].style.display = 'none';
                }
            }
        });
    }

});


// fungsi bantu: tandai field input yang error
function tandaiError(elemen, pesan) {
    if (!elemen) return;
    elemen.classList.add('error');
    var pesanEl = elemen.parentElement.querySelector('.pesan-error');
    if (pesanEl) {
        pesanEl.textContent = pesan;
        pesanEl.classList.add('tampil');
    }
}

// fungsi bantu: hapus semua tanda error
function hapusSemuaError(daftar) {
    for (var i = 0; i < daftar.length; i++) {
        if (daftar[i]) {
            daftar[i].classList.remove('error');
            var pesanEl = daftar[i].parentElement.querySelector('.pesan-error');
            if (pesanEl) {
                pesanEl.classList.remove('tampil');
            }
        }
    }
}

// fungsi: konfirmasi sebelum menghapus data
function konfirmasiHapus(namaBarang) {
    var yakin = confirm('Yakin mau menghapus "' + namaBarang + '" dari daftar inventaris?');
    if (yakin) {
        alert('"' + namaBarang + '" berhasil dihapus (simulasi front-end saja, nanti akan dihubungkan ke PHP).');
    }
    return false;
}
