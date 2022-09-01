function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'impar'
    }
}

console.log(parimpar(2))

function soma(n1,n2){
    return n1+n2
}

console.log(soma(2,3))

function soma2(n1=0,n2=0){
    return n1+n2
}

console.log(soma2(2))

let v = function(x) {
    return x*2
}

console.log(v(2))
