var secondsEl = document.querySelector("#seconds")
var questionContainer = document.querySelector(".question-container")
var question = document.querySelector("#question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var correctAnswer = document.querySelector("#correctAnswer")
var messageEl = document.querySelector("#message")


var questionsWithAnswers = [
    {
        question: "1. Question1",
        answer1: "1. Answer1!",
        answer2: "2. Answer2",
        answer3: "3. Answer3",
        answer4: "4. Answer4",
        correctAnswer: "1. Answer1!",
    },
    {
        question: "2. Question2",
        answer1: "1. Answer12",
        answer2: "2. Answer22",
        answer3: "3. Answer32!",
        answer4: "4. Answer42",
        correctAnswer: "3. Answer32!",
    },
    {
        question: "3. Question3",
        answer1: "1. Answer13",
        answer2: "2. Answer23!",
        answer3: "3. Answer33",
        answer4: "4. Answer43",
        correctAnswer: "2. Answer23!",
    },
    {
        question: "4. Question4",
        answer1: "1. Answer14",
        answer2: "2. Answer24",
        answer3: "3. Answer34",
        answer4: "4. Answer44!",
        correctAnswer: "4. Answer44!",
    }
]

var secondsLeft = 75;
var i = 0;

function timer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      secondsEl.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // highscore screen shows;
        }
        if (i === questionsWithAnswers.length) {
            clearInterval(timerInterval);
            // highscore screen shows;
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
    correctAnswer.textContent = questionsWithAnswers[i].correctAnswer
    messageEl.textContent = ""
}

render()

questionContainer.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button") === false) return;
    if (element.matches("button") && element.textContent === correctAnswer.textContent) {
        messageEl.textContent = "Correct!";
    } else if (element.matches("button") && element.textContent !== correctAnswer.textContent){
        messageEl.textContent = "Wrong! The correct answer is " + correctAnswer.textContent + ".";
        secondsLeft -= 10;
    } 
    i++;
    setTimeout(() => {
        render();
    }, 1000);
})



