function converterGraus(Celsius) {

    let Fahrenheit = (Celsius * 9 / 5) + 32;

    return {
       Celsius: Celsius,
       Fahrenheit: Fahrenheit
    };
}

function calcular(){

    let Celsius = Number(document.getElementById("Cel").value);

    let resultado = converterGraus(Celsius);

    document.getElementById("resultado").innerHTML =
        "Graus Celsius: " + resultado.Celsius.toFixed(2) + "<br>" +
        "Graus Fahrenheit: " + resultado.Fahrenheit.toFixed(2);
}