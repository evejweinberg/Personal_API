

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
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.position(0,0);
	background(color('#FFFFA2'));
  colors = [color('#FFFFA2'),color('#271A61'), color('#D4B8FF'),color('#FF6777'), color('#3DCCFF'), color('#BFFABC')]
  console.log(windowWidth)
  dims = (windowWidth/(total/2))

	createAllVis();
  console.log(graphics)

}

function draw() {
	background(colors[2]);

	for(var i=0; i < total; i++){

		graphics[i].predata();
    console.log(graphics[i].started)
    if (graphics[i].started==true){

      console.log('started ' + i)
      graphics[i].readyState();
    }
		// embryos[i].isActivated();
		// if(graphics[i].isActive==true) graphics[i].showResults();
	}
}


//this gets called once in setup
function createAllVis(){
  for (var i = 0; i < total; i++) {
    if (i<3){
      graphics.push(new Vis(i,i*dims, 0, false,questions[i]));
      } else {
        graphics.push(new Vis(i,[i%3]*dims, dims, false,questions[i]));
      }
    }
}

// Embryo Class
function Vis(num, x,y,started, question){
	this.num = num;
  this.started = started
  this.question = question
	this.x = x;
	this.y = y;
  var centerX = x+(dims/2)
  var centerY = y+(dims/2)


  this.resized = function(){
    dims = (windowWidth/(total/2))
    //change x and y

  }

	//background
	this.predata = function(){
    textAlign(LEFT);
		noStroke();
		fill(colors[num]);
    rect(x, y, dims, dims)

	}

	// add this if audience is ready for the question
	this.readyState = function(){
    fill(colors[(num+1)%total])
    rect(centerX,centerY,20,10)
    textSize(dims*.1);
    text(question,x+(dims*.06),y+(dims*.1));
    started = true
	}

	// show the information in a popup
	this.showResults = function(){
		// fill(255,255,255,200);
		// ellipse(this.x,this.y,this.stomachSize,this.stomachSize);
		// textAlign(CENTER);
		// textSize(24);
		// fill(primaryColor);
		// text(this.week,this.x,this.y);
		// textSize(14);
		// text(this.fruit,this.x,this.y+18);
		// textSize(10);
		// if(this.inches) text(this.inches + ' inches',this.x,this.y+30);
	}

}
