var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    onclick(this.innerHTML);
    addanimation(this.innerHTML);
   });
}


document.addEventListener("keypress", function (event){
 onclick(event.key);
 addanimation(event.key);
});


function onclick(ch){

if(ch=="w"){
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
}


    else if(ch=="a"){
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        }

       else if(ch=="s"){
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            }
          else  if(ch=="d"){
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                }

                else  if(ch=="j"){
                    var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    }

                        else  if(ch=="k"){
                            var audio=new Audio("sounds/crash.mp3");
                            audio.play();
                            }

else  if(ch=="l"){
var audio=new Audio("sounds/kick-bass.mp3");
audio.play();
}

}



function addanimation(ch){
    document.querySelector("."+ch).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ch).classList.remove("pressed");

    }, 100);
}

