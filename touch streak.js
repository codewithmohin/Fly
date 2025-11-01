const { execSync } = require("child_process");
const fs = require("fs");

// date range
const start = new Date("2025-11-01");
const end = new Date("2026-01-30");

// random number generator
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// loop through dates
let current = new Date(start);

while (current <= end) {
  // random commits per day (0 to 10)
  const commits = random(0, 10);

  for (let i = 0; i < commits; i++) {
    const hour = random(9, 22);
    const minute = random(0, 59);

    const dateStr = `${current.getFullYear()}-${String(current.getMonth()+1).padStart(2,"0")}-${String(current.getDate()).padStart(2,"0")} ${hour}:${minute}:00`;

    // make change
    fs.appendFileSync("log.txt", `Commit on ${dateStr}\n`);

    // commit with backdate
    execSync(`git add .`);
    execSync(`GIT_AUTHOR_DATE="${dateStr}" GIT_COMMITTER_DATE="${dateStr}" git commit -m "Commit on ${dateStr}"`);
    
    console.log(`✅ ${dateStr}`);
  }

  // next day
  current.setDate(current.getDate() + 1);
}

// push all at once
execSync("git push");

console.log("🚀 Done! Random commits created.");