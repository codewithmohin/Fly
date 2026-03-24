function binaryEffect() {
    let binary = "";
    for (let i = 0; i < 20; i++) {
        binary += Math.round(Math.random());
    }
    return binary;
}