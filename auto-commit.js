const simpleGit = require("simple-git");
const fs = require("fs");

const git = simpleGit();

// Date range
const startDate = new Date("2026-03-31");
const endDate = new Date("2026-04-04");

// Generate random commits between 4–7
function getRandomCommits() {
  return Math.floor(Math.random() * (7 - 4 + 1)) + 4;
}

// Generate random time in a day
function getRandomTime(date) {
  const newDate = new Date(date);
  newDate.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60)
  );
  return newDate;
}

// Main function
async function run() {
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const commits = getRandomCommits();

    for (let i = 0; i < commits; i++) {
      const commitDate = getRandomTime(currentDate);

      // Modify file
      fs.appendFileSync("data.txt", `Commit at ${commitDate}\n`);

      await git.add("./*");

      await git.commit(`Auto commit ${i + 1}`, {
        "--date": commitDate.toISOString(),
      });

      console.log(`Committed: ${commitDate}`);
    }

    // Next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log("✅ All commits done!");
}

run();