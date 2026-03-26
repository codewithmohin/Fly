const { execSync } = require("child_process");
const fs = require("fs");

const commits = 10;

for (let i = 1; i <= commits; i++) {
  fs.appendFileSync("log.txt", `Commit ${i}\n`);
  execSync("git add .");
  execSync(`git commit -m "Auto commit ${i}"`);
  console.log(`Commit ${i} done`);
}

execSync("git push");
console.log("All commits pushed 🚀");