/*
19. Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos? 
*/
//resposta: function isOddAndLessThan50(number) {
    return number % 2 !== 0 && number < 50;
 

// Exemplo de uso:
console.log(isOddAndLessThan50(25));  // true (ímpar e menor que 50)
console.log(isOddAndLessThan50(30));  // false (par)
console.log(isOddAndLessThan50(55));  // false (maior que 50)
console.log(isOddAndLessThan50(42));  // false (par e maior que 50)
