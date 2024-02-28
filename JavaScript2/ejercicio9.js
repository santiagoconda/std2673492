
let intervalo=setInterval(GenerarNumerosAleatorios,1000)
function GenerarNumerosAleatorios(){
    let numerosAleatorios=Math.floor(Math.random()*100)+1
    console.log("Numero aleatoriogenerado"+numerosAleatorios)
    
}