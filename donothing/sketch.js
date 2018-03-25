// thinking about the pressure to be productive, to create.
// intentionally requires some poking around 
// you can type out whatever, feelings or gibberish, and
// instead Pema Chödrön quotes will appear. Buddhism is a large
// complex thing and while these excerpts run the risk of feeling
// like trite simplifications they have been helpful to me and maybe
// will be for you. if you are interested I encourage you to check out
// http://www.buddhistpeacefellowship.org

// alternate title, from an Esperanza Spalding performance
// "Don't just do something, sit there"
// 3/24/18


var sofar = "";             //string for letters as they're typed
var letters = [];           //array of full text
var i = 0;
var temp1 = [];              //loader help
var temp2 = [];
var temp3 = [];
var screen = 1;             //what screen yr on

function preload() {
    temp1 = loadStrings('text1.txt');
    temp2 = loadStrings('text2.txt');
    temp3 = loadStrings('text3.txt');
}

function setup() {
  letters = split(temp1[0],'');
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(129, 193, 179);  //grey-green

  fill(239, 217, 146); //orangey
  noStroke();
  rect(100, 100, 500, 400);
  rect(620, 470, 30, 30);     //buttons
  rect(620, 430, 30, 30);
  rect(620, 390, 30, 30);

  fill(165, 87, 87);  //burgundy
  textSize(20);

  text(sofar, 105, 105, 500, 400);

}

function keyPressed () {
  if(i>=letters.length){
    //nope yr done
  } else if(screen == 1){
    sofar += letters[i];
    i++;
  } else if(screen == 2){
    sofar += letters[i];
    i++;
  } else {
    //on screen 3 which doesnt respond to keys
  }
}

//wanted another mode of interacting since typing takes awhile
function mouseMoved(){
  if(i>=letters.length){
    //nope yr done
  } else if(screen == 3){
    sofar += letters[i];
    i++;
  } else {
    //not screen 3 then
  }
}

function mouseClicked(){
  if(mouseX > 620 && mouseX < 650 && mouseY > 470 && mouseY < 500){
    letters = split(temp1[0],'');
    sofar = "";
    i = 0;
    screen = 1;
  } else if(mouseX > 620 && mouseX < 650 && mouseY > 430 && mouseY < 460){
    letters = split(temp2[0],'');
    sofar = "";
    i = 0;
    screen = 2;
  } else if(mouseX > 620 && mouseX < 650 && mouseY > 390 && mouseY < 420){
    letters = split(temp3[0],'');
    sofar = "";
    i = 0;
    screen = 3;
  } else {
    //nothing, not a button
  }

}
