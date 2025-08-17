const { execSync } = require("child_process");
const fs = require("fs");

// ✅ NEW DATE RANGE
const start = new Date("2025-08-17");
const end = new Date("2025-10-24");

// random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let current = new Date(start);

while (current <= end) {
  const commits = random(0, 10); // or (1,6) for realistic

  for (let i = 0; i < commits; i++) {
    const hour = random(9, 22);
    const minute = random(0, 59);

    const dateStr = `${current.getFullYear()}-${String(current.getMonth()+1).padStart(2,"0")}-${String(current.getDate()).padStart(2,"0")} ${hour}:${minute}:00`;

    fs.appendFileSync("log.txt", `Commit on ${dateStr}\n`);

    execSync("git add .");

    execSync(`git commit -m "Commit on ${dateStr}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: dateStr,
        GIT_COMMITTER_DATE: dateStr
      }
    });

    console.log(`✅ ${dateStr}`);
  }

  current.setDate(current.getDate() + 1);
}

execSync("git push");

console.log("🚀 Done! Aug → Oct commits created.");