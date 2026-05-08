const prompt = require("prompt-sync")();

let saldo = 1000;
let extrato = [];
let opcao = '';
let qtdDepositos = 0;
let qtdSaques = 0;
let totalDepositado = 0;
let totalSacado = 0;

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
      totalDepositado += valor;
      qtdDepositos++;

      extrato.push(`Depósito: +R$ ${valor.toFixed(2)}`);
      console.log(`Depositado: R$ ${valor.toFixed(2)}`);
    } else {
      console.log("Valor inválido!");
    }

  } else if (opcao === '2') {
    let valor = Number(prompt('Digite o valor a ser sacado: '));

    if (valor > saldo) {
      console.log("Saldo insuficiente!");
    } else if (valor > 0) {
      saldo -= valor;
      totalSacado += valor;
      qtdSaques++;

      extrato.push(`Saque: -R$ ${valor.toFixed(2)}`);
      console.log(`Sacado: R$ ${valor.toFixed(2)}`);
    } else {
      console.log("Valor inválido!");
    }

  } else if (opcao === '3') {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);

  } else if (opcao === '4') {
    console.log("\n===== EXTRATO =====");

    if (extrato.length === 0) {
      console.log("Não foram realizadas movimentações");
    } else {
      extrato.forEach(item => console.log(item));
    }

  } else if (opcao === '5') {
    console.log("\n===== RELATÓRIO FINAL =====");
    console.log(`Saldo Final: R$ ${saldo.toFixed(2)}`);
    console.log(`Qtd. Depósitos: ${qtdDepositos}`);
    console.log(`Qtd. Saques: ${qtdSaques}`);
    console.log(`Total Depositado: R$ ${totalDepositado.toFixed(2)}`);
    console.log(`Total Sacado: R$ ${totalSacado.toFixed(2)}`);
    console.log("Sistema encerrado.");

  } else {
    console.log("Opção inválida!");
  }
}


