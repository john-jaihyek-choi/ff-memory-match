//global variables//
var container = $(".container");
var stage = 1;
var matchPair = 2;
var maxMatches = 3;
var attempts = 0;
var matches = 0;
var firstCardClicked;
var firstCardClass;
var secondCardClicked;
var secondCardClass;
var felyne = null;

//stage class objects
var stageImg = {
    //3 x 2
    1: [
        "card-zangan","card-zangan","card-black-mage", "card-black-mage", "card-evoker", "card-evoker"
    ],
    //6 x 2
    2: [
        "barioth", "barioth", "diablos", "diablos", "legiana", "legiana",
        "paolumu", "paolumu", "radobaan", "radobaan", "tobiKadachi", "tobiKadachi"
    ],
    //6 x 3
    3: [
        "azurerath", "azurerath", "bazel", "bazel", "jyuratodus", "jyuratodus", "viperTobi",  "viperTobi",
        "anjanath", "anjanath", "odogaron", "odogaron", "rathalos", "rathalos", "teostra", "teostra", "zorah", "zorah"
    ],
    //6 x 4
    4: [
        "behemoth", "behemoth", "kulveTarroth", "kulveTarroth", "ebonyOdogaron", "ebonyOdogaron", "kirin", "kirin", "kushala", "kushala",
        "namielle",  "namielle", "nargacuga", "nargacuga", "nergigante", "nergigante", "tigrex", "tigrex", "xeno", "xeno", 
        "yianGaruga", "yianGaruga", "zinogre","zinogre"
    ]
};

//event listener
for (var i = 0; i < document.querySelectorAll(".felyneCard").length; i++) {
    document.querySelectorAll(".felyneCard")[i].addEventListener("click", startGame);
    document.querySelectorAll(".felyneCard")[i].addEventListener("click", felyneSelect);
} 

initializeGame();
stageCall(stage);

//must come after the game is initialized
var gameCardDiv = document.getElementById("gameCards");


function initializeGame () {
    //////////dom structure///////////
    
    // // header
    // var headerTitle = "";
    // var headerClass = "col-12";

    // var headerRow = document.createElement("div");
    // headerRow.className = "headerRow " + headerClass;
    // container.append(headerRow);

    // var headerRowText = document.createElement("header");
    // headerRowText.textContent = headerTitle;
    // headerRow.append(headerRowText);


    //gameRow
    var gameRowClass = "col-6"

    var gameRow = document.createElement("div");
    gameRow.className = "gameRow " + gameRowClass;
    container.append(gameRow);

    //statColumn
    var statColumnClass = "";
    var statColumn = document.createElement("aside");
    statColumn.className = "statColumn " + statColumnClass;
    gameRow.append(statColumn);

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
    var actionIconColumnClass = "";
    var actionIconColumn = document.createElement("aside");
    actionIconColumn.className = "actionIcon standby " + actionIconColumnClass;
    gameRow.append(actionIconColumn);

    //cardColumn
    var cardColumnClass = "";
    var cardColumnId = "gameCards";
    
    var cardColumn = document.createElement("main");
    cardColumn.className = "cardColumn " + cardColumnClass;
    cardColumn.setAttribute("id", cardColumnId);
    gameRow.append(cardColumn);

    // //sideBar
    // var sideBarClass = "col-12";

    // var sideBar = document.createElement("div");
    // sideBar.className = "sideBar " + sideBarClass;
    // container.append(sideBar);

    // var upperSideBar = document.createElement("div");
    // upperSideBar.className = "utility upperSideBar";
    // sideBar.append(upperSideBar);

    // var lowerSideBar = document.createElement("div");
    // lowerSideBar.className = "utility lowerSideBar";
    // sideBar.append(lowerSideBar);


    // //itemBar
    // var itemBarClassList = [
    //     "",
    //     ""
    // ];

    // for (i = 0; i < itemBarClassList.length; i++) {
    //     var itemBar = document.createElement("div");
    //     itemBar.className = "itemBar " + itemBarClassList[i];
    //     upperSideBar.append(itemBar);
    // };
}

/////////stage DOM //////////////////////////
///////prototype//////////
function stageCall (currentStage) {
    // var currentStage = stage;
    currentStage = stage
    repopulateCardColumn();

    if(currentStage > 1) {
        document.getElementById("gameCards").textContent = "";
        document.querySelector(".container").removeChild(document.querySelector(".modal-box"));
    }

    for (i = 0; i < stageImg[currentStage].length; i++) {
        //create card which goes into cardColumn
        var card = document.createElement("div")
        card.className = "card " + ("stage"+currentStage+"Card");
        document.querySelector(".cardColumn").append(card);

        //create cardFront which goes into card created above
        var cardFront = document.createElement("div");
        cardFront.className = "card-front " + stageImg[currentStage][i];
        card.append(cardFront);

        //create cardBack which goes into card created above
        var cardBack = document.createElement("div");
        cardBack.className = "card-back "
        card.append(cardBack);
    };

    
    document.querySelector("body").className = "";
    document.querySelector("body").className = "stage" + stage + "Background";

    //counts possible maxMatches for each stage
    maxMatches = stageImg[currentStage].length / matchPair;

    //shuffles cards at the start of each stage
    // shuffle(stageImg[currentStage]);
    
    matches = 0;
    
}
///////////////////////////////////////////////////////////////////

/////////////game function///////////////////////
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
    }, 1700);
};

function clearCardClicked() {
    firstCardClicked = null;
    secondCardClicked = null;
};

