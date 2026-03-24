function getHackerReply() {
    let replies = [
        "Decrypting data...",
        "Bypassing firewall...",
        "Injecting payload...",
        "Access granted.",
        "Scanning network..."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}