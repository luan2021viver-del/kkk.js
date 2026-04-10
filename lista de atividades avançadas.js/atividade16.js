let numerodopedido = [];

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;
const prompt = require("prompt-sync")();

let pedidos = [];
let opcao = '';

while (opcao !== '3') {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Sair;relatorio final");
    opcao = prompt('Opção: ');

    if (opcao === '1') {
        let quantidade = Number(prompt("Quantos pedidos você deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {
            let pedidos = prompt('Digite o nome: ');
            let numeros = Number(prompt('Digite numero: '));

            pedido.push({ nome, nota });
        }

    } else if (opcao === '2') {

        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado.");
        } else {
            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nota >= 7) {
                    console.log(`O aluno ${alunos[i].nome} está aprovado`);
                } else {
                    console.log(`O aluno ${alunos[i].nome} está reprovado`);
                }
            }
        }

    } else if (opcao !== '3') {
        console.log("Opção inválida!");
    }
}
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    if (num <= 25) {
        intervalo1++;
    } else if (num <= 50) {
        intervalo2++;
    } else if (num <= 75) {
        intervalo3++;
    } else if (num <= 100) {
        intervalo4++;
    }
}

console.log("Dentro do Intervalo 1 (<=25) Tem:", intervalo1);
console.log("Dentro do Intervalo 2 (26-50) tem:", intervalo2);
console.log("Dentro do Intervalo 3 (51-75) tem:", intervalo3);
console.log("Dentro do Intervalo 4 (76-100) tem:", intervalo4);
