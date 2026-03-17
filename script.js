// 8. JSON viewer tree (console)
function tree(obj, prefix='') {
  Object.entries(obj).forEach(([k,v]) => {
    console.log(prefix + k + ':', typeof v==='object' ? '{...}' : v);
    if(typeof v==='object') tree(v, prefix+'  ');
  });
}
tree({a:1, b:{c:2, d:[3,4]}});
