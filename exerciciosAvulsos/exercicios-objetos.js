let pessoa = {
    nome:'Armenio',
    idade:32,
    aniversario(i){
        this.idade += i
    }
}
console.log(typeof pessoa)
console.log(pessoa)
pessoa.aniversario(1)
console.log(pessoa)