function summarize(text) {
    let sentences = text.split(".");
    
    // return first 2 sentences as summary
    return sentences.slice(0, 2).join(".") + ".";
}

let text = "AI is powerful. It is used in many fields. It helps automation.";
console.log(summarize(text));