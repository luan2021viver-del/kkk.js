function Vinteiro(valor){
    return valor;
}

let valor = Number(prompt("Digite o valor: "));

if (valor > 0) {
    console.log("Valor positivo (True)", valor);
} else if (valor < 0) {
    console.log("Valor negativo (False)", valor);
} else {
    console.log("Valor é zero", valor);
}-
