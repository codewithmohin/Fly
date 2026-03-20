function chatbot(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) return "Hi there!";
    if (input.includes("how are you")) return "I'm just code, but I'm doing great 😄";
    if (input.includes("bye")) return "Goodbye!";
    
    return "I don't understand that yet...";
}

console.log(chatbot("hello"));