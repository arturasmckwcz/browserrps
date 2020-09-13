let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userSmall = 'USER'.fontsize(3).sub();
const computerSmall = 'COMPUTER'.fontsize(3).sub();
const choisesNames = {
    'r' : 'ROCK',
    'p' : 'PAPER',
    's' : 'SCISSORS'
}


function getComputerChoise() {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choises[randomNumber];
}

function win(userChoise, computerChoise) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${choisesNames[userChoise]}${userSmall} beats ${choisesNames[computerChoise]}${computerSmall}. You win!`;
    document.getElementById(userChoise).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoise).classList.remove("green-glow")}, 1000);
}

function lose(userChoise, computerChoise) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerSCore_span.innerHTML = computerScore;
    result_p.innerHTML = `${choisesNames[computerChoise]}${computerSmall} beats ${choisesNames[userChoise]}${userSmall}. You lost!`;
    document.getElementById(userChoise).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoise).classList.remove("red-glow")}, 1000);
}

function draw(userChoise, computerChoise) {
    // userScore++;
    // computerScore++;
    // userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${choisesNames[computerChoise]}${computerSmall} equals ${choisesNames[userChoise]}${userSmall}. It's a draw!`;
    document.getElementById(userChoise).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoise).classList.remove("grey-glow")}, 1000);
}

function game(userChoise) {
    const computerChoise = getComputerChoise();

    switch (userChoise + computerChoise) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoise);
            break;

        case "rp":
        case "sr":
        case "ps":
            lose(userChoise, computerChoise);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoise, computerChoise);
            break;
    }
}

function main() {

    rock_div.addEventListener("click", function(){
        game("r");
    })

    paper_div.addEventListener("click", function(){
        game("p");
    })

    scissors_div.addEventListener("click", function(){
        game("s");
    })

}

main();
