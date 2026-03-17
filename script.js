// 18. QR-like pattern generator
function qrPattern(size=20) {
  const pat = Array(size).fill().map(()=>Array(size).fill('.'));
  for(let i=0;i<size;i+=4) for(let j=0;j<size;j+=4) pat[i][j]='█';
  console.log(pat.map(row=>row.join('')).join('\n'));
}
qrPattern();
