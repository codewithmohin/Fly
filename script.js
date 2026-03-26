const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

const spinner = ["◰", "◳", "◲", "◱"];
let t = 0;
setInterval(() => {
  clear();
  console.log("  3D MAGIC SPINNER " + spinner[t % 4]);
  console.log("  Loading 3D terminal...");
  t++;
}, 200);
