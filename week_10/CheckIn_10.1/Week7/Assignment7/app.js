var cell;
var angle1=0;
var angle2=0;
var x1, y1;

function setup() {
  createCanvas(850, 600);
 // frameRate(10);
}
function draw() {
 background(255, 230, 230);
 for (var i=0; i<=2500; i++) {
    var cell = new Particle();
    cell.display();
    cell.move();
  }
}

function Particle() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);

    this.move = function() {
	  var ang1 = degrees(angle1);
      var ang2 = degrees(angle2);
	  this.x += width/2 + (5*cos(ang1));
      this.y += height/2 + (15*sin(ang1));
    };

  this.display = function() {
    strokeWeight(2);
    stroke(255);
    fill(random(110, 153), 0, 0);
  	ellipse(this.x, this.y, 15, 15);

  angle1 += 2;
  angle2 += 3;

  };
};
