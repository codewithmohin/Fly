function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");

    let reply = getAIResponse(message);
    setTimeout(() => addMessage(reply, "bot"), 500);

    input.value = "";
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let msg = document.createElement("div");
    msg.className = "message " + sender;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hello")) return "Hi 👋 How can I help?";
    if (msg.includes("ai")) return "AI is the future 🚀";
    if (msg.includes("help")) return "I can chat with you!";
    if (msg.includes("price")) return "This is free for now 😄";

    return "I am still learning 🤖";
}