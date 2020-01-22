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
    console.log("Timer ranout");
    },1500);
};

function shuffleCards () {
    var cardCount = document.getElementById("gameCards").childElementCount
    var cardImgClass = $("div.card-front").attr("class").split(" ");
    var frontCards = document.querySelectorAll(".card-front");

    for (i = 0; i < cardCount; i++) {
        frontCards[i].className = "";
        frontCards[i].className += "card-front";
    };

    var classImgArray = [
        "js-logo",
        "js-logo",
        "html-logo",
        "html-logo",
        "gitHub-logo",
        "gitHub-logo",
        "mysql-logo",
        "mysql-logo",
        "php-logo",
        "php-logo",
        "react-logo",
        "react-logo",
        "node-logo",
        "node-logo",
        "css-logo",
        "css-logo",
        "docker-logo",
        "docker-logo"
    ];

    for (i = classImgArray.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * i);
        var tempIndex = classImgArray[i];

        classImgArray[i] = classImgArray[randomIndex];
        classImgArray[randomIndex] = tempIndex;

        frontCards[i].classList.add(classImgArray[i]);
    };
}

function handleClick (event) {
    if (event.target.className.indexOf("card-back") === -1) {
        return;
    }
    event.target.className += " hidden";

    if (firstCardClicked) {
        secondCardClicked = event.target;
        secondCardClass = secondCardClicked.previousElementSibling.className;
        removeClicker();
        console.log("second card")
        if (firstCardClass === secondCardClass) {
            addClicker();
            clearCardClicked();
            matches++
            console.log("img matches")
        } else {
            unhideCard();
            console.log("img does not match")
        }        
    } else {
       firstCardClicked = event.target;
       firstCardClass = firstCardClicked.previousElementSibling.className;
       console.log("first card")
    }

    if (matches === maxMatches) {
        document.querySelector(".modal").classList.remove("hidden");
    }
}

addClicker();
shuffleCards();