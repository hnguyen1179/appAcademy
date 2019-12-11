const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Ship(options){
  // this.radius = 5;
  // this.color = 'red';
  this.vel = Util.randomVect(0);
  options.color = "red";
  options.vel = this.vel;
  options.radius = 7;
  MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = Util.randomVect(0);
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  console.log(this.vel)
  let increasedVelocity = [this.vel[0] * 1.5, this.vel[1] * 1.5];
  let newPosition = [this.pos[0] + increasedVelocity[0], this.pos[1] + increasedVelocity[1]];
  console.log(increasedVelocity)
  this.game.bullets.push(new Bullet({pos: this.pos.slice(), vel: increasedVelocity, game: this.game}));
};

module.exports = Ship;