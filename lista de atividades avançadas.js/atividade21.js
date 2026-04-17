const prompt = require("prompt-sync")();

let saldo = 0;
let extrato = [];
let opcao = '';

while (opcao !== '5') {

    console.log("\n===== MENU =====");
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Consultar saldo");
    console.log("4 - Extrato");
    console.log("5 - Sair");

    opcao = prompt('Opção: ');

    if (opcao === '1') {
        let valor = Number(prompt('Digite o valor a ser depositado: '));

        if (valor > 0) {
            saldo += valor;
            extrato.push(`Depósito: +R$ ${valor}`);
            console.log(`Depositado: R$ ${valor}`);
        } else {
            console.log("Valor inválido!");
        }

    } else if (opcao === '2') {

        let valor = Number(prompt('Digite o valor a ser sacado: '));

        if (valor > saldo) {
            console.log("Saldo insuficiente!");
        } else if (valor > 0) {
            saldo -= valor;
            extrato.push(`Saque: -R$ ${valor}`);
            console.log(`Sacado: R$ ${valor}`);
        } else {
            console.log("Valor inválido!");
        }

    } else if (opcao === '3') {

        console.log(`Saldo atual: R$ ${saldo}`);

    } else if (opcao === '4') {

        console.log("\n===== EXTRATO =====");
        if (extrato.length === 0) {
            console.log("Nenhuma movimentação.");
        } else {
            extrato.forEach(item => console.log(item));
        }

    } else if (opcao !== '5') {

        console.log("Opção inválida!");

    }
}

