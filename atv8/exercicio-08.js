
function calcular() {
            let largura = Number(document.getElementById("largura").value);
            let comprimento = Number(document.getElementById("comprimento").value);

            let area = largura * comprimento;

            document.getElementById("resultado").innerHTML =
                "largura: " + largura.toFixed(2) + "<br>" +
                "comprimento: " + comprimento.toFixed(2) + " <br>" +
                "área total do terreno: " + area.toFixed(2) + "m²";
        }