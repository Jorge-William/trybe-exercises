// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
console.clear();

const assert = require("assert");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, "5"), 10); // Passou
