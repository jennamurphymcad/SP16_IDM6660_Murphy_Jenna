var canvaswidth = 800;
var canvasheight = 800;
var count = 100;

function setup() {
  createCanvas(canvaswidth, canvasheight);
  for (x = 60; x < width-50; x += 85) {
    for (y = 50; y < height; y += 3) {

   	var s = map(count, 100, -30, 50, PI*2);
	  noFill();
      strokeWeight(.1);
      beginShape();
      vertex(400, 120);
      quadraticVertex(x, y, s, s * QUARTER_PI);
      endShape();
      count++;
    }
  }
}
