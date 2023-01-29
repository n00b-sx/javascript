var jmlAngkot = 14;
var angkotBeroperasi = 8;
var noAngkot = 1;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur');
  } else if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
  }
}