const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Bullet(options){
  options.color = 'blue';
  options.radius = 3;
  MovingObject.call(this, options);
  this.isWrappable = false;
}

Util.inherits(Bullet, MovingObject);

module.exports = Bullet;