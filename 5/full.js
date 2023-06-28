let j = [200, -100, 45, 78, 32];
console.log(j[2]);
console.log(j[4]);

let f = ["ab", "cd", "ef", "gh"];
console.log(f[1]);
console.log(f[3]);

let aux = [10, true, "k200", 20.7];
aux.forEach((element) => {
    console.log(element);
});

let k = [17, 4, 64, 79, 109, 112];
k.forEach((element) => {
    if (element % 2 !== 0) {
        console.log(element);
    }
});

let h = [true, true, false, true, false];
h[2] = true;
h[3] = false;
console.log(h);

let w = ["wc", "jp", "zx", "qr"];
w[w.indexOf("jp")] = true;
w[w.indexOf("qr")] = 30;
console.log(w);

function recorrerArreglo(arr) {
    arr.forEach((element) => {
        console.log(element);
    });
}
recorrerArreglo([2, 5, 7, 9]);

function contarElementos(arr) {
    return arr.length;
}

console.log(contarElementos([2, 5, 7, 9]));

let arreglo = [30, 44, 54, 89, 100];
console.log(arreglo.indexOf(44));
console.log(arreglo.indexOf(89));
console.log(arreglo.indexOf(70));
