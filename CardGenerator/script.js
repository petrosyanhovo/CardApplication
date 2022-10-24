// SELECTORS
const addCardBtn = document.getElementById("addCard");
const sortCardsBtn = document.getElementById("sortCards");
const mainDiv = document.getElementById("main");

// Varriables
const sortArray = [];

// EVENT LISTENERS
sortCardsBtn.addEventListener("click", (e) => sortCards(e));

addCardBtn.addEventListener("click", (e) => {
    generateCard(e);
});

// FUNCTIONS
const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

function closeCARDFunc(e) {
    let item = e.target;
    item.parentElement.remove();
}

function sortCards(e) {
    // Creating Array from HTML elements;
    let array = document.querySelectorAll("div");
    let arrayCARDS = Array.from(array[2].childNodes);
    // Sorting 'sortArray' for append in 'arrayCARDS'
    sortArray.sort((a, b) => {
        return a - b;
    });
    sortArray.map((card, index) => {
        arrayCARDS[index].childNodes[0].data = card;
    });
}

function generateCard() {
    // Creating DIV(Card)
    const card = document.createElement("div");
    card.classList.add("myCard");

    // Generating random number, and puting in the card
    const randomNumber = randomBetween(0, 1000);
    card.innerText += randomNumber;
    sortArray.push(randomNumber);

    //Creating Button for Card
    const closeCardBtn = document.createElement("BUTTON");
    closeCardBtn.type = "submit";
    closeCardBtn.innerText = "X";
    closeCardBtn.className = "closeCard";

    //Creating Event Listener to close the card
    closeCardBtn.addEventListener("click", (e) => closeCARDFunc(e));
    
    // Appending created elements in document
    card.appendChild(closeCardBtn);
    mainDiv.appendChild(card);
}
