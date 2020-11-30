console.clear();
// // Crie uma função que receba um número e retorne seu fatorial.
// // Na matemática, o fatorial de um número não negativo N , com a notação N! ,
// // é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
// // Spoiler: É possível resolver com uma linha.

// const calculaFatorial = (numero) => {
//   const fatorial =
//     numero *
//     (numero - 1) *
//     (numero - 2) *
//     (numero - 3) *
//     (numero - 4) *
//     (numero - 5) *
//     (numero - 6) *
//     (numero - 7) *
//     (numero - 8) *
//     (numero - 9);

//   return fatorial;
// };
// console.log(calculaFatorial(4));

// ---------------------------------------- Recursividade -------------------------------------------

const fatorialRecursivo = (num) => {
  return num * fatorialRecursivo(num - 1);
};

console.log(fatorialRecursivo(5));

// ------------------------------------- Fatorial com FOR -----------------------------------------

const fatorialFor = (num) => {
  let result = num;
  for (let i = num - 1; i > 1; i--) {
    result *= i;
  }
  return result;
};

console.log(fatorialFor(5));

// ------------------------------------- Fatorial com While ----------------------------------------

const fatorialWhile = (num) => {
  let result = num;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

console.log(fatorialWhile(5));
