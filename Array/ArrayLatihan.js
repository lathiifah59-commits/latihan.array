
// Soal 1 - Membuat Array

const daftarSiswa = ["Andi", "Budi", "Citra", "Dewi", "Eko"];

const nilaiUjian = [80, 85, 90, 75, 88];

const mataPelajaran = [
    "Pemrograman Web",
    "Basis Data",
    "Matematika",
    "Bahasa Indonesia"
];

console.log("Daftar Siswa:");
console.log(daftarSiswa);

console.log("Nilai Ujian:");
console.log(nilaiUjian);

console.log("Mata Pelajaran:");
console.log(mataPelajaran);


// Soal 2 - Mengakses Elemen Array

const bahasaPemrograman = [
    "JavaScript",
    "Python",
    "Java",
    "PHP",
    "C++"
];

console.log("Bahasa pertama:");
console.log(bahasaPemrograman[0]);

console.log("Bahasa ketiga:");
console.log(bahasaPemrograman[2]);

console.log("Bahasa terakhir:");
console.log(bahasaPemrograman[bahasaPemrograman.length - 1]);

console.log("Indeks 7:");
console.log(bahasaPemrograman[7]);


// Soal 3 - Mengubah Elemen Array

const nilai = [80, 75, 70, 85, 90];

nilai[1] = 88;
nilai[2] = 78;

console.log("Nilai setelah diubah:");
console.log(nilai);

console.log("Nilai pertama:");
console.log(nilai[0]);

console.log("Nilai terakhir:");
console.log(nilai[nilai.length - 1]);


// Soal 4 - Properti length

const daftarProduk = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

console.log("Jumlah produk:");
console.log(daftarProduk.length);

console.log("Indeks produk terakhir:");
console.log(daftarProduk.length - 1);

console.log("Nama produk terakhir:");
console.log(daftarProduk[daftarProduk.length - 1]);

console.log("Produk tengah sebelah kiri:");
console.log(
    daftarProduk[Math.floor((daftarProduk.length - 1) / 2)]
);


// Soal 5 - Studi Kasus Data Siswa

const namaSiswa = ["Andi", "Budi", "Citra", "Dewi", "Eko"];

const nilaiSiswa = [80, 75, 90, 85, 70];

console.log("Jumlah siswa:");
console.log(namaSiswa.length);

console.log("Siswa pertama:");
console.log(namaSiswa[0]);
console.log(nilaiSiswa[0]);

console.log("Siswa terakhir:");
console.log(namaSiswa[namaSiswa.length - 1]);
console.log(nilaiSiswa[nilaiSiswa.length - 1]);

// Memperbarui nilai Budi
nilaiSiswa[1] = 88;

// Memperbarui nilai Eko
nilaiSiswa[4] = 82;

console.log("Siswa ketiga:");
console.log(namaSiswa[2]);
console.log(nilaiSiswa[2]);

console.log("Seluruh nama siswa setelah pembaruan:");
console.log(namaSiswa);

console.log("Seluruh nilai siswa setelah pembaruan:");
console.log(nilaiSiswa);
