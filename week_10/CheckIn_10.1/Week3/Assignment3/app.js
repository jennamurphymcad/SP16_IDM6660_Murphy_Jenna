var bg;
var bug;  // Declare object
var xoff = 2;
var line1 = "a Bee";
var line2 = "staggers out";
var line3 = "of the";

function setup() {
  bg = loadImage('peony.jpg');
  createCanvas(730, 482);
  // Create object
  bug = new Jitter();
}

function draw() {
  background(bg);
  bug.move();
  bug.display();
  xoff = xoff + .02;
   var n = noise(xoff) * width;
  text(line2, height/1.5, n/2);
  fill(15)
  textSize(45);
  textFont('Bodoni');
  text(line3, 100, 400);
  fill(mouseX, mouseY, 0);
  textSize(60);
  textStyle(ITALIC);
  textAlign(CENTER);
  text('peony', 300, 400);
}

function Jitter() {
  this.x = random(200);
  this.y = random(250);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
   fill(15);
   textSize(50);
   text(line1, this.x, this.y);
  }
}
