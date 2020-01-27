//global variables//
var container = $(".container");
var stage = 1;
var matchPair = 2;
var maxMatches = 3;
var attempts = 0;
var item1;
var item2;

//////////dom structure///////////
//header
var headerRowClassList = [
    "col-12"
];

var title = "";

for (i = 0; i < headerRowClassList.length; i++) {
    var headerRow = document.createElement("div");
    headerRow.className = "headerRow " + headerRowClassList[i];
    container.append(headerRow);

    var headerRowText = document.createElement("header");
    headerRowText.textContent = title;
    headerRow.append(headerRowText);
};

//gameRow
var gameRowClassList = [
    "col-6",
];
for (i = 0; i < gameRowClassList.length; i++) {
    var gameRow = document.createElement("div");
    gameRow.className = "gameRow " + gameRowClassList[i];
    container.append(gameRow);
};

//statColumn
var statColumnClassList = [
    ""
];
for (i = 0; i < statColumnClassList.length; i++) {
    var statColumn = document.createElement("aside");
    statColumn.className = "statColumn " + statColumnClassList[i];
    gameRow.append(statColumn);
};

//statBox
var statBoxClassList = [
    "",
    "scoreHead",
    "scoreHead",
    "scoreHead",
    "scoreCount",
    "scoreCount",
    "scoreCount"
];

var statBoxIdList = [
    "",
    "",
    "",
    "",
    "stage",
    "attempts",
    "accuracy"
];

var statBoxText = [
    "Stats",
    "Stage",
    "Attempts",
    "Accuracy",
    "1",
    "0",
    "0"
];

for (i = 0; i < statBoxClassList.length; i++) {
    var statBox = document.createElement("div");
    statBox.className = "statBox " + statBoxClassList[i];
    statBox.setAttribute("id", statBoxIdList[i]);
    statColumn.append(statBox);

    var h4Element = document.createElement("h4");
    h4Element.textContent = statBoxText[i];
    statBox.append(h4Element);
};

//actionIconColumn
var actionIconColumnClassList = [
    ""
];
for (i = 0; i < actionIconColumnClassList.length; i++) {
    var actionIconColumn = document.createElement("aside");
    actionIconColumn.className = "actionIconColumn " + actionIconColumnClassList[i];
    gameRow.append(actionIconColumn);
};

//cardColumn
var cardColumnClassList = [
    ""
];

var cardColumnIdList = [
    "gameCards"
];

for (i = 0; i < cardColumnClassList.length; i++) {
    var cardColumn = document.createElement("main");
    cardColumn.className = "cardColumn " + cardColumnClassList[i];
    cardColumn.setAttribute("id", cardColumnIdList[i]);
    gameRow.append(cardColumn);
};

//sideBar
var sideBarClassList = [
    "col-12"
]

for (i = 0; i < sideBarClassList.length; i++) {
    var sideBar = document.createElement("div");
    sideBar.className = "sideBar " + sideBarClassList[i];
    container.append(sideBar);

    var upperSideBar = document.createElement("div");
    upperSideBar.className = "utility upperSideBar";
    sideBar.append(upperSideBar);

    var lowerSideBar = document.createElement("div");
    lowerSideBar.className = "utility lowerSideBar";
    sideBar.append(lowerSideBar);
};

//itemBar
var itemBarClassList = [
    "",
    ""
];

for (i = 0; i < itemBarClassList.length; i++) {
    var itemBar = document.createElement("div");
    itemBar.className = "itemBar " + itemBarClassList[i];
    upperSideBar.append(itemBar);
};

stage1();

//////////////////////////////////////////////////////

