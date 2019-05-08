/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding- This is the entire window/console object. Imagine taking a your kid to GameStop and then they say they want "this" without specifying what it is. There is no specificity so you'd assume they wanted the entire store!

* 2. Implicit Binding- Whenever `.this` is preceeded by by an object, it is referring to that object's attributes. If there's a keyword after `this.`, it is referring to specific attributes of that object.

* 3. New Binding- This is an object creator, it is used as a blueprint to create other objects. 'this' turns into the name of the object being created.

* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function gameWanted(game){
    console.log(this)
}

gameWanted('Half Life 3');

// Principle 2
// code example for Implicit Binding

const imp = {
    multiplier: 3,
    readmsg: function(num) {
      console.log(`Result ${this.multiplier * num}, ${num} was multiplied by ${this.multiplier}`);
    }
  };

imp.readmsg(3);
  
// Principle 3
// code example for New Binding

//Create the blueprint//
function animal(name, animal, sound){
    this.name = name;
    this.animal = animal;
    this.sound = sound;
    this.definition = function(){
        console.log(`${this.name} is a ${this.animal} that ${this.sound}s!`)
    }
}

//Create new objects using blueprint//
const amanda = new animal('Amanda', 'dog', 'bark');
const loki = new animal('Loki', 'cat', 'meow');

//Test by using a method built into the animal prototype.
amanda.definition();
loki.definition();

// Principle 4



// code example for Explicit Binding