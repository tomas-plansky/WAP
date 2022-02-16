const WIDTH = 400;
const HEIGHT = 400;
const NAME = "Tomáš Plánský";
var font;

function preload() {
    font = loadFont("assets/LucidaBrightRegular.ttf");
}

function setup() {
    createCanvas(WIDTH, HEIGHT, WEBGL);

    textSize(WIDTH / 8);
    textFont(font);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0);

    let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1200);

    text(NAME, 0, 0);
}
