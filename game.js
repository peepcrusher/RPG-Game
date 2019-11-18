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
        player.gainXp(enemy);
    }
    if(player.currentHitPoints <= 0){
        console.log("You have died")
    }
    }

}

var characters = [{
    name: "Warrior",
    level: 1,
    totalXp: 0,
    xpNeededForNextLv: 50,
    maxHitPoints: 50,
    currentHitPoints: 50,
    strength: 10,
    defence: 10,
    magic: 2,
    speed: 4,
    attack: (currentOpponent) => {
        //calculating base damage, the strength stat plus a random number between 1 and the strength stat
        var baseDamage = characters[0].strength + (characters[0].strength + Math.floor((Math.random() * characters[0].strength) +1));
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
        console.log("characters[0] HP: " + characters[0].currentHitPoints);
    },
    status:() => {
        console.log(characters[0])
        return characters[0]
    },
    levelUp: () =>{
        console.log("Level Up!")
        characters[0].level++
        characters[0].xpNeededForNextLv += characters[0].xpNeededForNextLv + (Math.round(characters[0].xpNeededForNextLv * .20));
        characters[0].maxHitPoints += (Math.round(characters[0].maxHitPoints * .20));
        characters[0].currentHitPoints = characters[0].maxHitPoints;
        characters[0].strength += 1 + (Math.round(characters[0].strength * .20));
        characters[0].defence += 1 + (Math.round(characters[0].defence *.20));
        characters[0].magic += 1 + (Math.round(characters[0].magic * .20));
        characters[0].speed += 1 + (Math.round(characters[0].speed * .20));

        characters[0].status();
    },
    gainXp: (enemy) => {
        characters[0].totalXp += enemy.xpForDefeating;
        if(characters[0].totalXp >= characters[0].xpNeededForNextLv){
            characters[0].levelUp();
        }
    }
},
{
    name: "Rogue",
    level: 1,
    totalXp: 0,
    xpNeededForNextLv: 50,
    maxHitPoints: 40,
    currentHitPoints: 50,
    strength: 5,
    defence: 5,
    magic: 3,
    speed: 10,
    attack: (currentOpponent) => {
        //calculating base damage, the strength stat plus a random number between 1 and the strength stat
        var baseDamage = characters[1].strength + (characters[1].speed + Math.floor((Math.random() * characters[1].strength) +1));
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
        console.log("characters[1] HP: " + characters[1].currentHitPoints);
    },
    status:() => {
        console.log(characters[1])
        return characters[1]
    },
    levelUp: () =>{
        //stats increase, status is shown, 
        console.log("Level Up!")
        characters[1].level++
        characters[1].xpNeededForNextLv += characters[1].xpNeededForNextLv + (Math.round(characters[1].xpNeededForNextLv * .20));
        characters[1].maxHitPoints += (Math.round(characters[1].maxHitPoints * .20));
        characters[1].currentHitPoints = characters[1].maxHitPoints;
        characters[1].strength += 1 + (Math.round(characters[1].strength * .20));
        characters[1].defence += 1 + (Math.round(characters[1].defence *.20));
        characters[1].magic += 1 + (Math.round(characters[1].magic * .20));
        characters[1].speed += 1 + (Math.round(characters[1].speed * .30));

        characters[1].status();
    },
    gainXp: (enemy) => {
        //take the enemy's xp given add it to players xp, if it exceeds xp necessary for lv up, then use lv up function
        characters[1].totalXp += enemy.xpForDefeating;
        if(characters[1].totalXp >= characters[1].xpNeededForNextLv){
            characters[1].levelUp();
        }
    }
}
]

var goblin = {
    name: "Goblin",
    level: 1,
    xpForDefeating: 55,
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

combat(characters[1], goblin);


