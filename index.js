var red = Math.round(Math.random() * 15); 
let score = 0;

//updating score 

function updateScore() {
    document.querySelector('h1').innerText = `Score: ${score}`;
} 

//dynamic aspects

function clicked(index, ele) {
    if (index === red) {
        document.querySelector('body').style.backgroundColor='red';
        ele.style.backgroundColor = "red";
        setTimeout(()=>{
           alert(`Game over! Your score is ${score}. Refreshing the page to start again.`);
            location.reload(); 
        },500);

    } else {
        ele.style.backgroundColor = "green";
        score += 1;
        updateScore(); 
    }
}
 
//event binding

document.querySelectorAll('.boxes .row .box').forEach((ele, index) => {
    ele.addEventListener('click', function() {
        clicked(index, ele);
    });
});