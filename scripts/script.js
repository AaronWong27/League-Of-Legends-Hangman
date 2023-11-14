//const wordDisplay = document.getElementById("wordDisplay");
const $wordDisplay = $(`#wordDisplay`);

const hangmanImage = document.getElementById("hangmanImage");

const $guessesTextB = $(`#guessTextB`);

const keyboardDiv = document.getElementById("keyboard");

const $keysClicked = $(`.keys`);

const endPopup = document.getElementById("endPopup");

const endPopupMessage = document.getElementById("endPopupMessage")

const playAgainButton = document.getElementById("playAgainButton");



let currentChampion = ``;
let wrongGuessCount = 0;
let rightGuessCount = 0;
let guessedChampion = ``;

const maxGuesses = 6;

const fadeDelay = 500;

let animationStarted = false;

const getRandomWord = function(){
    // selects a random word
    const {champion, hint} = championList[Math.floor(Math.random() * championList.length)];
    console.log(champion, hint);
    document.getElementById("hintTextB").innerText = hint;
    //wordDisplay.innerHTML = champion.split("").map(function() {return `<li class="letter"></li>`}).join(``);

    let liElements = '';
    const letters = champion.split("");
    for (let i = 0; i < letters.length; i++) {
        liElements += '<li class="letter"></li>';
    }

    wordDisplay.innerHTML = liElements;
    currentChampion = champion;
}


getRandomWord();


$keysClicked.click(function(){
    const clickedLetter = $(this).text();
    console.log(clickedLetter);

    // Check if there is a match
    if (currentChampion.toLowerCase().includes(clickedLetter)){
        console.log("There is a match!");
        for (let i = 0; i < currentChampion.length; i++) {
            const championLetter = currentChampion[i];
            // Check if the clickedLetter matches the current letter in currentChampion
            if (clickedLetter === championLetter.toLowerCase()) {
                // Handle or display the correct letter, for example, update the UI
                console.log("Correct letter found:", clickedLetter);
                guessedChampion += clickedLetter;
                rightGuessCount++;
                this.disabled = true;

                // Find all the list elements
                $wordDisplay.find("li").each(function (index) {
                    // Update all matching occurrences in the word display
                    if (currentChampion[index].toLowerCase() === clickedLetter) {
                        $(this).addClass("word-display guessed");
                        $(this).text(clickedLetter.toUpperCase());
                        console.log(guessedChampion);
                    }
                });
            }
        }
    }
    else {
        wrongGuessCount++;
        console.log("wrong count:" + wrongGuessCount);
        hangmanImage.src = `images/hangman-${wrongGuessCount}.jpg`;
        this.disabled = true;
    }
    $guessesTextB.text(`${wrongGuessCount} / ${maxGuesses}`);

    if (rightGuessCount === currentChampion.length){
        gameOver("VICTORY");
    }

    if (wrongGuessCount === maxGuesses){
        gameOver("DEFEAT");
    }
});

function gameOver(message) {
    if (message === "VICTORY"){
        endPopupMessage.innerHTML = `<img src="./images/victory.png" alt="victory-img">`
    }
    else if (message === "DEFEAT"){
        endPopupMessage.innerHTML = `<img src="./images/defeat.png" alt="defeat-img">`
    }
    endPopup.style.display = "block";
    endPopup.style.opacity = 0;
    setTimeout(function() {
        endPopup.style.opacity = 1;
    }, fadeDelay);
}


function hideEndPopup() {
    endPopup.style.opacity = 0;
    setTimeout(function() {
        endPopup.style.display = "none";
    }, fadeDelay);
}




playAgainButton.addEventListener("click", function() {
    hideEndPopup();
    resetGame();
    //play again code
});

function resetGame(){
    wrongGuessCount = 0;
    rightGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.jpg`;
    $guessesTextB.text(`${wrongGuessCount} / ${maxGuesses}`);
    $keysClicked.prop('disabled', false);
    getRandomWord();
}