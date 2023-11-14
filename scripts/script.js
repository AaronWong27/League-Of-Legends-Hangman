//const wordDisplay = document.getElementById("wordDisplay");
const $wordDisplay = $(`#wordDisplay`);

const hangmanImage = document.getElementById("hangmanImage");

const $guessesTextB = $(`#guessTextB`);

const keyboardDiv = document.getElementById("keyboard");

const $keysClicked = $(`.keys`);

const endPopup = document.getElementById("endPopup");

const endPopupMessage = document.getElementById("endPopupMessage");

const playAgainButton = document.getElementById("playAgainButton");

const startPopup = document.getElementById("startPopup")

const startPopupMessage = document.getElementById("startPopupMessage");

const startGameButton = document.getElementById("startGameButton");

const $scoreTextB = $(`#scoreTextB`);




let currentChampion = ``;
let wrongGuessCount = 0;
let rightGuessCount = 0;
let guessCount = 0;
let guessedChampion = ``;

let numberOfGuesses = 0;

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
        for (let i = 0; i < currentChampion.length; i++) {
            const championLetter = currentChampion[i];
            // Check if the clickedLetter matches the current letter in currentChampion
            if (clickedLetter === championLetter.toLowerCase()) {
                // Handle or display the correct letter, for example, update the UI
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
        console.log("Great job!");
        guessCount++;
        console.log("guess count:" + guessCount);
        console.log("number of guesses" + numberOfGuesses);
        if (guessCount == numberOfGuesses){
            $scoreTextB.text(`${guessCount}`);
            gameOver("VICTORY");

        }
        else{
            $scoreTextB.text(`${guessCount}`);
            resetWord();
        }
    }

    if (wrongGuessCount === maxGuesses){
        gameOver("DEFEAT");
    }
});

function gameOver(message) {
    if (message === "VICTORY"){
        endPopupMessage.innerHTML = `<img src="./images/victory.png" alt="victory-img">`
        endPopup.style.backgroundColor = "blue";
    }
    else if (message === "DEFEAT"){
        endPopupMessage.innerHTML = `<img src="./images/defeat.png" alt="defeat-img">`
        endPopup.style.backgroundColor = "red";
    }
    endPopup.style.display = "block";
    endPopup.style.opacity = 0;
    setTimeout(function() {
        endPopup.style.opacity = 1;
    }, fadeDelay);
    $keysClicked.prop('disabled', true);
}


function hideEndPopup() {
    endPopup.style.opacity = 0;
    setTimeout(function() {
        endPopup.style.display = "none";
    }, fadeDelay);
}

function hideStartPopup() {
    startPopup.style.opacity = 0;
    setTimeout(function() {
        startPopup.style.display = "none";
    }, fadeDelay);
}

function showStartPopup() {
    startPopup.style.display = "block";
    startPopup.style.opacity = 0;
    setTimeout(function() {
        startPopup.style.opacity = 1;
    }, fadeDelay);
}

startGameButton.addEventListener("click", function(){
    hideStartPopup();
    const numberOfGuessesInput = document.getElementById("correctGuessesNumber");
    numberOfGuesses = parseInt(numberOfGuessesInput.value);

});


playAgainButton.addEventListener("click", function() {
    hideEndPopup();
    resetGame();
});

function resetGame(){
    wrongGuessCount = 0;
    rightGuessCount = 0;
    guessCount = 0;
    guessedChampion = ``;
    $scoreTextB.text(`${guessCount}`);

    hangmanImage.src = `images/hangman-${wrongGuessCount}.jpg`;
    $guessesTextB.text(`${wrongGuessCount} / ${maxGuesses}`);
    $keysClicked.prop('disabled', false);
    showStartPopup();
    getRandomWord();
}

function resetWord(){
    $keysClicked.prop('disabled', false);
    getRandomWord();
    rightGuessCount = 0;
    guessedChampion = ``;
}