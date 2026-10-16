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

        var hari = namaHari[sekarang.getDay()];
        var tanggal = sekarang.getDate();
        var bulan = namaBulan[sekarang.getMonth()];
        var tahun = sekarang.getFullYear();

        var jam = String(sekarang.getHours()).padStart(2, '0');
        var menit = String(sekarang.getMinutes()).padStart(2, '0');
        var detik = String(sekarang.getSeconds()).padStart(2, '0');

        elemenJam.textContent = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun + '  •  ' + jam + ':' + menit + ':' + detik;
    }

    if (elemenJam) {
        perbaruiJam();
        setInterval(perbaruiJam, 1000);
    }

});
