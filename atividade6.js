function calcularTempoProducao(quantidadePecas, maquinas = 1) {

    const producaoPorHoraMaquina = 15;
    const producaoPorHoraTotal = producaoPorHoraMaquina * maquinas;

    let horasNecessarias = quantidadePecas / producaoPorHoraTotal;

    horasNecessarias = Number(horasNecessarias.toFixed(2));

    return {
        quantidadePecas,
        maquinas,
        producaoPorHoraTotal,
        horasNecessarias
    };
}

function calcular(){

    const pecas = Number(document.getElementById("pecas").value);
    const maquinas = Number(document.getElementById("maquinas").value) || 1;

    if(pecas <= 0){
        document.getElementById("resultado").innerHTML = "Digite uma quantidade válida de peças.";
        return;
    }

    const resultado = calcularTempoProducao(pecas, maquinas);

    document.getElementById("resultado").innerHTML =
    `
    Produção por hora: ${resultado.producaoPorHoraTotal} peças<br>
    Tempo necessário: ${resultado.horasNecessarias} horas
    `;
}