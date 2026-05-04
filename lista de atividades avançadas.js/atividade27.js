// Função soma de 0 até N
function somaAteN(n) {
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        soma += i;
    }
    return soma;
}

// Função fatorial
function fatorial(n) {
    let fat = 1;
    for (let i = 1; i <= n; i++) {
        fat *= i;
    }
    return fat;
}

// Menu
let opcao;
do {
    console.log("\n===== MENU =====");
    console.log("1 - Soma de 0 até N");
    console.log("2 - Fatorial de N");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));
    if (opcao === 1) {
        let n = Number(prompt("Digite um número inteiro positivo: "));
        console.log(`Soma de 0 até ${n} = ${somaAteN(n)}`);
    } else if (opcao === 2) {
        let n = Number(prompt("Digite um número inteiro positivo: "));
        console.log(`Fatorial de ${n} = ${fatorial(n)}`);
    } else if (opcao === 0) {
        console.log("Saindo do programa...");
    } else {
        console.log("Opção inválida!");
    }

} while (opcao !== 0);
