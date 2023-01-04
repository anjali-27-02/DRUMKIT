
for(var i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var innerTextHTML=this.innerHTML;
    makeSound(innerTextHTML);
    buttomAnimation(innerTextHTML);

  });

}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttomAnimation(event.key);
});

function makeSound(key){
  switch(key){
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    default:
    console.log(innerTextHTML);


  }
}
function buttomAnimation(buttonkey){
  var activeButton=document.querySelector("."+ buttonkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
