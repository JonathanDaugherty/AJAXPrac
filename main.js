var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
    };
    ourRequest.send();
    pageCounter++;

});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " .</p> ";
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            htmlString += data[i].foods.likes[ii];
        }
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
