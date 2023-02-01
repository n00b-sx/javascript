function jumlahVolumeKubus(k1, k2) {
  // Cari sisi masing-masing kubus
  s1 = k1 / 4;
  s2 = k2 / 4;

  // Cari volume Kubus
  v1 = Math.pow(s1, 3);
  v2 = Math.pow(s2, 3);

  // Jumlahkan volume kubus
  jmlVlm = v1 + v2;

  return jmlVlm;
}

var keliling1 = prompt('Masukan keliling kubus 1');
var keliling2 = prompt('Masukan keliling kubus 2');

var hasil = jumlahVolumeKubus(parseInt(keliling1), parseInt(keliling2));
alert('Hasil dari penjumlahan dari dua buah kubus di atas adalah : ' + hasil);

