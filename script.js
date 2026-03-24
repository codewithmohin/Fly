function addMessage(text, type="bot") {
    let chatBox = document.getElementById("chat-box");
    let div = document.createElement("div");

    div.style.color = type === "user" ? "#38bdf8" : "#22c55e";
    div.innerText = "> " + text;

    chatBox.appendChild(div);
}