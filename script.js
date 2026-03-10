// 45. Generate primes up to 20 (Sieve snippet)
const primes = [];
for(let i=2; i<=20; i++){
  let isPrime=true;
  for(let j=2; j<i; j++) if(i%j===0){isPrime=false; break;}
  if(isPrime) primes.push(i);
}
console.log(primes); // [2,3,5,7,11,13,17,19][web:11]