/////////stage DOM //////////////////////////
////6 x 1
//card
function stage1() {
    var cardClassList = [
        "stage1Card",
        "stage1Card",
        "stage1Card",
        "stage1Card",
        "stage1Card",
        "stage1Card"
    ];

    var cardFrontClassList = [
        "js-logo",
        "js-logo",
        "html-logo",
        "html-logo",
        "gitHub-logo",
        "gitHub-logo",
    ];

    for (i = 0; i < cardClassList.length; i++) {
        var card = document.createElement("div")
        card.className = "card " + cardClassList[i];
        cardColumn.append(card);

        var cardFront = document.createElement("div");
        cardFront.className = "card-front " + cardFrontClassList[i];
        card.append(cardFront);

        var cardBack = document.createElement("div");
        cardBack.className = "card-back "
        card.append(cardBack);
    };

    maxMatches = document.getElementById("gameCards").childElementCount / matchPair;

    // //shuffle
    // var cardCount = document.getElementById("gameCards").childElementCount;
    // var frontCards = document.querySelectorAll(".card-front");

    // for (i = 0; i < cardCount; i++) {
    //     frontCards[i].className = "";
    //     frontCards[i].className += "card-front";
    // };

    // for (i = cardFrontClassList.length - 1; i >= 0; i--) {
    //     var randomIndex = Math.floor(Math.random() * i);
    //     var tempIndex = cardFrontClassList[i];

    //     cardFrontClassList[i] = cardFrontClassList[randomIndex];
    //     cardFrontClassList[randomIndex] = tempIndex;

    //     frontCards[i].classList.add(cardFrontClassList[i]);
    // };
};

////6 x 2
function stage2() {
    hideModalProceed();
    document.getElementById("gameCards").textContent = "";
    var cardClassList = [
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card",
        "stage2Card"
    ];

    var cardFrontClassList = [
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
        "react-logo"
    ];

    for (i = 0; i < cardClassList.length; i++) {
        var card = document.createElement("div")
        card.className = "card " + cardClassList[i];
        cardColumn.append(card);

        var cardFront = document.createElement("div");
        cardFront.className = "card-front " + cardFrontClassList[i];
        card.append(cardFront);

        var cardBack = document.createElement("div");
        cardBack.className = "card-back "
        card.append(cardBack);
    };

    maxMatches = document.getElementById("gameCards").childElementCount / matchPair;

    //shuffle
    var cardCount = document.getElementById("gameCards").childElementCount;
    var frontCards = document.querySelectorAll(".card-front");

    for (i = 0; i < cardCount; i++) {
        frontCards[i].className = "";
        frontCards[i].className += "card-front";
    };

    for (i = cardFrontClassList.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * i);
        var tempIndex = cardFrontClassList[i];

        cardFrontClassList[i] = cardFrontClassList[randomIndex];
        cardFrontClassList[randomIndex] = tempIndex;

        frontCards[i].classList.add(cardFrontClassList[i]);
    };
};

function stage3() {
    hideModalProceed();
    document.getElementById("gameCards").textContent = "";
    var cardClassList = [
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card",
        "stage3Card"
    ];

    var cardFrontClassList = [
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

    for (i = 0; i < cardClassList.length; i++) {
        var card = document.createElement("div")
        card.className = "card " + cardClassList[i];
        cardColumn.append(card);

        var cardFront = document.createElement("div");
        cardFront.className = "card-front " + cardFrontClassList[i];
        card.append(cardFront);

        var cardBack = document.createElement("div");
        cardBack.className = "card-back "
        card.append(cardBack);
    };

    maxMatches = document.getElementById("gameCards").childElementCount / matchPair;

    // //shuffle
    // var cardCount = document.getElementById("gameCards").childElementCount;
    // var frontCards = document.querySelectorAll(".card-front");

    // for (i = 0; i < cardCount; i++) {
    //     frontCards[i].className = "";
    //     frontCards[i].className += "card-front";
    // };

    // for (i = cardFrontClassList.length - 1; i >= 0; i--) {
    //     var randomIndex = Math.floor(Math.random() * i);
    //     var tempIndex = cardFrontClassList[i];

    //     cardFrontClassList[i] = cardFrontClassList[randomIndex];
    //     cardFrontClassList[randomIndex] = tempIndex;

    //     frontCards[i].classList.add(cardFrontClassList[i]);
    // };
};

function stage4() {
    hideModalProceed();
    document.getElementById("gameCards").textContent = "";
    var cardClassList = [
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card",
        "stage4Card"
    ];

    var cardFrontClassList = [
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
        "docker-logo",
        "node-logo",
        "node-logo",
        "css-logo",
        "css-logo",
        "docker-logo",
        "docker-logo"
    ];

    for (i = 0; i < cardClassList.length; i++) {
        var card = document.createElement("div")
        card.className = "card " + cardClassList[i];
        cardColumn.append(card);

        var cardFront = document.createElement("div");
        cardFront.className = "card-front " + cardFrontClassList[i];
        card.append(cardFront);

        var cardBack = document.createElement("div");
        cardBack.className = "card-back "
        card.append(cardBack);
    };

    maxMatches = document.getElementById("gameCards").childElementCount / matchPair;

    // //shuffle
    // var cardCount = document.getElementById("gameCards").childElementCount;
    // var frontCards = document.querySelectorAll(".card-front");

    // for (i = 0; i < cardCount; i++) {
    //     frontCards[i].className = "";
    //     frontCards[i].className += "card-front";
    // };

    // for (i = cardFrontClassList.length - 1; i >= 0; i--) {
    //     var randomIndex = Math.floor(Math.random() * i);
    //     var tempIndex = cardFrontClassList[i];

    //     cardFrontClassList[i] = cardFrontClassList[randomIndex];
    //     cardFrontClassList[randomIndex] = tempIndex;

    //     frontCards[i].classList.add(cardFrontClassList[i]);
    // };
};
///////////////////////////////////////////////////////////////////

/////////////game function///////////////////////
var firstCardClicked;
var firstCardClass;

var secondCardClicked;
var secondCardClass;

var gameCardDiv = document.getElementById("gameCards");

// var maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
var matches = 0;

attempts = 0;
// var stage = 0;

function addClicker() {
    gameCardDiv.addEventListener("click", handleClick);
};

function removeClicker() {
    gameCardDiv.removeEventListener("click", handleClick);
};

function unhideCard() {
    setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        clearCardClicked();
        addClicker();
    }, 1500);
};

