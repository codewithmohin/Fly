function kaprekar(n){
let s=n*n+""
let mid=Math.floor(s.length/2)
return Number(s.slice(0,mid))+Number(s.slice(mid))==n
}
console.log(kaprekar(45))