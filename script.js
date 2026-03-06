function armstrong(n){
let s=n.toString()
let sum=0
for(let d of s) sum+=Math.pow(d,s.length)
return sum==n
}
console.log(armstrong(153))