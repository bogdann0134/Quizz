const question = document.getElementById(`question`);
const choices = Array.from(document.getElementsByClassName(`choice-text`));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Cat face 1+1?",
    choice1: "1",
    choice2: "2",
    choice3: "0",
    choice4: "0.2",
    answer: 2,
  },
  {
    question: "Cat face 1+1?",
    choice1: "2",
    choice2: "22",
    choice3: "11",
    choice4: "1",
    answer: 1,
  },
  {
    question: "Cat face 1+1?",
    choice1: "14",
    choice2: "13",
    choice3: "12",
    choice4: "2",
    answer: 4,
  },
];

//constants
const CORRECT_BONUS = 10;
const Max_questions = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {


        if(availableQuestions.length == 0 || questionCounter >= Max_questions){
            //GO TO THE END PAGE
            return window.location.assign("/end.html")
        }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice, index) => {
    const number = index + 1;
    choice.innerText = currentQuestion[`choice${number}`];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener(`click`, (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset[`number`];

    getNewQuestion();
  });
});

startGame();