function clearCardClicked() {
    firstCardClicked = null;
    secondCardClicked = null;
};

function restartGame() {
    // resetStats();
    gameCardDiv.removeEventListener("click", hideModalRestart);
    clearCardClicked();
}

function displayStats() {
    document.getElementById("stage").firstElementChild.textContent = stage;
    document.getElementById("attempts").firstElementChild.textContent = attempts;
    document.getElementById("accuracy").firstElementChild.textContent = calculateAccuracy(attempts, matches);
};

// function resetStats () {
//     matches = 0;
//     attempts = 0;
//     document.getElementById("attempts").firstElementChild.textContent = attempts;
//     document.getElementById("accuracy").firstElementChild.textContent = 0 + "%";
// }

function calculateAccuracy(attempts, matches) {
    return (matches / attempts * 100).toFixed(2) + "%";
};

function addTotalGames() {
    stage++;
    document.getElementById("stage").firstElementChild.textContent = stage;
};

function handleClick(event) {
    if (event.target.className.indexOf("card-back") === -1) {
        return;
    }
    event.target.classList.add("hidden");

    if (firstCardClicked) {
        secondCardClicked = event.target;
        secondCardClass = secondCardClicked.previousElementSibling.className;
        removeClicker();
        if (firstCardClass === secondCardClass) {
            matches++;
            addClicker();
            clearCardClicked();
            displayStats();
        } else {

            unhideCard();
            displayStats();
        }
    } else {
        attempts++;
        firstCardClicked = event.target;
        firstCardClass = firstCardClicked.previousElementSibling.className;
    }

    if (matches === maxMatches) {
        attempts = 0;
        showModal();
        matches = 0;
        addTotalGames();
    }
}

addClicker();
////////////////////////////////////////////////

