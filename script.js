// 6. Prime generator up to n
function* primesUpTo(n) {
  const isPrime = []; let count=0;
  for(let i=2; i<=n; i++) {
    if(!isPrime[i]) { yield i; count++; }
    for(let j=i*2; j<=n; j+=i) isPrime[j]=true;
  }
}
console.log([...primesUpTo(50)]);
