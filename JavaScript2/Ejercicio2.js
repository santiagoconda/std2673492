function encontrarPalabraMasLarga(cadena) {
    let palabras = cadena.split(" ");
    let palabraMasLarga = "";
    palabras.forEach(function(palabra) {
    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
    }
    });
    return palabraMasLarga;
}
    var cadena = "Analisis Y Desarrollo de software";
    var palabraMasLarga = encontrarPalabraMasLarga(cadena);
    console.log("La palabra más larga es: " + palabraMasLarga);