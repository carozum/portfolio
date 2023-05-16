// introducing arrays

var nbCircles = 100;
var circles = [];

function setup(){
    createCanvas (600, 800);

    for (var i = 0; i <= nbCircles; i++){
        circles.push(random(5, 600));
    }
}

function draw(){
    background(220);
    noFill();
    strokeWeight(2);
    for (var i=0; i < circles.length; i++){
        ellipse(
            width/2, 
            height/2-50,
            circles[i], 
            circles[i]);
    }
    
}