// change the color of the background when the mouse is clicked. Day and Night.

var toggle = true;

function setup(){
    createCanvas(800,400);
}

function draw(){
    //display a different bg color based on the toggle value
    if (toggle === true){
        background(1, 186, 240);
    } else {
        background(250, 150, 50);
    }
    
}

function mousePressed(){
    //console.log('yes');
    toggle = !toggle;
}
