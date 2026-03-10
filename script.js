// 36. Disarium number (powers of digits equal number)
function isDisarium(n){
  let sum=0, pos=1, num=n;
  while(num>0){
    let digit = num%10;
    sum += digit**pos;
    pos++; num=Math.floor(num/10);
  }
  console.log(sum===n ? `${n} is Disarium` : 'Not');
}
isDisarium(89); // 89 is Disarium[web:11]
