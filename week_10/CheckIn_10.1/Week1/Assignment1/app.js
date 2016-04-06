var r, g, b;

function setup() {
  createCanvas(720, 400);
}

function draw() {

  if(mouseIsPressed) {
    fill(r, g, b);
  } else {
    r = random(255);
    g = random(255);
    b = random(255);
    noStroke();
  }
  ellipse(mouseX, mouseY, 60, 80);
}
