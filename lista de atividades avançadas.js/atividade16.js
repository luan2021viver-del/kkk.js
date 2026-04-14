const prompt = require("prompt-sync")();

let pedido = [];
let opcao = '';

while (opcao !== '5') {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Dashboard analítico gerencial");
    console.log("4 - Buscar pedido");
    console.log("5 - Sair");

    opcao = prompt('Opção: ');

    if (opcao === '1') {

        let quantidade = Number(prompt("Quantos pedidos você deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {

            let numerodopedido = Number(prompt('Digite o numero do pedido: '));
            let material = prompt('Digite o nome do material: ');
            let quantidade1 = Number(prompt('Digite a quantidade de material: '));
            let tipodoproduto = prompt('Digite o tipo do produto: ');
            let prazos = Number(prompt("Digite o prazo: "));

            pedido.push({ numerodopedido, material, quantidade1, tipodoproduto, prazos });
        }

    } else if (opcao === '2') {

        if (pedido.length === 0) {
            console.log("Nenhum pedido cadastrado.");
        } else {

            let intervalo1 = 0;
            let intervalo2 = 0;
            let intervalo3 = 0;
            let intervalo4 = 0;

            for (let i = 0; i < pedido.length; i++) {

                let dias = pedido[i].prazos;

                if (dias <= 2) 
                intervalo1++;
                else if (dias <= 5) 
                intervalo2++;
                else if (dias <= 10)
                intervalo3++;
                else intervalo4++;

                console.log("\n--- Pedido ---");
                console.log(pedido[i]);
            }

            console.log("\n===== RELATÓRIO =====");
            console.log("Zona vermelha:", intervalo1);
            console.log("Zona laranja:", intervalo2);
            console.log("Zona amarela:", intervalo3);
            console.log("Zona verde:", intervalo4);
        }

    } else if (opcao === '3') {

        if (pedido.length === 0) {
            console.log("Nenhum dado para análise.");
        } else {

            let soma = 0;

            for (let i = 0; i < pedido.length; i++) {
                soma += pedido[i].quantidade1;
            }

            console.log("Total de materiais:", soma);

            let pedidosUrgentes = pedido.filter(p => p.prazos <= 2).length;
            console.log("Pedidos urgentes:", pedidosUrgentes);

            let maiorPedido = Math.max(...pedido.map(p => p.quantidade1));
            console.log("Maior pedido:", maiorPedido);
        }

    } else if (opcao === '4') {

        let busca = Number(prompt("Digite o número do pedido: "));
        let encontrado = false;

        for (let i = 0; i < pedido.length; i++) {
            if (pedido[i].numerodopedido === busca) {
                console.log("\n--- PEDIDO ENCONTRADO ---");
                console.log(pedido[i]);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("Pedido não encontrado.");
        }

    } else if (opcao !== '5') {
        console.log("Opção inválida!");








        
    }
}