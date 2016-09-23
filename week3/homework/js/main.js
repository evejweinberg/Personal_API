function preload() {
    // var url = 'data/data.json';
    // loadedJSON = loadJSON(url);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    //update dimensions of subdivisions of canvas
    dims = (windowWidth / (total / 2));

    //update x,y positions of subdivisions of canvas

    for (i in graphics) {

        if (i < 3) {
            graphics[i].x = i * dims;
            graphics[i].y = 0
        } else {
            graphics[i].x = (i % 3) * dims
            graphics[i].y = dims
        }
    }

}

function setup() {
    // pregancyData = loadedJSON.pregnancy;
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    background(color('#FFFFA2'));
    colors = [color('#FFFFA2'), color('#271A61'), color('#D4B8FF'), color('#FF6777'), color('#3DCCFF'), color('#BFFABC')]
    console.log(windowWidth)
    dims = (windowWidth / (total / 2))

    //create 6 instances and push to an array 'graphics'
    createAllVis();
    console.log(graphics)


}

function draw() {
    background(colors[2]);

    for (var i = 0; i < total; i++) {

        graphics[i].predata();
        // console.log(graphics[i].started)
        if (graphics[i].started == true) {

            // console.log('started ' + i)
            graphics[i].readyState();
        }
        // embryos[i].isActivated();
        // if(graphics[i].isActive==true) graphics[i].showResults();
    }
}


//this gets called once in setup
function createAllVis() {
    for (var i = 0; i < total; i++) {
        if (i < 3) {
            graphics.push(new Vis(i, i * dims, 0, false, questions[i]));
        } else {
            graphics.push(new Vis(i, [i % 3] * dims, dims, false, questions[i]));
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
    var centerX = this.x + (dims / 2)
    var centerY = this.y + (dims / 2)


    this.resize = function() {

        // if (this.num < 3) {
        //     this.x = this.num * dims;
        //     this.y = 0;
        // } else {
        //     this.x = [this.num % 3] * dims;
        //     this.y = dims;
        // }
    }

    //background
    this.predata = function() {
        textAlign(LEFT);
        noStroke();
        fill(colors[this.num]);
        //background rectangle
        //x,y is the pos of the rectangle
        rect(this.x, this.y, dims, dims);

    }

    // add this if audience is ready for the question
    this.readyState = function() {
        fill(colors[(this.num + 1) % total])
        rect(centerX, centerY, 20, 10)
        textSize(dims * .1);
        text(question, x + (dims * .06), y + (dims * .1));
        started = true
    }

    // show the information in a popup
    this.showResults = function() {

    }

}
