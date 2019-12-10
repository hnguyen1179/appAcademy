Function.prototype.inherits = function(parentClass){
  let childClass = this;
  // function Surrogate(){}
  // Surrogate.prototype = parentClass.prototype;
  // childClass.prototype = new Surrogate();
  // childClass.prototype.constructor = childClass;

  childClass.prototype = Object.create(parentClass.prototype);
  childClass.prototype.constructor = childClass;
};


function MovingObject(mass) {
    this.mass = mass;

 }

 let moving = new MovingObject(10);

function Ship(mass,speed) { 

  MovingObject.call(this,mass);
  this.speed = speed;
}

Ship.inherits(MovingObject);

function Asteroid(mass,velocity) { 
   MovingObject.call(this,mass);
   this.velocity = velocity;
}

Asteroid.inherits(MovingObject);

Ship.prototype.fly = function () {
  console.log("fly");
};
let ship = new Ship(12,20);
console.log(ship.mass);

ship.fly();

let asteroid = new Asteroid(23,56);

// asteroid.fly();
debugger;
console.log(moving.__proto__);
console.log(ship);
// console.log(Ship.prototype);
// console.log(Asteroid.prototype);

// console.log(MovingObject.prototype);




