function converterMoeda(valorUSD, cotacao) {

    let valorBRL = valorUSD * cotacao;

    return {
        valorUSD: valorUSD,
        cotacao: cotacao,
        valorBRL: valorBRL
    };
}

function calcular(){

    let valorUSD = Number(document.getElementById("usd").value);
    let cotacao = Number(document.getElementById("cotacao").value);

    let resultado = converterMoeda(valorUSD, cotacao);

    document.getElementById("resultado").innerHTML =
        "Valor em dólar: " + resultado.valorUSD.toFixed(2) + "<br>" +
        "Cotação: " + resultado.cotacao.toFixed(2) + "<br>" +
        "Valor em reais: " + resultado.valorBRL.toFixed(2);

}

if (typeof module !== "undefined") {
    module.exports = converterMoeda;
}