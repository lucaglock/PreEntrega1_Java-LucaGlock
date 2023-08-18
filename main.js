
// Funciones

function impuestoPais(precio) {
    let impuestoP=precio*0.30
    return impuestoP
}

function retencionPais(precio) {
    let retencionP=precio*0.45
    return retencionP
}

// Compra de dolares

let dolarHoy = (367);

for (let i = 0; i < 5; i = i + 1) {
    let dolares = prompt("Ingrese la cantidad de dólares a comprar");

    if (!isNaN(dolares)) {
        dolares = (parseInt(dolares));
        let resultado = (dolares * dolarHoy) + impuestoPais(dolares*dolarHoy) + retencionPais(dolares*dolarHoy);
        console.log("La cantidad de dolares a comprar es de:" , dolares);
        console.log("El precio del dolar es de:" , dolarHoy);
        console.log("Sumando impuestos da un total de:" , resultado.toFixed(2));
        break
    } else {
        console.log("Inserte un número entero");
        ;
    }
}