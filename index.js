// Game Initialization
const red1 = Math.round(Math.random() * 15);
const red2 = Math.round(Math.random() * 15);
const red3 = Math.round(Math.random() * 15);
let score = 0;

// Update Score Display
function updateScore() {
    document.querySelector('header h1').innerText = `Score: ${score}`;
}

// Handle Box Click
function clicked(index, ele) {
    if (index === red1 || index === red2 || index === red3) {
        new Audio('./wrong.mp3').play();
        document.querySelector('.numb').style.display = 'block';
        ele.style.backgroundColor = "red";
        document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        document.querySelector('.a').style.display = 'flex';
        document.querySelector('.score').innerText = `Your Score is ${score}`;
    } else {
        new Audio('./right.wav').play();
        ele.style.backgroundColor = "green";
        score++;
        updateScore();
    }
}

// Play Again Button
document.querySelector('button').addEventListener('click', function () {
    setTimeout(() => location.reload(), 200);
});

// Event Binding for Boxes
document.querySelectorAll('.boxes .row .box').forEach((ele, index) => {
    ele.addEventListener('click', () => clicked(index, ele));
});