function restartGame() {
    gameCardDiv.removeEventListener("click", hideModalRestart);
    clearCardClicked();
}

function displayStats() {
    document.getElementById("stage").firstElementChild.textContent = stage;
    document.getElementById("attempts").firstElementChild.textContent = attempts;
    document.getElementById("accuracy").firstElementChild.textContent = calculateAccuracy(attempts, matches);
};

function calculateAccuracy(attempts, matches) {
    return (matches / attempts * 100).toFixed(2) + "%";
};

function addTotalGames() {
    stage++;
    document.getElementById("stage").firstElementChild.textContent = stage;
};

//shuffle
function shuffle (stageImgLength) {
    var cardCount = document.getElementById("gameCards").childElementCount;
    var frontCards = document.querySelectorAll(".card-front");

    for (i = 0; i < cardCount; i++) {
        frontCards[i].className = "";
        frontCards[i].className += "card-front";
    };

    for (i = stageImgLength.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * i);
        var tempIndex = stageImgLength[i];

        stageImgLength[i] = stageImgLength[randomIndex];
        stageImgLength[randomIndex] = tempIndex;

        frontCards[i].classList.add(stageImgLength[i]);
    };
}

//clean out all existing cards
function repopulateCardColumn () {
    var cardColumn = document.querySelector(".cardColumn");

    while (cardColumn.firstChild) {
        cardColumn.removeChild(cardColumn.firstChild);
    };
};

function handleClick(event) {
    if (event.target.className.indexOf("card-back") === -1) {
        return;
    };
    event.target.classList.add("hidden");

    if (firstCardClicked) {
        secondCardClicked = event.target;
        secondCardClass = secondCardClicked.previousElementSibling.className;
        removeClicker();
        if (firstCardClass === secondCardClass) {
            //swingSword Trigger  //make a function out of it and call it.
            document.querySelector(".actionIcon").classList.remove("standby");
            document.querySelector(".actionIcon").classList.add("swingSword");
            setTimeout(function () {
                document.querySelector(".actionIcon").classList.remove("swingSword");
                document.querySelector(".actionIcon").classList.add("standby");
            },1400); 
            matches++;
            addClicker();
            clearCardClicked();
            displayStats();
        } else {
            //fireTrigger   //make a function out of it and call it.
            document.querySelector(".actionIcon").classList.remove("standby");
            document.querySelector(".actionIcon").classList.add("fire");
            setTimeout(function () {
                document.querySelector(".actionIcon").classList.remove("fire");
                document.querySelector(".actionIcon").classList.add("standby");
            },1400); 
            //
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
////////////////////////////////////////////////

///////// Stage Modal///////////////////////////////////////
//prototype
var stageModal = {
    1: {
        statement1: "Congratulations",
        statement2: "You have successfully completed stage " + stage,
    },
    2: {
        statement1: "Congratulations",
        statement2: "You have successfully completed stage " + stage,
    },
    3: {
        statement1: "Congratulations",
        statement2: "You have successfully completed stage " + stage,
    },
    4: {
        statement1: "Congratulations",
        statement2: "You have successfully completed stage " + stage,
    },
}

//stage1
function showModal() {
    matches = 0;
    removeClicker();
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
            document.querySelector("button.nextStage").addEventListener("click", stageCall);
            document.querySelector("button.nextStage").addEventListener("click", addClicker);
            break;
        case 2:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage II. Would you like to proceed to the next stage?";
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
            document.querySelector("button.nextStage").addEventListener("click", stageCall);
            document.querySelector("button.nextStage").addEventListener("click", addClicker);
            break;
        case 3:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed Stage III. Would you like to proceed to the final stage?";
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
            document.querySelector("button.nextStage").addEventListener("click", stageCall);
            document.querySelector("button.nextStage").addEventListener("click", addClicker);
            break;
        case 4:
            var modalBox = document.createElement("div");
            document.querySelector(".container").appendChild(modalBox);
            modalBox.className = "modal-box hidden";

            var modalDiv = document.createElement("div");
            document.querySelector(".modal-box").appendChild(modalDiv);
            modalDiv.className = "modal-content";

            var modalContent1 = document.createElement("p");
            modalContent1.textContent = "Congratulations! You have completed all stages!";
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
            modalButtonRestartContent.innerHTML = "Play Again";

            // var modalButtonNextStage = document.createElement("button");
            // modalButton.appendChild(modalButtonNextStage);
            // modalButtonNextStage.className = "nextStage";
            // var modalButtonNextStageContent = document.querySelector("button.nextStage");
            // modalButtonNextStageContent.innerHTML = "Let's Go!";

            document.querySelector(".modal-box").classList.remove("hidden");
            document.querySelector("button.restart").addEventListener("click", hideModalRestart);
            // document.querySelector("button.nextStage").addEventListener("click", stageCall);
            // document.querySelector("button.nextStage").addEventListener("click", addClicker);
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
    stageCall(stage);
    addClicker();
    document.querySelector(".startPage").className = "startPage";
    document.querySelector(".container").classList.toggle("hidden");
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

function startGame() {
    hideStartModal();
}

function hideStartModal () {
    document.querySelector(".startPage").className = "startPage hidden";
    document.querySelector(".container").classList.toggle("hidden");
}

function felyneSelect(event) {
    felyne = event.currentTarget.classList[event.currentTarget.classList.length - 1];
    document.querySelector(".lowerSideBar").className = "utility lowerSideBar";
    document.querySelector(".lowerSideBar").classList.add(felyne);
}

addClicker();