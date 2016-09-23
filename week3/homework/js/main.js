function preload() {
    // var url = 'data/data.json';
    // loadedJSON = loadJSON(url);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    //update dimensions of subdivisions of canvas
    dimsX = (windowWidth / (total / 2));
    dimsY = (windowHeight / 2);

    //update x,y positions of subdivisions of canvas

    for (i in graphics) {
        graphics[i].resize();
    }

}

function setup() {
    var url = 'https://docs.google.com/spreadsheets/d/1hFS6zEkE_nrIVhsf4ESZi8UzQ_2cD4gNZGski1YGyPg/pubhtml';
    // Tabletop expects some settings
    var settings = {
        key: url, // The url of the published google sheet
        callback: gotData, // A callback for when the data comes in
        simpleSheet: true // This makes things simpler for just a single worksheet of rows
    }

    // Make the request
    Tabletop.init(settings);


    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    background(color('#FFFFA2'));
    colors = [color('#FFFFA2'), color('#271A61'), color('#D4B8FF'), color('#FF6777'), color('#3DCCFF'), color('#BFFABC')]
    dimsX = (windowWidth / (total / 2))
    dimsY = (windowHeight / 2)

    //create 6 instances and push to an array 'graphics'
    createAllVis();


}

function gotData(data) {
    // console.log(data)
}

function draw() {
    background(colors[2]);

    for (var i = 0; i < total; i++) {

        graphics[i].predata();
        // console.log(graphics[i].started)
        if (graphics[i].started == true) {

            graphics[i].readyState();
        }

    }
}


//this gets called once in setup
function createAllVis() {
    for (var i = 0; i < total; i++) {
        if (i < 3) {
            graphics.push(new Vis(i, i * dimsX, 0, false, questions[i]));
        } else {
            graphics.push(new Vis(i, [i % 3] * dimsX, dimsY, false, questions[i]));
        }
    }
}

// Vis Class
function Vis(num, x, y, started, question) {
    //instantiate
    this.num = num;
    this.started = started
    this.question = question
    this.x = x;
    this.y = y;
    var centerX = this.x + (dimsX / 2)
    var centerY = this.y + (dimsY / 2)
    this.centerX = centerX
    this.centerY = centerY


    this.resize = function() {
        this.centerX = this.x + (dimsX / 2)
        this.centerY = this.y + (dimsY / 2)

        if (this.num < 3) {
            this.x = this.num * dimsX;
            this.y = 0;
        } else {
            this.x = [this.num % 3] * dimsX;
            this.y = dimsY;
        }
    }

    //background
    this.predata = function() {
        textAlign(LEFT);
        noStroke();
        fill(colors[this.num]);
        //background rectangle
        //x,y is the pos of the rectangle
        rect(this.x, this.y, dimsX, dimsY);

    }

    this.getLiveData = function() {

        }
        // add this if audience is ready for the question
    this.readyState = function() {
        if (num == 0) {

            for (var i = 0; i < 16; i++) {
                // console.log(q1Answers[i])
                textSize(15)
                var col = colors[i % colors.length]
                if (i < 8) {
                    fill(col)
                    rect(this.x, this.y + (dimsY / 8 * i), dimsX / 2, dimsY / 8)
                    fill(0)
                    text(q1Answers[i], this.x + 10, this.y + (dimsY / 8 * i) + (dimsY / 16))
                } else {

                    fill(col)
                    rect(this.x + dimsX / 2, this.y + (dimsY / 8 * [i % 8]), dimsX / 2, dimsY / 8)
                    fill(0)
                    text(q1Answers[i], this.x + dimsX / 2 + 10, this.y + (dimsY / 8 * [i % 8]) + +(dimsY / 16))

                }



            }
        } else if (num == 1) {


            push();
            translate(this.centerX, this.centerY);
            // rotate(frameCount / 50.0);
            q1Polygon(0, 0, 80, 60, 'yes');
            q1Polygon(0, 0, 80, 60, 'no');
            pop();
            textSize(40)
            textAlign(CENTER)
            fill(colors[0])
            text('YES', this.x + (dimsX * .20), this.y + (dimsY * .15))
            text('NO', this.x + (dimsX * .80), this.y + (dimsY * .85))





    } else if (num == 2) {
      var D3height = map(q2D3, 0, 16, 20, dimsY * .9)
      var D3rad = map(q2D3, 0, 16, 0, 120)
      var CJSheight = map(q2CJS, 0, 16, 20, dimsY * .9)
      var CJSrad = map(q2CJS, 0, 16, 0, 120)
        fill(colors[1])
        stroke(colors[1])
        strokeWeight(12.0);
        strokeCap(ROUND);

        triangle(this.centerX, this.centerY + (dimsY * .08), this.centerX + (dimsX * .24), this.centerY + (dimsY * .35), this.centerX - (dimsX * .24), this.centerY + (dimsY * .35));
        stroke(colors[5])
        line(this.x + (dimsX * .15), this.y + D3height, this.x + (dimsX * .85), CJSheight);
        fill(colors[3])
        stroke(colors[3])
        ellipse(this.x + (dimsX * .20), this.y + D3height-(D3rad*.6), D3rad, D3rad)
        ellipse(this.x + (dimsX * .80), this.y + CJSheight-(CJSrad*.6), CJSrad, CJSrad)
        noStroke()
        textSize(40)
        textAlign(CENTER)
        fill(colors[0])
        text('D3', this.x + (dimsX * .20), this.y + (dimsY * .15))
        text('CJS', this.x + (dimsX * .80), this.y + (dimsY * .15))

    } else if (num == 3){
      fill(colors[5])
textAlign(CENTER)
textSize(40)
      text("$(el).hide();", this.centerX, this.centerY)
    }

    else
    if (num == 4) {

        fill(colors[0])
        noStroke()
        ellipse(this.centerX, this.centerY, dimsX * .6, dimsX * .6)
        for (i in q4Answers) {
            q4Radius[i] = map(q4Answers[i], 1, 10, dimsX * .31, 0)
            fill(colors[3])
            var x = this.centerX + q4Radius[i] * Math.cos(angle);
            var y = this.centerY + q4Radius[i] * Math.sin(angle);
            angle += (2 * Math.PI) / 16;
            ellipse(x, y, 16, 16)
        }
    }
    fill(colors[(this.num + 1) % total])
        // rect(centerX, centerY, 20, 10)
    textSize(dimsX * .1);
    // text(question, this.x + (dimsX * .06), this.y + (dimsY * .1));
    started = true
}

// show the information in a popup
this.showResults = function() {

}

}




///////////////////

function q1Polygon(x, y, radius, npoints, answer) {

var angle = TWO_PI / npoints;
var amount = TWO_PI*(q2Answers[0]/16)
  if (answer == 'yes'){
    fill(colors[2])

    var a = 0
    var b = TWO_PI*(q2Answers[0]/16)
    beginShape();
    for (a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);


    }
    endShape(CLOSE);
  } else if (answer == 'no'){
      fill(colors[4])
        beginShape();

        for (b = amount; b < TWO_PI; b += angle) {
            var sx = x + cos(b) * radius;
            var sy = y + sin(b) * radius;
            vertex(sx, sy);

        }
        endShape(CLOSE);
  }


}
