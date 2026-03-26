let t = 0;
setInterval(() => {
  console.clear();
  for (let y = -10; y < 10; y++) {
    let line = "";
    for (let x = -20; x < 20; x++) {
      let a = Math.atan2(y, x);
      let r = Math.sqrt(x*x + y*y);
      line += Math.sin(a*5 + r - t) > 0 ? "*" : " ";
    }
    console.log(line);
  }
  t += 0.2;
}, 60);