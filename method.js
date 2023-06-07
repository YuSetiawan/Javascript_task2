// 1 toUpperCase() => mengubah string menjadi huruf kapital
let nama = 'yusuf ucup';
const namaKapital = nama.toUpperCase();
console.log(namaKapital);

// 2 toLowerCase() => mengubah string menjadi huruf kecil
let panggilan = 'uCuP';
const namaLower = panggilan.toLowerCase();
console.log(namaLower);

// 3 unshift() => menambahkan satu atau beberapa element di awal array
const olahraga = ['jogging', 'swimming', 'cycling', 'boxing'];
olahraga.unshift('climbing', 'hiking');
console.log(olahraga);

// 4 push() =>  menambahkan satu atau beberapa element ke akhir array.
const olah = ['jogging', 'swimming', 'cycling', 'boxing'];
olah.push('climbing', 'hiking');
console.log(olah);

// 5 shift() => menghapus element pertama pada array
const sports = ['jogging', 'swimming', 'cycling', 'boxing'];
sports.shift();
console.log(sports);

// 6 pop() => menghapus element terakhir pada array
const sprt = ['jogging', 'swimming', 'cycling', 'boxing'];
sprt.pop();
console.log(sprt);

// 7 charAt() => mengembalikan/menampilkan karakter pada sebuah index dalam string
let text = 'belajar method';
const letter = text.charAt(4);
console.log(letter);

// 8 concat() => menggabungkan 2 string atau lebih
let sosok = 'yusuf';
let aktivitas = 'berolahraga';
let sport = ['jogging', 'juga', 'renang'];
const saya = sosok.concat(aktivitas, sport);
console.log(saya);

// 9 replace() => mengganti data lama menjadi data baru
let js = 'JavaScript';
const repl = js.replace('Java', 'Ecma');
console.log(repl);

// 10 toString() => mengubah tipe data menjadi string
const spr = ['jogging', 'swimming', 'cycling', 'boxing'];
const keString = spr.toString();
console.log(keString);
