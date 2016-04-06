var canvaswidth = 800;
var canvasheight = 800;
stage = 0;


function setup() {
  createCanvas(canvaswidth, canvasheight);
  frameRate(1);
}

function draw() {
  clear();
  if (stage == 0) {
	translate(width/6, height/6);
	textSize(50);
	text('stretch', 10, 50);
	stage = 1;
  }
  else {
	translate(width/6, height/6);
	shearY(PI/4.0);
	textSize(70);
	text('stretch', 10, 50);
	stage = 0;
  }
}
