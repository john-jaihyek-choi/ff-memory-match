var container = $(".container");

//header
var headerRowClassList = [
    "col-12 headerRow"
]

var title = "My Memory Match"

for (i = 0; i < headerRowClassList.length; i++) {
    var headerRow = document.createElement("div");
    headerRow.className = headerRowClassList[i];
    container.append(headerRow);

    var headerRowText = document.createElement("header");
    headerRowText.textContent = title;
    headerRow.append(headerRowText);
};

//gameRow
var gameRowClassList = [
    "col-12 gameRow",
]
for (i = 0; i < gameRowClassList.length; i++) {
    var gameRow = document.createElement("div");
    gameRow.className = gameRowClassList[i];
    container.append(gameRow);
}

//statColumn
var statColumnClassList = [
    "statColumn"
];
for (i = 0; i < statColumnClassList.length; i++) {
    var statColumn = document.createElement("aside");
    statColumn.classList.add(statColumnClassList[i]);
    gameRow.append(statColumn);
}

//statBox
var statBoxClassList = [
    "statBox",
    "statBox scoreHead",
    "statBox scoreHead",
    "statBox scoreHead",
    "statBox scoreCount",
    "statBox scoreCount",
    "statBox scoreCount"
];

var statBoxIdList = [
    "",
    "",
    "",
    "",
    "gamesPlayed",
    "attempts",
    "accuracy"
];

var statBoxText = [
    "Stats",
    "Games Played",
    "Attempts",
    "Accuracy",
    "0",
    "0",
    "0"
];

for (i = 0; i < statBoxClassList.length; i++) {
    var statBox = document.createElement("div");
    statBox.className = statBoxClassList[i];
    statBox.setAttribute("id", statBoxIdList[i]);
    statColumn.append(statBox);
    
    var h4Element = document.createElement("h4");
    h4Element.textContent = statBoxText[i];
    statBox.append(h4Element);
};

//cardColumn
var cardColumnClassList = [
    "cardColumn"
];

var cardColumnIdList = [
    "gameCards"
];

for (i = 0; i < cardColumnClassList.length; i++) {
    var cardColumn = document.createElement("main");
    cardColumn.className = cardColumnClassList[i];
    cardColumn.setAttribute("id", cardColumnIdList[i]);
    gameRow.append(cardColumn);
};

//card
var cardClassList = [
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
    "col-2 card",
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
    card.className = cardClassList[i];
    cardColumn.append(card);

    var cardFront = document.createElement("div");
    cardFront.className = "card-front " + cardFrontClassList[i];
    card.append(cardFront);

    var cardBack = document.createElement("div");
    cardBack.className = "card-back "
    card.append(cardBack);
};

//sideBar
var sideBarClassList = [
    "col-12 sideBar"
]



for (i = 0; i < sideBarClassList.length; i++) {
    var sideBar = document.createElement("div");
    sideBar.className = sideBarClassList[i];
    container.append(sideBar);

    var upperSideBar = document.createElement("div");
    upperSideBar.className = "utility upperSideBar";
    sideBar.append(upperSideBar);

    var lowerSideBar = document.createElement("div");
    lowerSideBar.className = "utility lowerSideBar";
    sideBar.append(lowerSideBar);
};


