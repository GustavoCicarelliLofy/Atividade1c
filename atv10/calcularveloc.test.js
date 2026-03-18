const calcularVelocidadeMedia = require("./calcularVelocidadeMedia");

describe("Cálculo de velocidade média", () => {

    test("deve calcular corretamente a velocidade média", () => {
        const resultado = calcularVelocidadeMedia(120, 2);

        expect(resultado.distanciaKm).toBe(120);
        expect(resultado.tempoHoras).toBe(2);
        expect(resultado.velocidadeMedia).toBe(60);
    });

    test("outro exemplo", () => {
        const resultado = calcularVelocidadeMedia(90, 1.5);

        expect(resultado.velocidadeMedia).toBe(60);
    });

});