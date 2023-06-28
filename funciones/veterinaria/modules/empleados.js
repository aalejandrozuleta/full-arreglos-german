function empleados(servicio) {
	let nombre = "";
	let atendera = "";
	switch (servicio) {
		case "1":
		case "peluqueria":
			atendera = prompt("Quien lo atendera 1. ana 2. claudio")
			if (atendera === "1") {
				nombre = "ana";
			} else if (atendera === "2") {
				nombre = "claudio";
			}
			break;
		case "2":
		case "baño":
			atendera = prompt("Quien lo atendera 1. milena 2. rosa 3. maria")
			if (atendera === "1") {
				nombre = "milena";
			} else if (atendera === "2") {
				nombre = "rosa";
			} else if (atendera === "3") {
				nombre = "maria";
			}
			break;
		case "3":
		case "veterinaria":
			atendera = prompt("Quien lo atendera 1. raul 2. laura");
			if (atendera === "1") {
				nombre = "raul";
			} else if (atendera === "2") {
				nombre = "laura";
			}
			break;
	}
	return nombre;
}

export { empleados };
