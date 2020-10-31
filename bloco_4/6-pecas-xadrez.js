//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = "Reiss";

switch (pecaXadrez.toLowerCase()) {
  case "cavalo":
    console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
    break;
  case "rainha":
    console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
    break;
  case "rei":
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
    break;
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
    break;
  case "peão":
    console.log(" ");
    break;
  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser. ");
    break;
  default:
      console.log("Essa peça não existe.");
      break;
}
