var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// Angkot beroperasi
while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  noAngkot++;
}

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
}