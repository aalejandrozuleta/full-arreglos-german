let uno =  "Javascript es un buen lenguaje";
console.log(uno[3]);
console.log(uno[6]);
console.log(uno[8]);

for (let index = 0; index < uno.length; index++) {
    console.log(uno[index]);
}

let dos = "Somos SENA";

for (let index = 0; index < dos.length; index++) {
    if(dos[index] == "E"){
        console.log("esta");
    }
}

let contadora = 0;
for (let index = 0; index < dos.length; index++) {
    if(dos[index] == "o"){
        contadora++;
    }
}
console.log(contadora);

let tres = "Javascript es genial";
let conta = 0;

for (let index = 0; index < tres.length; index++) {
    conta++
}

console.log(conta);