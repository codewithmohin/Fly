var h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
    if (h1.innerHTML === "Hello") {
        h1.innerHTML = "Welcome!";
    } else {
        h1.innerHTML = "Hello";
    }
});