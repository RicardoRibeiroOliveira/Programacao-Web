const precoProduto = 200.00, percentualDesconto = 15;
const nome = 'Maria';

let desconto = precoProduto * (percentualDesconto /100);
let precoFinal = precoProduto - desconto;

let validarPreco = precoProduto > 100;
let validarDesconto = percentualDesconto >= 0 && percentualDesconto <= 100/

console.log(`Olá, ${nome}! O produto custa R$ ${precoProduto}`);
console.log(`Desconto de ${percentualDesconto}%: R$ ${desconto}`);
console.log(`Preço final: R$ ${precoFinal}`);
console.log(`Preço acima de R$ 100? ${validarPreco}`);
console.log(`Desconto válido? ${validarDesconto}`);