var a = 1000
var b = 1000

function setup() {
	
  createCanvas(a, b);

for (x = 0; x <= a/5; x = x + 100)
    for(y = 0; y <= b/60; y = y + 35) {
      
      setInterval(function(){
      noFill();
      strokeWeight(.05);
      beginShape();
      vertex(100, 300);
      quadraticVertex(x++, y++, 550, 550);
      endShape();
      }, 1000);
		
	setInterval(function(){
	beginShape();
      vertex(400, 400);
      quadraticVertex(x, y, 100, 700);
      endShape();
      }, 60000);
     
      setInterval(function(){
      beginShape(); 
      vertex(700, 400);
      quadraticVertex(x, y, 400, 400);
      endShape();
      }, 30000);
     
      setInterval(function(){
beginShape();
      vertex(400, 400);
      quadraticVertex(x, y, 400, 400);
      endShape();
      }, 1000);

    }
  }
