function button() {
    var x = document.getElementById("change-text");
    if (x.innerHTML === "Hello World") {
        x.innerHTML = "Goodbye World";
    } else {
        x.innerHTML = "Hello World";
    }
}