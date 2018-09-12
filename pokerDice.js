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

    // Dice 1: roll < 9 gives t9, roll > 9 gives t8 min, roll > 14 gives t7 min, roll 16-19 gives t6 minimum, roll 20 gives t5 minimum
    // Dice 2: roll < 4 gives t9, roll > 2 gives t7 min, roll > 8 gives t6 min, roll 10-11 gives t5 minimum, roll 12 gives t4 minimum
    // Dice 3: roll < 3 gives t9, roll > 2 gives t6 min, roll > 5 gives t5 min, roll 8-9 gives t4 minimum, roll 10 gives t3 minimum
    // Dice 4: roll < 3 gives t9, roll > 3 gives t5 min, roll > 15 gives t7 min, roll 16-19 gives t6 minimum,
    // Dice 5: roll = 1 gives t9, roll 2-4 gives t4 min, roll > 4 gives t2 min
    // Dice 6: roll = 1 gives t9, roll = 2 gives t3 min, roll = 3 gives t2

    let diceSidesArray = [20, 12, 10, 8, 6, 4];
    let diceCount = diceSidesArray.length - 1;
    // The numbers in these arrays indicate the minimum roll value to not recieve a random card,
    // then the minimum roll values needed to get better hand tiers. (starting one tier better each dice further in the array)
    let rollValueTierArray = [[9, 14, 19, 20], [4, 9, 11, 12], [3, 6, 9, 10],
    [2, 4, 6, 8], [2, 4, 6], [2, 3, 4]];
    let handStartingLevelArray = [1, 2, 3, 4, 5, 6];

    // getting number of hands possible
    let NumberOfPossibleHands;
    for (let i = 0; i < handRankArray.length; i++) {
        NumberOfPossibleHands += handRankArray[i].length;
    }

    // function testing zone: 
    console.log(dealHand(3, handRankArray));
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
// Working []
function displayRollResults(rollValue, diceSides, handStartingTier) {
    console.log("You rolled " + rollValue + " out of " + diceSides);
    console.log("Your minimum hand strength is tier " + handStartingTier);
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
// Working []
function displayHands(userHand, compHand) {
    console.log();
}

// all in style(display flop, turn and river all at once (maybe turn and river cards shown after 1 second delay from the initial flop showing))
// Working []
function generateFlop(userHand, compHand, NumberOfPossibleHands, handsArray) {
    let usedCards = [userHand, compHand];
    let flopCards = [];
    let numCardsInFlop;
    // maybe turn and river seperately in future version (maybe suits later too)

    for (let i = 0; i < NumberOfPossibleHands; i++) {
        flopCards.push(Math.floor(Math.random * NumberOfPossibleHands) + 1);
    }

    while (usedCards.includes(flopCards)) {
        flopCards = [];
        for (let i = 0; i < numCardsInFlop; i++) {
            flopCards.push(Math.floor(Math.random * NumberOfPossibleHands) + 1);
        }
    }

}

// picks one random possible card
// Working []
function getRandomCard(remainingCardsArray) {
    // no + 1 since using full length
    let randomNumber = Math.floor(Math.random(remainingCardsArray.length));
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