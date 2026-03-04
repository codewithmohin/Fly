const obj = { 0: 'zero', 1: 'one', true: 'truth' };
console.log(obj[true], obj[1]);  // 'truth' 'one' (true -> '1' -> 'truth')
