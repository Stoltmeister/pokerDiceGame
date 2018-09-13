// (10 points): As a developer, I want to come up with a game concept played with dice, ensuring that my game concept is more complicated than “War”.
// (20 points): As a developer, I want my game to have gameplay functionality.
// (10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number), regardless of the number of sides.
// (10 points): As a developer, I want to utilize six different dice within my game. (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided. Different dice may be substituted. No 2-sided die.)
// (5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.

// what game to make?
// poker like game? : Keep rolling for better chance of good cards? vs a random hand; 

"use strict";

runPokerDice();

function runPokerDice() {

    let cardOrderArray = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    let handRankArray = [
        ["A8", "A7", "A6", "A5", "A4", "A3", "A2",
            "K8", "K7", "K6", "K5", "K4", "K3", "K2",
            "Q8", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2",
            "J8", "J7", "J6", "J5", "J4", "J3", "J2",
            "T7", "T6", "T5", "T4", "T3", "T2",
            "97", "96", "95", "94", "93", "92",
            "86", "85", "84", "83", "82",
            "75", "74", "73", "72",
            "64", "63", "62",
            "53", "52",
            "43", "42",
            "32"],
        ["A9", "K9", "Q9", "J8", "T8", "87", "76", "65", "54"],
        ["J9", "T9", "98", "44", "33", "22"],
        ["AT", "KT", "QT", "55"],
        ["KJ", "QJ", "JT", "77", "66"],
        ["AJ", "KQ", "88"],
        ["AQ", "99"],
        ["AK", "TT"],
        ["AA", "KK", "QQ", "JJ"]];
    let allCardsArray = [
        "A", "A", "A", "A",
        "K", "K", "K", "K",
        "Q", "Q", "Q", "Q",
        "J", "J", "J", "J",
        "T", "T", "T", "T",
        "9", "9", "9", "9",
        "8", "8", "8", "8",
        "7", "7", "7", "7",
        "6", "6", "6", "6",
        "5", "5", "5", "5",
        "4", "4", "4", "4",
        "3", "3", "3", "3",
        "2", "2", "2", "2",
    ]

    let diceSidesArray = [20, 12, 10, 8, 6, 4];
    //let diceCount = diceSidesArray.length - 1;
    // The numbers in these arrays indicate the minimum roll value to not recieve a random card,
    // then the minimum roll values needed to get better hand tiers. (starting one tier better each dice further in the array)
    let rollValueTierArray = [[9, 14, 19, 20], [4, 9, 11, 12], [3, 6, 9, 10],
    [2, 4, 6, 8], [2, 4, 6], [2, 3, 4]];
    let handStartingLevelArray = [1, 2, 3, 4, 5, 6];

    // FUNCTION TESTING ZONE!: 
    // let randomCards = ["A", "2", "3", "4", "5", "7", "3"];
    // console.log(isStraight(randomCards, cardOrderArray));

    // Run the Program
    let currentIndex = 0;
    welcomeMessage();
    let continueGame = true;
    let giveHand = false;

    while (continueGame) {
        let currentRoll = calculateRoll(diceSidesArray[currentIndex]);
        displayRollResults(currentRoll, diceSidesArray[currentIndex], handStartingLevelArray[currentIndex])
        let currentMinTier = calculateHandLevel(currentRoll, currentIndex, handStartingLevelArray, rollValueTierArray);
        continueGame = displayHandLevel(currentMinTier);
        currentIndex++;
        if (continueGame) {
            giveHand = !rollAgain();
        }
        else {
            console.log("giving hand");
        }
    }
}
// Working [✔]
function welcomeMessage() {
    let isReady = false;
    console.log("Welcome to Dice Poker! This is how the game works: \n \n" + "- You have the chance to roll up to 6 dice");
    console.log("- If you roll too low you get a random hand, the higher you roll the better the hand! \n");
    console.log("- If you roll higher than the minimum value you can roll the next die for an even better hand");
    console.log("- But if you continue to roll you risk rolling low and getting a random hand \n \n");
    console.log("Good Luck! \n ");
    while (!isReady) {
        let input = prompt("If you read the directions in the console are ready to roll your first dice type: 'y' ");
        if (input === 'y') {
            isReady = true;
        }
    }
    return isReady;
}
// asdfasdf
function rollAgain() {
    let isRollingAgain = false;
    while (!isRollingAgain) {
        let input = prompt("Do you want to roll the next dice type: 'y' or 'n' ");
        if (input === 'y') {
            isRollingAgain = true;
            return isRollingAgain;
        }
        if (input === 'n') {
            return isRollingAgain;
        }
    }
    return isRollingAgain;
}
// display next available dice roll to user and returns (y/n) if they wish to roll
// Working [✔]
function displayNextDie(previousDieIndex, diceArray) {
    let nextDiceSides = diceArray[previousDieIndex + 1]
    let rollNext = prompt("The next available dice is a " + nextDiceSides + " sided die. Do you wish to roll it? (Y/N) ");
    return rollNext;
}

// calculate dice roll (based on number of sides)
// Working [✔]
function calculateRoll(numSides) {
    let roll = Math.floor(Math.random() * numSides) + 1;
    return roll;
}

// return the minimum hand index given the current dice and roll values
// Working [✔]
function calculateHandLevel(rollValue, diceIndex, handStartingLevelArray, rollValueTierArray) {
    let minimumHandIndex;
    let startingTier = handStartingLevelArray[diceIndex];
    if (rollValue < rollValueTierArray[diceIndex][0]) {
        minimumHandIndex = 0;
    }
    for (let i = 0; i < rollValueTierArray[diceIndex].length; i++) {
        if (rollValue >= rollValueTierArray[diceIndex][i]) {
            minimumHandIndex = startingTier + i;
        }
    }
    return minimumHandIndex;
}

