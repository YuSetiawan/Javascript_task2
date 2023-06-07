const name = [
  'Abigail', 'Alexandra', 
  'Alison', 'Amanda', 
  'Angela', 'Bella', 
  'Carol', 'Caroline', 
  'Carolyn', 'Deirdre', 
  'Diana', 'Elizabeth', 
  'Ella', 'Faith', 
  'Olivia', 'Penelope'
];

// perintah untuk cari nama
const mainSearch = (str, limit, callback) => {
  callback(str, limit);
  let result = name.filter((name) => name.toLowerCase().indexOf(str) != -1).slice(0, limit);
  if (!result.length) return;
  console.log(result);
};
// validasi
function validation(str, limit) {
  try {
    if (typeof str !== 'string') throw 'input harus string';
    if (isNaN(limit)) throw 'input harus number';
  } catch (err) {
    console.log(err);
  }
}

mainSearch('el', 5, validation);
mainSearch(2, 5, validation);
mainSearch('el', 'lima', validation);
