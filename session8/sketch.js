var pups = [];
var angle = 0.0;
var howMany = 1;

//user can select more or fewer pupperinos
var moreButton;
var lessButton;


function setup() {
  createCanvas(windowWidth, windowHeight);

  moreButton = createButton('more pups!');
  moreButton.position(48, 70);
  lessButton = createButton('fewer pups!');
  lessButton.position(48, 100);

  moreButton.mousePressed(more);
  lessButton.mousePressed(less);
  pups[0] = new Dog();
}

function draw() {
  background(166, 237, 211);
  noStroke();
  textSize(20);
  fill(0);
  text("You seem stressed, hang out with this pup~", 50, 50);

  if(howMany < 1) {
    text("scared 'em off huh", 300, 300);
  }
  if(howMany > 10) {
    text("maybe you need more than dogs...", 300, 100);
  }
  for(i = 0; i < howMany; i++) {
      pups[i].spawn();
  }
}



function Dog(ang) {

  this.x = random(windowWidth-50);
  this.y = random(windowHeight-50);
  this.color = random(255);

  this.spawn = function() {
    push();
    translate(this.x, this.y);

    fill(this.color);
    beginShape();
    vertex(71, 51);
    vertex(79, 27);
    vertex(86, 49);
    vertex(103, 32);
    vertex(106, 52);
    vertex(155, 59);
    vertex(170, 75);
    vertex(165, 133);
    vertex(147, 133);
    vertex(148, 107);
    vertex(140, 106);
    vertex(129, 131);
    vertex(115, 128);
    vertex(121, 100);
    vertex(109, 98);
    vertex(94, 125);
    vertex(83, 122);
    vertex(90, 95);
    vertex(80, 95);
    vertex(68, 119);
    vertex(55, 115);
    vertex(63, 80);
    vertex(32, 77);
    vertex(33, 61);
    vertex(56, 64);
    vertex(35, 54);
    vertex(45, 37);
    endShape();

    beginShape();
    vertex(155, 59);
    vertex(168, 45);
    vertex(153, 20);
    vertex(180, 43);
    vertex(170, 75);
    endShape();
    pop();
  }


  /*this.wag = function() {

    beginShape();
    vertex(155, 59);
    vertex(168, 45);
    vertex(153, 20);
    vertex(180, 43);
    vertex(170, 75);
    endShape();
  } */

}

function more() {

  pups[howMany] = new Dog();

  howMany++;
  print(howMany);

}

function less() {
 if(howMany == 0) {
   //do nothing, so not negative pups
 } else {
    howMany--;
  }
}
