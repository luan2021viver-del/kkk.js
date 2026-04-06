let temperaturaaodia = [60, 80,50,30,20]
let soma = 0

for (let i = 0; i < temperaturaaodia.length;i++) {
 (soma+=temperaturaaodia[i]);
}
console.log(soma) 

let mediapordia = soma / 7 
console.log ("A media por dia foi",mediapordia)


let temcritica = temperaturaaodia.filter(temperaturaaodia => temperaturaaodia >= 90)

console.log("dias que foram maior que 90 foram", temcritica)