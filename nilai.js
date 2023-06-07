const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
  try {
    // validasi jumlah data
    callback(nilaiAwal, nilaiAkhir, dataArray,)

    // main function
    let result = dataArray.filter((num) => {
      return num > nilaiAwal && num < nilaiAkhir;
    });
    let data = result.sort((a, b) => a - b);
    if (!data.length) throw 'Nilai tidak ditemukan';
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// validasi
function validation(nilaiAwal, nilaiAkhir, dataArray,) {
  try {
    // validasi jumlah data
    if (nilaiAwal > nilaiAkhir) throw 'Nilai akhir harus lebih besar dari nilai awal';
    if (dataArray.length < 5) throw 'Jumlah angka dalam dataArray harus lebih dari 5';
  } catch (error) {
    console.log(error);
  }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8], validation);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8], validation);
seleksiNilai(5, 17, [2, 25, 4], validation);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18], validation);
