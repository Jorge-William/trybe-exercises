/**
 * Faça um programa que retorne o maior de três números. 
 * Defina no começo do programa três variáveis com os valores que serão comparados.
 * 
*/
let a, b, c;
a = 3;
b = 32;
c = 9;

if(a > b && a > c){
    console.log(a + " é o maior número dentre os três.");
} else if(b > a && b > c){
    console.log(b + " é o maior número dentre os três.");
} else if(c > a && c > b){
    console.log(c + " é o maior número dentre os três.");
}