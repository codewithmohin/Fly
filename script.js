// 46. Neon number (square digits sum = original)
function isNeon(n){
  let sq = n*n, sum=0;
  while(sq>0){sum += sq%10; sq=Math.floor(sq/10);}
  console.log(sum===n ? `${n} is Neon` : 'Not');
}
isNeon(9); // 9 is Neon[web:11]
