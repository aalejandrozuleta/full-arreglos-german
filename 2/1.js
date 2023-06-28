arregloTres= [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
console.log(arregloTres[1][0][1]);
console.log(arregloTres[2][0][0][0][0]);
console.log(arregloTres[0][1][1]);
console.log(arregloTres[1][1][0][0]);
console.log(arregloTres[3]);
arregloCuatro= [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
console.log(arregloCuatro[1]);arregloCuatro[1][1] = "?";console.log(arregloCuatro[1]);console.log(arregloCuatro[3]);
arregloCuatro[3][1] = 9;
console.log(arregloCuatro[3]);
console.log(arregloCuatro[0]);
arregloCuatro[0][0] = "¡";
console.log(arregloCuatro[0]);
arregloCuatro[1].splice(2);
console.log(arregloCuatro);
arregloCuatro[0].splice(2);
console.log(arregloCuatro);
arregloCuatro[3].splice(2);
console.log(arregloCuatro);