

let cardOrderArray = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let cards = ["J", "3", "T", "K", "Q", "3", "6"];

console.log(isTwoPair(cards, cardOrderArray));

// Working [✔]
function isTwoPair(cards) {
    let remainingCards;
    let cardBeingChecked;
    let numPairs = 0;
    let counter = 0;

    for (let i = 0; i < cards.length; i++) {
        cardBeingChecked = cards[i];
        remainingCards += cards.slice(i, 1);
        for (let j = 0; j < remainingCards.length; j++) {
            if (cardBeingChecked === remainingCards[j]) {
                numPairs++;
                break;
            }
        }
    }
    if (numPairs === 2) {
        return true;
    }
    return false;

}