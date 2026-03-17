// 20. Fractal tree (recursive console)
function tree(n, prefix='') {
  if(n<1) return;
  console.log(prefix + '🌳');
  tree(n-1, prefix+'│  ');
  console.log(prefix + '└──');
  tree(n-1, prefix+'   ');
}
tree(4);
