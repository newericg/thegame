
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
        blackBG.id = 'bg-fundo2';
        bodyElem.appendChild(blackBG);
      }, 2600);

      // SET BG TO BLACK
      setTimeout(() => {
        blackBG.style.backgroundColor = 'black';
      }, 2850);

      // INSTRUCTIONS APPEAR
      setTimeout(() => {
        instru.style.opacity = '1';
      }, 3000);
    }
  }
});


document.addEventListener('keydown', (event) => {
  const instru = document.getElementById('instruc-text');
  const lastBG = document.getElementById('bg-fundo2');


  if (event.keyCode === 32 && instru.style.opacity === '1') {
    instru.style.opacity = '0';
    lastBG.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
