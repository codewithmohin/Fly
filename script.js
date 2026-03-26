const width = process.stdout.columns || 80;

setInterval(() => {
  let line = "";

  for (let i = 0; i < width; i++) {
    line += Math.random() > 0.5 ? "1" : "0";
  }

  console.clear(); // 🔥 important
  console.log("\x1b[32m%s\x1b[0m", line);

}, 100);