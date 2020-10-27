/***
 * Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
 * Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
 */
let angulo_1 = 60;
let angulo_2 = 49;
let angulo_3 = 70;
let soma = angulo_1 + angulo_2 + angulo_3;

 if(soma > 180 || soma < 180){
     console.log("O triangulo é invalido!!!");
 } else{ 
     console.log("true");
 }