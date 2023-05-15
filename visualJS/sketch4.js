var words = ['Hi, I', 'love', 'programming', 'with', 'Javascript'];
var colors = [
    [63, 184, 175],
    [127, 199, 175],
    [218, 216, 167],
    [255, 158, 157],
    [255, 61, 127],
]

function setup(){
    createCanvas (window.innerWidth, window.innerHeight);
    textAlign(CENTER, CENTER);
    frameRate(1.5);
}

function draw(){
    var currentIndex = frameCount % colors.length;
    var currentWord = words[currentIndex];
    var currentColor = colors[currentIndex];

    background(currentColor);
    fill(255);
    textSize(45);
    text(currentWord, width/2, height/2);
    
}