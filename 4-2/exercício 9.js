// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.



var numeros = [0];

for (let index = 1; index <= 25; index++) {
    numeros.push(index);

    var result = numeros[index] / 2; 

    console.log(result);
}