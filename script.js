var begin = document.querySelector(".card-body");
var secondsEl = document.querySelector("#seconds");
var questionEl = document.querySelector("#word-question");
var questionNum = document.querySelector("#question-number");
var text = document.querySelector(".card-text");
var buttons = document.querySelector(".buttons");
var score = document.querySelector(".score");
var buttonContainer = document.querySelector(".button-container");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var start = document.querySelector(".btn");
var showCorrect = document.querySelector(".correct")
var showIncorrect = document.querySelector(".incorrect")
var label = document.createElement("label");
var InputScore = document.createElement("input");
var submit = document.createElement("button");
var secondsLeft = 60;

var questions = [
    { "q": "What is the capital of France?",
        a1: "Paris",
        a2: "Berlin",
        a3: "Montevideo",
        a4: "Washington",
        correct: "Paris"
    },
    { "q": "What is the value of the gravity on planet Earth",
        a1: "8.91",
        a2: "10.81",
        a3: "9.81",
        a4: "7.81",
        correct: "9.81"
    },
    { "q": "How many bones does the human body have?",
        a1: "200",
        a2: "206",
        a3: "205",
        a4: "210",
        correct: "206"
    },
    { "q": "In which state of Italy is the Vatican city?",
        a1: "Firenze",
        a2: "Milano",
        a3: "Roma",
        a4: "Venezia",
        correct: "Roma"
    },
    { "q": "What is the largest country in Europe?",
        a1: "Spain",
        a2: "Italy",
        a3: "France",
        a4: "Russia",
        correct: "Russia"
    }
];

/*Styles for the buttons*/ 
label.textContent = "Enter Initials: ";

submit.textContent = "Submit";
submit.setAttribute("style","background-color: #FFD51B;")

btn1.setAttribute("style","margin: 5px;");
btn2.setAttribute("style","margin: 5px;");
btn3.setAttribute("style","margin: 5px;");
btn4.setAttribute("style","margin: 5px;");

var lastQuestion = questions.length - 1;
var indexQuestion = 0;
var score = 0;

function startQuiz(){  //Run quiz, start timer, and text Questions.
    setTime();
    appendQuestions();
}

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}


function appendQuestions() {
    console.log(indexQuestion);
    questionEl.textContent = "Question " + (indexQuestion + 1);
    console.log(questions[indexQuestion].q);
    text.textContent = questions[indexQuestion].q;
    start.style.display = "none"; //Hide start button
    buttons.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    btn1.textContent = questions[indexQuestion].a1;
    btn2.textContent = questions[indexQuestion].a2;
    btn3.textContent = questions[indexQuestion].a3;
    btn4.textContent = questions[indexQuestion].a4;
    assignAnswer()
}

function assignAnswer() {
      if (btn1.addEventListener('click',function(event){
        event.stopPropagation();
        console.log(event.target);
        var answer = questions[indexQuestion].a1;
        checkAnswer(answer);
      })) {
        
      } else if (btn2.addEventListener('click',function(event){
        event.stopPropagation();
        var answer = questions[indexQuestion].a2;
        checkAnswer(answer);
      })) {

      } else if (btn3.addEventListener('click',function(event){
        event.stopPropagation();
        var answer = questions[indexQuestion].a3;
        checkAnswer(answer);
      })) { 

      } else if (btn4.addEventListener('click',function(event){
        event.stopPropagation();
        var answer = questions[indexQuestion].a4;
        checkAnswer(answer);
      })) { 
          
      }
}

function checkAnswer(answer){
    if (answer == questions[indexQuestion].correct){
        score = score + 10;
        correctMessage();
    } else {
        score = score - 10;
        incorrectMessage();
    }
}

function correctMessage() {
    showCorrect.textContent = "Correct!!"
    setTimeout(function(){
        showCorrect.textContent = ""
    }, 2000);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

function incorrectMessage() {
    showIncorrect.textContent = "Incorrect!!"
    setTimeout(function(){
        showIncorrect.textContent = ""
    }, 2000);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

function showScore() {
    buttons.style.display = "none";
    questionEl.textContent = "Test Finished!";
    text.textContent = "Your final score is " + score;
}

start.addEventListener('click',startQuiz);



