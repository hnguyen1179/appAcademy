const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(options) {
  this.COLORS = ['green', 'purple', 'yellow', 'cyan'];
  // if (!options.color) options.color = this.COLOR;
  // if (!options.radius) options.radius = this.RADIUS;
  options.color = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
  options.radius = Math.floor(50 * Math.random());
  options.vel = Util.randomVect(2);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  console.log(otherObject);
  
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
  if (otherObject instanceof Bullet) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
};

module.exports = Asteroid;