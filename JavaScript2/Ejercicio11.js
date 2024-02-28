let c=9
let medio=Math.ceil(c/2)
for(let i = 1; i<=c; i--){
    let  patron = (" ")
    let Cantidad= i<=medio ? i: c-i+1
    for(let f = 1; f<Cantidad; f++){
    
    patron += ("  *")
    }
    console.log(patron)
}

