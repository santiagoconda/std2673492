let texto="software"
function ordenarAlfabeticamente(texto) {
    const arregloDeCaracteres = texto.split('');
    arregloDeCaracteres.sort();
    const cadenaOrdenada = arregloDeCaracteres.join('');
    return cadenaOrdenada;
}
const cadenaOrdenada = ordenarAlfabeticamente(texto);
console.log('Salida esperada:', cadenaOrdenada); 
