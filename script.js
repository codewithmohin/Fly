function sendMessage() {
    let input = document.getElementById("user-input").value;

    addMessage(input, "user");

    let reply = processCommand(input);

    setTimeout(() => {
        addMessage(reply, "bot");
        scrollToBottom();
    }, 800);

    document.getElementById("user-input").value = "";
}