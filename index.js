var red1 =1// Math.round(Math.random() * 15); 
var red2 = 1//Math.round(Math.random() * 15); 
var red3 = 1//Math.round(Math.random() * 15); 

let score = 0;

//updating score 

function updateScore() {
    document.querySelector('h1').innerText = `Score: ${score}`;
} 

//dynamic aspects

function clicked(index, ele) {
    if (index === red1 || index === red2 || index===red3) {
        new Audio('./wrong.mp3').play();
        document.querySelector('.numb').style.display='block';
        document.querySelector('body').style.backgroundColor='red';
        ele.style.backgroundColor = "red";
        document.querySelector('.a').style.display='block';
        document.querySelector('.score').innerText = `Your Score is ${score}`;

    } else {
        new Audio('./right.wav').play();
        ele.style.backgroundColor = "green";
        score += 1;
        updateScore(); 
    }
}
document.querySelector('button').addEventListener('click',function(){
    setTimeout(() => {
        location.reload();

    }, 200);
});
 
//event binding

document.querySelectorAll('.boxes .row .box').forEach((ele, index) => {
    ele.addEventListener('click', function() {
        clicked(index, ele);
    });
});
