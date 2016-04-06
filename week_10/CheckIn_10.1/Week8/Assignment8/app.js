var vid;

function setup() {
  createCanvas(568, 320);
  vid = createVideo(['assets/IMG_3936.ogv']);
  vid.loop();
  vid.loadPixels();
  vid.volume([0.0]);
}

function draw() {
  clear();
strokeWeight(0.2);
fill(0, 200, random(200, 255));

  var stepSize = round(constrain(mouseX/20, 6, 32));
  vid.loadPixels();
for (var y=0; y <height; y+= stepSize) {
 for (var x=0; x<width; x += stepSize) {
    var i = y *width + x;
      var darkness = (vid.pixels[i+4])/255;
  var radius = stepSize * darkness;
    ellipse(x, random(y), random(radius), random(radius));
 }
  }
}
