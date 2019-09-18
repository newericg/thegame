
// MUSIC CONTROL

function playMusic() {
  if (!audio.play()) {
    audio.play();
  }
}
function altPlayMusic() {
  if (!playMusic()) {
    return playMusic();
  }
}

function stopMusic() {
  audio.pause();
}

// CANVAS GAME

class Component {
  constructor(x, y, speed, width, height) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
  }

  moveUp() {
    if (this.y > 0) {
      this.y -= this.speed;
    } else {
      this.y += 3;
    }
  }

  moveDown() {
    if (this.y < 410) {
      this.y += this.speed;
    } else {
      this.y -= 3;
    }
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() || this.top() > obstacle.bottom()
      || this.right() < obstacle.left()
      || this.left() > obstacle.right()
    );
  }
}

const player = new Component(90, 132, 8, 155, 105);

const background = new Component(0, 0);
const background2 = new Component(0, 0);
const background3 = new Component(0, 0);
const background4 = new Component(0, 0);
const backgroundFixed = new Component(0, 0);


let myObstacles = [];
let myObstacles2 = [];


// MAIN GAME FUNCTION

const myGameArea = {
  frames: 0,
  frames2: 0,
  start() {
    altPlayMusic();
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = 1000;
    this.canvas.height = 550;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // eslint-disable-next-line no-use-before-define
    this.interval = setInterval(updateGameArea, 20);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if (background.x <= -499) {
      background.x = 0;
    } else {
      this.bg = new Image();
      this.bg.src = './assets/1.png';
      ctx.drawImage(this.bg, background.x -= 0.1, background.y);
    }
    this.bg = new Image();
    this.bg.src = './assets/2.png';
    ctx.drawImage(this.bg, background.x, background.y);

    if (background2.x <= -899) {
      background2.x = 1000;
    } else {
      this.bg = new Image();
      this.bg.src = './assets/3.png';
      ctx.drawImage(this.bg, background2.x -= 0.2, background.y);
    }
    this.bg = new Image();
    this.bg.src = './assets/4.png';
    ctx.drawImage(this.bg, background2.x, background.y, this.canvas.width, this.canvas.height);

    if (background3.x <= -999) {
      background3.x = 800;
    } else {
      this.bg = new Image();
      this.bg.src = './assets/5.png';
      // eslint-disable-next-line max-len
      ctx.drawImage(this.bg, background3.x -= 0.4, background.y, this.canvas.width, this.canvas.height);
    }
    if (background4.x <= -559) {
      background4.x = 1000;
    } else {
      this.bg = new Image();
      this.bg.src = './assets/6.png';
      // eslint-disable-next-line max-len
      ctx.drawImage(this.bg, background4.x -= 1, background.y, this.canvas.width, this.canvas.height);
    }
    this.bg = new Image();
    this.bg.src = './assets/7.png';
    ctx.drawImage(this.bg, backgroundFixed.x, background.y, this.canvas.width, this.canvas.height);
    this.img = new Image();
    this.img.src = './assets/batman4.png';
    // eslint-disable-next-line no-use-before-define
    ctx.drawImage(this.img, player.x, player.y, 225, 145);
    ctx.font = '30px Verdana';
    // Fill with gradient
    ctx.fillStyle = '#3FA146';
    ctx.fillText(`CORRECT QUESTIONS : ${questionScore}`, 600, 50);
  },
  stop() {
    clearInterval(this.interval);
  },
};

// NEW GAME FUNCTION

function newGame() {
  const loseScreen = document.getElementById('youlose');
  const quest = document.getElementById('questions');

  quest.style.display = 'none';
  quest.style.opacity = '0';
  player.y = 132;
  player.x = 90;
  myObstacles = [];
  myObstacles2 = [];
  questionScore = 0;
  loseScreen.style.opacity = '0';
  setTimeout(() => {
    myGameArea.start();
  }, 400);
  setTimeout(() => {
    loseScreen.style.display = 'none';
  }, 1800);
}

// OBSTACULOS

function updateObstacles() {
  myGameArea.frames += 1;
  const minHeight = 20;
  const maxHeight = 470;
  const randomNumber = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
  if (myGameArea.frames % 120 === 0) {
    // eslint-disable-next-line no-undef
    myObstacles.push(new Obstacles(40, 40, 1020, randomNumber, myGameArea.context));
  }
  myObstacles.forEach((obstacle, index) => {
    obstacle.draw();
    obstacle.move();
    if (obstacle.x <= -100) {
      myObstacles.splice(index, 1);
    }
  });
}
// OBSTACULOS2

function updateObstacles2() {
  myGameArea.frames2 += 1;
  const minHeight = 20;
  const maxHeight = 470;
  const randomNumber = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
  if (myGameArea.frames2 % 60 === 0) {
    // eslint-disable-next-line no-undef
    myObstacles2.push(new Obstacles2(40, 60, 1020, randomNumber, myGameArea.context));
  }
  myObstacles2.forEach((obstacle, index) => {
    obstacle.draw();
    obstacle.move();
    if (obstacle.x <= -100) {
      myObstacles2.splice(index, 1);
    }
  });
}

