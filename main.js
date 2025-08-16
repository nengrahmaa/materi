// 1. Function Declaration
function sambutan() {
    console.log("Selamat datang di sistem pendaftaran siswa!");
}

// 2. Function Expression
let validasiNama = function (nama) {
    return nama.trim().length > 1;
};

let nama = "        ama         ";


// 3. Arrow Function
let umurValid = (umur) => umur >= 5 && umur <= 25;

// 4. Callback Function
function mulaiPendaftaran(callback) {
    console.log(" Memulai proses pendaftaran...");
    callback();
    console.log("Proses selesai.\n");
}

// Array kosong untuk menampung data
let siswa = [];

// Fungsi untuk mendaftarkan 3 siswa 
function daftarSiswaManual() {
    // Siswa 1
    let nama1 = prompt("Masukkan nama siswa pertama:");
    let umur1 = parseInt(prompt("Masukkan umur " + nama1 + ":"));
    if (validasiNama(nama1) && umurValid(umur1)) {
        siswa.push([nama1, umur1]);
    }

    // Siswa 2
    let nama2 = prompt("Masukkan nama siswa kedua:");
    let umur2 = parseInt(prompt("Masukkan umur " + nama2 + ":"));
    if (validasiNama(nama2) && umurValid(umur2)) {
        siswa.push([nama2, umur2]);
    }

    // Siswa 3
    let nama3 = prompt("Masukkan nama siswa ketiga:");
    let umur3 = parseInt(prompt("Masukkan umur " + nama3 + ":"));
    if (validasiNama(nama3) && umurValid(umur3)) {
        siswa.push([nama3, umur3]);
    }
}

// Fungsi untuk menampilkan semua siswa
function tampilkanSemua() {
    console.log(" Daftar Siswa:");
    if (siswa[0]) console.log("1. " + siswa[0][0] + " (" + siswa[0][1] + " tahun)");
    if (siswa[1]) console.log("2. " + siswa[1][0] + " (" + siswa[1][1] + " tahun)");
    if (siswa[2]) console.log("3. " + siswa[2][0] + " (" + siswa[2][1] + " tahun)");
}

// Destructuring contoh
function contohDestructuring() {
    if (siswa[0]) {
        let [nama, umur] = siswa[0];
        console.log(`Contoh Destructuring → Nama: ${nama}, Umur: ${umur}`);
        // console.log("contoh destructuring nama : " + nama + "umur : " + umur); //cara mencetak
    }
}

// Filter siswa < 18 tahun (tanpa loop, hanya manual)
function tampilkanRemaja() {
    console.log(" Siswa di bawah 18 tahun:");
    if (siswa[0] && siswa[0][1] < 18) console.log(siswa[0][0] + " (" + siswa[0][1] + ")");
    if (siswa[1] && siswa[1][1] < 18) console.log(siswa[1][0] + " (" + siswa[1][1] + ")");
    if (siswa[2] && siswa[2][1] < 18) console.log(siswa[2][0] + " (" + siswa[2][1] + ")");
}

// Sort manual 
function urutkanSiswa() {
    // Urut berdasarkan nama (localeCompare)
    siswa.sort((a, b) => a[0].localeCompare(b[0]));
    console.log("Setelah diurutkan:");
    tampilkanSemua();
}



// ==============================
// EKSEKUSI PROGRAM
// ==============================
sambutan();
mulaiPendaftaran(daftarSiswaManual);
tampilkanSemua();
tampilkanRemaja();
urutkanSiswa();
cariNama();
contohDestructuring();
