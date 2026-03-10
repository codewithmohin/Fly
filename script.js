// 47. Spicy number (product digits > sum digits)
function spicyCheck(n){
  let sum=0, prod=1, num=n;
  while(num>0){
    let d=num%10; sum+=d; prod*=d; num=Math.floor(num/10);
  }
  console.log(prod > sum ? `${n} is spicy` : 'Not');
}
spicyCheck(24); // 24 is spicy[web:11]
