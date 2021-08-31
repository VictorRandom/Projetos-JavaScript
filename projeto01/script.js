
document.body.addEventListener("keyup", (event) => {
    let key = event.code.toLowerCase();

    playSound(key)
})

document.querySelector(".composer button").addEventListener("click", () => {
    let audio = document.getElementById("input").value;

    if(audio !== ""){
        audioArray = audio.split("")
        playSoundComposition(audioArray)
    }
})


function playSound(sound){
    let song = document.getElementById(`s_${sound}`)
    let element = document.querySelector(`div[data-key = ${sound}]`)

    if(song){
        song.currentTime = 0
        song.play()
    }

    if(element){
        element.classList.add("active")

        setTimeout(() => {
            element.classList.remove("active")
        }, 300)
    }
}



function playSoundComposition(audioArray){
    let wait = 0

    for (let audios of audioArray){
        setTimeout(() => {
            playSound(`key${audios}`)
        }, wait)
        wait += 250
    }
}

/*
document.body.addEventListener("keyup", (event) => {
    let key = event.code.toLowerCase()

    playSound(key)
})

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.getElementById("input").value
    
    if(song !== ""){
        songArray = song.split('')
        playSoundComposition(songArray)
    }
})

function playSound (sound) {
    let audio = document.getElementById(`s_${sound}`)
    let element = document.querySelector(`div[data-key = ${sound}]`)

    if (audio) {
        audio.currentTime = 0
        audio.play()
    }

    if(element){
        element.classList.add("active")

        setTimeout(() => {
            element.classList.remove("active")
        },300)
    }
}

function playSoundComposition(songArray){
    let wait = 0

    for( let songs of songArray){
        setTimeout(() => {
            playSound(`key${songs}`)
        }, wait)
        
        wait += 250
    }
}
*/