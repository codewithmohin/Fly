let n = 17;
let prime = n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);
console.log(prime);