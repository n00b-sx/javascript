var tanya = true;

while (tanya) {
  // Mengambil data dari user
  var p = prompt('Masukan pilihan Player 1 \n Cth : Gunting, Kertas atau Batu');

  // Menangkap pilihan komputer
  // Membangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.3) {
    var c = "Gunting";
  } else if (comp > 0.3 && comp < 0.6) {
    var c = "Kertas";
  } else {
    var c = "Batu";
  }

  // Menentukan rules/aturan
  switch (p) {
    case "Gunting":
      if (c == "Gunting") {
        var hasil = "Seri";
      } else if (c == "Kertas") {
        var hasil = "Menang";
      } else if (c == "Batu") {
        var hasil = "kalah";
      }
      break;
    case "Kertas":
      if (c == "Gunting") {
        var hasil = "Kalah";
      } else if (c == "Kertas") {
        var hasil = "Seri";
      } else if (c == "Batu") {
        var hasil = "Menang";
      }
      break;
    case "Batu":
      if (c == "Gunting") {
        var hasil = "Menang";
      } else if (c == "Kertas") {
        var hasil = "Kalah";
      } else if (c == "Batu") {
        var hasil = "Seri";
      }
      break;
  }

  // tampilkan hasilnya
  alert(p + ' vs ' + c + '\n Hasil pertandingan : ' + hasil);

  tanya = confirm('Mau main lagi ?');

}

alert('Terima kasih :)');