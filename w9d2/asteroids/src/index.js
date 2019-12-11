console.log("Webpack is working!");

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

// Util.inherits(Asteroid, MovingObject);
// Util.inherits(Ship, MovingObject);

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;
window.Bullet = Bullet;

window.addEventListener('DOMContentLoaded', (event) => {
  window.img = new Image();
  window.img.src = "https://png2.cleanpng.com/sh/bf7afd0215c147197c0350343d1828ed/L0KzQYm3VMA5N6R9fZH0aYP2gLBuTgZmb5Z5edR1ZT3mccP7jB9vNZRmiuR4dD3mfLr3TfFzfF5oeeR7b4SwRbLqWcllO2I9e6lqZkCxSIqAUcM5PmQ2TaQ8MUa1RIKAVcc2PF91htk=/kisspng-vegetable-cartoon-carrot-clip-art-carrot-5ac99d318c7af0.8971386315231624175754.png";
  img.onload = function () {
    window.ctx.drawImage(img, 0, 0);
  };
  window.canvas = document.getElementById('game-canvas');
  window.ctx = canvas.getContext('2d');
  console.log('DOM fully loaded and parsed');

});