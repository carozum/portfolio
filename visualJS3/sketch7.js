function setup(){
    createCanvas(innerWidth, innerHeight);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);
}

function draw(){
    background(220);

    // first possibility to create a single rotated rectangle
    push();
    translate(width/2, height/2);
    rotate(45);
    rect(0, 0, 300, 300);
    pop();

    fill(200, 250, 100);
    rectc(150, 150, 100, 100, 30);

    fill(150, 100, 150);

}

// another way is to create a custom rectangle function to integrate a rotate parameter

function rectc(x, y, w, h, rotation){
    if (rotation === undefined){
        rotate = 0;
    }
    push();
    translate(x, y);
    rotate(rotation);
    rect(0, 0, w, h);
    pop();
}