const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const elemento = document.getElementById("pipe");

floor1 = document.querySelector('.floor-1')
floor2 = document.querySelector('.floor-2')
floor3 = document.querySelector('.floor-3')
audioStart = new Audio('/audio/theme.mp3')
audioGameOver = new Audio('/audio/gameover.mp3')
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

var gameover = document.getElementById("gameover");

audioStart.play();

function floorAnimation1(){
    floor1.classList.add('floor-animation-1');
        }setInterval(floorAnimation1, 0);

function floorAnimation2(){
    floor2.classList.add('floor-animation-2');
        }setInterval(floorAnimation2, 0);

function floorAnimation3(){
    floor3.classList.add('floor-animation-3');
        }setInterval(floorAnimation3, 3100); 



const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
    mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px', '');
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;
    audioStart.play();

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.left = '50px'


            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;
        

        gameover.style.display = "block";

        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

        audioGameOver.play();

        function stopAudio(){
            audioGameOver.pause();
            }setTimeout(stopAudio, 8000);


        clearInterval(loop)
      
        
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;

    if (count == 100)
    {
        pipe.style.animation = 'pipe-animation 1.1s infinite linear';
    }
    
    if (count == 200)
    {
        pipe.style.animation = 'pipe-animation 0.9s infinite linear';
    }

    if (count == 300)
    {
        pipe.style.animation = 'pipe-animation 0.7s infinite linear';
    }

    if (count == 400)
    {
        pipe.style.animation = 'pipe-animation 0.5 infinite linear';
    }


}, 10)

document.addEventListener('keydown', jump);
