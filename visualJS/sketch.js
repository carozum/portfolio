// using p5.js
var count=0;

function setup() {
    createCanvas(400, 1200);
    rectMode(CENTER);
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
    var dStop = 100 + count;
    var yStop = y + d/2 + dStop/2 +50;
    fill(230, 50, 50);
    ellipse(xStop, yStop, dStop, dStop);
    fill(255);
    rect(xStop, yStop, dStop *0.75, dStop * 0.13);

    // first animation
    count = count +1;

}