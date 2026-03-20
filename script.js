function sentiment(text) {
    if (text.includes("good")) return "Positive 😊";
    if (text.includes("bad")) return "Negative 😡";
    return "Neutral 😐";
}

console.log(sentiment("This is good"));