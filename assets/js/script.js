// function gameFunction () {
// var firstCardClicked;
// var firstCardClass;
 
// var secondCardClicked;
// var secondCardClass;
 
// var gameCardDiv = document.getElementById("gameCards");
 
// var matchPair = 2
// var maxMatches = document.getElementById("gameCards").childElementCount / matchPair;
// var matches = 0;
 
// var attempts = 0;
// var stage = 0;
 
// function addClicker () {
//     gameCardDiv.addEventListener("click", handleClick);
// };
 
// function removeClicker () {
//     gameCardDiv.removeEventListener("click", handleClick);
// };
 
// function clearCardClicked () {
//     firstCardClicked = null;
//     secondCardClicked = null;
// };
 
// function unhideCard () {  
//     setTimeout(function () {
//     firstCardClicked.classList.remove("hidden");
//     secondCardClicked.classList.remove("hidden");
//     clearCardClicked();
//     addClicker();
//     },1500);
// };
 
// function statOverview () {};
 
// function restartGame (event) {
//     resetStats();
//     gameCardDiv.removeEventListener("click", hideModal);
//     clearCardClicked();
// }
 
// function displayStats () {
//     document.getElementById("stage").firstElementChild.textContent = stage;
//     document.getElementById("attempts").firstElementChild.textContent = attempts;
//     document.getElementById("accuracy").firstElementChild.textContent = calculateAccuracy(attempts, matches);
// };
 
// function resetStats () {
//     matches = 0;
//     attempts = 0;
//     document.getElementById("attempts").firstElementChild.textContent = attempts;
//     document.getElementById("accuracy").firstElementChild.textContent = 0 + "%";
// }
 
// function calculateAccuracy (attempts, matches) {
//     return (matches / attempts * 100).toFixed(2) + "%";
// };
 
// function addTotalGames () {
//     stage++;
//     document.getElementById("stage").firstElementChild.textContent = stage;
// };
 
// function handleClick (event) {
//     if (event.target.className.indexOf("card-back") === -1) {
//         return;
//     }
//     event.target.classList.add("hidden");
 
//     if (firstCardClicked) {
//         secondCardClicked = event.target;
//         secondCardClass = secondCardClicked.previousElementSibling.className;
//         removeClicker();
//         if (firstCardClass === secondCardClass) {
//             matches++;
//             attempts++;
//             addClicker();
//             clearCardClicked();
//             displayStats();
//         } else {
//             attempts++;
//             unhideCard();
//             displayStats();
//         }       
//     } else {
//        firstCardClicked = event.target;
//        firstCardClass = firstCardClicked.previousElementSibling.className;
//     }
 
//     if (matches === maxMatches) {
//         showModal();
//         addTotalGames();
//     }
// }
 
// //stage1
// function showModal () {
//     var modalBox = document.createElement("div");
//     document.querySelector(".container").appendChild(modalBox);
//     modalBox.className = "modal-box hidden";
  
//     var modalContent1 = document.createElement("p");
//     modalContent1.textContent = "Congratulations! You have completed Stage I";
//     modalBox.appendChild(modalContent1);
//     modalContent1.className = "modal-content";
 
//     var modalContent2 = document.createElement("p");
//     modalContent2.textContent = "Would you like to proceed to the next stage?";
//     modalBox.appendChild(modalContent2);
//     modalContent2.className = "modal-content";
 
//     var modalButtonRestart = document.createElement("button");
//     modalBox.appendChild(modalButtonRestart);
//     modalButtonRestart.className = "modal-button restart";
//     var modalButtonRestartContent = document.querySelector("button.restart");
//     modalButtonRestartContent.innerHTML = "I Give Up";
  
//     var modalButtonNextStage = document.createElement("button");
//     modalBox.appendChild(modalButtonNextStage);
//     modalButtonNextStage.className = "modal-button nextStage";
//     var modalButtonNextStageContent = document.querySelector("button.nextStage");
//     modalButtonNextStageContent.innerHTML = "Let's Go!";
 
//     document.querySelector(".modal-box").classList.remove("hidden");
//     document.querySelector("button.restart").addEventListener("click", hideModal);
//     document.querySelector("button.nextStage").addEventListener("click", stage2());
// }
 
// function hideModal () {
//     document.querySelector(".modal-box").classList.add("hidden");
//     var cardCount = document.getElementById("gameCards").childElementCount
//     var backCards = document.querySelectorAll(".card-back");
 
//     for (i = 0; i < cardCount; i++) {
//         backCards[i].className = "";
//         backCards[i].className += "card-back";
//     }
//     restartGame();
// };
 
// function shuffleCards () {
//     var cardCount = document.getElementById("gameCards").childElementCount
//     var cardImgClass = $("div.card-front").attr("class").split(" ");
//     var frontCards = document.querySelectorAll(".card-front");
 
//     for (i = 0; i < cardCount; i++) {
//         frontCards[i].className = "";
//         frontCards[i].className += "card-front";
//     };
 
//     var classImgArray = [
//         "js-logo",
//         "js-logo",
//         "html-logo",
//         "html-logo",
//         "gitHub-logo",
//         "gitHub-logo",
//         "mysql-logo",
//         "mysql-logo",
//         "php-logo",
//         "php-logo",
//         "react-logo",
//         "react-logo",
//         "node-logo",
//         "node-logo",
//         "css-logo",
//         "css-logo",
//         "docker-logo",
//         "docker-logo"
//     ];
 
//     for (i = classImgArray.length - 1; i >= 0; i--) {
//         var randomIndex = Math.floor(Math.random() * i);
//         var tempIndex = classImgArray[i];
 
//         classImgArray[i] = classImgArray[randomIndex];
//         classImgArray[randomIndex] = tempIndex;
 
//         frontCards[i].classList.add(classImgArray[i]);
//     };
// }
// //
 
// addClicker();
// // shuffleCards();
// };
