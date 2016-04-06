var shp = [];
var sound = [];
var analyzer;
var vol;

function preload(){
sound = [
	  loadSound('sound/IndiGong001.m4a'),
	  loadSound('sound/IndiGong002.m4a'),
	  loadSound('sound/IndiGong003.m4a'),
  	loadSound('sound/IndiGong004.m4a'),
    loadSound('sound/IndiGong005.m4a'),
	  loadSound('sound/IndiGong006.m4a'),
    loadSound('sound/IndiGong007.m4a')
  ];

for (var i=0; i < 7; i ++) {
  var shape = new Shape(random(200, 550), random(300, 550), random(15, 200));
  shp.push(shape);
  }
}


function setup() {
  translate(width/2, height/2);
  createCanvas(800, 800);
  ellipseMode(RADIUS);
  analyzer = new p5.Amplitude();
}

function draw() {
  clear();
  for (var i=0; i < shp.length; i ++) {
    shp[i].display(mouseX, mouseY);
  }
}


function mousePressed() {
  for (var i = 0; i <shp.length; i++){
    if (shp[i].contains(mouseX, mouseY)) {
			sound[i].play();
      sound[i].setVolume(0.2);
      analyzer.setInput(sound[i]);
    }
  }
}

function keyTyped() {
  for (var i=0; i < shp.length; i ++) {
	  if (key === 's') {
		sound[i].stop();
		}
  }
}

var Shape = function(x_, y_, r_) {
  this.x = x_;
  this.y = y_;
  this.r = r_;
  this.color = [153, random(210, 110), 204];


Shape.prototype.contains = function() {
  var d = dist(mouseX, mouseY, this.x, this.y);
    return (d < this.r);
};


Shape.prototype.display = function(mx, my) {
  if (this.contains()) {
	  blendMode(MULTIPLY);
    fill(153, 225, 204);
		} else {
      fill(this.color);
			strokeWeight(.3);
    }

		blendMode(MULTIPLY);
		strokeWeight(.3);
		stroke(this.color);
		this.vol = analyzer.getLevel();
  	ellipse(this.x, this.y, this.r + this.vol*500, this.r + this.vol*500);
  };
};
