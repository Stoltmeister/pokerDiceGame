

let cardOrderArray = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let cards = ["2", "3", "4", "5", "6"];

let highCard = highestCard(cards, cardOrderArray);
console.log(highCard);

function highestCard(cards, cardOrderArray) {
    function sortNumber(a, b) {
        return a - b;
    }
    cards.sort(sortNumber);
    
    let highestCardIndex = cardOrderArray.indexOf(cards[cards.length - 1]);
    let highestCard = cardOrderArray[highestCardIndex];
    return highestCard;
}