let contador=1
let tiemo= setInterval(contar,1000)
function contar(){
    console.log(contador);
    contador++
    if(contador>10){
        clearInterval(tiemo)
        console.log("El tiempo a terminado!!")
    }
}