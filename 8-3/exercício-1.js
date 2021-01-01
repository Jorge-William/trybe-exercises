
const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// Dada uma matriz de matrizes, transforme em uma única matriz.
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, cur) => acc.concat(cur))

}
//console.log(flatten());
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);