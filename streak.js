const { execSync } = require("child_process");
const fs = require("fs");

// 🔥 DATE RANGE
const start = new Date("2025-08-17");
const end = new Date("2026-03-27");

// random helper
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random skip days (makes it human)
function shouldSkipDay() {
  return Math.random() < 0.2; // 20% days no commits
}

let current = new Date(start);

while (current <= end) {

  // sometimes skip day (very important for realism)
  if (shouldSkipDay()) {
    current.setDate(current.getDate() + 1);
    continue;
  }

  // 🔥 commits per day (1–20)
  const commits = random(1, 20);

  for (let i = 0; i < commits; i++) {
    const hour = random(8, 23);
    const minute = random(0, 59);
    const second = random(0, 59);

    const dateStr = `${current.getFullYear()}-${String(current.getMonth()+1).padStart(2,"0")}-${String(current.getDate()).padStart(2,"0")} ${hour}:${minute}:${second}`;

    // small random content (better realism)
    fs.appendFileSync("log.txt", `Update ${Math.random()} at ${dateStr}\n`);

    execSync("git add .");

    execSync(`git commit -m "Update at ${dateStr}"`, {
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

// push once
execSync("git push");

console.log("🚀 DONE! Full random graph created.");