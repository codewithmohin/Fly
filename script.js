function generateStartupName() {
    const words1 = ["AI", "Smart", "Auto", "Next"];
    const words2 = ["Tech", "Flow", "Mind", "Bot"];

    let name = words1[Math.floor(Math.random() * words1.length)] +
               words2[Math.floor(Math.random() * words2.length)];

    return name;
}

console.log(generateStartupName());