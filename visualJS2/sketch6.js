//each time a key is pressed, a circle appears on the canvas. Be careful to change the background to be set only once, otherwise, the background clears every shape each time the draw function is executed. 

var pressed = false;
let touch = false;
var colors = [];
let showText;


function setup(){
    createCanvas (window.innerWidth, window.innerHeight);
    background(15);
    colors =[
        [245, 3, 155],
        [13, 159, 215],
        [148, 177, 191],
        [100, 189, 167],
        [242, 226, 110],
        [176, 230, 110],
        [123, 90, 240]
    ];
    noStroke();
    showText = true;
    textAlign(CENTER, CENTER);
}

function draw(){
    // display an ellipse each time a key is pressed
    if (pressed === true || touch === true){
        var randomIndex = parseInt(random(colors.length));
        var randomSize = random(200);
        fill(colors[randomIndex]);
        ellipse(random(width), random(height), randomSize, randomSize);
    }
    pressed = false;

    // to display text at the beginning 
    if(showText){
        fill(255);
        if (innerWidth >=500){
            textSize(48);
            text('Please press any key to start', width/2, height/2);
        } else {
            textSize(24);
            text('Touch screen to start', width/2, height/2);
        }
    } 
}


function keyPressed(){
    //console.log('pressed');
    pressed = true;
    if (showText){
        showText = false;
        background(15); 
    }
    
    // key code is good for non alphanumeric characters
    if (keyCode === ENTER){
        console.log('enter key pressed');
    }

    //key variable is good for alphanumeric characters
    if (key === 'a'){
        console.log('yes');
    } 
}

function touchStarted(){
    touch = true;
    if (showText){
        showText = false;
        background(15); 
    }
}






