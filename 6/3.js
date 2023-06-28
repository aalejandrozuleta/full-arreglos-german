let numeros = [5, 2, 8, 1, 10];
function encontrarNumeroMenor(arreglo) {
    let menor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }
    return menor;
}

let numeroMenor = encontrarNumeroMenor(numeros);
console.log(numeroMenor);
