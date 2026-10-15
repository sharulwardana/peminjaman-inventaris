// main.js - PINJES
// Isi: jam real-time, pencarian + filter tabel, validasi form, konfirmasi hapus

// data contoh untuk halaman edit (nanti diganti data dari database)
var dataBarang = {
    1: { kode: 'INV-EL-001', nama: 'Proyektor Epson EB-X05', kategori: 'Elektronik', jumlah: 3, kondisi: 'Baik', lokasi: 'Lemari Multimedia - Rak B1', keterangan: 'Kabel power 1.5m dan kabel VGA/HDMI lengkap dalam tas.' },
    2: { kode: 'INV-MM-002', nama: 'Kamera DSLR Canon EOS 90D', kategori: 'Multimedia', jumlah: 1, kondisi: 'Sangat Baik', lokasi: 'Lemari Multimedia - Rak A2', keterangan: 'Body, lensa kit, baterai 2, charger, dan tas kamera.' },
    3: { kode: 'INV-AU-003', nama: 'Mikrofon Wireless Shure BLX24', kategori: 'Audio', jumlah: 2, kondisi: 'Baik', lokasi: 'Lemari Audio - Rak 1', keterangan: 'Receiver, 2 mic genggam, dan baterai cadangan.' },
    4: { kode: 'INV-EL-004', nama: 'Presenter Pointer Logitech R400', kategori: 'Elektronik', jumlah: 4, kondisi: 'Baik', lokasi: 'Laci Sekretariat', keterangan: 'Dongle USB menempel di badan pointer.' },
    5: { kode: 'INV-LB-005', nama: 'Arduino Uno Starter Kit', kategori: 'Alat Laboratorium', jumlah: 10, kondisi: 'Baik', lokasi: 'Lab Mikrokontroler - Rak C', keterangan: 'Isi kit: board, kabel USB, breadboard, jumper, LED, resistor.' },
    6: { kode: 'INV-MM-006', nama: 'Tripod Kamera Takara ECO-193A', kategori: 'Multimedia', jumlah: 2, kondisi: 'Kurang Baik', lokasi: 'Lemari Multimedia - Rak B3', keterangan: 'Kunci kaki kendor, menunggu perbaikan.' }
};

var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];


