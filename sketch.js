var d; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240,050,0);
  frameRate (50);
}

function draw() {
  noStroke ()
  fill (260,d)
ellipse (mouseX, mouseY, d, d);
 d = random (10, 100); 
}
