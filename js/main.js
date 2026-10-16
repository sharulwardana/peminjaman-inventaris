/* ============================================================
   PINJES - JavaScript Milestone 2
   Fitur: Tampilan Jam & Tanggal Real-Time
   ============================================================ */

// Array nama hari dan bulan dalam Bahasa Indonesia
var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var namaBulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

document.addEventListener('DOMContentLoaded', function () {

    var elemenJam = document.getElementById('realtime-clock');

    function perbaruiJam() {
        if (!elemenJam) return;

        var sekarang = new Date();

        // 1. Ambil data hari, tanggal, bulan, tahun
        var hari = namaHari[sekarang.getDay()];
        var tanggal = sekarang.getDate();
        var bulan = namaBulan[sekarang.getMonth()];
        var tahun = sekarang.getFullYear();

        // 2. Ambil data jam, menit, detik (format 2 digit)
        var jam = String(sekarang.getHours()).padStart(2, '0');
        var menit = String(sekarang.getMinutes()).padStart(2, '0');
        var detik = String(sekarang.getSeconds()).padStart(2, '0');

        // 3. Tampilkan ke elemen HTML
        elemenJam.textContent = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun + '  •  ' + jam + ':' + menit + ':' + detik;
    }

    // Jalankan pertama kali saat halaman dimuat
    if (elemenJam) {
        perbaruiJam();
        // Jalankan ulang setiap 1000 milidetik (1 detik)
        setInterval(perbaruiJam, 1000);
    }

});
