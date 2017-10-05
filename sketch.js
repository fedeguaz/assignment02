function setup() {
  createCanvas(500,500);
  background(0);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
translate(width/2,height/2);
rotate(frameCount*5);
noFill();

stroke(lerpColor(color('#ABCDEF'), color('#CC8899'), frameCount/360));
line(100,0,cos(frameCount*4)*100,sin(frameCount*4)*100);

if (frameCount == 90*4) {
  noLoop();
}

translate(150,200);
noFill();
stroke(lerpColor(color('#991199'), color('#FADADD'), frameCount/360));
line(100,0,cos(frameCount*4)*100,sin(frameCount*4)*100);

if (frameCount == 450) {
  noLoop();
}
}