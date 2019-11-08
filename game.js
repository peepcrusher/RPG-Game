function combat(player, enemy){
    
}

var warrior = {
    level: 1,
    maxHitPoints: 50,
    strength: 10,
    defence: 10,
    magic: 2,
    agility: 4,
    attack: (currentOpponent) => {
        var baseDamage = warrior.strength + (warrior.strength + Math.floor((Math.random() * warrior.strength) +1));
        console.log(baseDamage);
    },
    showHP: () => {
        console.log(currentHitPoints);
    },
    status:() => {
        console.log(warrior)
        return warrior
    }
}

var goblin = {
    level: 1,
    maxHitPoints: 40,
    currentHitPoints: 40,
    strength: 5,
    defence: 2,
    magic: 2,
    agility: 3,
    showHP: () => {
        console.log(currentHitPoints);
    }
}

warrior.attack("Steve");

console.log(Math.floor((Math.random() * 10)+1))
