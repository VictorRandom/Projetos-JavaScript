
let square = document.querySelectorAll(".square");
let play = 0;
let playerTurn = document.getElementById("turn")


function selectedSquare(){
    for(let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", game)
    }
}

function game (sqr) {

    let classSquare = sqr.target.classList
    let clicked = false;

    if(classSquare.length >= 2){
        clicked = true;
    } else{
        if (play % 2 == 0 || play == 0){
            sqr.target.classList.add("x");
            play++
            playerTurn.innerHTML = `Vez do jogador O`
        } else {
            sqr.target.classList.add("o");
            play++
            playerTurn.innerHTML = `Vez do jogador X`
        }
        clicked = false
        winGame()
    }

}

function winGame(){
    if (square[0].className == "square x" && square[3].className == "square x" && square[6].className == "square x" ||
        square[1].className == "square x" && square[4].className == "square x" && square[7].className == "square x" ||
        square[2].className == "square x" && square[5].className == "square x" && square[8].className == "square x" ||
        square[0].className == "square x" && square[1].className == "square x" && square[2].className == "square x" ||
        square[3].className == "square x" && square[4].className == "square x" && square[5].className == "square x" ||
        square[6].className == "square x" && square[7].className == "square x" && square[8].className == "square x" ||
        square[0].className == "square x" && square[4].className == "square x" && square[8].className == "square x" ||
        square[2].className == "square x" && square[4].className == "square x" && square[6].className == "square x"
    ) {
        playerTurn.innerHTML = "Jogador X venceu";
    } else if(square[0].className == "square o" && square[3].className == "square o" && square[6].className == "square o" ||
    square[1].className == "square o" && square[4].className == "square o" && square[7].className == "square o" ||
    square[2].className == "square o" && square[5].className == "square o" && square[8].className == "square o" ||
    square[0].className == "square o" && square[1].className == "square o" && square[2].className == "square o" ||
    square[3].className == "square o" && square[4].className == "square o" && square[5].className == "square o" ||
    square[6].className == "square o" && square[7].className == "square o" && square[8].className == "square o" ||
    square[0].className == "square o" && square[4].className == "square o" && square[8].className == "square o" ||
    square[2].className == "square o" && square[4].className == "square o" && square[6].className == "square o"
    ) {
        playerTurn.innerHTML ="Jogador O venceu"
    } 

}

selectedSquare()