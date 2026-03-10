// 48. Count primes below 100 (simple)
let primeCount=0;
for(let i=2; i<100; i++){
  let p=true;
  for(let j=2; j<i; j++) if(i%j===0){p=false;break;}
  if(p) primeCount++;
}
console.log(primeCount); // 25[web:11]
