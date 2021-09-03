let body = document.querySelector("body")
let button = document.querySelector("button")
let color = ["red", "green", "blue", "grey", "purple", "pink", "black", "yellow"]

// body.style.backgroundColor = "red"
// button.style.backgroundColor = "blue"

button.addEventListener("click", changeColor)

function changeColor() {
    let colorIndex = Math.floor(Math.random() * color.length)
    body.style.backgroundColor = color[colorIndex]
}