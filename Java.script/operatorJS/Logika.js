/*logika && */
let usia = 18;
let punyaKTP= true;

let bolehMasuk = usia >= 17 && punyaKTP;
console.log(bolehMasuk);


/*logika ||*/
const umur = 60;
const anggota = false;

const mendapatDiskon =
umur >=55 || anggota === true;
console.log(mendapatDiskon);


/* logika !*/
const sudahLogin = false;
if (!sudahLogin){
console.log("silahkan login terlebih dahulu.")
}