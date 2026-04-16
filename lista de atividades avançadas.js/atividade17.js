const prompt = require("prompt-sync")();

let numero = [];
let opcao = '';

while (opcao !== '6') {

    console.log("\n===== MENU =====");
    console.log("1 - Preencher Vetor");
    console.log("2 - Somar elementos");
    console.log("3 - Maior e menor valor");
    console.log("4 - Buscar elemento");
    console.log("5 - Media");
    console.log("6 - Sair");

    opcao = prompt('Opção: ');

    if (opcao === '1') {

        let quantidade = Number(prompt("Quantos números deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {
            let valor = Number(prompt(`Digite o ${i + 1}º número: `));
            numero.push(valor);
        }

    } else if (opcao === '2') {

        let soma = 0;

        for (let i = 0; i < numero.length; i++) {
            soma += numero[i];
        }

        console.log("A soma dos valores foi:", soma);

    } else if (opcao === '3') {

        if (numero.length === 0) {
            console.log("Vetor vazio!");
        } else {
            let maiorvalor = Math.max(...numero);
            let menorvalor = Math.min(...numero);

            console.log("Maior valor:", maiorvalor);
            console.log("Menor valor:", menorvalor);
        }

    } else if (opcao === '4') {

        let busca = Number(prompt("Digite o número: "));
        let encontrado = false;

        for (let i = 0; i < numero.length; i++) {
            if (numero[i] === busca) {
                console.log("\n--- NÚMERO ENCONTRADO ---");
                console.log(numero[i]);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("Não encontrado.");
        }

    } else if (opcao === '5') {

        if (numero.length === 0) {
            console.log("Vetor vazio!");
        } else {
            let soma = 0;

            for (let i = 0; i < numero.length; i++) {
                soma += numero[i];
            }

            let media = soma / numero.length;
            console.log("A média foi:", media);
        }

    } else if (opcao !== '6') {

        console.log("Opção inválida!");

    }
}
