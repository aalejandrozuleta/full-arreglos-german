function contarNumerosImpares() {
    let numeros = prompt("Ingrese los números separados por comas:").split(",");

    let count = 0;

    for (let i = 0; i < numeros.length; i++) {
        let numero = parseInt(numeros[i]);

        if (numero % 2 !== 0) {
            count++;
        }
    }

    console.log("Cantidad de números impares: ", count);
}

contarNumerosImpares();
