/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n  this.COLORS = ['green', 'purple', 'yellow', 'cyan'];\n  // if (!options.color) options.color = this.COLOR;\n  // if (!options.radius) options.radius = this.RADIUS;\n  options.color = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];\n  options.radius = Math.floor(50 * Math.random());\n  options.vel = Util.randomVect(2);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  console.log(otherObject);\n  \n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n  if (otherObject instanceof Bullet) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Bullet(options){\n  options.color = 'blue';\n  options.radius = 3;\n  MovingObject.call(this, options);\n  this.isWrappable = false;\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game(options) {\n  this.DIM_X = options.x;\n  this.DIM_Y = options.y;\n  this.NUM_ASTEROIDS = options.numAsteroids;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({ pos: this.randomPosition(), game: this});\n  this.bullets = [];\n}\n\nGame.prototype.add = function(obj){\n  if (obj instanceof Asteroid){\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet){\n    this.bullets.push(obj);\n  }\n}\n\nGame.prototype.remove = function(obj){\n  if (obj instanceof Asteroid) {\n    let idx = this.asteroids.indexOf(obj);\n    this.asteroids.splice(idx, 1);\n  } else if (obj instanceof Bullet) {\n    let idx = this.bullets.indexOf(obj);\n    this.bullets.splice(idx, 1);\n  }\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i=0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * this.DIM_X);\n  let y = Math.floor(Math.random() * this.DIM_Y);\n\n  return [x, y];\n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);\n  ctx.fillStyle = '#edc9af';\n  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  window.ctx.drawImage(img, 0, 0);\n  let allObjects = this.allObjects();\n\n  for (let i =  0; i < allObjects.length; i++){\n    allObjects[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  let allObjects = this.allObjects();\n\n  for (let i = 0; i < allObjects.length; i++) {\n    allObjects[i].move(ctx);\n  }\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] > this.DIM_X) {\n    pos[0] = 0;\n  } else if (pos[0] < 0) {\n    pos[0] = this.DIM_X;\n  }\n\n  if (pos[1] > this.DIM_Y) {\n    pos[1] = 0;\n  } else if (pos[1] < 0) {\n    pos[1] = this.DIM_Y;\n  }\n};\n\nGame.prototype.checkCollisions = function() {\n  let allObjects = this.allObjects();\n  for (let i = 0; i < this.asteroids.length; i++) {\n    // for (let j = i + 1; j < allObjects.length; j++) {\n      // if (this.asteroids[i].isCollidedWith(allObjects[j])) {\n      //   this.asteroids[i].collideWith(allObjects[j]);\n        // alert('COLLISION');\n      // }\n    if (this.asteroids[i].isCollidedWith(this.ship)) {\n      this.asteroids[i].collideWith(this.ship);\n    }\n    //start from back\n\n    for (let j = this.bullets.length-1; j >= 0; j--) {\n      if (this.asteroids[i].isCollidedWith(this.bullets[j])) {\n        this.asteroids[i].collideWith(this.bullets[j]);\n      }\n    }\n    \n  }\n};\n\nGame.prototype.step = function(ctx) {\n  this.moveObjects(ctx);\n  this.checkCollisions();\n};\n\n// Game.prototype.remove = function(asteroid) {\n//   let idx = this.asteroids.indexOf(asteroid);\n//   this.asteroids.splice(idx, 1);\n// };\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship, ...this.bullets]);\n};\n\nGame.prototype.isOutOfBounds = function(pos){\n  if (pos[0] > this.DIM_X || pos[0] < 0) return true;\n  if (pos[1] > this.DIM_Y || pos[1] < 0) return true;\n  return false;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game({x: 717, y: 800, numAsteroids: 20});\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this; \n  this.bindKeyHandlers();\n  \n  setInterval(function() {\n    \n    that.game.step(that.ctx);\n    that.game.draw(that.ctx);\n    \n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  let that = this;\n  key('w', function () {\n    that.game.ship.power([0, -1])\n  }); //moves up, [0, -1]\n\n  key('d', function () {\n    that.game.ship.power([1, 0])\n  }); //moves up, [1, 0]\n\n  key('s', function () {\n    that.game.ship.power([0, 1])\n  }); //moves up, [0, 1]\n\n  key('a', function () {\n    that.game.ship.power([-1, 0])\n  }); //moves up, [-1, 0]\n\n  key('space', function() {\n    console.log('firing');\n    that.game.ship.fireBullet();\n  }); //fire\n\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n// Util.inherits(Asteroid, MovingObject);\n// Util.inherits(Ship, MovingObject);\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\nwindow.Bullet = Bullet;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  window.img = new Image();\n  window.img.src = \"https://png2.cleanpng.com/sh/bf7afd0215c147197c0350343d1828ed/L0KzQYm3VMA5N6R9fZH0aYP2gLBuTgZmb5Z5edR1ZT3mccP7jB9vNZRmiuR4dD3mfLr3TfFzfF5oeeR7b4SwRbLqWcllO2I9e6lqZkCxSIqAUcM5PmQ2TaQ8MUa1RIKAVcc2PF91htk=/kisspng-vegetable-cartoon-carrot-clip-art-carrot-5ac99d318c7af0.8971386315231624175754.png\";\n  img.onload = function () {\n    window.ctx.drawImage(img, 0, 0);\n  };\n  window.canvas = document.getElementById('game-canvas');\n  window.ctx = canvas.getContext('2d');\n  console.log('DOM fully loaded and parsed');\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n  this.isWrappable = true;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  let x = this.pos[0];\n  let y = this.pos[1];\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    x,\n    y,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function(ctx){\n  this.pos[0] = (this.pos[0] + this.vel[0]);\n  this.pos[1] = (this.pos[1] + this.vel[1]);\n  if (this.isWrappable && this.game.isOutOfBounds(this.pos)){\n    this.game.wrap(this.pos);\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let distanceBetween = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) + Math.pow(this.pos[1] - otherObject.pos[1], 2));\n  if (this.radius + otherObject.radius < distanceBetween) return false;\n  return true;\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n  console.log('hitting parent');\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship(options){\n  // this.radius = 5;\n  // this.color = 'red';\n  this.vel = Util.randomVect(0);\n  options.color = \"red\";\n  options.vel = this.vel;\n  options.radius = 7;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = Util.randomVect(0);\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  console.log(this.vel)\n  let increasedVelocity = [this.vel[0] * 1.5, this.vel[1] * 1.5];\n  let newPosition = [this.pos[0] + increasedVelocity[0], this.pos[1] + increasedVelocity[1]];\n  console.log(increasedVelocity)\n  this.game.bullets.push(new Bullet({pos: this.pos.slice(), vel: increasedVelocity, game: this.game}));\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVect(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });