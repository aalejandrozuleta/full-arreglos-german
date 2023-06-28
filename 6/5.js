function obtenerUsuariosMayoresDeEdad(numUsuarios) {
    let usuariosMayores = [];

    for (let i = 0; i < numUsuarios; i++) {
        let nombre = prompt("Ingrese el nombre del usuario:");
        let edad = parseInt(prompt("Ingrese la edad del usuario:"));

        if (edad >= 18) {
            usuariosMayores.push(nombre);
        }
    }

    console.log("Usuarios mayores de edad:");
    console.log(usuariosMayores);
    console.log("Cantidad de usuarios mayores de edad:",usuariosMayores.length);

    return usuariosMayores;
}
let numUsuarios = parseInt(prompt("Ingrese el número de usuarios:"));
obtenerUsuariosMayoresDeEdad(numUsuarios);
