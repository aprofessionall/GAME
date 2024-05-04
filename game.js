let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {

    console.log("DRAW");
    msg.innerText = "DRAW.PLAY AGAIN";
    msg.style.color="blue";
}
const lossGame = () =>{
    console.log("YOU LOSS");
    msg.innerText="YOU LOSS";
    msg.style.color="red";
}
const winGame = () => {
    console.log("YOU WIN!");
    msg.innerText="YOU WIN!";
    msg.style.color="green";
} 
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice === compChoice){
        drawGame();
    } else if (userChoice === "rock" && compChoice === "scissors" ||
               userChoice === "scissors" && compChoice === "paper" ||
               userChoice === "paper" && compChoice === "rock") {
        winGame();
    } 
    else {
        lossGame();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked-",choiceId);
        playGame(userChoice);
    });
});




