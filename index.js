//detecting screeen button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

}

//detecting keyboard press
document.addEventListener("keypress",function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "m":
      var music1=new Audio("sounds/Thoda_Thoda_Pyaar_Hua_Tumse.mp3");
      music1.play();
      break;

    case "y":
      var music2=new Audio("sounds/Kaise_Hua.mp3");
      music2.play();
      break;

    case "K":
      var music3=new Audio("sounds/Is_Quadar.mp3");
      music3.play();
      break;

    case "I":
      var music4=new Audio("sounds/Chal_Ghar_Chalen.mp3");
      music4.play();
      break;

    case "S":
      var music5=new Audio("sounds/Baarish_Ban_Jaana.mp3");
      music5.play();
      break;

    case "H":
      var music6=new Audio("sounds/03 Chahun_Main_Ya_Naa.mp3");
      music6.play();
      break;

    case "U":
      var music7=new Audio("sounds/I_Love_You.mp3");
      music7.play();
      break;

    default:alert(this.innerHTML);

  }
}

function buttonAnimation(currentKey){
  document.querySelector("." +currentKey).classList.add("pressed"); //will press the button

  setTimeout(function(){
    document.querySelector("." +currentKey).classList.remove("pressed");
  },100); //will release the button
}
