function autoReply(msg) {
    const replies = {
        "hi": "Hello 👋",
        "price": "It costs ₹99/month",
        "help": "How can I help you?"
    };

    return replies[msg.toLowerCase()] || "Please ask something else";
}

console.log(autoReply("hi"));