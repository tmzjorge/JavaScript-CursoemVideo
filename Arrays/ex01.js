let num = [5,8,2,9,3,100]
num.sort(Number)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O elemento na posição 1 é ${num[1]}`)
console.log('O maior valor é ' + num[num.length-1])
for(i in num){
    console.log(num[i])
}