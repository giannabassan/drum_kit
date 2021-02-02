//detecting button press mouse

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

  });

}

//detecting keyboard press letter
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key) {

  switch (key) {
    case "w":
      var hiHat = new Audio("sounds/hi-hat.mp3");
      hiHat.play();
      break;

    case "r":
      var crash1 = new Audio("sounds/crash.mp3");
      crash1.play();
      break;

    case "t":
      var crash2 = new Audio("sounds/crash2.mp3");
      crash2.play();
      break;

    case "y":
      var ride = new Audio("sounds/ride.mp3");
      ride.play();
      break;

    case "f":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "g":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "h":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;


    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "b":
      var bassdrumL = new Audio("sounds/bass-drum-l.mp3");
      bassdrumL.play();
      break;

    case "n":
      var bassdrumR = new Audio("sounds/bass-drum-r.mp3");
      bassdrumR.play();
      break;


    default:
      console.log(buttonInnerHtml);

  }

}

function buttonAnimation(key) {

  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function(){

    (document.querySelector("." + key).classList.remove("pressed"));}, 100);
}
