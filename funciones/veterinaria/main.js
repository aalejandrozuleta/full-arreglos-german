import { empleados } from "./modules/empleados.js";
import { servicios } from "./modules/servicios.js";

// ----------------------

let escogerMascota = prompt("Escoga su mascota 1. perro 2. gato");
let escogerServicio = prompt("Escoga un servicio 1. Peluqueria 2. baño 3. veterinaria");
let escogerDia = prompt("Escoga un dia")
let escogerMes = prompt("Escoga un mes en numero")

const nombre = empleados(escogerServicio);
const costo = servicios(escogerServicio, escogerMascota);

console.log(`Usted escogió el servicio ${escogerServicio}, para su mascota, lo atenderá ${nombre} por un costo de ${costo}, para la fecha ${escogerDia}/${escogerMes}`);
