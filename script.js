const curryAdd = a => b => c => a + b + c;
console.log(curryAdd(10)(20)(30)); // 60
