var a = 800
var b = 500

function setup() {

  createCanvas(a, a);

  for (x = 80; x <= a; x = x + 100)
    for(y = 20; y <= b*2; y = y + 10) {
      noFill();
      strokeWeight(.05);
      beginShape();
      vertex(650, 600);
      quadraticVertex(x, y, 400, 400);
      endShape();
      beginShape();
      vertex(150, 600);
      quadraticVertex(x, y, 400, 400);
      endShape();
      beginShape();
      vertex(400, 700);
      quadraticVertex(x, y, 400, 400);
      endShape();
      beginShape();
      vertex(400, 300);
      quadraticVertex(x, y, 400, 400);
      endShape();
    }
  }
