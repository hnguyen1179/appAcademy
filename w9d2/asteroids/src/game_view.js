const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game({x: 717, y: 800, numAsteroids: 20});
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this; 
  this.bindKeyHandlers();
  
  setInterval(function() {
    
    that.game.step(that.ctx);
    that.game.draw(that.ctx);
    
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  let that = this;
  key('w', function () {
    that.game.ship.power([0, -1])
  }); //moves up, [0, -1]

  key('d', function () {
    that.game.ship.power([1, 0])
  }); //moves up, [1, 0]

  key('s', function () {
    that.game.ship.power([0, 1])
  }); //moves up, [0, 1]

  key('a', function () {
    that.game.ship.power([-1, 0])
  }); //moves up, [-1, 0]

  key('space', function() {
    console.log('firing');
    that.game.ship.fireBullet();
  }); //fire

};

module.exports = GameView;