//(what minimum tier hand they are going to get);
// Working [✔]
function displayRollResults(rollValue, diceSides, handStartingTier) {
    console.log("You rolled " + rollValue + " out of " + diceSides + ".");
}

// Working [✔]
function displayHandLevel(minimumHandIndex) {
    let continuePlay = false;
    if (minimumHandIndex === 0) {
        console.log("You rolled too low so you get a random hand 😢");
        return continuePlay;
    }
    else {
        console.log("If you stop rolling now your minimum hand will be Level " + minimumHandIndex + ".");
        continuePlay = true;
        return continuePlay;
    }

}

// gives user a random hand based on what they rolled(minimum tier level then random chance)
// future will give higher odds to get worse hands*
// Working [✔]
function dealHand(minTier, handRankArray) {
    let numPossibleTiers = (handRankArray.length) - minTier;
    let handTier = Math.floor(Math.random() * numPossibleTiers) + minTier;
    let handIndex = Math.floor(Math.random() * handRankArray[handTier].length);
    let userHand = handRankArray[handTier][handIndex];
    return userHand;
}

// display hand user gets and computer gets
// Working [✔]
function displayHands(userHand, compHand) {
    console.log("Your hand is: " + userHand + "\n");
    console.log("The computer's hand is: " + compHand);
}

// all cards at once 
// Working [✔]
function generateFlop(usedCards, allCardsArray) {
    let flopCards = [];
    let cardsAvailable = removeUsedCards(usedCards, allCardsArray);
    let numCardsInFlop = 6;

    // Add each flop card to used cards
    for (let i = 0; i < numCardsInFlop; i++) {
        flopCards.push(getRandomCard(cardsAvailable));
        usedCards += flopCards[i];
        cardsAvailable = removeUsedCards(usedCards, allCardsArray);
    }

    return flopCards;

}

// picks one random possible card
// Working [✔]
function getRandomCard(remainingCardsArray) {
    // no + 1 since using full length
    let randomNumber = Math.floor(Math.random() * remainingCardsArray.length);
    let randomCard = remainingCardsArray[randomNumber];
    return randomCard;
}

// return an array with all cards left
// Working [✔]
function removeUsedCards(usedCards, allCardsArray) {
    let remainingCards = allCardsArray;
    for (let i = 0; i < usedCards.length; i++) {

        if (remainingCards.includes(usedCards[i])) {
            let cardToRemove = remainingCards.indexOf(usedCards[i]);
            remainingCards.splice(cardToRemove, 1);
        }
    }
    return remainingCards;
}

// likely biggest function - score a hand with the best combo of cards
// Working []
function evaluateScore(flopCards, handCards) {
    let score;
    let cardsAvailable = flopCards + handCards;

    // win conditions from best combinations to worst(no suits)
    isFourOfAKind();
    isFullHouse();
    isStraight();
    isThreeOfAKind();
    isTwoPair();
    isPair();
    isHighCard();
    // Straight
    // Three of a kind
    // Two Pair
    // Pair
    // High Card

    return winner;
}

// Working [✔]
function isFourOfAKind(cards) {
    let counter = 0;
    let cardToEvaluate;
    for (let i = 0; i < cards.length; i++) {
        cardToEvaluate = cards[i];
        for (let j = 0; j < cards.length; j++) {
            if (cardToEvaluate === cards[j]) {
                counter++;
            }
        }
        if (counter > 3) {
            return true;
        }
        else {
            counter = 0;
        }
    }
    return false;
}

// Working []
function isFullHouse(cards) {
    let tripsCounter = 0;
    let pairCounter = 0;

}

// Working [✔]
// just add low ace straight later
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
        }
        if (strikes === 3) {
            return false;
        }
    }
    if (strikes < 3) {
        return true;
    }
}

// Working [✔]
function isThreeOfAKind(cards) {
    let cardChecked;
    let counter = 0;

    for (let i = 0; i < cards.length; i++) {
        cardChecked = cards[i];
        for (let j = 0; j < cards.length; j++) {
            if (cardChecked === cards[j]) {
                counter++;
            }
        }
        if (counter > 2) {
            return true;
        }
        // clear counter
        counter = 0;
    }
    return false;

}

// Working [✔]
function isTwoPair(cards) {
    let remainingCards = cards;
    let cardBeingChecked;
    let numPairs = 0;
    let counter = 0;

    for (let i = 0; i < remainingCards.length; i++) {
        cardBeingChecked = remainingCards[i];
        remainingCards.splice(i, 1);
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

// Working [✔]
// could be cleaner with isTwoPairStyle
function isPair(cards) {
    let cardChecked;
    let counter = 0;

    for (let i = 0; i < cards.length; i++) {
        cardChecked = cards[i];
        for (let j = 0; j < cards.length; j++) {
            if (cardChecked === cards[j]) {
                counter++;
            }
        }
        if (counter > 1) {
            return true;
        }
        // clear counter
        counter = 0;
    }
    return false;
}

// probably only need one of these next two functions
function highestCard(cards, cardOrderArray) {

}

// if both cards have same win condition find winner/determine if chop
function compareHands(userCardCombo, compCardCombo) {
    // basically which combo has the high card between them
}