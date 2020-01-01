/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 10;
  }
  this.moveLeft = function () {
    this.left -= 10;
  }
  this.moveDown = function () {
    this.top += 10;
  }
  this.moveUp = function () {
    this.top -= 10;
  }
}

let hero = new Hero('Donald.png', 20, 30, 200);
let width = window.innerWidth - hero.size;
let height=window.innerHeight-hero.size;
function start() {
  if (hero.left < width) {
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(start)
  }
  else {
    back();
  }
}
function back() {
  if (hero.left > 0) {
    hero.moveLeft();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(back)
  }
  else {
    start();
  }
}
function Up() {
  if (hero.top < height) {
    hero.moveDown();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(Up)
  }
  else {
    Down();
  }
}
function Down() {
  if (hero.top > 0) {
    hero.moveUp();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(Down)
  }
  else {
    Up();
  }
}

start();
Up();