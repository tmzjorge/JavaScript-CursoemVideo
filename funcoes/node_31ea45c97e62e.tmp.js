// 5! 5*4*3*2*1 fatorial

function fatorial(n) {
    let fat = 1
    for(i=n; i>1; i++){
        fat *= i 
    }
    return fat
}

console.log(fatorial(5))