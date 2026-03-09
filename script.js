var h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
    var colors = ["red", "blue", "green", "purple", "orange"];
    var random = Math.floor(Math.random() * colors.length);
    h1.style.color = colors[random];
});