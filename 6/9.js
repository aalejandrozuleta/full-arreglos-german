function compararPromedio() {
    let arreglo1 = prompt("Ingrese los números del primer arreglo separados por comas:").split(",");
    let arreglo2 = prompt("Ingrese los números del segundo arreglo separados por comas:").split(",");

    let promedio1 = calcularPromedio(arreglo1);
    let promedio2 = calcularPromedio(arreglo2);

    console.log("Promedio del primer arreglo:", promedio1);
    console.log("Promedio del segundo arreglo:", promedio2);

    if (promedio1 > promedio2) {
        console.log("El primer arreglo tiene un promedio mayor.");
    } else if (promedio1 < promedio2) {
        console.log("El segundo arreglo tiene un promedio mayor.");
    } else {
        console.log("Ambos arreglos tienen el mismo promedio.");
    }
}

function calcularPromedio(arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += parseInt(arreglo[i]);
    }

    return suma / arreglo.length;
}
compararPromedio();
