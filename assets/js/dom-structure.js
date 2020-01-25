////6 x 3 
function stage2 () {
    document.querySelector(".container").textContent = "";
    var container = $(".container");

    //header
    var headerRowClassList = [
        "col-12"
    ];

    var title = "My Memory Match";

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
        "col-12",
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
        statBox.className = "statBox " + statBoxClassList[i];
        statBox.setAttribute("id", statBoxIdList[i]);
        statColumn.append(statBox);
        
        var h4Element = document.createElement("h4");
        h4Element.textContent = statBoxText[i];
        statBox.append(h4Element);
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

    //card
    var cardClassList = [
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2",
        "col-2"
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
};
////



//// 3 x 3  
function stage1 () {
    var container = $(".container");

    //header
    var headerRowClassList = [
        "col-12"
    ];

    var title = "My Memory Match";

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
        "",
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
        statBox.className = "statBox " + statBoxClassList[i];
        statBox.setAttribute("id", statBoxIdList[i]);
        statColumn.append(statBox);
        
        var h4Element = document.createElement("h4");
        h4Element.textContent = statBoxText[i];
        statBox.append(h4Element);
    };

    //cardColumn
    var cardColumnClassList = [
        "col-12"
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

    //card
    var cardClassList = [
        "col-4",
        "col-4",
        "col-4",
        "col-4",
        "col-4",
        "col-4",
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

    //sideBar
    var sideBarClassList = [
        "col-12"
    ];

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

    //itemBox
    var itemBarClassList = [
        "",
        ""
    ];

    for (i = 0; i < itemBarClassList.length; i++) {
        var itemBar = document.createElement("div");
        itemBar.className = "itemBar " + itemBarClassList[i];
        upperSideBar.append(itemBar);
    };
}
////