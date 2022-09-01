let num = []
console.log(`nosso vetor é o ${num}`)
let num2 = [1,2,3]
console.log(`nosso vetor é o ${num2}`)
num.push(1)
console.log(`nosso vetor é o ${num}`)
console.log(`${num.length} é o tamanho de vetor num e ${num2.length} é o tamanho do vetor num2`)
//Sorted Array
console.log("sorted array")
let num3 = [8,5,4,6,7,2,1]
num3.sort()
console.log(`vetor sorted ${num3}`)
//For tradicional
console.log("for tradicional")
let carros = ['Gol', 'Palio', 'Celta', 'Corolla']
let marcas = ['VW', 'Fiat', 'GM', 'Toyota']
for(let pos = 0; pos < carros.length; pos++){
    console.log(`O carro ${carros[pos]} é da marca ${marcas[pos]}`)
}
//Forin (foreach) ecma script
console.log("for in (ou foreach)")
for(pos in carros){
    console.log(`O carro ${carros[pos]} é da marca ${marcas[pos]}`)
}