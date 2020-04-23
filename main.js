var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

cognomi.push(newcogn);

var newcogn = prompt('Inserisci cognome')

var newItem = '';

cognomi.sort();

console.log(cognomi.length);
console.log(cognomi);



for (var i = 0; i < cognomi.length; i++) {

  newItem += '<li>' + cognomi[i] + '</li>';


}

 var index = cognomi.indexOf(newcogn);

console.log(index);
console.log(newItem);
console.log(newCogn);
