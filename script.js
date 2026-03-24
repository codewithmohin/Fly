function processCommand(input) {
    if (input === "hack") return "System breach initiated...";
    if (input === "scan") return "Scanning ports...";
    if (input === "whoami") return "You are anonymous.";
    return getHackerReply();
}