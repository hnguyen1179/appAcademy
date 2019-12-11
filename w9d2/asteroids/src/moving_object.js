
function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
  this.isWrappable = true;
}

MovingObject.prototype.draw = function(ctx) {
  let x = this.pos[0];
  let y = this.pos[1];
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    x,
    y,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function(ctx){
  this.pos[0] = (this.pos[0] + this.vel[0]);
  this.pos[1] = (this.pos[1] + this.vel[1]);
  if (this.isWrappable && this.game.isOutOfBounds(this.pos)){
    this.game.wrap(this.pos);
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let distanceBetween = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) + Math.pow(this.pos[1] - otherObject.pos[1], 2));
  if (this.radius + otherObject.radius < distanceBetween) return false;
  return true;
};

MovingObject.prototype.collideWith = function(otherObject) {
  // this.game.remove(this);
  // this.game.remove(otherObject);
  console.log('hitting parent');
};

module.exports = MovingObject;