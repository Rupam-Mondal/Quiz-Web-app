const questions = [
    {
        question: "Which city is known as city of joy ?",
        answer: [
            {text: "Kolkata" , correct: true},
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which animal can not jump ?",
        answer: [
            { text: "Dog", correct: false },
            { text: "Elephant", correct: true },
            { text: "Cat", correct: false },
            { text: "Rat", correct: false }
        ]
    },
];

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
    let currQuestion = questions[currQuestionIndex];
    let questionNumber = currQuestionIndex + 1
    questionelement.innerHTML = questionNumber +'. '+currQuestion.question
}
startQuiz();