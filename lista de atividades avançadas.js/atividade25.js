// Função que retorna BOOLEAN
function ehPrimo(num) {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
}

// Função VOID (exibe mensagem)
function mostrarResultado(num) {
if (ehPrimo(num)) {
console.log(`${num} é um número primo.`);
} else {
console.log(`${num} NÃO é um número primo.`);
}
}

// Programa principal
let numero = Number(prompt("Digite um número: "));
mostrarResultado(numero);
