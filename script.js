function reverseMagic(n){
let r=parseInt(String(n).split('').reverse().join(''))
return n+r
}
console.log(reverseMagic(123))