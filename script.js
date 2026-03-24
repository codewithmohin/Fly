setInterval(() => {
    let chatBox = document.getElementById("chat-box");
    let log = document.createElement("div");
    log.style.color = "#0f0";
    log.innerText = binaryEffect();
    chatBox.appendChild(log);
}, 3000);