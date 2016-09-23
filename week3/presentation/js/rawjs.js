
var totalNum = [1,2,3,4,5,6];

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
  // document.getElementById("box6").addEventListener("click", Run6, false);
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
  $('#box0 > p').fadeOut()
  $('#box0').fadeOut()

}

function Run1(){
  $('#box1 > p').fadeOut()
    $('#box1').fadeOut()
}
