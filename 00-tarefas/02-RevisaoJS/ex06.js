// Exercícios 6 - Operações

// Um produto custa R$120.

// Crie uma variável desconto igual a 20%.

// A pessoa possui somente R$30, após a operação verifique se a pessoa possui dinheiro suficeinte

// Mostre o preço final juntamente com a possibilidae da pessoa poder ou não comprar o produto.


let produto = 120;
let desconto = produto * 0.2;
let dinheiro = 30;
let precofinal = produto - desconto;
console.log(precofinal);
if (dinheiro < precofinal) {
  console.log("dinheiro insuficiente va te lascar");
} else if (dinheiro > desconto) {
  console.log("pode comprar");
}