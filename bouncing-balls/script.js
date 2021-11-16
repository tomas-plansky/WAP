const maxSpeed = 3;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var balls;
var task;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min
}

function randColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class Ball {

    constructor(radius, speedX, speedY, color) {
        this.x = randInt(radius, canvas.width - radius);
        this.y = randInt(radius, canvas.height - radius);
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;

        console.log(this.toString());
    }

    move() {
        // Left & Right border collision
        if (this.x + this.speedX < this.radius || this.x + this.speedX > canvas.width - this.radius) {
            this.speedX *= -1;
        }
        // Top & Bottom border collision
        if (this.y + this.speedY < this.radius || this.y + this.speedY > canvas.height - this.radius) {
            this.speedY *= -1;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    toString() {
        return `Ball{x=${this.x}, y=${this.y}, radius=${this.radius}, speedX=${this.speedX}, speedY=${this.speedY}, color=${this.color}}`
    }

}

function addBall() {
    balls.push(new Ball(
        15, 
        randFloat(-maxSpeed, maxSpeed), 
        randFloat(-maxSpeed, maxSpeed), 
        randColor()
    ));
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function run() {
    clear();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.move();
        ball.draw();
    }
}

function start() {
    if (task != null) {
        clearInterval(task);
    }
    clear();
    balls = [];
    task = setInterval(run, 10);
    addBall();
}

// Start It
start();