const count = s => [...s].reduce((a,c)=>({...a,[c]:(a[c]||0)+1}),{});
console.log(count("javascript"));