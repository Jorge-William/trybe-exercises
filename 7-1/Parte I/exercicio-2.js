console.clear();
// 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens);
// retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() .
// Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const ordenaArray = () => {
  oddsAndEvens = [2, 3, 4, 7, 10, 13];
  return `Os números ${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]} se encontram ordenados de forma crescente!`;
};

console.log(oddsAndEvens());

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const ordenaArray = () => {
  const arrayOrdenado = oddsAndEvens.sort((a, b) => a - b);
  return `Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`;
};

console.log(ordenaArray());
