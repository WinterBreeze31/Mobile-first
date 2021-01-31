var isBarVisable = "false"
var menu = document.getElementById("menuBar")
var slider = document.getElementById("slider")
var sliderCount = 1
var sliderImg = ["blue", "slide1.jpg", "slide2.jpg", "slide3.jpg"]
var sliderButtons = ["0", document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")]

function menuBar(){
  if (isBarVisable == "false"){
    menu.style.display = "block";
    isBarVisable = "true"
  }
  else {
    menu.style.display = "none";
    isBarVisable = "false"
  }

}

function notFinished() {alert('er is hier nog niks')}

function sliderMove() {
  if (sliderCount == 1){
    sliderShow(2)
    sliderCount = 2
  }
  else if (sliderCount == 2){
    sliderShow(3)
    sliderCount = 3
  }
  else {
    sliderShow(1)
    sliderCount = 1
  }
}

function sliderShow(num){
  sliderCount = num;
  slider.style.backgroundImage= "url("+sliderImg[num]+")";
  slider.style.backgroundRepeat = "no-repeat";
  slider.style.backgroundSize = "cover";
  slider.style.backgroundPosition = "center";
  sliderButtons[1].style.background = "rgba(134, 121, 121, 0.8)"
  sliderButtons[2].style.background = "rgba(134, 121, 121, 0.8)"
  sliderButtons[3].style.background = "rgba(134, 121, 121, 0.8)"
  sliderButtons[num].style.background = "white"
}


setInterval(sliderMove, 10000);