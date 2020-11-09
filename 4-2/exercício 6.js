// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum,
//  imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantity = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0){
        quantity += 1;
    } 
}
if (quantity == 0) {
    console.log("nenhum valor ímpar encontrado")
} else{
    console.log(quantity);
}

