let contador=10
let tiemo= setInterval(contar,1000)
function contar(){
    console.log("tiempo restante"+contador);
    contador--
    if(contador<0){
        clearInterval(tiemo)
        console.log("El tiempo a terminado!!")
    }
}