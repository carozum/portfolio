// a typing speed game where we will be rapidly displaying numbers to a player and expect the player to enter the current number on the screen using their keyboard.

// if they answer the correct number in the given amount of time, they score. 

// we will keep track of the score to be able to display it at the end of the game. 

// 1. Display a number on screen periodically
// 2. we don't want the number to remain static (animated to make it easier or harder to read)
// 3. the number needs to remain on the screen until the next number is displayed or until the player presses a key in an attempt to match the current number on screen
//4. if the player entry matches the number on screen, display a success message. If not, the failure will we indicated. 
//5. we need to keep track of the amount of failures and successes
//6. after x many attempts, we need to display the result to the user.
//7. We also need to find a way to restart the game when it is over. 

var totalAttempt = 10;
var interval = 60;
var numbers=[];
var playAgain;


function setup(){
    createCanvas(innerWidth, innerHeight);
    textAlign(CENTER, CENTER);

    // creates a random array of numbers
    numbers = randomArray();
    console.log(numbers);
}

function draw(){
    background(220);
   
    for (var i = 1; i <=totalAttempt; i++){
        
        // display a number every interval seconds
        if ((frameCount >= interval * i) && (frameCount <= interval * (i+1))){
            textSize(32);
            text(numbers[i], width/2, height/2);
        } 
        textSize(18)
    }

    if (frameCount > 60 * totalAttempt){
        background(220);
        text('game over', width/2, height/2);
        numbers = randomArray();
        var answer = prompt("do you still want to play? (yes/no)");
        noLoop();
        console.log(numbers);
        console.log(answer);
        if (answer === "yes"){
            playAgain= true;
            background(220);
            text('ok', width/2, height/2);
        } else {
            playAgain = false;
            background(220);
            text('game over', width/2, height/2);
        }
        console.log(playAgain);
    }

    
}
function randomArray(){
    var randomNumbers =[]; 
    for (var i=0; i <totalAttempt; i++){
        randomNumbers.push(parseInt(random(1, 10), 10));
    }
    return randomNumbers;
}