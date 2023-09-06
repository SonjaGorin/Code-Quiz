var headerEl = document.querySelector(".header");
var viewHighscores = document.querySelector("h1");
var secondsEl = document.querySelector("#seconds");
var questionContainer = document.querySelector(".question-container");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var correctAnswer = document.querySelector("#correctAnswer");
var messageEl = document.querySelector("#message");
var finalScoreEl = document.querySelector("#score");
var highscoresListEl = document.querySelector("#highscores-list");
var highscoresFormEl = document.querySelector("#highscores-form");
var inputInitialsEl = document.querySelector("#input-initials");
var formContainerEl = document.querySelector(".form-container");
var highscoresContainerEl = document.querySelector(".highscores-container");
var clearHighscoresBttn = document.querySelector("#clear-highscores");


var questionsWithAnswers = [
    {
        question: "1. Commonly used data types DO NOT include:",
        answer1: "1. Alerts",
        answer2: "2. Strings",
        answer3: "3. Numbers",
        answer4: "4. Booleans",
        correctAnswer: "1. Alerts",
    },
    {
        question: "2. The condition in an if / else statement is enclosed within ______.",
        answer1: "1.Quotes",
        answer2: "2. Curly brackets",
        answer3: "3. Parentheses",
        answer4: "4. Square brackets",
        correctAnswer: "3. Parentheses",
    },
    {
        question: "3. String values must be enclosed within ______ when being assigned to variables.",
        answer1: "1. Commas",
        answer2: "2. Quotes",
        answer3: "3. Curly brackets",
        answer4: "4. Parentheses",
        correctAnswer: "2. Quotes",
    },
    {
        question: "4. Arrays in JavaScript can be used to store ______.",
        answer1: "1. Numbers and strings",
        answer2: "2. Other arrays",
        answer3: "3. Booleans",
        answer4: "4. All of the above",
        correctAnswer: "4. All of the above",
    }
]

var secondsLeft = 75;
var i = 0;

function timer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      secondsEl.textContent = secondsLeft;
      finalScoreEl.textContent = secondsLeft;
        if(secondsLeft === 0 || i === questionsWithAnswers.length) {
            clearInterval(timerInterval);
            questionContainer.innerHTML = "";
            formContainerEl.style.display = "block";
        }
    }, 1000);
  }

timer()

function render() {
    question.textContent = questionsWithAnswers[i].question;
    answer1.textContent = questionsWithAnswers[i].answer1;
    answer2.textContent = questionsWithAnswers[i].answer2;
    answer3.textContent = questionsWithAnswers[i].answer3;
    answer4.textContent = questionsWithAnswers[i].answer4;
    correctAnswer.textContent = questionsWithAnswers[i].correctAnswer;
    messageEl.textContent = "";
}

render()

questionContainer.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches(".answer-button") === false) return;
    if (element.matches(".answer-button") && element.textContent === correctAnswer.textContent) {
        messageEl.textContent = "Correct!";
    } else if (element.matches(".answer-button") && element.textContent !== correctAnswer.textContent){
        messageEl.textContent = "Wrong! The correct answer is " + correctAnswer.textContent + ".";
        secondsLeft -= 10;
    } 
    i++;
    setTimeout(() => {
        render();
    }, 1000);
})

var highscoresList = []

function renderHighscores() {
    highscoresListEl.innerHTML = "";

    for (var i = 0; i < highscoresList.length; i++) {
      var highscore = highscoresList[i];

      var li = document.createElement("li");
      li.textContent = highscore.initials + " : " + highscore.score;
      li.setAttribute("data-index", i);

      highscoresListEl.appendChild(li);
    }
}

function init() {
    var storedInitials = JSON.parse(localStorage.getItem("highscoresList"));
    if (storedInitials !== null) {
        highscoresList = storedInitials;
    }

    renderHighscores();
  }

function storeHighscores() {
    localStorage.setItem("highscoresList", JSON.stringify(highscoresList));
}

highscoresFormEl.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("#submit") === false) {
        return;
    } else {
        var initialsText = inputInitialsEl.value.trim();
        if (initialsText === "") {
            return;
        }
        highscoresList.push({"initials": initialsText, "score": finalScoreEl.textContent});
        inputInitialsEl.value = "";

        storeHighscores();
        renderHighscores();
    }    
    headerEl.style.display = "none";
    formContainerEl.style.display = "none";
    highscoresContainerEl.style.display = "block";
});

init()

highscoresContainerEl.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("#clear-highscores") === false) {
        return;
    } else {
        while (highscoresListEl.firstChild) {
            highscoresListEl.removeChild(highscoresListEl.firstChild);
        }
        localStorage.clear();
    }
})