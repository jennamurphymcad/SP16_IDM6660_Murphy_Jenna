var canvaswidth = 800
var canvasheight = 800

function setup() {
  createCanvas(canvaswidth, canvasheight);
  for (x = 20; x <= width; x = x + 20) {
    for (y = 2; y <= height*.05; y = y + 3) {

      if (x >= 400 == 0) {

      noFill();
      strokeWeight(.05);
      beginShape();
      vertex(400, 750);
      quadraticVertex(x, y, 400, 400);
      endShape();

      }

      else {
      beginShape();
      vertex(400, 750);
      quadraticVertex(x, y, 400, 400);
      endShape();

      }
    }
  }
}
