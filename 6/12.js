function encontrarCadenaMayorTimina() {
    let cadenasADN = prompt(
        "Ingrese las cadenas de ADN separadas por comas:").split(",");
    let maxTiminaCount = 0;
    let cadenaMayorTimina = "";
    for (let i = 0; i < cadenasADN.length; i++) {
        let cadena = cadenasADN[i];
        let timinaCount = 0;
        for (let j = 0; j < cadena.length; j++) {
            let letra = cadena[j];
            if (letra === "T") {
                timinaCount++;
            }
        }
        if (timinaCount > maxTiminaCount) {
            maxTiminaCount = timinaCount;
            cadenaMayorTimina = cadena;
        }
    }
    console.log("La cadena de ADN con mayor número de Timina (T) es:",cadenaMayorTimina);
}
encontrarCadenaMayorTimina();
