var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Paintrain Palmer", "BoomBoom Brad", "Rad Ryan"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators Colosseum of Death! *thunderous applause* ");

//startGame() {}

var fight = function (enemyName) {
    
    var promptFight = window.prompt("Would you like to FIGHT or COWARD out of this battle? Enter 'FIGHT' or 'COWARD' to choose.");
    console.log(promptFight);
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //substract the value of 'player Attack' from the value of the 'enemyHealth' and us that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " schmacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " whalloped " + playerName + " pretty good. " + playerName + " now has " + playerHealth + " health remaining."
        )
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "coward" || promptFight === "COWARD") {
        window.alert(playerName + " has chosen to coward out of the fight!");
        //confirm skipping
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Coward!");
            playerMoney = playerMoney - 2;
            console.log(
                playerName + " has lost 2 rubels and now has " + playerMoney + " rubels.");
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

// endGame();
// window.alert(playerName + " has defeated the Gladiator Arena with " + playerHealth " health, " + playerMoney " rubels, and " + playerAttack " attack power." );
// console.log(playerName, playerHealth, playerMoney, playerAttack);
// window.prompt("Would you like to play again? Enter Yes or No.")
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];
            
            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot battle! Game Over!");
            break;
        }
    }
    endGame();
};

//function to end entire game
var endGame = function() {
    window.alert("The game has now concluded. Let's see how you did!");
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the arena! You now have a score of "  + playerMoney + ".");
    }
    else {
        window.alert("You robot is now scrap metal.");
    }
    //ask player if they'd like to try again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thanks for playing Robot Gladiators! Come back when you've got the guts to win.");
    }
}

startGame();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
