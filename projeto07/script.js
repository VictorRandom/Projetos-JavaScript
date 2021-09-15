
let square = document.querySelectorAll(".square");
let play = 0;
let playerTurn = document.getElementById("turn");
let win = false;
let winner = document.getElementById('winner');
let reset = document.getElementById('btn-reset');

function selectedSquare(){
    for(let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", game);
    }
}

function game (sqr) {

    let classSquare = sqr.target.classList;
    let clicked = false;

    if(classSquare.length >= 2){
        clicked = true;
        return;
    }
    else if(win == true){
        return;
    } else{
        if (play % 2 == 0 || play == 0){
            sqr.target.classList.add("x");
            play++;
            playerTurn.innerHTML = `Vez do jogador O`;
        } else {
            sqr.target.classList.add("o");
            play++;
            playerTurn.innerHTML = `Vez do jogador X`;
        }
        clicked = false;
        winGame();
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
        playerTurn.style.display = "none";
        win = true;
        winner.style.display = "block";
        winner.innerHTML = 'Player X won'
    } else if(square[0].className == "square o" && square[3].className == "square o" && square[6].className == "square o" ||
    square[1].className == "square o" && square[4].className == "square o" && square[7].className == "square o" ||
    square[2].className == "square o" && square[5].className == "square o" && square[8].className == "square o" ||
    square[0].className == "square o" && square[1].className == "square o" && square[2].className == "square o" ||
    square[3].className == "square o" && square[4].className == "square o" && square[5].className == "square o" ||
    square[6].className == "square o" && square[7].className == "square o" && square[8].className == "square o" ||
    square[0].className == "square o" && square[4].className == "square o" && square[8].className == "square o" ||
    square[2].className == "square o" && square[4].className == "square o" && square[6].className == "square o"
    ) {
        playerTurn.style.display = "none";
        win = true;
        winner.style.display = "block";
        winner.innerHTML = 'Player O won';
    } else if((square[0].className == "square o" || square[0].className == "square x") &&
    (square[1].className == "square o" || square[1].className == "square x") &&
    (square[2].className == "square o" || square[2].className == "square x") &&
    (square[3].className == "square o" || square[3].className == "square x") &&
    (square[4].className == "square o" || square[4].className == "square x") &&
    (square[5].className == "square o" || square[5].className == "square x") &&
    (square[6].className == "square o" || square[6].className == "square x") &&
    (square[7].className == "square o" || square[7].className == "square x") &&
    (square[8].className == "square o" || square[8].className == "square x") 
    ){
        playerTurn.style.display = "none";
        win = true;
        winner.style.display = "block";
        winner.innerHTML = 'Draw';
    }
}

reset.addEventListener("click", resetGame);

function resetGame() {
    win = false;
    playerTurn.style.display = "block";
    winner.style.display = "none";
    play = 0;
    playerTurn.innerHTML = `Vez do jogador X`;

    for(let i = 0; i < square.length; i++){
        square[i].className = "square"
    }
}


selectedSquare()