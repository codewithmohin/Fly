const width = process.stdout.columns || 80;
const height = process.stdout.rows || 20;

const columns = Array(width).fill(0);

setInterval(() => {
  console.clear();

  for (let i = 0; i < width; i++) {
    const y = columns[i];

    // print character
    let char = Math.random() > 0.5 ? "1" : "0";

    console.log("\x1b[" + y + ";" + i + "H" + "\x1b[32m" + char);

    // move down
    columns[i] = y > height || Math.random() > 0.95 ? 0 : y + 1;
  }

}, 50);