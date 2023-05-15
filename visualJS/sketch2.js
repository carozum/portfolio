// objects definition 

// 1 - using initializer
var circle;

// 2 - using constructor function
var aSquare;

function setup(){
    createCanvas(800, 300);
    rectMode(CENTER);
    circle ={
        x : width/2,
        y: height/2,
        size : 150,
        drawCircle: function(){
            ellipse(this.x, this.y, this.size, this.size);
        }
    };

    aSquare = new Square();
}

function draw(){
    background(250, 4, 67);
    fill(30, 140, 30);
    // noStroke();
    var diameter = 50;
    for (var i=0 ; i< width/diameter ; i++){
        for (var j= 0; j <= height/2 ; j ++){
            ellipse(
                i * diameter +diameter/2, 
                j * diameter + diameter / 2, 
                diameter * noise(frameCount /100 + i + j), 
                diameter * noise(frameCount /100 + j + i));
        } 
    }

    // play with objects
    fill(200, 200, 0);
    circle.drawCircle();

    // play with object constructed using constructor
    aSquare.drawSquare();
    aSquare.grow();
    
}

// constructor function
function Square(){
    this.x = width/3;
    this.y = height/2;
    this.size = 50;
    this.drawSquare = function(){
        fill(34, 34, 178);
        rect(this.x, this.y, this.size, this.size);
    }
    this.grow = function(){
        if (this.size < 200){
            this.size = this.size +1;
        }
    }
}