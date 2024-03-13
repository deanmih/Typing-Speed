let seconds = 60;
let sourceText = "todd successful rut antidepressant memberlist subtypes secretaries sorrows manufactured gti olivet beside kentucky wh tuscany exploited audio petrie soluble saleh succeeds heightened brad taf aguilera lady mucosal gecko sliders void pack sharks peterborough holborn insulate conde myer fulton precision stifle clamping iru tranquil sally retinopathy motionless projection handcuffs timor roundabout hoosiers trot wobble polystyrene passer computes fallback sharply tasteless geotrack grouse clusters horses ocd hairdresser donor viewers siege dotcom samples aeruginosa barnsley ocp categorical graphic suppresses sgml prevent feldman wu colon northside eliminates intellectual dropout pumps nc gratis batty panelist rockabilly hookup assumed udaipur shawl mesh pantyhose textile stretching fortnight";
let arrayOfWords = sourceText.split(" ");
let wordIndex = 0;
let previousNoChars = 0;
let providedWords = 1;
let totalCorrectWords = 0;
let timeUp = 0;
document.getElementById("countdown").innerHTML = seconds;
let button = document.getElementById("button");
button.addEventListener("click", setInt, updateTime);
generateColoredLetterCards();

function setInt() {
    document.getElementById("button").removeEventListener("click", setInt, updateTime);
    setInterval(updateTime, 1000);
    setInterval(changeWord, 5);
}

function updateTime() {
    if (timeUp == 0) {
        --seconds;
        let time = document.getElementById("countdown");
        time.innerHTML = `${seconds}`;
    }
    if (seconds == 0 && timeUp == 0) {
        showResult();
    }
}

function generateColoredLetterCards() {
    let noCards = document.getElementById("display1").textContent.length;
    previousNoChars = noCards;
    let cardBox = document.getElementById("letterBoxContainer");
    for (let i = 0; i < noCards; ++i) {
        let card = document.createElement("div");
        card.id = i;
        card.className = "letterLabel";
        cardBox.appendChild(card);
    }
}

function changeWord() {
    let inputWord = document.getElementById("display2").value;
    let wordToBeWritten = document.getElementById("display1").textContent;
    let cardIndex = inputWord.length - 1;
    applyColor(cardIndex, inputWord ,wordToBeWritten);
    if (inputWord.length == wordToBeWritten.length) {
        document.getElementById("display2").value = "";
        document.getElementById("display1").innerHTML = arrayOfWords[wordIndex];
        ++providedWords;
        delCards(previousNoChars);
        ++wordIndex;
        generateColoredLetterCards();
    } 
    if (inputWord == wordToBeWritten) {
        ++totalCorrectWords;
        let correct = new Audio("correct.mp3");
        correct.play();
    } 
    if (inputWord.length == wordToBeWritten.length && inputWord != wordToBeWritten) {
        let wrong = new Audio("wrong.mp3");
        wrong.play();
    }
 }

function delCards(previousNoChars) {
    for (let i = 0; i < previousNoChars; ++i) {
        document.getElementById(i).remove();
    }
}

function applyColor(cardIndex, inputWord ,wordToBeWritten) {
    if (cardIndex >= 0 && inputWord[cardIndex] == wordToBeWritten[cardIndex]) {
        document.getElementById(cardIndex).style.background = "greenyellow";
    } else if (cardIndex >= 0 && inputWord[cardIndex] != wordToBeWritten[cardIndex]) {
        document.getElementById(cardIndex).style.background = "rgb(255, 77, 77)";
    }
}

function showResult() {
    ++timeUp;
    document.getElementById("display2").value = "";
    document.getElementById("display2").disabled = true;
    document.getElementById("display1").innerHTML = "-///-";
    let result = document.createElement("button");
    result.className = "result";
    result.innerHTML = "CORRECT: " + totalCorrectWords;
    result.addEventListener("click", refreshPage);
    document.body.appendChild(result);
}

function refreshPage() {
    location.reload();
}