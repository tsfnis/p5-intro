//how mamy times a wrong input has been given, to at some point help
var wrong = 0;
//holds whats been typed
var mood = "";

function preload() {
  soundFormats('mp3');
  whatnow = loadSound('y_ahora_que.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");
  textSize(18);

}

function draw() {
  background(200, 237, 163);

  text("how are you feeling?", 50, 50);
  text(mood, 100, 100);
}

//handles changing the music
function keyTyped(){

  if(mood == "k thanks") {
    whatnow.pause();
    text("no problem", 200, 100);
    mood = "";
  }

  else if(mood == "just ok") {
    whatnow.playMode('restart');
    whatnow.play();
    text("well keep at it", 200, 100);
    mood = "";
  }

  else {
    mood += key;
  }
}

//just for deleting input errors
function keyPressed() {
  if (keyCode == BACKSPACE){
    mood = "";
  }
}
