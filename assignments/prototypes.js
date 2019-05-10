/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(goAttr){
  this.createdAt = Date();
  this.name = goAttr.name;
  this.dimensions = goAttr.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
 }

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(statsAttr){
  GameObject.call(this, statsAttr);
  this.healthPoints = statsAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(humAttrs){
   CharacterStats.call(this, humAttrs);
   this.team = humAttrs.team;
   this.language = humAttrs.language;
   this.weapons = humAttrs.weapons;
 }

 Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function(){
  return `${this.name} offers a geting in ${this.language}`
 }
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
//Unfinished, will look into it when I have free time//

  function Hero(heroAttr){
    Humanoid.call(this, heroAttr);
    this.powers = heroAttr.powers;
    this.pronoun = heroAttr.pronoun;
    this.atkPhrases = heroAttr.atkPhrases;
    this.defPhrases = heroAttr.defPhrases;
    this.enemy = heroAttr.enemy;
    this.atkStr = heroAttr.atkStr;
    this.dice = heroAttr.dice;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  function Villain(villainAttr){
    Humanoid.call(this, villainAttr);
    this.powers = villainAttr.powers;
    this.pronoun = villainAttr.powers;
    this.atkPhrases = villainAttr.atkPhrases;
    this.defPhrases = villainAttr.defPhrases;
    this.enemy = villainAttr.enemy;
    this.atkStr = villainAttr.atkStr;
    this.dice = villainAttr.dice;
  }

  Villain.prototype = Object.create(Humanoid.prototype);

  const Amanda = new Hero({
    name: 'Amanda',
    pronoun: 'she',
    healthPoints : 16,
    dice : 5,
    atkStr : 2,
    powers : [
      'scratches',
      'nips',
      'bites',
      'tackles',
    ],
    atkPhrases : [
      'growls',
      'howls',
      'chaffs',
    ],
    defPhrases : [
      'yelps',
      'screams',
    ],
    enemy : 'Loki'
  })

  Hero.prototype.attack = function(){
    let atkPhraseNum = Math.floor(Math.random() * Math.floor(this.atkPhrases.length));
    let atkPowersNum = Math.floor(Math.random() * Math.floor(this.powers.length));
    let atkStr = Math.floor(Math.random() * Math.floor(this.dice)) * this.atkStr;
    let target = this.enemy;
    console.log(`${this.name} ${this.atkPhrases[atkPhraseNum]} and ${this.powers[atkPowersNum]} ${this.enemy} for ${atkStr} damage!`);
    return atkStr;
  }

  Hero.prototype.defend = function(damage){
    let defPhraseNum = Math.floor(Math.random() * Math.floor(this.defPhrases.length));
    let target = this.enemy;
    this.healthPoints = this.healthPoints - damage;
    console.log(`${this.name} ${this.defPhrases[atkPhraseNum]} as ${this.pronoun} was attacked by ${this.enemy}.`);
    if (this.healthPoints <= 0){
      console.log(`${this.name} has ${this.healthPoints} HP left!`);
      return 1;
    }
    else {
      console.log(`${this.name} has been defeated!`)
    }
  }

  const Loki = new Villain({
    name : 'Loki',
    pronoun : 'he',
    healthPoints : 20,
    dice : 10,
    atkStr : 1,
    powers : [
      'scratches',
      'smacks',
      'bites',
      'kicks',
    ],
    atkPhrases : [
      'hisses',
      'meows',
      'purrs',
    ],
    defPhrases : [
      'screeches',
      'yowls',
    ],
    enemy : 'Amanda'
  })

  Villain.prototype.attack = function(){
    let atkPhraseNum = Math.floor(Math.random() * Math.floor(this.atkPhrases.length));
    let atkPowersNum = Math.floor(Math.random() * Math.floor(this.powers.length));
    let atkStr = Math.floor(Math.random() * Math.floor(this.dice)) * this.atkStr;
    let target = this.enemy;
    console.log(`${this.name} ${this.atkPhrases[atkPhraseNum]} and ${this.powers[atkPowersNum]} ${this.enemy} for ${atkStr} damage!`);
    return atkStr;
  }

  Villain.prototype.defend = function(){
    let defPhraseNum = Math.floor(Math.random() * Math.floor(this.defPhrases.length));
    let target = this.enemy;
    console.log(`${this.name} ${this.defPhrases[atkPhraseNum]} as ${this.pronoun} was attacked by ${this.enemy}.`);
    if (this.healthPoints <= 0){
      console.log(`${this.name} has ${this.healthPoints} HP left!`);
      return 1;
    }
    else {
      console.log(`${this.name} has been defeated!`)
    }
  }

//test attacks//
Amanda.attack();
Loki.attack();

  function doBattle(hero, villain){

  }