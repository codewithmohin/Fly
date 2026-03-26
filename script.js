let t = 0;
setInterval(() => {
  console.clear();
  for (let y = -10; y < 10; y++) {
    let line = "";
    for (let x = -20; x < 20; x++) {
      let d = Math.sqrt(x*x + y*y);
      line += Math.sin(d - t) > 0 ? "#" : " ";
    }
    console.log(line);
  }
  t += 0.3;
}, 60);