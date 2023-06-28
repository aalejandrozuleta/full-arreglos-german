function mostrarNumerosPrimos(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
    if (esPrimo(arreglo[i])) {
    console.log(`${arreglo[i]} es un numero primo`);
    }
    function esPrimo(numero) {
        if (numero < 2) {
        return false;
        }

        for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
        }
        return true;
    }
}
}
let numeros = prompt("Digite los numero del arreglo separados por comas").split(",").map(Number)
mostrarNumerosPrimos(numeros);