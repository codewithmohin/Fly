var h1 = document.querySelector("h1");
var count = 0;

h1.addEventListener("click", function () {
    count++;
    h1.innerHTML = "Clicked " + count + " times";
});