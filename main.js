var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var newcogn = cognomi.push(prompt('Inserisci cognome'));


cognomi.sort();

console.log(cognomi.length);
console.log(cognomi);
const  index = cognomi.indexOf(newcogn);

console.log(index);
