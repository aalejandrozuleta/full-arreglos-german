function servicios(servicio, mascota) {
	let costo = 0;

	if (servicio === "1" || servicio === "peluquería") {
		costo += mascota === "1" || mascota === "perro" ? 30000 : 40000;
	} else if (servicio === "2" || servicio === "baño") {
		costo += mascota === "1" || mascota === "perro" ? 35000 : 25000;
	} else if (servicio === "3" || servicio === "veterinaria") {
		let pregunta = prompt("Ingrese 1 para consulta, 2 para esterilización");
		costo += pregunta === "1" || pregunta === "consulta" ? 30000 : 120000;
	}

	return costo;
}

export { servicios };
