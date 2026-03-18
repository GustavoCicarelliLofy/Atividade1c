
function calcular() {
            let km = Number(document.getElementById("km").value);
            let horas = Number(document.getElementById("horas").value);

            let velocidade = km / horas;

            document.getElementById("resultado").innerHTML =
                "Distância: " + km.toFixed(2) + " km<br>" +
                "Tempo: " + horas.toFixed(2) + " horas<br>" +
                "Velocidade média: " + velocidade.toFixed(2) + " km/h";
        }