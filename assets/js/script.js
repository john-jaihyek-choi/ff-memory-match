var firstCardClicked;
var firstCardClass;

var secondCardClicked;
var secondCardClass;

var gameCardDiv = document.getElementById("gameCards");

var matchPair = 2
var maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
var matches = 0;

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

function showModal () {
    var modalBox = document.createElement("div");
    var modalContent = document.createElement("p")
    modalContent.textContent = "Congratulations! You have Won! Please click outside this box to restart.";
    modalContent.className = "modal-content";
    modalBox.appendChild(modalContent);
    modalBox.className = "modal-box hidden";
    document.querySelector(".container").appendChild(modalBox);
    document.querySelector(".modal-box").classList.remove("hidden");
    gameCardDiv.addEventListener("click", hideModal);
}

function hideModal () {
    document.querySelector(".modal-box").classList.add("hidden");
    var cardCount = document.getElementById("gameCards").childElementCount
    var backCards = document.querySelectorAll(".card-back");

    for (i = 0; i < cardCount; i++) {
        backCards[i].className = "";
        backCards[i].className += "card-back";
    }
    restartGame();
};

function restartGame (event) {
    matches = 0;
    gameCardDiv.removeEventListener("click", hideModal);
    clearCardClicked();
}

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
        if (firstCardClass === secondCardClass) {
            addClicker();
            clearCardClicked();
            matches++;
            attempts++;
            displayStats();
        } else {
            unhideCard();
            attempts++;
            displayStats();
        }        
    } else {
       firstCardClicked = event.target;
       firstCardClass = firstCardClicked.previousElementSibling.className;
    }

    if (matches === maxMatches) {
        showModal();
        addTotalGames();
    }
}

addClicker();
shuffleCards();

var attempts = 0;
var gamesPlayed = 0;

function displayStats () {
    document.getElementById("gamesPlayed").firstElementChild.textContent = gamesPlayed;
    document.getElementById("attempts").firstElementChild.textContent = attempts;
    document.getElementById("accuracy").firstElementChild.textContent = calculateAccuracy(attempts, matches);
};

function calculateAccuracy (attempts, matches) {
    return ((matches + gamesPlayed * maxMatches) / attempts * 100).toFixed(2) + "%";
};

function addTotalGames () {
    gamesPlayed++;
    document.getElementById("gamesPlayed").firstElementChild.textContent = gamesPlayed;
};