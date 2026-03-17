// 15. Mandelbrot ASCII (console art)
function mandelbrot(w=40,h=20) {
  for(let y=0;y<h;y++) {
    let row='';
    for(let x=0;x<w;x++) {
      let a= x/w*3.5-2.5, b=y/h*2-1;
      let ca=a, cb=b, n=0;
      while(n<20) { let aa=ca*ca, bb=cb*cb; if(aa+bb>16) break; cb=2*ca*cb+ b; ca=aa-bb+a; n++; }
      row += n>16 ? ' ':String.fromCharCode(64+n/4|0);
    }
    console.log(row);
  }
}
mandelbrot();
