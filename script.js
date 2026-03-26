let t = 0;
setInterval(() => {
  console.clear();
  for (let y = 0; y < 20; y++) {
    let line = "";
    for (let x = 0; x < 40; x++) {
      let z = Math.sin(x * 0.3 + t) + Math.cos(y * 0.3 + t);
      line += z > 0 ? "█" : ".";
    }
    console.log(line);
  }
  t += 0.1;
}, 80);