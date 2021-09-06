
let currentQuestion = 0
let correctAnswer = 0

showQuestion()

document.querySelector(".scoreArea button").addEventListener('click', resetEvent)

function showQuestion(){
    let q = questions[currentQuestion]
    let pct = Math.floor((currentQuestion / questions.length) * 100)

    document.querySelector(".progress--bar").style.width = `${pct}%`

    if(questions[currentQuestion]){

        document.querySelector(".question").innerHTML = q.question
        // console.log(q.question)//pergunta ta aqui

        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block"

        document.querySelector(".options").innerHTML = ""

        
        for (let i in q.options){
            document.querySelector(".options").innerHTML += `<div data-op="${i}" class="option"><span>${i}</span>${q.options[i]}</div>`
        }
        
        
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener("click", optionClickEvent)
        })

    } else {
        //acabou as questoes
        finishQuiz()
    }

}


function optionClickEvent (e){
    let clickedOption = parseInt(e.target.getAttribute("data-op"))

    if(questions[currentQuestion].answer == clickedOption){
        correctAnswer++
    }

    currentQuestion++
    showQuestion()
}

function finishQuiz(){
    let points = Math.floor((correctAnswer / questions.length) * 100)

    if(points < 30){
        document.querySelector(".scoreText1").innerHTML = "Ta ruim em ?"
        document.querySelector(".scorePct").style.color = '#FF0000'
    } else if (points >= 30 && points < 70){
        document.querySelector(".scoreText1").innerHTML = "Muito bom !"
        document.querySelector(".scorePct").style.color = '#FFFF00'
    } else if (points >= 70){
        document.querySelector(".scoreText1").innerHTML = "Parabéns"
        document.querySelector(".scorePct").style.color = '#0D630D'
    }

    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`
    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}`

    document.querySelector(".scoreArea").style.display = "block";
    document.querySelector(".questionArea").style.display = "none"
    document.querySelector(".progress--bar").style.width = `100%`
}

function resetEvent(){
    currentQuestion = 0
    correctAnswer = 0
    showQuestion()
}