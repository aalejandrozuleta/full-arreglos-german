let arregloUno = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
for (let a = 0; a < arregloUno.length; a++) {
    for (let b = 0; b < arregloUno[a].length; b++) {
        console.log(arregloUno[a][b]);
    }
}
arregloUno.forEach(a => {
    a.forEach(b => {
        console.log(b);
    })
})
let arregloDos = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
for (let a = 0; a < arregloDos.length; a++) {
    for (let b = 0; b < arregloDos[a].length; b++) {
        for (let c = 0; c < arregloDos[a][b].length; c++) {
            console.log(arregloDos[a][b][c]);
        }  
    }
} 
arregloDos.forEach(a => {
    a.forEach(b => {
        b.forEach(c => {
            console.log(c);
        }) 
    })
})  
let arregloTres = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
for (let a = 0; a < arregloTres.length; a++) {
    for (let b = 0; b < arregloTres[a].length; b++) {
        if (arregloTres[a][b]%2 != 0) {
            console.log(arregloTres[a][b]);
        }
    }
}
let acumulador = 0;
for (let a = 0; a < arregloTres.length; a++) {
    for (let b = 0; b < arregloTres[a].length; b++) {
        acumulador= arregloTres[a][b]+acumulador;
    }
}
console.log(acumulador);