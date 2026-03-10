// 35. Harshad number (sum of digits divides number)
function isHarshad(n){
  let sum=0, num=n;
  while(num>0){sum += num%10; num=Math.floor(num/10);}
  console.log(n % sum === 0 ? `${n} is Harshad` : 'Not');
}
isHarshad(18); // 18 is Harshad[web:11]
