// introducing arrays

var nbCircles = 100;
var circles = [];

var words = ['I', 'love', 'programming', 'with', 'Javascript'];

function setup(){
    createCanvas (600, 800);

    for (var i = 0; i <= nbCircles; i++){
        circles.push(random(5, 600));
    }

    textAlign(CENTER, 700);
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
    fill(255, 125, 125);
    textSize(25);
    for (var i=0; i<words.length; i++){
        text(words[i], width/2, 700);
    }
}