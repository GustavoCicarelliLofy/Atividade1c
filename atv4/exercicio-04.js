// src="exercicio-04.js"
function calcularVendaComFrete(valorProdutos) {
  let frete = 20;
  let valorTotal = Number(valorProdutos) + frete;
  valordes.textContent = `R$${valorProdutos}`;
  resposta.textContent = `R$${valorTotal}`;
  t.textContent = `O valor dos produtos de R$${valorProdutos} mais o frete de R$${frete} teve como valor total R$${valorTotal}`;
  return { valorProdutos, frete, valorTotal };
}

module.exports = calcularVendaComFrete;
