function calcularJurosCompostos(valorInicial, meses) {
  let juros = 1.5;
  resposta.textContent = meses;
  let valorFinal = valorInicial * (1 + juros) ** meses;
  valordes.textContent = valorFinal;
  t.textContent = `R$${valorInicial} em ${meses != 0 ? meses : 'nem um'} ${meses > 1 ? 'messes' : 'mês'} virou R$${valorFinal}`;
  return { valorFinal, valorInicial, meses, juros };
}

module.exports = calcularJurosCompostos;
