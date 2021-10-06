const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomValue = (min, max) => Math.round(Math.random() * (max - min) + min);

const dragonDamage = () => randomValue(15, dragon.strength);

const warriorDamage = () => randomValue(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageDamage = () => {
  const obj = {
    damage: randomValue(mage.intelligence, mage.intelligence * 2),
    usedMana: 15,
  };
  if (mage.mana < 15) obj.damage = 'Não possui mana suficiente'; obj.usedMana = 0;
  return obj;
};

const gameActions = {
  warriorTurn: (damage) => {
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (damage) => {
    dragon.healthPoints -= damage.damage;
    mage.damage = damage.damage;
    mage.mana -= damage.usedMana;
  },
  dragonTurn: (damage) => {
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  calcTurn: () => {
    gameActions.warriorTurn(warriorDamage());
    gameActions.mageTurn(mageDamage());
    gameActions.dragonTurn(dragonDamage());
    return battleMembers;
  },
};

console.log(gameActions.calcTurn());
