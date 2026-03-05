const group = a => a.reduce((o,v)=>(o[v]=(o[v]||0)+1,o),{});
console.log(group(["a","b","a","c","b","a"]));