var text1 = ["The web developer is in her office at the end of a productive day. Early in January."]
var text1b = ["We begin this scene that is one meter wide."]
var speaker;
var scene1 = true


function setup() {
  createCanvas(windowWidth, windowHeight);
  speaker = new p5.Speech();
}

function draw() {
  background(0);
  speaker.setVoice(3)
  speaker.setLang('en-US');
  if (scene1){

    speaker.speak(text1)
    scene1 = false
  }
  // speaker.stop()

}




//
//
// var myVoice = new p5.Speech('Google UK English Male'); // new P5.Speech object
// myVoice.onLoad = speechLoaded;
// myVoice.onStart = speechStarted;
// myVoice.onPause = speechPaused; // not working
// myVoice.onResume = speechResumed; // not working
// myVoice.onEnd = speechEnded;
// var lyric = "now is the winter of our discontent.  made glorious summer by this sun of york.  and all the clouds that loured upon our house.  in the deep bosom of the ocean buried.";
// var speakbutton; // UI
// function setup()
// {
//   createCanvas(400, 400);
//   // button:
//   speakbutton = createButton('Speak');
//     speakbutton.position(180, 200);
//     speakbutton.mousePressed(buttonClicked);
// }
// function draw()
// {
//   // why draw when you can click?
// }
// function buttonClicked()
// {
//   if(speakbutton.elt.innerHTML=='Speak') myVoice.speak(lyric);
//   else if(speakbutton.elt.innerHTML=='Pause') myVoice.pause(); // not working
//   else if(speakbutton.elt.innerHTML=='Resume') myVoice.resume(); // not working
//   else if(speakbutton.elt.innerHTML=='Stop') myVoice.stop();
// }
// function speechLoaded()
// {
//     // say cheers:
//   myVoice.speak("yeah, baby!!!");
// }
// function speechStarted()
// {
//   background(0, 255, 0);
//   speakbutton.elt.innerHTML = 'Stop';
// }
// // not working...
// function speechPaused()
// {
//   background(0, 255, 0);
//   speakbutton.elt.innerHTML = 'Resume';
// }
// // not working...
// function speechResumed()
// {
//   background(0, 255, 0);
//   speakbutton.elt.innerHTML = 'Pause';
// }
// function speechEnded()
// {
//   background(255, 0, 0);
//   speakbutton.elt.innerHTML = 'Speak';
// }
