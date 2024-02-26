
function mostrarAsientos(asientos) {
    console.log("Asientos disponibles:");
    for (var i = 0; i < asientos.length; i++) {
        console.log(asientos[i].join(" "));
    }
}
function reservarAsiento(fila, columna, asientos) {
    if (asientos[fila][columna] === 'X') {
        console.log("El asiento en la fila " + fila + " y columna " + columna + " ya está ocupado.");
    } else {
        asientos[fila][columna] = 'X';
        console.log("Asiento en la fila " + fila + " y columna " + columna + " reservado con éxito.");
    }
}
var asientosDisponibles = [];
for (var i = 0; i < 10; i++) {
    asientosDisponibles.push(['O', 'O', 'O', 'O']);
}
mostrarAsientos(asientosDisponibles);
reservarAsiento(3, 2, asientosDisponibles);
mostrarAsientos(asientosDisponibles);