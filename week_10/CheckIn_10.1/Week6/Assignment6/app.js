var angle1=20;
var angle2=20;
var scalar = 70;

function setup() {
  createCanvas(800, 800);
}

function draw() {
clear();

  var ang1 = radians(angle1);
  var ang2 = radians(angle2);

  var x1 = width/2 + (5*cos(ang1));
  var x2 = width/2 + (5*cos(ang2));

  var y1 = height/2 + (15*sin(ang1));
  var y2 = height/2 + (15*sin(ang2));

 for(x =10; x <= 700; x = x+10)
 	for (y = 200; y <= 600; y = y+15) {

    strokeWeight(.4);
    fill(153, 0, 0);
    beginShape();
    vertex(800-x2, 250+y2);
  	quadraticVertex(x-50, y, 200, 200);
    endShape();
    beginShape();
    vertex(675-x2, 500);
    quadraticVertex(x-50, y, 200, 200);
    endShape();
    beginShape();
    vertex(450, 600);
    quadraticVertex(x-100, y, 200, 200);
    endShape();
    beginShape();
    vertex(420, 600);
    quadraticVertex(x-100, y, 300, 300);
    endShape();


  angle1 += 2;
  angle2 += 3;
 }
}
