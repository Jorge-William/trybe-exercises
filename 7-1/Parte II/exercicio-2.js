const longestWord = (palavra) => {
  let arrayDePalavras = palavra.split(" ");
  let maior = 0;
  let result = "";
  for (const palavra of arrayDePalavras) {
    if (palavra.length > maior) {
      maior = palavra.length;
      result = palavra;
    }
  }
  return result;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
); // retorna 'aconteceu'
