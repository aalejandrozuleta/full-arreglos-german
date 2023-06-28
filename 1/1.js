let arreglo1 =  [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
for (let index = 0; index < arreglo1.length; index++) {
    console.log(arreglo1[index]);
}
arreglo1.forEach(j => {
    console.log(j);
});

let arreglo2 =  [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ];

for (let index = 0; index < arreglo2.length; index++) {
    console.log(arreglo2[index]);
}

arreglo2.forEach(j => {
    console.log(j);
});

let arreglo3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

for (let index = 0; index < arreglo3.length; index++) {
    console.log(arreglo3[index]);
}

arreglo3.forEach(j => {
    console.log(j);
});