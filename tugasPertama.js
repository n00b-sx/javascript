// Menentukan nilai saldo akhir dari inputan user
function inputSaldo() {

  let saldoAwal = prompt(`Masukan saldo awal anda :`);
  let pengeluaran = prompt(`Masukan pengeluaran yang anda lakukan : `);

  const sisaSaldo = saldoAwal - pengeluaran;

  return alert(
    `Saldo awal anda adalah Rp.${saldoAwal}. Anda melakukan transaksi pengeluaran sebanyak Rp.${pengeluaran}. Sisa saldo anda adalah Rp.${sisaSaldo}`
  );

}

function tentukanHari() {

  let hari = new Date().getDay();

  switch (hari) {
    case 1:
      return alert(`Hari ini adalah hari Senin`);
    case 2:
      return alert(`Hari ini adalah hari Selasa`);
    case 3:
      return alert(`Hari ini adalah hari Rabu`);
    case 4:
      return alert(`Hari ini adalah hari Kamis`);
    case 5:
      return alert(`Hari ini adalah hari Jum'at`);
    case 6:
      return alert(`Hari ini adalah hari Sabtu`);
    case 7:
      return alert(`Hari ini adalah hari Minggu`);
  }

}
