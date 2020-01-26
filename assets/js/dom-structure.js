// document.querySelector(".container").textContent = "";
var container = $(".container");
var stage = 1;
var matchPair = 2;
var maxMatches = 3;
var attempts = 0;
 
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
//////////////////////////////////////////////////////
 
function gameFunction () {
   var firstCardClicked;
   var firstCardClass;
  
   var secondCardClicked;
   var secondCardClass;
  
   var gameCardDiv = document.getElementById("gameCards");
  
   // var maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
   var matches = 0;
  
   attempts = 0;
   // var stage = 0;
  
   function addClicker () {
       gameCardDiv.addEventListener("click", handleClick);
   };
  
   function removeClicker () {
       gameCardDiv.removeEventListener("click", handleClick);
   };
  
   function unhideCard () {  
       setTimeout(function () {
       firstCardClicked.classList.remove("hidden");
       secondCardClicked.classList.remove("hidden");
       clearCardClicked();
       // addClicker();
       },1500);
   };
 
   function clearCardClicked () {
       firstCardClicked = null;
       secondCardClicked = null;
   };
      
   function restartGame () {
       // resetStats();
       gameCardDiv.removeEventListener("click", hideModalRestart);
       clearCardClicked();
   }
  
   function displayStats () {
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
  
   function calculateAccuracy (attempts, matches) {
       return (matches / attempts * 100).toFixed(2) + "%";
   };
  
   function addTotalGames () {
       stage++;
       document.getElementById("stage").firstElementChild.textContent = stage;
   };
  
   function handleClick (event) {
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
   //
  
   addClicker();
   // shuffleCards();
   };
 
function hideModalRestart () {
   document.getElementById("gameCards").textContent = "";
   document.querySelector(".container").removeChild(document.querySelector(".modal-box"));
   stage = 1;
   document.getElementById("stage").firstElementChild.textContent = stage;
   document.getElementById("attempts").firstElementChild.textContent = 0;
   document.getElementById("accuracy").firstElementChild.textContent = 0 + "%";
   stage1();     
 
   // var cardCount = document.getElementById("gameCards").childElementCount
   // var backCards = document.querySelectorAll(".card-back");
 
   // for (i = 0; i < cardCount; i++) {
   //     backCards[i].className = "";
   //     backCards[i].className += "card-back";
   // }
   // restartGame();
};
 
function hideModalProceed () {
   // document.querySelector(".modal-box").classList.add("hidden");
   document.querySelector(".container").removeChild(document.querySelector(".modal-box"));
   var cardCount = document.getElementById("gameCards").childElementCount
   var backCards = document.querySelectorAll(".card-back");
 
   for (i = 0; i < cardCount; i++) {
       backCards[i].className = "";
       backCards[i].className += "card-back";
   }
};
 
stage1();
 
////6 x 1
//card
function stage1 () {
   var cardClassList = [
       "col-2",
       "col-2",
       "col-2",
       "col-2",
       "col-2",
       "col-2",
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
};
gameFunction();
 
////6 x 2
function stage2 ()  {
   hideModalProceed();
   document.getElementById("gameCards").textContent = "";
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
 
   maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
 
   gameFunction();
};
 
function stage3 () {
   hideModalProceed();
   document.getElementById("gameCards").textContent = "";
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
 
   gameFunction();
  
}
 
   //stage1
   function showModal () {
       matches = 0;
           switch (stage) {
               case 1:
                   var modalBox = document.createElement("div");
                   document.querySelector(".container").appendChild(modalBox);
                   modalBox.className = "modal-box hidden";
                  
                   var modalContent1 = document.createElement("p");
                   modalContent1.textContent = "Congratulations! You have completed Stage I";
                   modalBox.appendChild(modalContent1);
                   modalContent1.className = "modal-content";
              
                   var modalContent2 = document.createElement("p");
                   modalContent2.textContent = "Would you like to proceed to the next stage?";
                   modalBox.appendChild(modalContent2);
                   modalContent2.className = "modal-content";
              
                   var modalButtonRestart = document.createElement("button");
                   modalBox.appendChild(modalButtonRestart);
                   modalButtonRestart.className = "modal-button restart";
                   var modalButtonRestartContent = document.querySelector("button.restart");
                   modalButtonRestartContent.innerHTML = "I Give Up";
                  
                   var modalButtonNextStage = document.createElement("button");
                   modalBox.appendChild(modalButtonNextStage);
                   modalButtonNextStage.className = "modal-button nextStage";
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
                  
                   var modalContent1 = document.createElement("p");
                   modalContent1.textContent = "Congratulations! You have completed Stage II";
                   modalBox.appendChild(modalContent1);
                   modalContent1.className = "modal-content";
              
                   var modalContent2 = document.createElement("p");
                   modalContent2.textContent = "Would you like to proceed to the next stage 2?";
                   modalBox.appendChild(modalContent2);
                   modalContent2.className = "modal-content";
              
                   var modalButtonRestart = document.createElement("button");
                   modalBox.appendChild(modalButtonRestart);
                   modalButtonRestart.className = "modal-button restart";
                   var modalButtonRestartContent = document.querySelector("button.restart");
                   modalButtonRestartContent.innerHTML = "I Give Up";
                  
                   var modalButtonNextStage = document.createElement("button");
                   modalBox.appendChild(modalButtonNextStage);
                   modalButtonNextStage.className = "modal-button nextStage";
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
                  
                   var modalContent1 = document.createElement("p");
                   modalContent1.textContent = "Congratulations! You have completed Stage III";
                   modalBox.appendChild(modalContent1);
                   modalContent1.className = "modal-content";
              
                   var modalContent2 = document.createElement("p");
                   modalContent2.textContent = "Would you like to proceed to the next stage 3?";
                   modalBox.appendChild(modalContent2);
                   modalContent2.className = "modal-content";
              
                   var modalButtonRestart = document.createElement("button");
                   modalBox.appendChild(modalButtonRestart);
                   modalButtonRestart.className = "modal-button restart";
                   var modalButtonRestartContent = document.querySelector("button.restart");
                   modalButtonRestartContent.innerHTML = "I Give Up";
                  
                   var modalButtonNextStage = document.createElement("button");
                   modalBox.appendChild(modalButtonNextStage);
                   modalButtonNextStage.className = "modal-button nextStage";
                   var modalButtonNextStageContent = document.querySelector("button.nextStage");
                   modalButtonNextStageContent.innerHTML = "Let's Go!";
              
                   document.querySelector(".modal-box").classList.remove("hidden");
                   document.querySelector("button.restart").addEventListener("click", hideModalRestart);
                   document.querySelector("button.nextStage").addEventListener("click", stage4);
                   break;
               default:
               break;
           }
   }
