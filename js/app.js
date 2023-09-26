const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');

function jump() {
  if (dino.classList != 'animate') {
    dino.classList.add('animate');
  }

  setTimeout(function() {
    dino.classList.remove('animate');
  }, 500);
};

const checkDead = setInterval(function() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 130) {
    cactus.style.animation = 'none';
    cactus.style.display = 'none';
    alert('You lose!');
  }

}, 10);

document.addEventListener('click', jump);