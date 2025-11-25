function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(75);
  ocean();
  ground();
  lighthouse();
  boat();
  moon();
  stars();
  waves();
}

function ground(){
  noStroke();
  fill(128,64,64);
  ellipse(120,400,200,160);
  quad(0,400,0,320,120,320,120,400);
}

function ocean() {
  noStroke();
  fill(0,0,160);
  quad(0,400,0,280,600,280,600,400);
}

function lighthouse() {
  noStroke();
  fill(237,28,36);
  quad(30,250,20,320,120,320,110,250);
  fill(128,128,128);
  quad(30,250,110,250,100,180,40,180);
  fill(237,28,36);
  quad(100,180,40,180,50,110,90,110);
  
  ellipse(70,50,10,20);
  stroke(128,128,128);
  strokeWeight(2);
  ellipse(70,75,50,55);
  quad(50,110,90,110,104,100,36,100);
  quad(97,100,43,100,43,75,97,75);
  noStroke();
  fill(255,255,0);
  quad(80,81,80,94,97,94,97,81);
  quad(97,94,97,81,550,280,450,280);
  fill(237,28,36);
  
  stroke(128,128,128);
  strokeWeight(1);
  line(70,40,70,23);
  line(63,31,77,31);
  line(65,35,75,35);  
}

function boat(){
  noStroke();
  fill(64,0,64);
  quad(518,280,482,280,466,270,534,270);//배 본체
  stroke(64,0,64);
  strokeWeight(4);
  line(500,270,500,200);//배 기둥
  noStroke();
  triangle(500,205,466,245,494,270);//큰 돛
  triangle(500,215,518,255,506,265);//작은 돛
}

function moon() {
  noStroke();
  fill(228,224,71);
  circle(450,100,60);
  fill(75);
  circle(470,90,75);
}

function stars() {
  stroke(228,224,71);
  point(130,180);
  point(150,80);
  // point(220,60);
  point(250,100);
  point(300,20);
  point(330,70);
  point(360,160);
  point(500,20);
  point(550,175);
}

function waves() {
  stroke(255,255,255);
  noFill();
  strokeWeight(3.5);
  makeWave(280,330);
  makeWave(380,300);
  makeWave(440,350);
  makeWave(520,320);
}

function makeWave(x,y){
  arc(x,y,15,10,radians(0),radians(180));
  arc(x+15,y,15,10,radians(180),radians(360));
  arc(x+30,y,15,10,radians(0),radians(180));
}