var loadedJSON;
var pregancyData;
var graphics = []; // will hold our embryo objects
var startingEmbryo = 1; // startingEmbryo is 1 pixel
var dims;
var colors = []

var total = 6;

function preload() {
  // var url = 'data/data.json';
  // loadedJSON = loadJSON(url);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

for (i in graphics){

  graphics[i].resized();
}
}

function setup() {
	// pregancyData = loadedJSON.pregnancy;

	createCanvas(windowWidth,windowHeight);
	background(color('#FFFFA2'));
  colors = [color('#FFFFA2'),color('#271A61'), color('#D4B8FF'),color('#FF6777'), color('#3DCCFF'), color('#BFFABC')]
// console.log(windowWidth)
  dims = (windowWidth/(total/2))

	createAllVis();
	// console.log(embryos);
}

function draw() {
	background(colors[2]);

	for(var i=0; i < total; i++){
		graphics[i].predata();
		// embryos[i].isActivated();
		// if(graphics[i].isActive==true) graphics[i].showResults();
	}
}

function createAllVis(){

	for (var i = 0; i < total; i++) {
			graphics.push(new Vis(i,false));
		}
}

// Embryo Class
function Vis(num, started){
	this.num = num;
  this.started = started



	// this.fruit = fruit;
	// this.inches = inches;
	// this.pounds = pounds;
	// this.x = x;
	// this.y = y;
	// this.isActive = false;
	// this.stomachSize = 100;

	// here we are setting the color using a self-executing anonymous function
	// this.color = (function() {
	// 	if(week<24) return redColor; // by default red
	// 	if(week>=24&&week<26) return yellowColor;
	// 	if(week>=26) return greenColor;
	// })();

	// here we are setting the size using a self-executing anonymous function
	// this.size = (function(){
	// 	if(!inches) return startingEmbryo;
	// 	return map(inches, 0.13, 21, startingEmbryo, 100);
	// })();

  this.resized = function(){
    console.log('new dims' + dims)
    dims = (windowWidth/(total/2))

  }

	// this function draws the embryo;
	this.predata = function(){
    textAlign(CENTER);
		noStroke();
		fill(colors[num%colors.length]);
    if (num<3){

      rect(num*dims, 0, dims, dims)
      fill(colors[(num+1)%total])
      // ellipse()
      textSize(dims*.7);
      text(num+1,dims/2+num*dims,dims*.7);
    } else {
      rect((num-3)*dims, dims, dims, dims)
      fill(colors[(num+1)%total])
      textSize(dims*.7);
      text(num+1, dims/2+(num-3)*dims,dims+dims*.7);
    }



	}

	// check if mouse is currently over
	this.isActivated = function(){
		//reset to false
		this.isActive = false;
		if(mouseIsPressed && mouseX>=this.x-this.stomachSize && mouseX<=this.x+this.stomachSize && mouseY>=this.y-this.stomachSize && mouseY<=this.y+this.stomachSize){
			// return this.isActive = true;
		}
		// return this.isActive = false;
	}

	// show the information in a popup
	this.showResults = function(){

	}

}
