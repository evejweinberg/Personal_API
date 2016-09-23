// "use strict"
//on load, call init()
window.addEventListener("load", init);

// console.log('js page was found fuck you delta')


function init(){
  console.log('init was called')
  // the app is open
// var contacts;
  var appOpen = true;
  //create main container and add it to the body
  var ltContainer = document.createElement('div');
  var ltRow = document.createElement('div');
//which of these two work?
          $('body').append(ltContainer)
          document.body.appendChild(ltContainer);
          ltContainer.appendChild(ltRow)
          ltContainer.setAttribute('class', 'container col-lg-12 col-md-12 col-sm-12 col-xs-12');
          ltRow.setAttribute('class', 'row');
          ltRow.setAttribute('id', 'lt-row');
          ltContainer.setAttribute('id', 'lt-container');
          $('#lt-container').css({
            "background-color": "purple",
            "border-radius": "10px",
            "height": "200px",
            "width": "100%",
            "position": "fixed",
            "bottom": "-100px"
          });


    var ltContainerTab = document.createElement('div');
          ltContainer.appendChild(ltContainerTab);
          ltContainerTab.setAttribute('id', 'lt-tab')
          $('#lt-tab').css({
              "border-radius": "10px",
              "background-color": "purple",
              "bottom": "30px",
              "position": "absolute",
              "height": "200px",
              "z-index": "-10",
              "width": "200px",
              "float": "right",
              "right": "-140px"
            });
//make a close button
                var close = document.createElement('p');
                  close.setAttribute('id', 'close-button');
                  close.style.color="white";
                  close.style.padding ="10px";
                  close.innerHTML = "CLOSE"
                  ltContainerTab.appendChild(close)
                  close.onclick = toggleLowerThird


//create a whole freaking style sheet!
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
              "  }"+

              ".animateDown {" +
            "  -webkit-animation: goUp 1s;" +
              "    -webkit-animation-fill-mode: forwards;"+
          "    }"+

              ".animateUp {"+
                "  -webkit-animation: goDown 1s;"+
            "      -webkit-animation-fill-mode: backwards;"+
          "    }"+

            "  @-webkit-keyframes goUp {"+
                "  0% {"+
                    "  margin-bottom: 0px;"+
                "  }"+
              "    100% {"+
                    "  margin-bottom: -90px;"+
              "    }"+
          "    }"+

              "@-webkit-keyframes goDown {"+
                "  0% {"+
                    "  margin-bottom: -90px;"+
                "  }"+
                  "100% {"+
                    "  margin-bottom: 0px;"+
                "  }"+
            "  }"



              ;
              //add stylesheet to body
                document.body.appendChild(css);

  //populate friend info with latest info in the json
                addBlanks()




function animateUpDown(){
  console.log(this)
  var wasitclicked = "clicked"
if (wasitclicked == true) {
  $('infobox3').animate({
      top: '-170px'
  }, 1000);
  wasitclicked = false;
} else {
  $("infobox3").animate({
      top: '-120px'
  }, 1000);
  wasitclicked = true;
}
} //updown ends

function togglePersonInfo(x){
  // console.log(this)
  var me = x.path[0].id.charAt(8)
  // console.log("'infobox"+me+"'")
  var infobox = document.getElementById('infobox0')
// if (appOpen){

  // $(".infobox").hide()
// } else {
$("#infobox"+me).fadeToggle()
// $(".infobox").show()

// }
}

function hoverOverHeadshot(x){
  var me = x.path[0].id.charAt(8)
  $('#headshot'+me).css("border", "white 3px solid")
}

function notHoveringOverHeadshot(x){
  var me = x.path[0].id.charAt(8)
  $('#headshot'+me).css("border", "none")

}



    function toggleLowerThird(){

       function animateBox(className){
        var box = document.getElementById('lt-container');
        box.className = "box " + className;

        };
          if (!appOpen){
            animateBox('animateUp')
            close.innerHTML = "CLOSE"
            // $(".infobox").show()


          }
          if (appOpen){
            animateBox('animateDown');
            close.innerHTML = "OPEN"
            $(".infobox").hide()


          }
      appOpen = !appOpen;

    }





function addBlanks(){



  //build out the 6 contacts and populate their fields from the json data
  var x=0
  while (x < window.CONTACTS.contacts.length){
  var person = '<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2 centered" id="contact'+x+'">'+
      '<div class="card">'+
        '<img class="headshot" id="headshot'+x+'" src="images/'+window.CONTACTS.contacts[x].headshot+'">'+
          '<p>'+x+'</p>'+
        '<div class = "infobox animateUp" style="display:none" id="infobox'+x+'" <p id="name'+x+'" class="names">'+window.CONTACTS.contacts[x].name+'</p><br><p id="location'+x+'" class="locations">'+window.CONTACTS.contacts[x].location+'</p><br></div>'+

           '</div>'+
            '</div>';
            $('#lt-row').append(person);
            document.getElementById('headshot'+x).addEventListener('mouseover', hoverOverHeadshot);
            document.getElementById('headshot'+x).addEventListener('mouseout', notHoveringOverHeadshot);
            document.getElementById('headshot'+x).addEventListener('mousedown', togglePersonInfo);
            document.getElementById('headshot'+x).addEventListener('mousedown', animateUpDown);

            // document.getElementById('name'+x).addEventListener('change', changeName);
            // document.getElementById('location'+x).addEventListener('change', changeLocation);
            x++
          }
} //adding cards is over




}//init ends
