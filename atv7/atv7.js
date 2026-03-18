function calcular() {
    let km = Number(document.getElementById("km").value);
    let Combustivel = Number(document.getElementById("Combustivel").value);

    let medio = km / Combustivel;

    document.getElementById("resultado").innerHTML =
        "Distância percorrida: " + km.toFixed(2) + " km<br>" +
        "Combustivel consumido: " + Combustivel.toFixed(2) + " litros<br>" +
        "Consumo medio do veiculo: " + medio.toFixed(2);
}