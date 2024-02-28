let a=5
let b=6
let c=7
function EncontrarareaTriangulo(a,b,c){
    let perimetro= (a+b+c)/2
    let Formulaarea= Math.sqrt(perimetro*(perimetro-a)*(perimetro-b)*(perimetro-c))
    return Formulaarea
}
let resultado=EncontrarareaTriangulo(a,b,c)
console.log(resultado)