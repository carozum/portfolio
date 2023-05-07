document.addEventListener("DOMContentLoaded", function(event){

    var  thumbnailElement1 = document.getElementById("small_thumbnail_1");
    var  thumbnailElement2 = document.getElementById("small_thumbnail_2");
    var  thumbnailElement3 = document.getElementById("small_thumbnail_3");
    var  thumbnailElement4 = document.getElementById("small_thumbnail_4");
    var  thumbnailElement5 = document.getElementById("small_thumbnail_5");
    var  thumbnailElement6 = document.getElementById("small_thumbnail_6");
    var  thumbnailElement7 = document.getElementById("small_thumbnail_7");
    var  thumbnailElement8 = document.getElementById("small_thumbnail_8");

    // I am sure I could have been more efficient not repeating so much time the same code, but I ran out of time. Next time...

    thumbnailElement1.addEventListener("click", function(){
        if (thumbnailElement1.className =="small"){
            thumbnailElement1.className = "";
        } else {
            thumbnailElement1.className = "small";
        }
    });
    thumbnailElement2.addEventListener("click", function(){
        if (thumbnailElement2.className =="small"){
            thumbnailElement2.className = "";
        } else {
            thumbnailElement2.className = "small";
        }
    });
    thumbnailElement3.addEventListener("click", function(){
        if (thumbnailElement3.className =="small"){
            thumbnailElement3.className = "";
        } else {
            thumbnailElement3.className = "small";
        }
    });
    thumbnailElement4.addEventListener("click", function(){
        if (thumbnailElement4.className =="small"){
            thumbnailElement4.className = "";
        } else {
            thumbnailElement4.className = "small";
        }
    });
    thumbnailElement5.addEventListener("click", function(){
        if (thumbnailElement5.className =="small"){
            thumbnailElement5.className = "";
        } else {
            thumbnailElement5.className = "small";
        }
    });
    thumbnailElement6.addEventListener("click", function(){
        if (thumbnailElement6.className =="small"){
            thumbnailElement6.className = "";
        } else {
            thumbnailElement6.className = "small";
        }
    });
    thumbnailElement7.addEventListener("click", function(){
        if (thumbnailElement7.className =="small"){
            thumbnailElement7.className = "";
        } else {
            thumbnailElement7.className = "small";
        }
    });
    thumbnailElement8.addEventListener("click", function(){
        if (thumbnailElement8.className =="small"){
            thumbnailElement8.className = "";
        } else {
            thumbnailElement8.className = "small";
        }
    });

});