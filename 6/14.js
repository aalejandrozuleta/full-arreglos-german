function ordenarArreglo() {
    let letras = prompt("Ingrese las letras separadas por comas:").split(",");
    for (let i = 0; i < letras.length - 1; i++) {
        for (let j = i + 1; j < letras.length; j++) {
            if (letras[j] < letras[i]) {
                let temp = letras[i];
                letras[i] = letras[j];
                letras[j] = temp;
            }
        }
    }
    return letras;
}
let arregloOrdenado = ordenarArreglo();
console.log("Arreglo ordenado:", arregloOrdenado);
