//var fighter = ""(ง’-‘︠)ง"";
function preload() {
  soundFormats('mp3');
  hit = loadSound('onepunch.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");

}

function draw() {
  background(220);
  textSize(32);

  //keep the buddy following on half the screen
  var xc = constrain(mouseX-200, 100, windowWidth/2);

  //lil buddy
  if(mouseX-200 >= windowWidth/2) {
    text("(ง’-‘︠)ง ", windowWidth/2, mouseY);
  }

  else if (mouseX >= 280){
    text("(ง’-‘︠)ง ", xc, mouseY);
  }

  else if (mouseX != 0 && mouseX < 280){

    hit.setVolume(0.1);
    hit.playMode('restart');
    hit.play();

    text("‾͟͟͞(((ꎤˋ⁻̫ˊ)—̳͟͞͞o", 100, mouseY);

  }

//screen loads mouse at 0,0 and we just need it to not play hit
  else {
    text("begin!", 100, 100);
  }

}
