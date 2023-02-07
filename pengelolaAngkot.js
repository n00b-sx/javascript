var penumpang = ['Alul', undefined, 'Wati'];

function tambahPenumpang(namaPenumpang, penumpang) {
  // jika penumpang kosong
  if (penumpang.length === 0) {
    // tambahkan penumpang
    penumpang.push(namaPenumpang);
    // kembalikan array penumpang dan berhentikan function
    return penumpang;
  } else {
    // telusuri isi angkot
    for (var i = 0; i < penumpang.length; i++) {
      // jika penumpang sudah ada tampilkan pesan error
      if (penumpang[i] === namaPenumpang) {
        console.log('Penumpang atas nama ' + namaPenumpang + ' sudah berada di dalam angkot');
        // kembalikan array penumpang dan berhentikan function
        return penumpang;
      } else if (penumpang[i] == undefined) { //jika ada tempat yang kosong isi tempat yang kosong dengan penumpang baru
        penumpang[i] = namaPenumpang;
        // kembalikan array penumpang dan berhentikan function
        return penumpang;
      } else if (i == penumpang.length - 1) { //jika penumpang sudah penuh, tambahkan penumpang di akhir tempat duduk
        penumpang.push(namaPenumpang);
        // kembalikan array penumpang dan berhentikan function
        return penumpang;
      }
    }
  }
}

function penumpangTurun(namaPenumpang, penumpang) {
  // Jika penumpang kosong
  if (penumpang.length == 0) {
    // berikan info bahwa tidak ada penumpang di dalam angkot
    console.log('Tidak ada penumpang di dalam angkot');
  } else {
    // telusuri seluruh penumpang
    for (var i = 0; i < penumpang.length; i++) {
      // turunkan penumpang
      if (penumpang[i] == namaPenumpang) {
        // keluarkan penumpang
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada penumpang yang di cari tampilkan pesan tidak ada penumpang dengan nama yang disebutkan
        console.log(`${namaPenumpang} tidak ada di dalam daftar nama penumpang`);
        return penumpang;
      }
    }
  }
  return penumpang;
}