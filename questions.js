/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable semi */
const myQuestions = [{
  question: 'Which weighs more, a pound of feathers or a pound of bricks?',
  answers: {
    a: 'Feathers',
    b: 'Bricks',
    c: 'Both',
    d: 'F* you Riddler',
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
    b: 'Face',
    c: 'You',
    d: 'No one',
  },
  correctAnswer: 'a',
},
{
  question: 'What goes up but never comes down?',
  answers: {
    a: 'Age',
    b: 'Baloon',
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
{
  question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ',
  answers: {
    a: 'Echo',
    b: 'Voice',
    c: 'Guitar',
    d: 'Ideas',
  },
  correctAnswer: 'a',
},
{
  question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ',
  answers: {
    a: 'A dream',
    b: 'A map',
    c: 'An Idea',
    d: 'A game',
  },
  correctAnswer: 'b',
},
{
  question: 'Jimmy’s mother had three children. The first was called April, the second was called May. What was the name of the third?',
  answers: {
    a: 'June',
    b: 'Mary',
    c: 'Jimmy',
    d: 'February',
  },
  correctAnswer: 'c',
},
{
  question: 'Feed me and I will live, but give me a drink and I will die. What am I?',
  answers: {
    a: 'Water',
    b: 'Wind',
    c: 'Ice',
    d: 'Fire',
  },
  correctAnswer: 'd',
},
{
  question: 'Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?',
  answers: {
    a: 'Coffin',
    b: 'Coin',
    c: 'Chocolate',
    d: 'Death',
  },
  correctAnswer: 'a',
},
{
  question: 'You can drop me from the tallest building and Ill be fine, but if you drop me in water I die. What am I?',
  answers: {
    a: 'Paper',
    b: 'Sugar',
    c: 'Salt',
    d: 'Light',
  },
  correctAnswer: 'a',
},
{
  question: 'How many of each species did Moses take on the ark with him?',
  answers: {
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'None',
  },
  correctAnswer: 'd',
},
{
  question: 'If there are 3 apples and you take away 2, how many do you have?',
  answers: {
    a: '1',
    b: '2',
    c: '3',
    d: '5',
  },
  correctAnswer: 'b',
},
{
  question: 'You just bought a cute rabbit at a pet store. The rabbit can breed once every month, and deliver 7 babies at a time. How many rabbits do you have after 12 months?',
  answers: {
    a: '1',
    b: '2',
    c: '14',
    d: '84',
  },
  correctAnswer: 'a',
},
{
  question: 'I am born of water but when I return to water, I die. What am I?',
  answers: {
    a: 'Fish',
    b: 'Ice',
    c: 'Water',
    d: 'Air',
  },
  correctAnswer: 'b',
},
{
  question: 'A doctor gives you three pills and tells you to take one every 30 minutes. How long does it take to run out of pills?',
  answers: {
    a: '1h',
    b: '2h',
    c: '1h30',
    d: '30min',
  },
  correctAnswer: 'b',
},
// {
//   question: 'If there are 3 apples and you take away 2, how many do you have?',
//   answers: {
//     a: '1',
//     b: '2',
//     c: '3',
//     d: '5',
//   },
//   correctAnswer: 'b',
// },
// {
//   question: 'If there are 3 apples and you take away 2, how many do you have?',
//   answers: {
//     a: '1',
//     b: '2',
//     c: '3',
//     d: '5',
//   },
//   correctAnswer: 'b',
// },
];

// const randomNum = Math.floor(Math.random() * myQuestions.length)
let questionSelected = '';

function createQuestion() {
  // ADD QUESTION
  questionSelected = myQuestions[Math.floor(Math.random() * myQuestions.length)];
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

const audioGameOver = new Audio('gameover.mp3');
const audio = new Audio('mainmusic.mp3');
audio.volume = 0.4;

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}

function gameOver() {
  setTimeout(() => {
    audioGameOver.play();
  }, 100);
}


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

let questionScore = 0;

function youLoose2() {
  const loseScreen = document.getElementById('youlose');

  stopMusic();
  loseScreen.style.display = 'block';
  setTimeout(() => {
    loseScreen.style.opacity = '1';
  }, 200);
}

function looseScreen() {
  gameOver()
  youLoose2()
}

function checkAnswerA() {
  if (elementa === questionSelected.correctAnswer) {
    questionScore += 1
    return restartGame();
  }
  return looseScreen()
}

function checkAnswerB() {
  if (elementb === questionSelected.correctAnswer) {
    questionScore += 1
    return restartGame();
  }
  return looseScreen()
}
function checkAnswerC() {
  if (elementc === questionSelected.correctAnswer) {
    questionScore += 1
    return restartGame();
  }
  return looseScreen()
}
function checkAnswerD() {
  if (elementd === questionSelected.correctAnswer) {
    questionScore += 1
    return restartGame();
  }
  return looseScreen()
}
