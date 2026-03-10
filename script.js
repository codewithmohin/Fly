// 43. Recursive sum 1 to n
function recSum(n){
  return n<=0 ? 0 : n + recSum(n-1);
}
console.log(recSum(10)); // 55[web:10]
