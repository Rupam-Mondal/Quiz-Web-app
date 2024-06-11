
const questions = [
    {
        question: "Which city is known as city of joy?",
        answer: [
            { text: "Kolkata", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which animal can not jump?",
        answer: [
            { text: "Dog", correct: false },
            { text: "Elephant", correct: true },
            { text: "Cat", correct: false },
            { text: "Rat", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest mammal?",
        answer: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: [
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    }
];

const scoreSection = document.querySelector('.scoreboard')
const questionSection = document.querySelector('.question-section')
const questionelement = document.querySelector('.question p');
const optionSection = document.querySelector('.option');
const button = document.querySelector('.button');

let currQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currQuestion = 0;
    score =0;
    button.innerHTML = "Next";
    Showquestion();
}

function Showquestion(){
    optionSection.innerHTML = '';
    let currQuestion = questions[currQuestionIndex];
    let questionNumber = currQuestionIndex + 1
    questionelement.innerHTML = questionNumber +'. '+currQuestion.question

    currQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("options");
        optionSection.appendChild(button);
        
        button.addEventListener('click' , (e) => {
            Selection(e , answer.correct);
        })
    })
}

function Selection(event , isCorrect){
    const selectedBTN = event.target;
    if (isCorrect) {
        selectedBTN.style.backgroundColor = "rgb(113, 245, 141)";
        score++;
    } else {
        selectedBTN.style.backgroundColor = "rgb(247, 109, 99)";
    }

    Array.from(optionSection.children).forEach(button => {
        button.disabled = true;
    });

    button.disabled = false;
}
function nextButton(){
    currQuestionIndex++;
    if(currQuestionIndex < questions.length){
        Showquestion();
    }
    else{
        showscore();
    }
}
button.addEventListener('click' , (e) => {
    if(currQuestionIndex < questions.length){
        nextButton();
    }
    else{
        startQuiz();
    }
})

function showscore(){
    questionSection.innerHTML = ""
    scoreSection.style.display = "flex"
    scoreSection.innerHTML = `Your score is ${score} out of ${questions.length}.`
}
startQuiz();