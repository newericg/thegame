/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable semi */
const myQuestions = [{
  question: 'Who is the strongest?',
  answers: {
    a: 'Superman',
    b: 'The Terminator',
    c: 'Waluigi, obviously',
    d: 'What',
  },
  correctAnswer: 'c',
},
{
  question: 'What belongs to you, but other people use it more than you?',
  answers: {
    a: 'Your money',
    b: 'Your hands',
    c: 'Your bed',
    d: 'Your name',
  },
  correctAnswer: 'd',
},
{
  question: 'Look in my face, I am somebody; Look in my back, I am nobody. What am I?',
  answers: {
    a: 'Mirror',
    b: 'Mr. M',
    c: 'You',
    d: 'No one',
  },
  correctAnswer: 'a',
},
{
  question: 'What goes up but never comes down?',
  answers: {
    a: 'Egg',
    b: 'Rocket',
    c: 'Smoke',
    d: 'Your ego',
  },
  correctAnswer: 'a',
},
{
  question: 'Always in you, Sometimes on you, If I surround you, I can kill you. What am I?',
  answers: {
    a: 'Blood',
    b: 'Light',
    c: 'Fire',
    d: 'Water',
  },
  correctAnswer: 'd',
},
{
  question: 'I am full of holes but I can still hold water. What am I?',
  answers: {
    a: 'Holes',
    b: 'Bucket',
    c: 'Sponge',
    d: 'Nose',
  },
  correctAnswer: 'c',
},
{
  question: 'What is black when you buy it, red when you use it, and gray when you throw it away?',
  answers: {
    a: 'Charcoal',
    b: 'Fire',
    c: 'Cigarette',
    d: 'Pipe',
  },
  correctAnswer: 'a',
},
{
  question: 'If you have me, you want to share me. If you share me, you havent got me. What am I?',
  answers: {
    a: 'Love',
    b: 'Secret',
    c: 'Money',
    d: 'I dont care',
  },
  correctAnswer: 'b',
},
{
  question: 'If you were running a race, and you passed the person in 2nd place, what place would you be in now?',
  answers: {
    a: '1st',
    b: '2nd',
    c: '3rd',
    d: '4th',
  },
  correctAnswer: 'b',
},
];

const randomNum = Math.floor(Math.random() * myQuestions.length)
const questionSelected = myQuestions[randomNum];

function createQuestion() {
  // ADD QUESTION
  const questText = document.createElement('p');
  const conteudoNovo = document.createTextNode(questionSelected.question);
  questText.appendChild(conteudoNovo);
  const divAtual = document.getElementById('question');
  divAtual.innerHTML = '';
  divAtual.appendChild(questText);

  // ADD ANSWERS
  const answersA = document.createTextNode(questionSelected.answers.a);
  const answersB = document.createTextNode(questionSelected.answers.b);
  const answersC = document.createTextNode(questionSelected.answers.c);
  const answersD = document.createTextNode(questionSelected.answers.d);
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  const c = document.getElementById('c');
  const d = document.getElementById('d');

  a.innerHTML = '';
  b.innerHTML = '';
  c.innerHTML = '';
  d.innerHTML = '';
  a.appendChild(answersA);
  b.appendChild(answersB);
  c.appendChild(answersC);
  d.appendChild(answersD);
}

// YOU LOSE SCREEN


// CHECK ANSWER

function restartGame() {
  const quest = document.getElementById('questions');
  quest.style.opacity = '0';
  // eslint-disable-next-line no-undef
  myGameArea.start();
  return setTimeout(() => {
    console.log('START GAME')
    quest.style.display = 'none';
  }, 2000);
}


const elementa = document.getElementById('a').id
const elementb = document.getElementById('b').id
const elementc = document.getElementById('c').id
const elementd = document.getElementById('d').id

let score = 0;

function checkAnswerA() {
  if (elementa === questionSelected.correctAnswer) {
    score += 1
    return restartGame();
  }
  return console.log('ERROUA')
}

function checkAnswerB() {
  if (elementb === questionSelected.correctAnswer) {
    score += 1
    return restartGame();
  }
  return console.log('ERROUB')
}
function checkAnswerC() {
  if (elementc === questionSelected.correctAnswer) {
    score += 1
    return restartGame();
  }
  return console.log('ERROUC')
}
function checkAnswerD() {
  if (elementd === questionSelected.correctAnswer) {
    score += 1
    return restartGame();
  }
  return console.log('ERROUD')
}
