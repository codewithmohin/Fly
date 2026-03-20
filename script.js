function suggestCode(input) {
    if (input === "loop") return "for(let i=0;i<10;i++){}";
    if (input === "function") return "function myFunc(){}";

    return "No suggestion";
}

console.log(suggestCode("loop"));