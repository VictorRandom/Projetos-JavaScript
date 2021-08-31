
let digital = document.querySelector(".digital")

let ps = document.querySelector(".p_s")
let pm = document.querySelector(".p_m")
let ph = document.querySelector(".p_h")

function clock(){
    let now = new Date()
    let second = now.getSeconds()
    let minute = now.getMinutes()
    let hour = now.getHours()

    digital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)} `


    let psDeg = (360/60 * second) - 90
    let pmDeg = (360/60 * minute) - 90
    let phDeg = (360/12 * hour) - 90

    ps.style.transform = `rotate(${psDeg}deg)`
    pm.style.transform = `rotate(${pmDeg}deg)` 
    ph.style.transform = `rotate(${phDeg}deg)` 
}

function fixZero(time){
    return time < 10 ? "0" + time : time
}

setInterval(clock,100)
clock()