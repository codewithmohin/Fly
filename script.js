const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let t = 0;
setInterval(() => {
  clear();
  const s = ["┌─────┐", "│  /  │", "│ /   │", "└─────┘"];
  const rot = (s, t) => {
    const r = Math.floor(t * 0.1) % 4;
    return r === 0 ? s :
           r === 1 ? ["  ┌─────┐", "  │  /  │", "  │ /   │", "  └─────┘"] :
           r === 2 ? ["    ┌─────┐", "    │  /  │", "    │ /   │", "    └─────┘"] :
                    ["  ┌─────┐", "  │  /  │", "  │ /   │", "  └─────┘"];
  };
  console.log(rot(s, t).join("\n"));
  t += 1;
}, 200);

