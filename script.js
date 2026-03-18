const nums = Array.from({length: 20}, (_, i) => i + 1);
const evenSum = nums.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
const oddsAbove10 = nums.filter(n => n % 2 && n > 10);
console.log(evenSum, oddsAbove10); // 110 [11, 13, 15, 17, 19]