document.addEventListener('DOMContentLoaded', function () {

    // --- jam real-time ---
    var elemenJam = document.getElementById('realtime-clock');

    function perbaruiJam() {
        var skrg = new Date();
        var jam = String(skrg.getHours()).padStart(2, '0');
        var menit = String(skrg.getMinutes()).padStart(2, '0');
        var detik = String(skrg.getSeconds()).padStart(2, '0');

        elemenJam.textContent = namaHari[skrg.getDay()] + ', ' + skrg.getDate() + ' ' +
            namaBulan[skrg.getMonth()] + ' ' + skrg.getFullYear() + '  •  ' +
            jam + ':' + menit + ':' + detik;
    }

    if (elemenJam) {
        perbaruiJam();
        setInterval(perbaruiJam, 1000);
    }


    // --- pencarian + filter tabel ---
    var inputCari = document.getElementById('search-barang');
    var pilihFilter = document.getElementById('filter-kolom');
    var bodyTabel = document.querySelector('.tabel-data tbody');
    var teksJumlah = document.getElementById('jumlah-tampil');
    var teksKosong = document.getElementById('data-kosong');

    function terapkanFilter() {
        var kata = inputCari.value.toLowerCase();
        var pilihan = '';
        var kolom = 0;

        if (pilihFilter) {
            pilihan = pilihFilter.value;
            kolom = parseInt(pilihFilter.getAttribute('data-kolom'));
        }

        var baris = bodyTabel.querySelectorAll('tr');
        var tampil = 0;

        for (var i = 0; i < baris.length; i++) {
            var cocokKata = baris[i].textContent.toLowerCase().indexOf(kata) !== -1;
            var cocokPilihan = true;

            if (pilihan !== '') {
                cocokPilihan = baris[i].cells[kolom].textContent.trim() === pilihan;
            }

            if (cocokKata && cocokPilihan) {
                baris[i].style.display = '';
                tampil++;
            } else {
                baris[i].style.display = 'none';
            }
        }

        if (teksJumlah) teksJumlah.textContent = tampil;
        if (teksKosong) teksKosong.style.display = (tampil === 0) ? 'block' : 'none';
    }

    if (inputCari && bodyTabel) {
        inputCari.addEventListener('input', terapkanFilter);
        if (pilihFilter) pilihFilter.addEventListener('change', terapkanFilter);
    }


    // --- halaman edit: isi form sesuai ?id= di alamat ---
    var formBarang = document.getElementById('form-barang');

    if (formBarang && document.body.getAttribute('data-halaman') === 'edit') {
        var id = new URLSearchParams(window.location.search).get('id');
        var barang = dataBarang[id];

        if (barang) {
            document.getElementById('kode_barang').value = barang.kode;
            document.getElementById('nama_barang').value = barang.nama;
            document.getElementById('kategori').value = barang.kategori;
            document.getElementById('jumlah').value = barang.jumlah;
            document.getElementById('kondisi').value = barang.kondisi;
            document.getElementById('lokasi').value = barang.lokasi;
            document.getElementById('keterangan').value = barang.keterangan;
        }
    }


    // --- validasi form tambah / edit barang ---
    var kotakNotif = document.getElementById('form-alert');

    if (formBarang) {
        formBarang.addEventListener('submit', function (e) {
            e.preventDefault();

            var kode = document.getElementById('kode_barang');
            var nama = document.getElementById('nama_barang');
            var kategori = document.getElementById('kategori');
            var jumlah = document.getElementById('jumlah');

            var daftarError = [];

            hapusSemuaError([kode, nama, kategori, jumlah]);

            if (kode.value.trim() === '') {
                tandaiError(kode, 'Kode barang harus diisi.');
                daftarError.push('kode barang kosong');
            }

            if (nama.value.trim() === '') {
                tandaiError(nama, 'Nama barang harus diisi.');
                daftarError.push('nama barang kosong');
            } else if (nama.value.trim().length < 3) {
                tandaiError(nama, 'Nama barang minimal 3 karakter.');
                daftarError.push('nama barang terlalu pendek');
            }

            if (kategori.value === '') {
                tandaiError(kategori, 'Pilih salah satu kategori.');
                daftarError.push('kategori belum dipilih');
            }

            if (jumlah.value.trim() === '' || parseInt(jumlah.value) <= 0) {
                tandaiError(jumlah, 'Jumlah harus lebih dari 0.');
                daftarError.push('jumlah tidak valid');
            }

            if (daftarError.length > 0) {
                kotakNotif.className = 'notif notif-gagal tampil';
                kotakNotif.textContent = 'Mohon periksa: ' + daftarError.join(', ') + '.';
            } else {
                kotakNotif.className = 'notif notif-sukses tampil';
                kotakNotif.textContent = 'Data tersimpan. Mengalihkan ke daftar barang...';

                setTimeout(function () {
                    window.location.href = 'data-barang.html';
                }, 1200);
            }
        });
    }

});


function tandaiError(elemen, pesan) {
    elemen.classList.add('error');
    var pesanEl = elemen.parentElement.querySelector('.pesan-error');
    pesanEl.textContent = pesan;
    pesanEl.classList.add('tampil');
}

function hapusSemuaError(daftar) {
    for (var i = 0; i < daftar.length; i++) {
        daftar[i].classList.remove('error');
        daftar[i].parentElement.querySelector('.pesan-error').classList.remove('tampil');
    }
}

function konfirmasiHapus(namaBarang) {
    var yakin = confirm('Hapus "' + namaBarang + '" dari daftar inventaris?');
    if (yakin) {
        alert('"' + namaBarang + '" dihapus. (Simulasi saja, belum terhubung ke database.)');
    }
}
