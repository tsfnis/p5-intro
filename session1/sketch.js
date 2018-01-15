function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(34, 39, 32);
  stroke(0);
  strokeWeight(5);
  fill(89, 139, 126);
  triangle(330, 100, 530, 480, 22, 450,);

  fill(250, 230, 170);
  triangle(211, 404, 308, 238, 386, 399);

  beginShape();
  fill(89, 139, 126);
    vertex(676, 768);
    vertex(676, 240);
    vertex(800, 360);
    vertex(944, 243);
    vertex(944, 768);
  endShape(CLOSE);

  fill(230, 230, 130, 100);
  noStroke();
  triangle(80, 700, 550, 100, 850, 750);


}
