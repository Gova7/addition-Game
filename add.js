let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNUmber = Math.random() * 100;
    let seconRandomdNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNUmber);
    secondNumberElement.textContent = Math.ceil(seconRandomdNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();

function checkResult() {
    let firstRandomNUmber = parseInt(firstNumberElement.textContent);
    let seconRandomdNumber = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfTwoRandomIntegers = firstRandomNUmber + seconRandomdNumber;

    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundcolor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundcolor = "#1e217c";
    }
}