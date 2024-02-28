let dato=true
let TipoDedato=MostrarTipodedato(dato)
function MostrarTipodedato(dato){
    let tdato=(typeof dato)
    return tdato

}
console.log("el tipo de dato es: " +TipoDedato)