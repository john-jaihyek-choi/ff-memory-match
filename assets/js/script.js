var firstCardClicked;
var firstCardClass;

var secondCardClicked;
var secondCardClass;

var gameCardDiv = document.getElementById("gameCards");

var matchPair = 2
var maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
var matches = 0;

var modalElement = document.createElement("div");
modalElement.textContent = "Congratulations! You have Won!";
modalElement.className = "modal hidden";
document.querySelector(".container").appendChild(modalElement);

function addClicker () {
    gameCardDiv.addEventListener("click", handleClick);
};

function removeClicker () {
    gameCardDiv.removeEventListener("click", handleClick);
};

function clearCardClicked () {
    firstCardClicked = null;
    secondCardClicked = null;
};

function unhideCard () {   
    setTimeout(function () {
    firstCardClicked.classList.remove("hidden");
    secondCardClicked.classList.remove("hidden");
    clearCardClicked();
    addClicker();
    },1500);
};

function handleClick (event) {
    if (event.target.className.indexOf("card-back") === -1) {
        return;
    }
    event.target.className += " hidden";

    if (firstCardClicked) {
        secondCardClicked = event.target;
        secondCardClass = secondCardClicked.previousElementSibling.className;
        removeClicker();

        if (firstCardClass === secondCardClass) {
            addClicker();
            clearCardClicked();
            matches++
        } else {
            unhideCard();
        }        
    } else {
       firstCardClicked = event.target;
       firstCardClass = firstCardClicked.previousElementSibling.className;
    }

    if (matches === maxMatches) {
        document.querySelector(".modal").classList.remove("hidden");
    }
}

addClicker();