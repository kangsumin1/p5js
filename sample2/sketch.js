function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(220);
  ears();
  headAndFaceShape();
  eyebrows();
  eyes();
  cap();
  nose();
  mouth();
}

function headAndFaceShape(){
  noStroke();
  fill(235,210,173);
  ellipse(300,200,220,270); //faceShape
  fill(50);
  arc(300,170,215,225,PI,0); //head
}


function eyes() {
  eye(255,210);
  eye(345,210);
}

function eye(x,y) {
  noStroke();
  fill(255,255,255);
  ellipse(x,y,40,20); //흰눈동자
  stroke(82,39,20);
  fill(10);
  circle(x,y,16);//검은 눈동자
  
  stroke(20);
  noFill();
  strokeWeight(1.7);
  arc(x,y,40,20,PI,0);
}

function eyebrows(){
  eyebrow(255,195);
  eyebrow(345,195);
}

function eyebrow(x,y){
  noStroke();
  fill(0);
  ellipse(x,y,40,15);
  
  fill(235,210,173);
  ellipse(x,y+5,50,13);
}
function cap(){
  stroke(128,107,0);
  strokeWeight(2);
  fill(66,111,21);
  arc(300,150,214,200,PI,0); //cap upper part
  fill(82,144,20);
  arc(300,150,214,85,0,PI);  //cap lower part
  
  digitalPattern();
  
  // 병장 약장
  stroke(70);
  fill(82,144,20);
  rectMode(CENTER);
  rect(300,112,56,40);
  
  stroke(46,62,103);
  strokeWeight(1.6);
  fill(97,130,214);
  for(var i=0; i<4; i++) {
    i*=8;
    rect(300,100+i,45,5);
    i/=8;
  }
}

function digitalPattern(){
  let palette = [
    color(160, 150, 110),  // 베이지
    color(50, 70, 40),    // 다크 그린
    color(120, 100, 70)  // 브라운
  ];
  noStroke();
  fill(palette[0]);
  rect(220,120,20,15);
  rect(240,100,20,15);
  rect(260,138,15,18);
  rect(310,90,20,30);
  rect(340,110,20,30);
  rect(370,123,20,10);
  fill(palette[1]);
  rect(220,130,10,20);
  rect(250,100,10,20);
  rect(350,120,10,20);
  rect(270,130,20,10);
  rect(380,140,20,10);
  rect(340,100,20,10);
  rect(290,70,10,20);
  rect(300,130,20,20);
  fill(palette[2]);
  rect(225,135,10,10);
  rect(260,130,15,15);
  rect(245,100,15,10);
  rect(300,90,10,20);
  rect(310,135,20,20);
  rect(360,100,20,20);
  rect(280,70,20,10);
  rect(390,130,10,20);
}

function ears(){
  ear(190,200);
  ear(600-190,200);
}

function ear(x,y){
  noStroke();
  fill(235,210,173);
  ellipse(x,y,23,46);
  stroke(177,109,62);
  noFill(168,151,91);
  ellipse(x,y,10,30);
}

function nose(){
  stroke(177,109,62);
  line(300,210,285,250);
  line(285,250,295,260);
}

function mouth(){
  stroke(177,109,62);
  fill(234,144,144);
  arc(300,285,50,30,0,PI);
}