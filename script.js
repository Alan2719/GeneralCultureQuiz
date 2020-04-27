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
var highScores = document.querySelector(".high-scores");
var showCorrect = document.querySelector(".correct")
var showIncorrect = document.querySelector(".incorrect")
var label = document.createElement("label");
var nameInput = document.createElement("input");
var submit = document.createElement("button");
var closeQuiz = document.createElement("button");
var lastDiv = document.querySelector(".score");
var secondsLeft = 20;
var table = document.querySelector(".table");
var mainContainer = document.querySelector(".container");
var tableName = document.querySelector("#tableName");
var tableScore = document.querySelector("#tableScore");
var closeButton = document.querySelector(".closeButton");
var quizDone = false;

/*Array with objects for the questions*/ 
var questions = [
    { "q": "What is the capital of France?",
        a1: "Paris",
        a2: "Berlin",
        a3: "Montevideo",
        a4: "Washington",
        correct: 1
    },
    { "q": "What is the value of the gravity on planet Earth",
        a1: "8.91",
        a2: "10.81",
        a3: "9.81",
        a4: "7.81",
        correct: 3
    },
    { "q": "How many bones does the human body have?",
        a1: "200",
        a2: "206",
        a3: "205",
        a4: "210",
        correct: 2
    },
    { "q": "In which state of Italy is the Vatican city?",
        a1: "Firenze",
        a2: "Milano",
        a3: "Roma",
        a4: "Venezia",
        correct: 3
    },
    { "q": "What is the largest country in Europe?",
        a1: "Spain",
        a2: "Italy",
        a3: "France",
        a4: "Russia",
        correct: 4
    }
];

/*Styles for the buttons*/ 
label.textContent = "Enter you name: ";

//Submit button styles 
submit.textContent = "Submit";
submit.setAttribute("style","background-color: #FFD51B;")

closeQuiz.textContent = "Back";
closeQuiz.setAttribute("style","background-color: #FFD51B;")

//Buttons styles
btn1.setAttribute("style","margin: 5px;");
btn2.setAttribute("style","margin: 5px;");
btn3.setAttribute("style","margin: 5px;");
btn4.setAttribute("style","margin: 5px;");

//Run quiz, start timer, display buttons and text Questions
function startQuiz(){  
    start.style.display = "none"; //Hide start button
    buttons.style.display = "block"; //Display buttons
    setTime();
    appendQuestions();
}

//Set time
function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;

        if (secondsLeft === 0 || quizDone) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

var lastQuestion = questions.length;
var indexQuestion = 0;
var score = 0;
var dataIndex = 0;
console.log(lastQuestion);

//Display the button and the questions once the start button is clicked
function appendQuestions() {
    console.log(indexQuestion);
    questionEl.textContent = "Question " + (indexQuestion + 1);
    console.log(questions[indexQuestion].q);
    text.textContent = questions[indexQuestion].q;
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    btn1.textContent = questions[indexQuestion].a1;
    btn2.textContent = questions[indexQuestion].a2;
    btn3.textContent = questions[indexQuestion].a3;
    btn4.textContent = questions[indexQuestion].a4;
}
//Check if the answer is correct. When you click the button, the
//target is the string and compare it with the answers inside the
//objects.
function checkAnswer(a) {
        if (a == questions[indexQuestion].correct) {
            secondsLeft = secondsLeft + 5;
            correctMessage();
        } else {
            secondsLeft = secondsLeft - 5;
            incorrectMessage();
        }
}

//Display ae correct message, check the indexQuestion is lower than
//the questions length. If this is true, call again the appendQuestions
//with the indexQuestion as parameter. 
function correctMessage() {
    console.log("CORRECT ANSWER!")
    showCorrect.textContent = "Correct!!"
    setTimeout(function(){
        showCorrect.textContent = ""
    }, 1500);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

function incorrectMessage() {
    console.log("INCORRECT ANSWER!")
    showIncorrect.textContent = "Incorrect!!"
    setTimeout(function(){
        showIncorrect.textContent = ""
    }, 1500);
    indexQuestion++;
    if (indexQuestion !== lastQuestion) {
        appendQuestions(indexQuestion);
    } else {
        showScore();
    }
}

//When the condition is false, th program displays the input, the
//final score and a submit button. 
function showScore() {
    quizDone = true;
    setTime(quizDone);
    buttons.style.display = "none";
    questionEl.textContent = "Test Finished!";
    seconds.textContent = secondsLeft;
    var newline = "\r\n"
    text.textContent = "Your final score is " + secondsLeft + "." + newline;
    text.append(newline);
    text.append(label);
    text.append(nameInput);
    text.append(submit);
    submit.addEventListener('click',function(){
        var playerName = nameInput.value;
        var playerScore = secondsLeft;
        if (playerName === "") {
            showCorrect.textContent = "Invalid Name";
        } else {
            showCorrect.textContent = "Score saved!";
            localStorage.setItem('name',playerName);
            localStorage.setItem('score',playerScore);
            lastDiv.append(closeQuiz);
            playerInfo();
        }
    })
}

function playerInfo() {
    tableName.textContent = localStorage.getItem('name');
    tableScore.textContent = localStorage.getItem('score');
}

//First addEventListener to the start test button
start.addEventListener('click',startQuiz);

//Answer buttons
btn1.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn1.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
    });
btn2.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn2.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
});
btn3.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn3.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
});
btn4.addEventListener('click',function(event){
    console.log(indexQuestion);
    dataIndex = btn4.getAttribute('data-index',questions[indexQuestion]);
    checkAnswer(dataIndex);
    });


highScores.addEventListener('click',function(){
    mainContainer.style.display = "none";
    table.style.display = "block";
    closeButton.append(closeQuiz);
})

closeQuiz.addEventListener('click',function(){
    begin.style.display = "block";
    text.style.display = "block";
})

