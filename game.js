const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const mainleftpic = document.getElementById("mainleftpic");
const rightmainpic = document.getElementById("rightmainpic");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let total = 0;
let comptotal = 0;

// Function to handle game logic for player's choice
function playGame(playerChoice, playerImgSrc) {
    mainleftpic.src = playerImgSrc;
    const computerChoice = comp();
    
    if (playerChoice === computerChoice) {
        // setTimeout(() => {
        //     alert("Tied")
        // }, 500);
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        total++;
        num1.innerHTML = total;

    } else {
        comptotal++;
        num2.innerHTML = comptotal;
        console.log(`Computer wins. Computer Score:`, comptotal);
    }
}

// Event listeners for player choices
paper.onclick = function () {
    playGame("paper", "./assets/paper-hand.png");
};

rock.onclick = function () {
    playGame("rock", "./assets/rock-hand.png");
};

scissor.onclick = function () {
    playGame("scissors", "./assets/scissors-hand.png");
};

// Function to randomly select computer's choice
const arr = ["paper", "rock", "scissors"];

function comp() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[randomIndex];
    rightmainpic.src = `./assets/${computerChoice}-hand.png`;
    return computerChoice;
}


