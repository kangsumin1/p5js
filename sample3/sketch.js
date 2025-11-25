let capY = 0;
let capState = 'IDLE';
let capRank = 1;
const animationSpeed = 5;
let tearY = 0;
const tearSpeed = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  switch (capRank) {
    case 1:
      background(80, 80, 90);
      break;
    case 2: 
      background(160, 160, 170);
      break;
    case 3: 
      background(220);
      break;
    case 4: 
      background(230, 247, 255);
      break;
    default:
      background(220);
      break;
  }

  if (capState === 'MOVING_UP') {
    capY -= animationSpeed;
    if (capY < -150) {
      capRank = (capRank % 4) + 1;
      capState = 'MOVING_DOWN';
    }
  } else if (capState === 'MOVING_DOWN') {
    capY += animationSpeed;
    if (capY >= 0) {
      capY = 0;
      capState = 'IDLE';
    }
  }

  if (capRank === 1) {
    tearY += tearSpeed;
    if (tearY > 80) {
      tearY = 0;
    }
  } else {
    tearY = 0;
  }

  ears();
  headAndFaceShape();
  eyebrows();
  interaction();
  nose();
}

function interaction() {
  eyes(capRank);
  cap(capY, capRank);
  mouth(capRank);
}

function headAndFaceShape() {
  noStroke();
  fill(235, 210, 173);
  ellipse(300, 200, 220, 270);
  fill(50);
  arc(300, 170, 215, 225, PI, 0);
}

function eyes(rank) {
  if (rank === 4) {
    smilingEye(255, 210);
    smilingEye(345, 210);
  } else {
    eye(255, 210);
    eye(345, 210);
  }

  if (rank === 1) {
    drawTear(255, 225);
  }
}

function eye(x, y) {
  noStroke();
  fill(255, 255, 255);
  ellipse(x, y, 40, 20);

  let angle = atan2(mouseY - y, mouseX - x);
  const maxPupilRadius = 4;
  let distance = dist(x, y, mouseX, mouseY);
  let pupilRadius = min(distance / 10, maxPupilRadius);
  let pupilX = x + cos(angle) * pupilRadius;
  let pupilY = y + sin(angle) * pupilRadius;

  stroke(82, 39, 20);
  fill(10);
  circle(pupilX, pupilY, 16);

  stroke(20);
  noFill();
  strokeWeight(1.7);
  arc(x, y, 40, 20, PI, 0);
}

function smilingEye(x, y) {
  noFill();
  stroke(20);
  strokeWeight(2.5);
  arc(x, y + 10, 35, 20, PI, TWO_PI);
}

function drawTear(x, y) {
  noStroke();
  fill(100, 150, 255, 180);
  ellipse(x, y + tearY, 10, 15);
}

function eyebrows() {
  eyebrow(255, 195);
  eyebrow(345, 195);
}

function eyebrow(x, y) {
  noStroke();
  fill(0);
  ellipse(x, y, 40, 15);

  fill(235, 210, 173);
  ellipse(x, y + 5, 50, 13);
}

function cap(yOffset, rank) {
  stroke(128, 107, 0);
  strokeWeight(2);
  fill(66, 111, 21);
  arc(300, 150 + yOffset, 214, 200, PI, 0);
  fill(82, 144, 20);
  arc(300, 150 + yOffset, 214, 85, 0, PI);

  digitalPattern(yOffset);

  stroke(70);
  fill(82, 144, 20);
  rectMode(CENTER);
  rect(300, 112 + yOffset, 56, 40);

  stroke(46, 62, 103);
  strokeWeight(1.6);
  fill(97, 130, 214);
  for (var i = 0; i < rank; i++) {
    rect(300, 100 + (i * 8) + yOffset, 45, 5);
  }
}

function digitalPattern(yOffset) {
  noStroke();
  fill(160, 150, 110);
  rect(220, 120 + yOffset, 20, 15);
  rect(240, 100 + yOffset, 20, 15);
  rect(260, 138 + yOffset, 15, 18);
  rect(310, 90 + yOffset, 20, 30);
  rect(340, 110 + yOffset, 20, 30);
  rect(370, 123 + yOffset, 20, 10);

  fill(50, 70, 40);
  rect(220, 130 + yOffset, 10, 20);
  rect(250, 100 + yOffset, 10, 20);
  rect(350, 120 + yOffset, 10, 20);
  rect(270, 130 + yOffset, 20, 10);
  rect(380, 140 + yOffset, 20, 10);
  rect(340, 100 + yOffset, 20, 10);
  rect(290, 70 + yOffset, 10, 20);
  rect(300, 130 + yOffset, 20, 20);

  fill(120, 100, 70);
  rect(225, 135 + yOffset, 10, 10);
  rect(260, 130 + yOffset, 15, 15);
  rect(245, 100 + yOffset, 15, 10);
  rect(300, 90 + yOffset, 10, 20);
  rect(310, 135 + yOffset, 20, 20);
  rect(360, 100 + yOffset, 20, 20);
  rect(280, 70 + yOffset, 20, 10);
  rect(390, 130 + yOffset, 10, 20);
}

function ears() {
  ear(190, 200);
  ear(600 - 190, 200);
}

function ear(x, y) {
  noStroke();
  fill(235, 210, 173);
  ellipse(x, y, 23, 46);
  stroke(177, 109, 62);
  noFill(168, 151, 91);
  ellipse(x, y, 10, 30);
}

function nose() {
  stroke(177, 109, 62);
  line(300, 210, 285, 250);
  line(285, 250, 295, 260);
}

function mouth(rank) {
  stroke(177, 109, 62);
  strokeWeight(2);

  switch (rank) {
    case 1:
      fill(234, 144, 144);
      arc(300, 295, 40, 25, PI, 0);
      break;
    case 2:
      noFill();
      line(280, 285, 320, 285);
      break;
    case 3:
      fill(234, 144, 144);
      arc(300, 285, 50, 30, 0, PI);
      break;
    case 4:
      fill(235, 210, 173);
      arc(300, 285, 60, 45, 0, PI);
      break;
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  if (key === ' ') {
    if (capState === 'IDLE') {
      capState = 'MOVING_UP';
    }
  }
}

function mousePressed() {
  if (capState === 'IDLE') {
    capState = 'MOVING_UP';
  }
}