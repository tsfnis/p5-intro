
function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(240, 200, 200);
  // this is my cool loop for circles that move
  for(var i=0; i < 10; i++) {
    fill(random(255),random(255),random(255));
    ellipse(mouseX/i, 200, 20, 20);
  }

}
