function sendMessage() {
    let input = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    let userMsg = `<div>> ${input}</div>`;
    chatBox.innerHTML += userMsg;

    let botDiv = document.createElement("div");
    chatBox.appendChild(botDiv);

    typeEffect("ACCESSING DATABASE...", botDiv);

    document.getElementById("user-input").value = "";
}