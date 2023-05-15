// using p5.js
var toggle = true;


function setup() {
    createCanvas(400, 1200);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255, 220, 220);
    strokeWeight(2);

    var x=width/2;  //center of circle
    var d=width-100;  // diameter
    var y=d/2 + 30;  //center of circle

    // circle 1
    fill(255, 200, 200);
    stroke(0);
    ellipse(x, y, d, d);

    // circle 2
    stroke(255, 100, 100)
    fill(255, 170, 170);
    ellipse(x, y, d-50, d-50);
    
    //circle 3
    fill(255, 140, 140);
    ellipse(x, y, d-100, d-100);

    // circle 2
    fill(255, 120, 120);
    noStroke();
    ellipse(x, y, d-150, d-150);

    // drawing a stop
    var xStop = x;
    var dStop = 100 + frameCount;
    var yStop = y + d/2 + dStop/2 +50;
    fill(230, 50, 50);
    ellipse(xStop, yStop, dStop, dStop);
    fill(255);
    rect(xStop, yStop, dStop *0.75, dStop * 0.13);

    // writing stop when frameCount is less than 200
    fill(0);
    var value;
    if (frameCount <= 200){
        textSize(36);
        value='Small';
    } else {
        textSize(58);
        value='Big'
    }
    text(value, xStop, yStop);

    //adding mouse pressed event
    if (mouseIsPressed){
        toggle = !toggle;
    }
    if (toggle === true){
        text('Hello', x, y);
    }

    // interaction with mouse position

    var xA = mouseX;
    var yA = mouseY;
    ellipse(xA, yA, 50, 50);
}