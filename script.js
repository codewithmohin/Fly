function extractKeywords(text) {
    return text.split(" ").filter(word => word.length > 4);
}

console.log(extractKeywords("AI is transforming the future of technology"));