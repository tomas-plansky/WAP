const WIDTH = 800;
const HEIGHT = 600;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
var balls;

// Utils

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min
}

function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function addBall() {
  balls.push(new Ball(
    CENTER_X, 
    CENTER_Y, 
    randInt(24, 64), 
    randFloat(-5, 5), 
    randFloat(-5, 5),
    randColor()
  ));
}

// General

function reset() {
    balls = [];
    addBall();
}

function setup() {
  reset();
  var canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('cont');
}

function draw() {
  background(color('#252a2e'));
  
  for (var i = 0; i < balls.length; i++) {
    ball = balls[i];
    ball.draw();
    // Hold ENTER to pause the movement
    if (!keyIsPressed || keyCode !== ENTER) {
      ball.move();
    }
  }
}

function mouseClicked() {
  for (var i = 0; i < balls.length; i++) {
    ball = balls[i];
    if (dist(ball.x, ball.y, mouseX, mouseY) < ball.radius) {
      ball.color = randColor();
      return false;
    }
  }
  return false;
}

// Ball class

class Ball {
  
  constructor(x, y, size, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.radius = size / 2;
  }
  
  draw() {
    noStroke();
    fill(color(this.color));
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  move() {
    if (this.x > WIDTH - this.radius || this.x < this.radius) {
      this.dx *= -1;
    }
    
    if (this.y > HEIGHT - this.radius || this.y < this.radius) {
      this.dy *= -1; 
    }
    
    this.x += this.dx;
    this.y += this.dy;
  }
  
}