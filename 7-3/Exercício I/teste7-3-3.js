// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
console.clear();
const assert = require("assert");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

// implemente seus testes aqui

assert.equal(sum(4, "5"), 5); // Retorna um erro