// LOSE SCREEN FUNCTION

function youLose() {
  const loseScreen = document.getElementById('youlose');

  loseScreen.style.display = 'block';
  setTimeout(() => {
    loseScreen.style.opacity = '1';
  }, 200);
}


// QUESTION SCREEN FUNCTION

function startQuestion() {
  const quest = document.getElementById('questions');
  // eslint-disable-next-line no-undef
  createQuestion();
  quest.style.display = 'block';
  setTimeout(() => {
    quest.style.opacity = '0.95';
  }, 200);
  setTimeout(() => {
    myGameArea.clear();
  }, 2500);
}
// CRASH CHECK

function checkGameOver() {
  const crashed = myObstacles.some((obstacle) => player.crashWith(obstacle));
  const crashed2 = myObstacles2.some((obstacle) => player.crashWith(obstacle));
  const lastCanvas = document.getElementById('canvas');
  if (crashed) {
    myGameArea.stop();
    startQuestion();
    player.y = 132;
    player.x = 90;
    myObstacles = [];
    myObstacles2 = [];
    lastCanvas.remove();
    console.log('MORREU');
  } else if (crashed2) {
    myGameArea.stop();
    stopMusic();
    youLose();
    questionScore = 0;
    lastCanvas.remove();
    console.log('GAME OVER');
  }
}

// CHECK GAME WIN

function checkYouWin() {
  const lastCanvas = document.getElementById('canvas');

  if (questionScore >= 2) {
    myGameArea.stop();
    lastCanvas.remove();
    const winScreen = document.getElementById('youwin');

    winScreen.style.display = 'block';
    setTimeout(() => {
      winScreen.style.opacity = '1';
    }, 200);
  }
}


// PLAYER MOVEMENT

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 38) {
    player.moveUp();
  } else if (event.keyCode === 40) {
    player.moveDown();
  } else if (event.keyCode === 122) {
    player.jump();
  }
});

// GAME UPDATES

function updateGameArea() {
  myGameArea.clear();
  myGameArea.update();
  updateObstacles();
  updateObstacles2();
  checkYouWin();
  checkGameOver();
}


// DOM MANIPULATION
// ------------------- START BUTTON//
// eslint-disable-next-line no-unused-vars
function startGame() {
  const start = document.getElementById('START');
  const darkBG = document.getElementById('bg-fundo'); // BLACK START BACKGROUND
  const firstInt = document.getElementById('interaction_1');
  const riddle = document.getElementById('riddle1');

  darkBG.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // MAKE BLACK BG TRANSPARENT
  start.style.visibility = 'hidden';
  firstInt.style.opacity = '1';
  riddle.style.opacity = '1';

  // REMOVE BLACK BG ELEMENT
  setTimeout(() => {
    darkBG.remove();
  }, 5000);
}

document.addEventListener('keydown', (event) => {
  const riddle = document.getElementById('riddle1');
  const batman = document.getElementById('batman1');
  const secondInt = document.getElementById('interaction_2');
  const blackBG = document.createElement('div');
  const bodyElem = document.body;
  const instru = document.getElementById('instruc-text');


  if (event.keyCode === 32) {
    if (riddle.style.opacity === '1') {
      riddle.style.opacity = '0';
      batman.style.opacity = '1';
      secondInt.style.opacity = '1';
    } else if (batman.style.opacity === '1') {
      batman.style.opacity = '0';
      secondInt.style.opacity = '0';
      blackBG.id = 'bg-fundo2';
      bodyElem.appendChild(blackBG);

      // REMOVE BATMAN1
      setTimeout(() => {
        batman.remove();
      }, 2600);

      // REMOVE RIDDLE1
      setTimeout(() => {
        riddle.remove();
      }, 1500);

      // CREATE NEW BG TRANSPARENT
      setTimeout(() => {
        instru.style.display = 'inline';
      }, 10);

      // SET BG TO BLACK
      setTimeout(() => {
        blackBG.style.backgroundColor = 'black';
      }, 50);

      // INSTRUCTIONS APPEAR
      setTimeout(() => {
        instru.style.opacity = '1';
      }, 2000);
    }
  }
});

document.addEventListener('keydown', (event) => {
  const instru = document.getElementById('instruc-text');
  const lastBG = document.getElementById('bg-fundo2');

  if (event.keyCode === 32 && instru.style.opacity === '1') {
    instru.style.opacity = '0';
    lastBG.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    // REMOVE INSTRUCTIONS ELEMENT
    setTimeout(() => {
      instru.remove();
    }, 2500);

    // REMOVE BG2 ELEMENT
    setTimeout(() => {
      lastBG.remove();
    }, 5400);

    setTimeout(() => {
      myGameArea.start();
    }, 800);
  }
});
