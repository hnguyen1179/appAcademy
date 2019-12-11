function Game(options) {
  this.DIM_X = options.x;
  this.DIM_Y = options.y;
  this.NUM_ASTEROIDS = options.numAsteroids;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({ pos: this.randomPosition(), game: this});
  this.bullets = [];
}

Game.prototype.add = function(obj){
  if (obj instanceof Asteroid){
    this.asteroids.push(obj);
  } else if (obj instanceof Bullet){
    this.bullets.push(obj);
  }
}

Game.prototype.remove = function(obj){
  if (obj instanceof Asteroid) {
    let idx = this.asteroids.indexOf(obj);
    this.asteroids.splice(idx, 1);
  } else if (obj instanceof Bullet) {
    let idx = this.bullets.indexOf(obj);
    this.bullets.splice(idx, 1);
  }
}

Game.prototype.addAsteroids = function() {
  for (let i=0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
  }
};

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * this.DIM_X);
  let y = Math.floor(Math.random() * this.DIM_Y);

  return [x, y];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
  ctx.fillStyle = '#edc9af';
  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  window.ctx.drawImage(img, 0, 0);
  let allObjects = this.allObjects();

  for (let i =  0; i < allObjects.length; i++){
    allObjects[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  let allObjects = this.allObjects();

  for (let i = 0; i < allObjects.length; i++) {
    allObjects[i].move(ctx);
  }
};

Game.prototype.wrap = function(pos) {
  if (pos[0] > this.DIM_X) {
    pos[0] = 0;
  } else if (pos[0] < 0) {
    pos[0] = this.DIM_X;
  }

  if (pos[1] > this.DIM_Y) {
    pos[1] = 0;
  } else if (pos[1] < 0) {
    pos[1] = this.DIM_Y;
  }
};

Game.prototype.checkCollisions = function() {
  let allObjects = this.allObjects();
  for (let i = 0; i < this.asteroids.length; i++) {
    // for (let j = i + 1; j < allObjects.length; j++) {
      // if (this.asteroids[i].isCollidedWith(allObjects[j])) {
      //   this.asteroids[i].collideWith(allObjects[j]);
        // alert('COLLISION');
      // }
    if (this.asteroids[i].isCollidedWith(this.ship)) {
      this.asteroids[i].collideWith(this.ship);
    }
    //start from back

    for (let j = this.bullets.length-1; j >= 0; j--) {
      if (this.asteroids[i].isCollidedWith(this.bullets[j])) {
        this.asteroids[i].collideWith(this.bullets[j]);
      }
    }
    
  }
};

Game.prototype.step = function(ctx) {
  this.moveObjects(ctx);
  this.checkCollisions();
};

// Game.prototype.remove = function(asteroid) {
//   let idx = this.asteroids.indexOf(asteroid);
//   this.asteroids.splice(idx, 1);
// };

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship, ...this.bullets]);
};

Game.prototype.isOutOfBounds = function(pos){
  if (pos[0] > this.DIM_X || pos[0] < 0) return true;
  if (pos[1] > this.DIM_Y || pos[1] < 0) return true;
  return false;
}

module.exports = Game;