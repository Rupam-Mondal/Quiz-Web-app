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
        selectedBTN.style.backgroundColor = "green";
        score++;
    } else {
        selectedBTN.style.backgroundColor = "red";
    }

    Array.from(optionSection.children).forEach(button => {
        button.disabled = true;
    });

    button.disabled = false;
}
startQuiz();