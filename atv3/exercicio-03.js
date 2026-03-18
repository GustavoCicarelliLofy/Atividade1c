// src="exercicio-03.js"
function calcularImposto(precoOriginal) {
  let percentualImposto = 0;
  if (precoOriginal <= 50) {
    percentualImposto = 5;
  } else if (precoOriginal <= 100) {
    percentualImposto = 8;
  } else if (precoOriginal <= 500) {
    percentualImposto = 12;
  } else if (precoOriginal <= 1000) {
    percentualImposto = 15;
  } else {
    percentualImposto = 18;
  }
  let valorImposto = precoOriginal * (percentualImposto / 100);
  let precoFinal = Number(precoOriginal) + valorImposto;

  valor.textContent = `R$${precoOriginal}`;
  resposta.textContent = `R$${precoFinal}`;
  t.textContent = `O valor dos produtos de R$${precoOriginal} mais o inposto de ${percentualImposto}% teve como valor total R$${precoFinal}`;
  return { precoOriginal, percentualImposto, valorImposto, precoFinal };
}

module.exports = calcularImposto;
