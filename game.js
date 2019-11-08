function combat(player, enemy){
    while(player.currentHitPoints > 0 && enemy.currentHitPoints > 0){
        console.log("Player's HP: " + player.currentHitPoints);
        console.log("Enemy HP: " + enemy.currentHitPoints);
    if(player.speed > enemy.speed){
        player.attack(enemy)

        if(enemy.currentHitPoints > 0){
            enemy.attack(player);
        }
    }
    else{
        enemy.atatck(player)
        if(player.currentHitPoints > 0 ){
            player.attack(enemy)
        }
    }
    if(enemy.currentHitPoints <= 0){
        console.log("You have defeated the " + enemy.name);
    }
    if(player.currentHitPoints <= 0){
        console.log("You have died")
    }
    }

}

var warrior = {
    name: "Warrior",
    level: 1,
    maxHitPoints: 50,
    currentHitPoints: 50,
    strength: 10,
    defence: 10,
    magic: 2,
    speed: 4,
    attack: (currentOpponent) => {
        //calculating base damage, the strength stat plus a random number between 1 and the strength stat
        var baseDamage = warrior.strength + (warrior.strength + Math.floor((Math.random() * warrior.strength) +1));
        //calculating the chance to hit 100 being 100%, take away a percentage based on your oponents speed
        var chanceToHit = 100 - currentOpponent.speed
        if(Math.floor((Math.random() * 100) + 1) < chanceToHit){
           var damageTaken = baseDamage - (Math.floor((Math.random() * currentOpponent.defence) + 1))
           currentOpponent.currentHitPoints -= damageTaken;
        }
        else{
            console.log(currentOpponent.name + " has dodged your attack");
        }

    },
    showHP: () => {
        console.log("Warrior HP: " + warrior.currentHitPoints);
    },
    status:() => {
        console.log(warrior)
        return warrior
    }
}

var goblin = {
    name: "Goblin",
    level: 1,
    maxHitPoints: 120,
    currentHitPoints: 120,
    strength: 5,
    defence: 2,
    magic: 2,
    speed: 3,
    attack: (currentOpponent) => {
        var baseDamage = goblin.strength + (goblin.strength + Math.floor((Math.random() * goblin.strength) +1));
        console.log(baseDamage);
        var chanceToHit = 100 - currentOpponent.speed
        if(Math.floor((Math.random() * 100) + 1) < chanceToHit){
           var damageTaken = baseDamage - (Math.floor((Math.random() * currentOpponent.defence) + 1))
           currentOpponent.currentHitPoints -= damageTaken;
        }
        else{
            console.log(currentOpponent.name + " has dodged your attack");
        }

    },
    showHP: () => {
        console.log("Goblin's HP: " + goblin.currentHitPoints);
    }
}

combat(warrior, goblin);


