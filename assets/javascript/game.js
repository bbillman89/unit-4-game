/*

    The Crystal Collector Game
    Brett Billman

*/

// Global variables

var randomNum = "";
var totalScore = 0;
var cOne = "";
var cTwo = "";
var cThree = "";
var cFour = "";
var wins = 0;
var loses = 0;

$(document).ready(function() {

    reset();

    //Click crystal one
    $("#cry-one").on("click", function() {
        //Adds value to totalScore
        totalScore += Number(cOne);
        //Display new totalScore value
        $("#total-Score").text(totalScore);
        checkWinLose();
        writeWinLose();
    });

    //Click crystal two
    $("#cry-two").on("click", function() {
        //Adds value to totalScore
        totalScore += Number(cTwo);
        //Display new totalScore value
        //$("#total-Score").append(totalScore);
        $("#total-Score").text(totalScore);
        checkWinLose();
        writeWinLose();
    });

    //Click crystal three
    $("#cry-three").on("click", function() {
        //Adds value to totalScore
        totalScore += Number(cThree);
        //Display new totalScore value
        $("#total-Score").text(totalScore);
        checkWinLose();
        writeWinLose();
    });

    //Click crystal four
    $("#cry-four").on("click", function() {
        //Adds value to totalScore
        totalScore += Number(cFour);
        //Display new totalScore value
        $("#total-Score").text(totalScore);
        checkWinLose();
        writeWinLose();
    });

    writeWinLose();
  
});

function reset() {

     totalScore = 0;

    //Generate random number between 30 - 60
    randomNum = Math.floor(Math.random() * (60 - 30) + 30);
    //Place on #random-number
    $("#random-number").text(randomNum);

    //Generate random number for crystals between 1 - 10
    cOne = Math.floor(Math.random() * 10) + 1;
    cTwo = Math.floor(Math.random() * 10) + 1;
    cThree = Math.floor(Math.random() * 10) + 1;
    cFour = Math.floor(Math.random() * 10) + 1;
}

function checkWinLose () {
    var winloss = false;
    if (randomNum === totalScore) {
        wins++;
        $("#total-Score").css("color","green");
        setTimeout(function(){$("#total-Score").text(""); $("#total-Score").css("color","lightgoldenrodyellow");}, 1500);
        //calling to the reset function
        winloss = true;
        //$("#winCounter").text("Wins = " + wins);
    } else if (totalScore > randomNum) {
        loses++;
        $("#total-Score").css("color","red");
        setTimeout(function(){$("#total-Score").text(""); $("#total-Score").css("color","lightgoldenrodyellow");}, 1500);
        winloss = true;
        //$("#loseCounter").text("Loses = " + loses);
    }

    if (winloss) reset();
}

//Does as the function name states... writes to each id with the variables value.
function writeWinLose() {
    $("#winCounter").text("Wins = " + wins);
    $("#loseCounter").text("Loses = " + loses);   
}

console.log("Outside ready " + totalScore);