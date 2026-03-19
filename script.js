function fib(n) {
  if (n <= 1) return [0, 1].slice(0, n + 1);
  const seq = fib(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}
console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
 