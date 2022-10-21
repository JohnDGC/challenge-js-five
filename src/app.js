var scanf = require('scanf');

let strings = [];
console.info('Escriba "cancelar" para mostrar los strings almacenados');
let writeString;

do {
  console.log('Ingrese la frase:');
  writeString = scanf('%s');
  strings.push(writeString);
} while (writeString != 'cancelar');

strings.pop();
console.clear();
console.log('Frases capturadas: ')
strings.forEach((string, index) => {console.log(`${index +1}. ${string}`)});
// console.table(strings);

