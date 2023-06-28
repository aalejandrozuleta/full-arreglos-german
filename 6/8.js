function encontrarNumeroMayor() {
    let numeros = prompt("Ingrese los números separados por comas:").split(",");

    if (numeros.length === 0) {
        console.log("El arreglo está vacío.");
        return;
    }

    let arreglo = [];
    for (let i = 0; i < numeros.length; i++) {
        arreglo.push(parseInt(numeros[i]));
    }

    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    console.log("El número mayor es:", mayor);
    return mayor;
}
encontrarNumeroMayor();
