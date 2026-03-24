setTimeout(() => {
    let botDiv = document.createElement("div");
    document.getElementById("chat-box").appendChild(botDiv);
    typeEffect(getHackerReply(), botDiv);
}, 1000);