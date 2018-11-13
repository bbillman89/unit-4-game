/*

    The Crystal Collector Game
    Brett Billman

*/



// Global variables

var randomNum = "";
var totalScore = "";
var cOne = "";
var cTwo = "";
var cThree = "";
var cFour = "";
var wins = 0;
var loses = 0;

$(document).ready(function() {

    //Randon number generator
    if (randomNum.length === 0 || randomNum < totalScore) {
        //Generate random number between 30 - 60
        randomNum = Math.floor(Math.random() * (60 - 30) + 30);
        //Place on #random-number
        $("#random-number").append(randomNum);
    }

    //Generate random number for crystals between 1 - 10
    cOne = Math.floor(Math.random() * 10) + 1;
    cTwo = Math.floor(Math.random() * 10) + 1;
    cThree = Math.floor(Math.random() * 10) + 1;
    cFour = Math.floor(Math.random() * 10) + 1;

    //Click crystal one
    $("#cry-one").on("click", function() {
        //Clears total-Score text so the additional click doesn't make string
        $("#total-Score").text("");
        //Adds value to totalScore
        totalScore = Number(totalScore) + Number(cOne);
        //Display new totalScore value
        $("#total-Score").append(totalScore);
    });

    //Click crystal two
    $("#cry-two").on("click", function() {
        //Clears total-Score text so the additional click doesn't make string
        $("#total-Score").text("");
        //Adds value to totalScore
        totalScore = Number(totalScore) + Number(cTwo);
        //Display new totalScore value
        $("#total-Score").append(totalScore);
    });

    //Click crystal three
    $("#cry-three").on("click", function() {
        //Clears total-Score text so the additional click doesn't make string
        $("#total-Score").text("");
        //Adds value to totalScore
        totalScore = Number(totalScore) + Number(cThree);
        //Display new totalScore value
        $("#total-Score").append(totalScore);
    });

    //Click crystal four
    $("#cry-four").on("click", function() {
        //Clears total-Score text so the additional click doesn't make string
        $("#total-Score").text("");
        //Adds value to totalScore
        totalScore = Number(totalScore) + Number(cFour);
        //Display new totalScore value
        $("#total-Score").append(totalScore);
    });

    //Show wins
    $("#winCounter").append("Wins = " + wins);
    //Show loses
    $("#loseCounter").append("Loses = " + loses);
    //Determin if win or lose
    if (randomNum === totalScore) {
        wins++;
    } else if (randomNum < totalScore) {
        loses++;
    }


});