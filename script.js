function digitSum(n){
return [...n.toString()].reduce((a,b)=>a+ +b,0)
}
console.log(digitSum(12345))