function updateWaktu() {
    const sekarang = new Date();

    const opsiTanggal = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    const tanggalStr = sekarang.toLocaleDateString('id-ID', opsiTanggal);

    const jam = String(sekarang.getHours()).padStart(2, '0');
    const menit = String(sekarang.getMinutes()).padStart(2, '0');
    const detik = String(sekarang.getSeconds()).padStart(2, '0');
    const jamStr = jam + ':' + menit + ':' + detik;

    const elemenJam = document.getElementById('jam');
    if (elemenJam) {
        elemenJam.innerText = tanggalStr + ' - ' + jamStr;
    }
}

updateWaktu();

setInterval(updateWaktu, 1000);
