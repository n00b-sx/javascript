var jmlAngkot = 14;
var angkotBeroperasi = 8;
var noAngkot = 1;
var angkotLembur = 6;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot === angkotLembur) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur');
  } else if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
  }
}