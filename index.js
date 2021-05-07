$("img").on("click",function(){
  animal_id=this.getAttribute("id")
  musicplay(animal_id);

});



$(".animal-button").click(function(){
var animal=this.innerHTML;

if(animal=="Tiger")
{
  $(".winner-title").html("You got it right");
}
else{
  $(".winner-title").html("You got it wrong");
}

set

}
)




function musicplay(clas){
  switch (clas) {
    case "tiger":
      var audio1=new Audio("tiger.mp3");
      audio1.play();
      break;
    case "lion":
      var audio2=new Audio("lion.mp3");
      audio2.play();
      break;
    case "elephant":
        var audio3=new Audio("ELEPHANT.WAV");
        audio3.play();
        break;
    default:

  }

}

var repeater;
function screen_width(){
  if(window.innerWidth<920)
  {
    $(".non-mobile-animal").addClass("mobile-animal");
    $(".change-needed").removeClass("mobile-animal");
  }
  else{
    $(".change-needed").addClass("mobile-animal");
      $(".non-mobile-animal").removeClass("mobile-animal");
  }
  repeater=setTimeout(screen_width,.100);
}

screen_width()
