/* Wanted to make a 10PRINT port that used
the text slashes and wrapped automatically like BASIC would
but jokes on me text wrap wont break lines so there needs to be
spaces so the print is weird. also makes its own leading

see shiffman's use of slashes for thing that looks right but longer code
*/


var p = "/";

function setup() {
  createCanvas(500, 500);
  background(43, 192, 242);
  frameRate(10);
}

function draw() {
  textSize(50);
  fill(255);
//the printing slashes but fukin text wrap
  text(p, 0, 0, 500, 500);

//also not 50/50 since will include 0 but not 1
  if(random() > .5) {
    p += "\\ ";
  } else {
    p += "/ ";
  }
}
