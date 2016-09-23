var totalNum = [1,2,3,4,5,6];
var colors = ['#FFFFA2','#271A61', "#D4B8FF","#FF6777", "#3DCCFF", "#BFFABC"]
// init()
function init(){
  for (i in totalNum){
    console.log('"box'+i+'"')
    // var el =
    $("box0").css('background-color', colors[i]);
  }

}



function sayHi(){
     alert('hi!');
 }

 function introduceMyself(){
   alert('dont fucking touch the page');
 }

 function unloaded(){
   alert('bywwwweee')
 }

//all window events: http://www.w3schools.com/tags/ref_eventattributes.asp

 document.addEventListener('load',init);

 // run on page resize
window.addEventListener("resize", introduceMyself);

// run on page unload/close
document.addEventListener("unload", unloaded);


function giveValue(event){
        console.log(event); // gives us access to the event that triggered it
        var val = document.getElementById('theInput').value;
        // or var val = event.target.value;
      alert('youmightnotneedjquery.com' + val);
    }

    document.getElementById('theInput').addEventListener('change', giveValue);




//================================//

var counter = 0;
   function hootyHoo(event){
       console.log(event); // gives us access to the event that triggered it
       counter++;
     alert('hooty hoo ' + counter);
     //makes the windows default actions not happen
     event.preventDefault(); // stops the event from propagating the way it normally would; for example, there won't be a '#' in the URL
   }
   document.getElementById('theLink').addEventListener('click', hootyHoo);




//===================================?????//
//=========AJAX====================//

// GET REQUEST
$.ajax({
    url: 'http://theUrlThatYouAreRequestingFrom.com',
    type: 'GET',
    failure: function(err){
        // what to do on failure
        // generally, handle the error
    },
    success: function(response) {
        // what to do on success
      console.log(response);
    }
});


var dataToSend = {
    name: "Billy",
    animalType: "Dog",
    currentState: "Sleeping"
}



// POST REQUEST
$.ajax({
    url: 'http://theUrlThatYouArePostingTo.com',
    type: 'POST',
    data: dataToSend, // the data object we're posting
    failure: function(err){
        // what to do on failure
        // generally, handle the error
    },
    success: function(response) {
        // what to do on success
      console.log(response);
    }
});
