let texto="Analisis y desarrollo de software"
function EncontrarVocales(texto){
let vocales=/[aeiou]/gi
let vocalesencontradas=texto.match(vocales)
return vocalesencontradas

}
let resultado=EncontrarVocales(texto)
console.log("Las vocales encontradas son: "+resultado.join(","))