function desglosa(desglose) {
	let contadores = [
		{ valor: 500, total: 0 },
		{ valor: 200, total: 0 },
		{ valor: 100, total: 0 },
		{ valor: 50, total: 0 },
		{ valor: 20, total: 0 },
		{ valor: 10, total: 0 },
		{ valor: 5, total: 0 },
		{ valor: 2, total: 0 },
		{ valor: 1, total: 0 },
	];

	let resto = desglose;

	for (let i = 0; i < contadores.length; i++) {
		while (resto >= contadores[i].valor) {
			resto -= contadores[i].valor;
			contadores[i].total++;
		}
	}

	for (let i = 0; i < contadores.length; i++) {
		if (contadores[i].total > 0) {
			return `Billetes de ${contadores[i].valor}: ${contadores[i].total}`;
		}
    }
    
}

export { desglosa }
