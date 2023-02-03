// 1. Menambahkan Array
var guru = [];
guru[0] = "Wati";
guru[1] = "Riri";
guru[2] = "Opi";
guru[3] = "Mey";

console.log(guru);

// 2. Menghapus Array
guru[2] = undefined;

console.log(guru);

// 3. Menampilkan Array

for (var i = 0; i < guru.length; i++) {
  console.log(guru[i]);
}
