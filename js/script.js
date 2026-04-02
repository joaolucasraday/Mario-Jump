const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const loginContainer = document.querySelector('.loginContainer')
let score = 0;
let canScore = true;
let isJumping = false;
let isGameOver = false;
const gameover = document.querySelector('.gameover-box');

document.querySelector('.score-box').innerText = "Score: " + score;

const jump = () => {
    if (isJumping || isGameOver) return;

    isJumping = true;
    mario.classList.add('jump');
    mario.src = '../../imgs/mario-jump.gif';
    mario.style.width = '115px';

    setTimeout(() => {
        if (!isGameOver) {
            mario.classList.remove('jump');
            mario.src = '../../imgs/mario.gif';
            mario.style.width = '150px';
        }
        isJumping = false;
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        isGameOver = true;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../../imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        gameover.style.display = 'grid';

        clearInterval(loop);
    }

    if (pipePosition < 0 && canScore) {
        score += 10;
        canScore = false;
        document.querySelector('.score-box').innerText = "Score: " + score;
    }

    if (pipePosition > 120) {
        canScore = true;
    }
}, 10);

function loginUsuario() {
    loginContainer.style.display = 'block';
}

function fecharContainer() {
    loginContainer.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        jump();
    }
});


