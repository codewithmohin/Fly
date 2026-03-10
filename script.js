// 34. Perfect number check (28)
function isPerfect(n){
  let sum=1;
  for(let i=2; i<n; i++) if(n%i===0) sum+=i;
  console.log(sum === n ? `${n} is perfect` : `${n} not perfect`);
}
isPerfect(28); // 28 is perfect[web:11]
