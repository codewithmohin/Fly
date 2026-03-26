const { execSync } = require("child_process");
const fs = require("fs");

// total commits
const commits = 25;

// random delays in minutes (your pattern)
const delays = [1,3,2,4,3,2,5,1,2,3,4,2,1,5,3,2,4,1,2,3,2,4,1,3,2];

// function to wait
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  for (let i = 0; i < commits; i++) {
    console.log(`⏳ Waiting ${delays[i]} minute(s)...`);

    await wait(delays[i] * 60 * 1000); // convert min → ms

    // make change
    fs.appendFileSync("log.txt", `Commit ${i+1} at ${new Date()}\n`);

    // git commit
    execSync("git add .");
    execSync(`git commit -m "Auto commit ${i+1}"`);

    console.log(`✅ Commit ${i+1} done`);
  }

  execSync("git push");
  console.log("🚀 All commits pushed!");
}

run();