/*
 12. Como você pode verificar se um número é positivo e menor que 50 em 
JavaScript usando operadores lógicos?
*/
resposta: function isPositiveAndLessThan50(number) {
    return number > 0 && number < 50;
}

// Exemplo de uso:
console.log(isPositiveAndLessThan50(25));  // true
console.log(isPositiveAndLessThan50(-10)); // false
console.log(isPositiveAndLessThan50(60));  // false
