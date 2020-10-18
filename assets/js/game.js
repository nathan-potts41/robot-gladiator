

window.alert("Welcome to Robot Gladiators Colosseum of Death! *thunderous applause* ");

//startGame() {}
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
};

var fight = function (enemy) {

    var promptFight = window.prompt("Would you like to FIGHT or COWARD out of this battle? Enter 'FIGHT' or 'COWARD' to choose.");
    console.log(promptFight);
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //substract the value of 'player Attack' from the value of the 'enemy.health' and us that result to update the value in the 'enemy.health' variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " schmacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " whalloped " + playerInfo.name + " pretty good. " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        )
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
    else if (promptFight === "coward" || promptFight === "COWARD") {
        window.alert(playerInfo.name + " has chosen to coward out of the fight!");
        //confirm skipping
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Coward!");
            playerInfo.money = Math.max(0, playerInfo.money - 4);
            console.log(
                playerInfo.name + " has lost 2 rubels and now has " + playerInfo.money + " rubels.");
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");

        fight();
    }
};

// endGame();
// window.alert(playerInfo.name + " has defeated the Gladiator Arena with " + playerInfo.health " health, " + playerInfo.money " rubels, and " + playerInfo.attack " attack power." );
// console.log(playerInfo.name, playerInfo.health, playerInfo.money, playerInfo.attack);
// window.prompt("Would you like to play again? Enter Yes or No.")
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            //generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot battle! Game Over!");
            break;
        }
    }
    endGame();
};

//function to end entire game
var endGame = function () {
    window.alert("The game has now concluded. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the arena! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("Your robot is now scrap metal.");
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

var shop = function () {
    console.log(playerInfo.name + " has entered the shop.");

    var shopOptionPrompt = window.prompt(
        "Woud you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            //do nothing and the function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * 21) + 40;

    return value;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 rubels.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money - +7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
    {
        name: "Paintrain Palmer",
        attack: randomNumber(10, 14)
    },
    {
        name: "BoomBoom Brad",
        attack: randomNumber(10, 14)
    },
    {
        name: "Rad Ryan",
        attack: randomNumber(10, 14)
    }
];

startGame();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
