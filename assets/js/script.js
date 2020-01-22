var gameCardDiv = document.getElementById("gameCards");

gameCardDiv.addEventListener("click", function handleClick (event) {
    console.log(event);
    if (event.target.className.indexOf("card-back") === -1) {
        return;
    }
    event.target.className += " hidden";
})