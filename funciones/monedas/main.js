import { pedir } from "./modules/pedir"
import { intercambio } from "./modules/intercambio"

function main() {
    let valor = prompt(`Ingrese una cantidad a desglosar `)
    pedir(valor)
}

main();