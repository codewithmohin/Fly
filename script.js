function analyzeResume(text) {
    let score = 0;

    if (text.includes("JavaScript")) score++;
    if (text.includes("React")) score++;
    if (text.includes("Node")) score++;

    return "Score: " + score + "/3";
}

console.log(analyzeResume("I know JavaScript and React"));