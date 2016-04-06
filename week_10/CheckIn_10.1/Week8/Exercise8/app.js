var img;

function preload() {
  img = loadImage("assets/azurite.jpg");
}

function setup() {
  var c = createCanvas(600, 500);
  img.loadPixels();
}

function draw() {
var change = map(mouseX, 0, width, 0, 255);
change = Math.abs(change);
change = Math.floor(change);

for (i = 0; i < img.pixels.length; i = i + 4) {
  if (random(img.pixels[i]) >= 50) {
    img.pixels[i+1] = img.pixels[i-change];
  }
}

img.updatePixels();
image(img, 0, 0, 600, 500);
}
