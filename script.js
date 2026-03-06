function digitalRoot(n){
while(n>9){
n=[...n.toString()].reduce((a,b)=>a+ +b,0)
}
return n
}
console.log(digitalRoot(9876))