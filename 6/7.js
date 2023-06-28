let arregloUno = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arregloDos= ["Manzana", "Banano", "Lechuga", "Perejíl"];
let frutas = [];
let verduras = [];
for (let i = 0; i < arregloUno.length; i++) {
    if (arregloUno[i] === "Pera" || arregloUno[i] === "Limón") {
        frutas.push(arregloUno[i])
    } else {
        verduras.push(arregloUno[i])
    }
}
for (let j = 0; j < arregloDos.length; j++) {
    if (arregloDos[j] === "Manzana" || arregloDos[j] === "Banano") {
        frutas.push(arregloDos[j])
    } else {
        verduras.push(arregloDos[j])
    }
}
console.log(frutas, verduras);