///////// Stage Modal///////////////////////////////////////
//stage1
function showModal() {
    matches = 0;
    switch (stage) {
        case 1:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage I. Would you like to proceed to the next stage?";
            modalDiv.appendChild(modalContent1);

            // var modalContent2 = document.createElement("p");
            // modalContent2.textContent = "Would you like to proceed to the next stage?";
            // modalDiv.appendChild(modalContent2);

            var modalButton = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalButton);
            modalButton.className = "modal-button";

            var modalButtonRestart = document.createElement("button");
            modalButton.appendChild(modalButtonRestart);
            modalButtonRestart.className = "restart";
            var modalButtonRestartContent = document.querySelector("button.restart");
            modalButtonRestartContent.innerHTML = "I Give Up";

            var modalButtonNextStage = document.createElement("button");
            modalButton.appendChild(modalButtonNextStage);
            modalButtonNextStage.className = "nextStage";
            var modalButtonNextStageContent = document.querySelector("button.nextStage");
            modalButtonNextStageContent.innerHTML = "Let's Go!";

            document.querySelector(".modal-box").classList.remove("hidden");
            document.querySelector("button.restart").addEventListener("click", hideModalRestart);
            document.querySelector("button.nextStage").addEventListener("click", stage2);
            break;
        case 2:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage II";
            modalDiv.appendChild(modalContent1);

            var modalContent2 = document.createElement("p");
            modalContent2.textContent = "Would you like to proceed to the next stage?";
            modalDiv.appendChild(modalContent2);

            var modalButton = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalButton);
            modalButton.className = "modal-button";

            var modalButtonRestart = document.createElement("button");
            modalButton.appendChild(modalButtonRestart);
            modalButtonRestart.className = "restart";
            var modalButtonRestartContent = document.querySelector("button.restart");
            modalButtonRestartContent.innerHTML = "I Give Up";

            var modalButtonNextStage = document.createElement("button");
            modalButton.appendChild(modalButtonNextStage);
            modalButtonNextStage.className = "nextStage";
            var modalButtonNextStageContent = document.querySelector("button.nextStage");
            modalButtonNextStageContent.innerHTML = "Let's Go!";

            document.querySelector(".modal-box").classList.remove("hidden");
            document.querySelector("button.restart").addEventListener("click", hideModalRestart);
            document.querySelector("button.nextStage").addEventListener("click", stage3);
            break;
        case 3:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage III";
            modalDiv.appendChild(modalContent1);

            var modalContent2 = document.createElement("p");
            modalContent2.textContent = "Would you like to proceed to the next stage?";
            modalDiv.appendChild(modalContent2);

            var modalButton = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalButton);
            modalButton.className = "modal-button";

            var modalButtonRestart = document.createElement("button");
            modalButton.appendChild(modalButtonRestart);
            modalButtonRestart.className = "restart";
            var modalButtonRestartContent = document.querySelector("button.restart");
            modalButtonRestartContent.innerHTML = "I Give Up";

            var modalButtonNextStage = document.createElement("button");
            modalButton.appendChild(modalButtonNextStage);
            modalButtonNextStage.className = "nextStage";
            var modalButtonNextStageContent = document.querySelector("button.nextStage");
            modalButtonNextStageContent.innerHTML = "Let's Go!";

            document.querySelector(".modal-box").classList.remove("hidden");
            document.querySelector("button.restart").addEventListener("click", hideModalRestart);
            document.querySelector("button.nextStage").addEventListener("click", stage4);
            break;
        case 4:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage IV";
            modalDiv.appendChild(modalContent1);

            var modalContent2 = document.createElement("p");
            modalContent2.textContent = "Would you like to proceed to the next stage?";
            modalDiv.appendChild(modalContent2);

            var modalButton = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalButton);
            modalButton.className = "modal-button";

            var modalButtonRestart = document.createElement("button");
            modalButton.appendChild(modalButtonRestart);
            modalButtonRestart.className = "restart";
            var modalButtonRestartContent = document.querySelector("button.restart");
            modalButtonRestartContent.innerHTML = "I Give Up";

            var modalButtonNextStage = document.createElement("button");
            modalButton.appendChild(modalButtonNextStage);
            modalButtonNextStage.className = "nextStage";
            var modalButtonNextStageContent = document.querySelector("button.nextStage");
            modalButtonNextStageContent.innerHTML = "Let's Go!";

            document.querySelector(".modal-box").classList.remove("hidden");
            document.querySelector("button.restart").addEventListener("click", hideModalRestart);
            document.querySelector("button.nextStage").addEventListener("click", stage5);
            break;
        default:
            break;
    }
}

function hideModalRestart() {
    document.getElementById("gameCards").textContent = "";
    document.querySelector(".container").removeChild(document.querySelector(".modal-box"));
    stage = 1;
    document.getElementById("stage").firstElementChild.textContent = stage;
    document.getElementById("attempts").firstElementChild.textContent = 0;
    document.getElementById("accuracy").firstElementChild.textContent = 0 + "%";
    stage1();// this will later lead to the very first page of the website
};

function hideModalProceed() {
    document.querySelector(".container").removeChild(document.querySelector(".modal-box"));
    var cardCount = document.getElementById("gameCards").childElementCount
    var backCards = document.querySelectorAll(".card-back");

    for (i = 0; i < cardCount; i++) {
        backCards[i].className = "";
        backCards[i].className += "card-back";
    }
};