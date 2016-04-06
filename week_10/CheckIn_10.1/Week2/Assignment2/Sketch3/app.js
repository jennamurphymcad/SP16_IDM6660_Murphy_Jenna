var canvaswidth = 800;
var canvasheight = 800;

function setup() {
  createCanvas(canvaswidth, canvasheight);
    for (x = 0; x < width-200; x += 35) {
      for (y = 0; y < height-160; y+=3) {

        for (i = 0; i < 100; i+=50) {
          noFill();
      	  strokeWeight(.07);
     	  beginShape();
      	  vertex(320, 250);
      	  quadraticVertex(x + i, y, x + i, y + 120);
     	  endShape();
        }

        strokeWeight(.04);
        beginShape();
      	vertex(320, 450);
     	quadraticVertex(x, y, x + 120, y + 120);
      	endShape();
      }
    }
  }
