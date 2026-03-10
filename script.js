// 39. LCM of two numbers
function lcm(a,b){return (a*b)/gcd(a,b);}
function gcd(x,y){return y===0?x:gcd(y,x%y);}
console.log(lcm(12,18)); // 36[web:11]
