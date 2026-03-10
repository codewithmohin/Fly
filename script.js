// 24. Armstrong number check (153)
function isArmstrong(n){let sum=0,orig=n; while(n>0){let d=n%10; sum+=d**3; n=Math.floor(n/10);} return sum===orig;} console.log(isArmstrong(153)); // true[web:11]
