// (10 points): As a developer, I want to come up with a game concept played with dice, ensuring that my game concept is more complicated than “War”.
// (20 points): As a developer, I want my game to have gameplay functionality.
// (10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number), regardless of the number of sides.
// (10 points): As a developer, I want to utilize six different dice within my game. (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided. Different dice may be substituted. No 2-sided die.)
// (5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.

// what game to make?
// poker like game? : Keep rolling for better chance of good cards? vs a random hand; 

"use strict";

// Dice 1: roll < 9 gives t9, roll > 9 gives t8 min, roll > 14 gives t7 min, roll 16-19 gives t6 minimum, roll 20 gives t4 minimum
// Dice 2: roll < 4 gives t9, roll > 2 gives t7 min, roll > 8 gives t6 min, roll 10-11 gives t5 minimum, roll 12 gives t4 minimum
// Dice 3: roll < 3 gives t9, roll > 2 gives t6 min, roll > 5 gives t5 min, roll 8-9 gives t4 minimum, roll 10 gives t3 minimum
// Dice 4: roll < 3 gives t9, roll > 3 gives t5 min, roll > 15 gives t7 min, roll 16-19 gives t6 minimum,
// Dice 5: roll = 1 gives t9, roll 2-4 gives t4 min, roll > 4 gives t2 min
// Dice 6: roll = 1 gives t9, roll = 2 gives t3 min, roll > 3 gives t1


function runPokerDice() {
    let handRankArray = [[A9, K9, Q9, J8, T8, 87, 76, 65, 54], 
    [J9, T9, 98, 44, 33, 22],
    [AT, KT, QT, 55],
    [KJ, QJ, JT, 77, 66],
    [AJ, KQ, 88],
    [AQ, 99],
    [AK, TT],
    [AA, KK, QQ, JJ]];

    let diceArray = [20, 12, 10, 8, 6, 4];

}

// display next available dice roll to user
function displayNextRoll(lastRoll) {

}

// calculate dice roll (based on number of sides)
function calculateRoll(numSides) {
    let roll = Math.floor(Math.random * numSides) + 1;
    return roll;
}
// display current hand chances to user(what minimum tier hand they are going to get);
function displayHand(roll) {

}
// calculate user hand based on what they rolled(minimum tier level then random chance)
function calculateHand(minTier) {
    return userHand;
}

// display hand user gets and computer gets
function displayHands(userHand) {

}

// all in style(display flop, turn and river all at once (maybe turn and river cards shown after 1 second delay from the initial flop showing))
function generateFlop(userHand, compHand) {
    // probbly no return (void) just prints all out 
}
