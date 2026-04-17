
let valores = [];
let opcao;
const prompt = require("prompt-sync")();
do {
    opcao = parseInt(prompt(
        "\nMENU:\n" +
        "1 - Preencher vetor\n" +
        "2 - Somar elementos\n" +
        "3 - Calcular média\n" +
        "4 - Maior e menor valor\n" +
        "5 - Buscar elemento\n" +
        "0 - Sair\n" +
        "Escolha uma opção:"
    ));

    switch (opcao) {

        case 1:
        //código
        let quantidade = Number(prompt("Quantos números deseja cadastrar? "));

        for (let i = 0; i < quantidade; i++) {
            let valor = Number(prompt(`Digite o ${i + 1}º número: `));
            valores.push(valor);
        }
            break;

        case 2:
        
         let soma = 0;

         for (let i = 0; i < valores.length; i++) {
            soma+=valores[i];
         }
           console.log("A soma dos valores foi: ",soma)
         
        //código
            break;

        case 3:
            let somaMedia = 0;
            for (let i = 0; i < valores.length; i++){
                somaMedia+=valores[i];
            }
            if (valores.length>0){
                let media = somaMedia/valores.length;
                console.log("A Media foi:",media)
            } else {
                console.log("Vetor vazio!");
            }


            
        //código           
            break;

        case 4:
          if (valores.length === 0) {
            console.log("Vetor vazio!");
        } else {
            let maiorvalor = Math.max(...valores);
            let menorvalor = Math.min(...valores);

            console.log("Maior valor:", maiorvalor);
            console.log("Menor valor:", menorvalor);
        }
        //código
            break;
                 
        case 5:
            let encontrado = false;
            let busca = Number(prompt("Digite o número que deseja buscar: "));

        for (let i = 0; i < valores.length; i++) {
        if (valores[i] === busca) {
            console.log(`Número encontrado na posição ${i}`);
            encontrado = true;
        }
        }

        if (!encontrado) {
        console.log("Não encontrado.");
        }
           

        //código
            break;

        case 0:
            console.log("Encerrando...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);

