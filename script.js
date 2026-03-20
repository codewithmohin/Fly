function isSpam(msg) {
    const spamWords = ["win", "free", "money"];

    return spamWords.some(word => msg.toLowerCase().includes(word));
}

console.log(isSpam("Win free money now"));