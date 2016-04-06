var system, lifespan; //add more variables i.e. system1, 2 to create more particlesystems
var field;
var fcenterX, fcenterY;

var   pos = 0.0;
var   inc = 2.0;

var   pos2 = 0.0;
var   inc2 = 7.0;


function setup() {
  createCanvas(820, 500);
  fcenterX = width/2;
  fcenterY = height/2;
  system = new ParticleSystem(createVector(fcenterX, fcenterY));
}

function draw() {
  system.addParticle();
  system.run();
}

var Particle = function(position) {
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
	this.lifespan = 250;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.x += round(random(-1, 1));
  this.position.y += round(random(-1, 1));
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  fill(244);
  strokeWeight(0.4);
  ellipse(this.position.x, this.position.y, random(5), random(5));
};

Particle.prototype.isDead = function(){
  if (this.lifespan < 0.0 ) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};


ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i < 250; i--) {
    var p = this.particles[i];
    p.run();
  if (p.isDead()) {
    Particle.prototype.isDead;
  }
 }
};