// User selects 
// opponents / computers selection picked using math method
// function to return who won
// updates scoreboard 

let rockButton = document.getElementById('rockButton');
let paperButton = document.getElementById('paperButton');
let scissorsButton = document.getElementById('scissorsButton');
// let weapon;

rockButton.addEventListener("click", () => getSelected('rock'));
paperButton.addEventListener("click", () => getSelected('paper'));
scissorsButton.addEventListener("click", () => getSelected('scissors'));

function getSelected(userSelection) {
    document.getElementById('userChose').innerHTML = `${userSelection}`;
};


