function calcularIdade(ano){
    let anoAtual = 2026;
    let idade = anoAtual - ano;
    return idade;
   
}

function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;
    return media;
   
}

let nome = prompt("Digite o nome do aluno: ");
let ano = Number(prompt("Digite o ano de nascimento do aluno: "));
let nota1 = Number(prompt("Digite a nota 1: "));
let nota2 = Number(prompt("Digite a nota 2: "));

let idadeAluno = calcularIdade(ano);
let mediaAluno = calcularMedia(nota1, nota2);

console.log("Nome: ", nome);
console.log("Idade: ", idadeAluno);
console.log("Média: ", mediaAluno);
