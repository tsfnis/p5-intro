
function setup() {
  createCanvas(700, 400);

}

function draw() {
  background(240, 200, 200);

  if (mouseIsPressed){
    background(mouseY, mouseX, 200);
  }
  // this is my cool loop for circles that move
  for(var i=0; i < 6; i++) {
    ellipse(mouseX/i, 200, mouseY/i, mouseY/i);
  }

}
