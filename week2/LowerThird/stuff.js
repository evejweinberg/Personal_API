"use strict"
//1st argument, what to render in the form of a  .jsx a primite react compoment
//2nd argument - where to render it

// run on page load
window.addEventListener("load", init);

// run on page resize
// window.addEventListener("resize", introduceMyself);

// run on page unload/close
// window.addEventListener("unload", introduceMyself);


function init(){
  console.log('loaded')
  var appOpen = true;
  var ltContainer = document.createElement('div');
  $('body').append(ltContainer)
          document.body.appendChild(ltContainer);
          ltContainer.setAttribute('id', 'lt-container');
          $('#lt-container').css({
            "background-color": "purple",
            "border-radius": "10px",
            "height": "200px",
            "width": "100%",
            "position": "fixed",
            "bottom": "-100px"
          });
          ltContainer.setAttribute('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12');


          var ltContainerTab = document.createElement('div');
                  ltContainer.appendChild(ltContainerTab);
                  ltContainerTab.setAttribute('id', 'lt-tab')
                  $('#lt-tab').css({
                      "border-radius": "10px",
                      "background-color": "purple",
                      "bottom": "30px",
                      "position": "relative",
                      "height": "220px",
                      "width": "200px",
                      "float": "right",
                      "right": "-140px"

                    });

                var close = document.createElement('p');
                close.setAttribute('id', 'close-button');
close.style.color="white";
close.style.padding ="10px";
close.innerHTML = "CLOSE"
                ltContainerTab.appendChild(close)
                close.onclick = toggleLowerThird



                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".animateRight {" +
              "  -webkit-animation: goRightLeft 1s;" +
                "    -webkit-animation-fill-mode: forwards;"+
            "    }"+

                ".animateLeft {"+
                  "  -webkit-animation: goLeftRight 1s;"+
              "      -webkit-animation-fill-mode: backwards;"+
            "    }"+

              "  @-webkit-keyframes goRightLeft {"+
                  "  0% {"+
                      "  margin-bottom: 0px;"+
                  "  }"+
                "    100% {"+
                      "  margin-bottom: -90px;"+
                "    }"+
            "    }"+

                "@-webkit-keyframes goLeftRight {"+
                  "  0% {"+
                      "  margin-bottom: -90px;"+
                  "  }"+
                    "100% {"+
                      "  margin-bottom: 0px;"+
                  "  }"+
              "  }";
                document.body.appendChild(css);


addBlanks()
function addBlanks(){
  var x=0
  while (x < 7){
  var person = '<div class="col-lg-2 col-sm-2 col-md-2 col-xs-12 centered" id="contact'+x+'">'+
      '<div class="card">'+
        "<img class='headshot' src='images/blank.png'>"+
          '<p>Contact'+ x+'</p>'+

           '</div>'+
            '</div>';
            $('#lt-container').append(person);
            x++
          }
}





// $.getJSON("data/contacts.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
//     return myFunction(json)
// });
//
//
//                 function myFunction(arr) {
//                   // console.log(arr.contact[2].headshot)
//
//                     var out = "";
//                     for(var i = 0; i < Object.keys(arr).length; i++) {
//                       // console.log('making')
//                         var person = '<div class="col-lg-2 col-sm-4 col-md-2 col-xs-12 centered">'+
// 		                        '<div class="card">'+
// 		                          '<img src="images/'+ arr.contact[i].headshot+'>'+
// 		                            '<h1>'+Object.keys(arr)[i].location+'</h1>'+
//
// 	                               '</div>'+
// 	                                '</div>';
//                                   ltContainerTab.appendChild(person);
//
//                     }
//
//                 }





    function toggleLowerThird(){

   function animateBox(className){
    var box = document.getElementById('lt-container');
    box.className = "box " + className;

    };
      if (appOpen){
        animateBox('animateRight')
        close.innerHTML = "OPEN"
      //animate the main div to the right

      }
      if (!appOpen){
        animateBox('animateLeft');
        close.innerHTML = "CLOSE"
          //animate the main div to the left
      }
  appOpen = !appOpen;

    }
}
//init ends

// var ReactDemo = React.createClass({
//   render: function() {
//
//     //you can add a bunch of stuff here
//     //like a fucntion with it's own return line
//     var silly = 'Oh hi sillyness'
//
//
//     // return (
//     //   <div id="fun">
//     //     <CommentBox
//     //       //this is a prop
//     //       //define some props
//     //       comment = "Hello Eve's World!"
//     //       //numeric values in curlies
//     //       number = {123}
//     //       //variables in curlies
//     //       argVar = {silly}
//     //       //boolean values in curlies
//     //       testing = {true}
//     //
//     //     />
//     //     <EventGenerator
//     //     //this is a prop
//     //       text = "Click This!"
//     //       propPoop = "Hi"
//     //     />
//     //   </div>
//     // );
//   }
// });

//--class 1----------//---------------//

// var CommentBox = React.createClass({
//   render: function() {
//     // return (
//     //   //now refer to the props we have
//     //   //display the value of the prop
//     //   <div>
//     //   //curlies denote that it's a reference
//     //   <div>{this.props.comment}</div>
//     //   <div>{this.props.argVar}</div>
//     //   <div>{this.props.number}</div>
//     //   </div>
//     // );
//   }
// });

//--class 2----------//---------------//

// var EventGenerator = React.createClass({
//   render: function() {
//     // return (
//     //   <div>
//     //   <button>
//     //    {this.props.propPoop}
//     //   </button>
//     //   <button>
//     //    {this.props.text}
//     //   </button>
//     //   </div>
//     // );
//   }
// });

// ReactDOM.render(
//   <ReactDemo/>,
//   document.getElementById('react-content')
// );


var access_token = '1449686549.f191ea3.b71c686f322b45cab2ff9907286850fe'
var client_id = 'f191ea3ae51940d4b68540095656af83'
var request_id = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token
var request_likes = 'https://api.instagram.com/v1/users/self/media/liked?access_token=' + access_token
var captionArray = [],
    likesAmt = [],
    imgURLs = [];


//
// $.ajax({
//     type: "GET",
//     dataType: "jsonp",
//     cache: false,
//     url: request_id,
//     success: function(response) {
//
//         displayInfo(captionArray, likesAmt, imgURLs);
//     }
// });






// function displayInfo(captions, likes, imgs) {
//     for (var i in captions) {
//         // console.log(likes[i])
//         var container = document.createElement('div');
//         $('#my-content').append(container);
//
//         container.setAttribute('id', 'container-' + i);
//         $('#container-' + i).addClass('container');
//
//         $('.container').draggable();
//
//         var img = document.createElement('img');
//         img.src = imgURLs[i]
//         $('#container-' + i).append(img);
//         var num = document.createElement('p');
//         num.setAttribute('class', 'nums');
//         $('#container-' + i).append(num);
//         num.innerHTML = 'likes: ' + likes[i]
//         var rnd = Math.floor((Math.random() * 3) + -3);
//         var oElement = document.getElementById('container-' + i);
//         oElement.style.webkitTransform = 'rotate(' + rnd + 'deg)';
//         var captionText = document.createElement('p');
//         captionText.setAttribute('class', 'captions');
//         $('#container-' + i).append(captionText);
//         captionText.innerHTML = captions[i]
//
//     }
// }
