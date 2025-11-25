let flow = 0;
let time = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(20);
}

function draw() {
  time = frameCount * 0.03 - 3;
  
  let skyColor = sky(); 
  let night = celestials(skyColor);

  clouds();
  ocean();
  ground();
  lighthouse(night);
  boat();
  
  if (night) {
    stars();
  }
  waves();
}

function sky() {
  let mix = (sin(time) + 1) / 2;
  let nightColor = color(20, 20, 60);
  let dayColor = color(135, 206, 235);
  let result = lerpColor(nightColor, dayColor, mix);
  
  noStroke();
  fill(result);
  quad(0, 0, 0, 400, 600, 400, 600, 0);
  
  return result; 
}

function celestials(skyColor) {
  let cx = 300;
  let cy = 450;
  let r = 250; 

  let sx = cx + cos(time + PI) * r;
  let sy = cy + sin(time + PI) * r;

  noStroke();
  fill(255, 100, 0);
  ellipse(sx, sy, 60, 60);
  fill(255, 255, 0, 100);
  ellipse(sx, sy, 80, 80);

  let mx = cx + cos(time) * r;
  let my = cy + sin(time) * r;

  push();
  translate(mx, my); 
  
  noStroke();
  fill(228, 224, 71);
  circle(0, 0, 60); 
  
  fill(skyColor); 
  circle(20, -10, 60); 
  pop();

  return sy > 450; 
}

function clouds() {
  let cloud1 = (frameCount * 1.5) % (width + 200) - 100;
  let cloud2 = (frameCount * 0.9 + 300) % (width + 200) - 100;
  let sizeVar = sin(frameCount * 0.03) * 0.4 + 1.2; 

  noStroke();
  fill(255, 255, 255, 200); 
  
  ellipse(cloud1, 100, 80 * sizeVar, 50 * sizeVar);
  ellipse(cloud1 + 30, 110, 80 * sizeVar, 50 * sizeVar);
  ellipse(cloud1 - 30, 110, 80 * sizeVar, 50 * sizeVar);
  ellipse(cloud2, 150, 70 * sizeVar, 40 * sizeVar);
  ellipse(cloud2 + 25, 160, 70 * sizeVar, 40 * sizeVar);
  ellipse(cloud2 - 25, 160, 70 * sizeVar, 40 * sizeVar);
}

function ground() {
  noStroke();
  fill(128, 64, 64);
  ellipse(120, 400, 200, 160);
  quad(0, 400, 0, 320, 120, 320, 120, 400);
}

function ocean() {
  noStroke();
  fill(0, 0, 160);
  quad(0, 400, 0, 280, 600, 280, 600, 400);
}

function lighthouse(night) { 
  noStroke();
  fill(237, 28, 36);
  quad(30, 250, 20, 320, 120, 320, 110, 250);
  fill(128, 128, 128);
  quad(30, 250, 110, 250, 100, 180, 40, 180);
  fill(237, 28, 36);
  quad(100, 180, 40, 180, 50, 110, 90, 110);

  ellipse(70, 50, 10, 20);
  stroke(128, 128, 128);
  strokeWeight(2);
  ellipse(70, 75, 50, 55);
  quad(50, 110, 90, 110, 104, 100, 36, 100);
  quad(97, 100, 43, 100, 43, 75, 97, 75);
  noStroke();
  
  if (night) {
    let blink = random(100, 200); 
    
    fill(255, 255, 0); 
    quad(80, 81, 80, 94, 97, 94, 97, 81);

    let scan = sin(frameCount * 0.06);
    
    let focus = ((scan + 1) / 2) * 500 + 200;

    let w = 100; 
    let x1 = focus - w / 2;
    let x2 = focus + w / 2;

    fill(255, 255, 0, blink);
    quad(97, 94, 97, 81, x2, 280, x1, 280);
  } else {
    fill(200, 200, 100);
    quad(80, 81, 80, 94, 97, 94, 97, 81);
  }

  fill(237, 28, 36);
  stroke(128, 128, 128);
  strokeWeight(1);
  line(70, 40, 70, 23);
  line(63, 31, 77, 31);
  line(65, 35, 75, 35);
}

function boat() {
  push();
  let bob = sin(frameCount * 0.15) * 5; 
  translate(0, bob + 5); 

  let mix = (sin(time) + 1) / 2;

  let bodyNight = color(64, 0, 64);
  let bodyDay = color(133, 94, 66);
  let curBody = lerpColor(bodyNight, bodyDay, mix);

  let sailNight = color(64, 0, 64);
  let sailDay = color(255, 255, 255);
  let curSail = lerpColor(sailNight, sailDay, mix);

  noStroke();
  fill(curBody); 
  quad(518, 280, 482, 280, 466, 270, 534, 270); 
  
  stroke(curBody);
  strokeWeight(4);
  line(500, 270, 500, 200); 
  
  noStroke();
  fill(curSail); 
  triangle(500, 205, 466, 245, 494, 270); 
  triangle(500, 215, 518, 255, 506, 265); 
  pop();
}

function stars() {
  stroke(228, 224, 71);
  strokeWeight(5);
  point(130, 180);
  point(150, 80);
  point(250, 100);
  point(300, 20);
  point(330, 70);
  point(360, 160);
  point(500, 20);
  point(550, 175);
}

function waves() {
  flow = sin(frameCount * 0.15) * 8;
  stroke(255, 255, 255);
  noFill();
  strokeWeight(3.5);
  makeWave(280, 330);
  makeWave(380, 300);
  makeWave(440, 350);
  makeWave(520, 320);
}

function makeWave(x, y) {
  arc(x + flow, y, 15, 10, radians(0), radians(180));
  arc(x + 15 + flow, y, 15, 10, radians(180), radians(360));
  arc(x + 30 + flow, y, 15, 10, radians(0), radians(180));
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}