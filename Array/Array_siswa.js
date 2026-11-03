
// 1. Pengenalan Array
const daftarSiswa = ["Andi", "Budi", "Citra", "Dewi"];

// 2. Membuat Array
const mataPelajaran = [
    "Pemrograman Web",
    "Basis Data",
    "Pemrograman Berorientasi Objek"
];

const nilaiUjian = [80, 85, 90, 75];

// 3. Mengakses Elemen Array
console.log("=== MENGAKSES ELEMEN ARRAY ===");

console.log(daftarSiswa[0]);
console.log(daftarSiswa[1]);
console.log(daftarSiswa[2]);

// Mengakses elemen terakhir
console.log(daftarSiswa[daftarSiswa.length - 1]);

// 4. Mengubah Elemen Array
daftarSiswa[1] = "Bayu";

console.log("=== MENGUBAH ELEMEN ARRAY ===");
console.log(daftarSiswa);

// Memperbarui nilai ujian
nilaiUjian[0] = 95;

console.log(nilaiUjian);

// 5. Properti length
console.log("=== PROPERTI LENGTH ===");

console.log("Jumlah siswa: " + daftarSiswa.length);
console.log("Jumlah mata pelajaran: " + mataPelajaran.length);
console.log("Jumlah nilai ujian: " + nilaiUjian.length);

// Memeriksa Array kosong
const daftarKosong = [];

if (daftarKosong.length === 0) {
    console.log("Array masih kosong");
}

// 6. Menggunakan length sebagai batas perulangan
console.log("=== DAFTAR SISWA ===");

for (let indeks = 0; indeks < daftarSiswa.length; indeks++) {
    console.log(daftarSiswa[indeks]);
}
