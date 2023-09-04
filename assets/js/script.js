var questionContainer = document.querySelector(".question-container")
var question = document.querySelector("#question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")


var questionsWithAnswers = [
    {
        question: "Question1",
        answer1: "Answer1!",
        answer2: "Answer2",
        answer3: "Answer3",
        answer4: "Answer4",
    },
    {
        question: "Question2",
        answer1: "Answer12",
        answer2: "Answer22",
        answer3: "Answer32!",
        answer4: "Answer42",
    },
    {
        question: "Question3",
        answer1: "Answer13",
        answer2: "Answer23!",
        answer3: "Answer33",
        answer4: "Answer43",
    },
    {
        question: "Question4",
        answer1: "Answer14",
        answer2: "Answer24",
        answer3: "Answer34",
        answer4: "Answer44!",
    }
]

i = 0

function render() {
    question.textContent = questionsWithAnswers[i].question;
    answer1.textContent = questionsWithAnswers[i].answer1;
    answer2.textContent = questionsWithAnswers[i].answer2;
    answer3.textContent = questionsWithAnswers[i].answer3;
    answer4.textContent = questionsWithAnswers[i].answer4;
}

render()

questionContainer.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        i++;
        render()
    }
})

questionContainer.addEventListener("click", function(event) {
    event.preventDefault();
    if ()
})