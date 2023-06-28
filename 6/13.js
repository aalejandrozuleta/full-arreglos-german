function ordenarArreglo() {
    let numeros = prompt("Ingrese los números separados por comas:").split(",");

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }
    for (let i = 0; i < numeros.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[j] < numeros[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = numeros[i];
            numeros[i] = numeros[minIndex];
            numeros[minIndex] = temp;
        }
    }
    return numeros;
}

let arregloOrdenado = ordenarArreglo();
console.log("Arreglo ordenado:", arregloOrdenado);
