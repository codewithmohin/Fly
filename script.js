let t = 0;
setInterval(() => {
  console.clear();
  for (let y = -10; y < 10; y++) {
    let line = "";
    for (let x = -20; x < 20; x++) {
      let d = x*x + y*y;
      line += d < 100 ? (Math.sin(t + d*0.05) > 0 ? "@" : ".") : " ";
    }
    console.log(line);
  }
  t += 0.2;
}, 70);