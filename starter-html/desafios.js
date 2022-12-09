let nota = 59

if (nota >= 90){
    console.log("A")
} else if (nota >= 80 && nota <=89){
    console.log("B")
} else if (nota >= 70 && nota <=79){
    console.log("C")
} else if (nota >= 60 && nota <=69){
    console.log("D")
} else {
    console.log("F")
}

console.log("---------------------------------------------------------------------")

let gastos = {
    receitas: [1100,1000,3000],
    despesas: [200,100,300,400,600,700,800,900]
}

function saldo(){
    let totalReceita = 0
    let totalDespesa = 0
    let saldo = 0

    for(let receita of gastos.receitas){
        totalReceita += receita
    }
    for(let despesa of gastos.despesas){
        totalDespesa += despesa
    }

    saldo = totalReceita - totalDespesa
    console.log(totalDespesa)
    console.log(totalReceita)
    if (saldo < 0){
        alert("Saldo Negativo: "+saldo)
    } else{
        alert("Saldo Positivo: "+saldo)
    }

}
saldo()

console.log("---------------------------------------------------------------------")

let temp = "30C"

function convertTemp(temp){
    
}
