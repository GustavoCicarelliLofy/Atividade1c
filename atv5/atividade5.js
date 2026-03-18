function dividirLucro(lucroTotal, quantidadeSocios = 3) {
    const valorPorSocio = lucroTotal / quantidadeSocios;

    return {
        lucroTotal,
        quantidadeSocios,
        valorPorSocio
    };
}

function calcular() {

    const lucro = Number(document.getElementById("lucro").value);
    const socios = Number(document.getElementById("socios").value);

    const resultado = dividirLucro(lucro, socios);

    document.getElementById("resultado").innerHTML = `
        Lucro total: R$ ${resultado.lucroTotal.toFixed(2)} <br>
        Quantidade de sócios: ${resultado.quantidadeSocios} <br>
        Cada sócio receberá: R$ ${resultado.valorPorSocio.toFixed(2)}
    `;
}