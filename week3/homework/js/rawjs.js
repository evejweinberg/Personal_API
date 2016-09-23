
var totalNum = [1,2,3,4,5,6];
var q1Answers=['internet', 'nyc.gov', 'the place where', 'not sure yet still deciding', "googles traffic data", 'suuuuuuuuuuup long words', 'goverment free data', 'five thiry eight','internet', 'nyc.gov', 'the place where','internet', 'nyc.gov', 'the place where','internet', 'nyc.gov', 'the place where']
var q2Answers=[8,8]
var q3Answers=[]
var q4Answers=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var q4Radius= [160,160,160,160,160,160,160,160,160,160,160,160,160,160,160,160]
var q5Answers=[]
var q6Answers=[]
var q2D3 = 6
var q2CJS = 8
var angle = 0


var graphics = []; // will hold our embryo objects
var dims;
var colors = []
var questions = ['Where did you get \nyour data for the \nmidterm from?', 'Where?', 'Did you use \n javascript before ITP?','Would you rather learn D3 or ChartJS?', 'Favorite Event Handler?', 'How tired are you?']

var total = 6;

window.addEventListener("load", init);
window.addEventListener("resize", checkSizes);


for (i in totalNum){

  var el = document.getElementById("box0");
  el.addEventListener("click", Run0, false);
  document.getElementById("box1").addEventListener("click", Run1, false);
  document.getElementById("box2").addEventListener("click", Run2, false);
  document.getElementById("box3").addEventListener("click", Run3, false);
  document.getElementById("box4").addEventListener("click", Run4, false);
  document.getElementById("box5").addEventListener("click", Run5, false);
}

function init(){
}

function checkSizes(){
  console.log('checking')
  var t = $(window).height()/2
  $(".box").height(t);
  $(".box > p").height(t*.7)


}

function Run0(){
  $('#box0 > p').fadeOut();
  $('#box0').css("background-color", "transparent")
  graphics[0].started=true
}

function Run1(){
  $('#box1 > p').fadeOut()
  $('#box1').css("background-color", "transparent")
  graphics[1].started=true

}

function Run2(){
  $('#box2 > p').fadeOut()
  $('#box2').css("background-color", "transparent")
  graphics[2].started=true

}

function Run3(){
  $('#box3 > p').fadeOut()
  $('#box3').css("background-color", "transparent")
    graphics[3].started=true

}

function Run4(){
  $('#box4 > p').fadeOut()
  $('#box4').css("background-color", "transparent")
    graphics[4].started=true


}

function Run5(){
  $('#box5 > p').fadeOut()
  $('#box5').css("background-color", "transparent")
    graphics[5].started=true


}
