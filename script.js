// 49. HCF array
function hcfArr(arr){
  return arr.reduce((acc,val)=>gcd(acc,val));
}
function gcd(a,b){return b?gcd(b,a%b):a;}
console.log(hcfArr([12,18,24])); // 6[web:11]
