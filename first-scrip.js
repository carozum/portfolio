/**
 * here is a comment on JS done using /**
 * funtion updateKart()
 * Outputs HTML
 * @param {string} article
 */
function updateKart(article){
    //code
}

const glass = {
    color: "red",
    height: 10,
    isFull : false,
    liquid : {
        name: "water",
        liquidColor: "transparent",
        sugar:0,
    },
    addLiquid : function(status){
        if (status === false){
            this.isFull = true ;
        } else {
            console.log("Your glass is already filled, drink it");
            this.isFull = false;
        }     
    }
};

const bottle = {
    tradeMark : "cola",
    volume: 75,
    color: "black",
}

console.log("your glass is full? ", glass.isFull);
console.log(glass);
glass.addLiquid(false);
console.log("your glass is full? ", glass.isFull);
console.log(glass);