
let panels = document.querySelectorAll('.panel')

panels.forEach((element) => {
    element.addEventListener('click', () => {
        removeClass()
        element.classList.add("active")
    })
})

function removeClass() {
    panels.forEach((element) =>{
        element.classList.remove("active")
    })
}