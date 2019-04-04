$(document).ready(function() {

    // first we need arrays and variables
    generatedScore = 0
    userScore = 0
    wins = 0
    losses = 0
    crystalValue = []
    crystal1 = 0
    crystal2 = 0
    crystal3 = 0
    crystal4 = 0

 var startGame = function() {
    // generate a random score number between 19 - 120
    generatedScore = Math.floor((Math.random() * 120) + 19); 
    console.log(generatedScore);

    // display the generated number
    $("#generatedScore").text(generatedScore);

    // give each crystal a random value

    crystal1 = Math.floor((Math.random()*25) + 3);
    crystal2 = Math.floor((Math.random()*25) + 3);
    crystal3 = Math.floor((Math.random()*25) + 3);
    crystal4 = Math.floor((Math.random()*25) + 3);

    // display user's score when crystal is clicked
    $("#userScore").text(userScore);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
};

// declare resetGame function
function resetGame(){
    userScore = 0;
    generatedScore = 0;
    generatedScore = Math.floor(Math.random() *120) +25;
    crystal1 = Math.floor((Math.random()*25) + 3);
    crystal2 = Math.floor((Math.random()*25) + 3);
    crystal3 = Math.floor((Math.random()*25) + 3);
    crystal4 = Math.floor((Math.random()*25) + 3);
    $("#wins").text("wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("generatedScore").text(generatedScore);
};

// start startGame function
startGame();

// declare winGame function
// userScore must equal generatedScore 
    // adds 1 to wins counter and generates a "You won!" message
    // restart function with newly generated number
function winGame() {
    $("#generatedMessage").text("You won! Great Job!");
    wins++;
    $("#wins").text("wins: " + wins);
    resetGame();
};

// declare loseGame function
    // if their score goes over generatedScore
    // adds one to losses counter and generates a "you lost!" message
    // restart function
function loseGame() {
    $("#generatedMessage").text("You lost! Better luck next time!");
    losses++;
    $("#losses").text("Losses: " + losses);
    resetGame();
}


// create click function for each crystal
 // when user clicks crystal 1 ...
$("#crystal1").click(function(){
    // update userScore with every click 
    userScore = userScore + crystal1;
    console.log("User Score" + userScore);
    $("#userScore").text(userScore);

    if (userScore === generatedScore) {
        wins++;
        winGame()
    }
    else if (userScore > generatedScore) {
        losses++;
        loseGame();
    }
});
    // when user clicks crystal 2 ...
    $("#crystal2").click(function(){
        // update userScore with every click 
        userScore = userScore + crystal2;
        console.log("User Score" + userScore);
        $("#userScore").text(userScore);
    
        if (userScore === generatedScore) {
            wins++;
            winGame()
        }
        else if (userScore > generatedScore) {
            losses++;
            loseGame();
        }
    });
    // when user clicks crystal 3 ...
    $("#crystal3").click(function(){
        // update userScore with every click 
        userScore = userScore + crystal3;
        console.log("User Score" + userScore);
        $("#userScore").text(userScore);
    
        if (userScore === generatedScore) {
            wins++;
            winGame()
        }
        else if (userScore > generatedScore) {
            losses++;
            loseGame();
        }
    });
    // when user clicks crystal 4 ...
    $("#crystal4").click(function(){
        // update userScore with every click 
        userScore = userScore + crystal4;
        console.log("User Score" + userScore);
        $("#userScore").text(userScore);
    
        if (userScore === generatedScore) {
            wins++;
            winGame()
        }
        else if (userScore > generatedScore) {
            losses++;
            loseGame();
        }
    });


});
