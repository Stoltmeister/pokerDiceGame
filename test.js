

let cardOrderArray = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let cards = ["2", "3", "4", "5", "7", "A", "6"];

console.log(isStraight(cards, cardOrderArray));

function isStraight(cards, cardOrderArray) {
    let cardIndexArray = [];
    let strikes = 0;
    function sortNumber(a, b) {
        return a - b;
    }

    for (let i = 0; i < cards.length; i++) {
        cardIndexArray.push(cardOrderArray.indexOf(cards[i]));
    }

    cardIndexArray.sort(sortNumber);

    for (let j = 1; j < cardIndexArray.length; j++) {
        if (cardIndexArray[j] !== cardIndexArray[j - 1] + 1) {
            strikes++;
            if (j >= 3 && strikes > 1) {
                return false;
            }
        }
        if (strikes >= 3) {
            return false;
        }
    }
    if (strikes < 3) {
        return true;
    }
}