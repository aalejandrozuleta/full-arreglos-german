function buscarLetraC() {
    let nombres = prompt("Ingrese los nombres separados por comas:").split(",");
    let count = 0;
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];

        for (let j = 0; j < nombre.length; j++) {
            let letra = nombre[j].toLowerCase();
            if (letra === "c") {
                count++;
            }
        }
    }

    if (count > 0) {
        console.log("La letra 'c' se encuentra en los nombres.");
        console.log("Cantidad de veces que aparece: ", count);
    } else {
        console.log("La letra 'c' no se encuentra en los nombres.");
    }
}
buscarLetraC();
