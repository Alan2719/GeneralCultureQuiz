var begin = document.querySelector(".card-body");
var secondsLeft = 120;
var secondsEl = document.querySelector("#seconds");
var questionEl = document.querySelector("#word-question");
var questionNum = document.querySelector("#question-number");
var text = document.querySelector(".card-text");
var buttons = document.querySelector(".buttons");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var start = document.createElement("button");
var buttonContainer = document.querySelector(".button-container")

var questions = [
    { "q": "What is the capital of France?",
        a1: "France",
        a2: "Berlin",
        a3: "Montevideo",
        a4: "Washington"
    },
    { "q": "What is the value of the gravity on planet Earth",
        a1: "8.91",
        a2: "10.81",
        a3: "9.81",
        a4: "7.81"
    },
    { "q": "How many bones does the human body have?",
        a1: "200",
        a2: "206",
        a3: "205",
        a4: "210"
    },
    { "q": "In which state of Italy is the Vatican city?",
        a1: "Firenze",
        a2: "Milano",
        a3: "Roma",
        a4: "Venezia"
    },
    { "q": "What is the largest country in Europe?",
        a1: "Spain",
        a2: "Italy",
        a3: "France",
        a4: "Russia"
    }
];

buttonContainer.append(start);
start.setAttribute("style","background-color: #FFD51B;","style","border-radius: 0.3em;")
start.textContent = "Start";

buttons.append(btn1);
buttons.append(btn2);
buttons.append(btn3);
buttons.append(btn4);

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}


function assignQuestions() {
    for (var i = 0; i < questions.length; i++) {
        questionEl.textContent = "Question " + i;
        console.log(questions[i].q);
        console.log(Object.values(questions));
        text.textContent = questions[i].q;
        start.style.display = "none";
        buttons.style.display = "block";
        btn1.style.display = "block";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn4.style.display = "block";
        btn1.textContent = questions[i].a1;
        btn2.textContent = questions[i].a2;
        btn3.textContent = questions[i].a3;
        btn4.textContent = questions[i].a4;
        checkAnswer();
    }
}

function checkAnswer() {
    console.log("Hi");
}

start.addEventListener('click',function(event){
    event.preventDefault();
    setTime();
    console.log((event.target.parentElement).parentElement);
    assignQuestions();
})



//Empezar por el nivel màs pequeño, en este caso el botòn de start
//Usar el spread para que no se recorrar a los padres
//No hacer un loop, sino que las respuestas, sean correctas o 
//incorrectas, son las que llaman a las siguiente preguntas. 
//Create elements from javascript.
//Array of highscores.

//Hacer un contador en lugar de un ciclo for y hacer otra función con un
//if en donde estén los addEventListener. A los botones se les dará una
//misma clase*. Cuando se active un addEventListener regresar a la función
//assignQuestions y agregar uno al contador. Poner un if al principio
//para verificar que no se pase del largo del array de las preguntas. 
