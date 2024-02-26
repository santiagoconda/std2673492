let arreglo=[1,3,3,4,5,4,9,8,9,3,6]
function eliminarDuplicados(arreglo){
    return arreglo.filter(function(elementos,indice){
        return arreglo.indexOf(elementos)===indice
    })
}
let arreglosSinduplicados= eliminarDuplicados(arreglo)
console.log(arreglosSinduplicados)