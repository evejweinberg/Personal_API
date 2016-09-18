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
    var ltRow = document.createElement('div');
  $('body').append(ltContainer)
          document.body.appendChild(ltContainer);
          ltContainer.appendChild(ltRow)
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
          ltContainer.setAttribute('class', 'container col-lg-12 col-md-12 col-sm-12 col-xs-12');


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
  var person = '<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2 centered" id="contact'+x+'">'+
      '<div class="card">'+
        '<img class="headshot" id="headshot'+x+'" src="images/blank.png">'+
          '<p>Contact'+ x+'</p>'+
        '<div class = "infobox" style="display:none" id="infobox'+x+'" </div>'+

           '</div>'+
            '</div>';
            $('#lt-row').append(person);
            document.getElementById('headshot'+x).addEventListener('mouseover', showPersonInfo);
            document.getElementById('headshot'+x).addEventListener('mouseout', hidePersonInfo);
            document.getElementById('headshot'+x).addEventListener('mousedown', openPersonInfo);

            x++
          }
}
function openPersonInfo(x){
  var me = x.path[0].id.charAt(8)
  console.log('show '+ me)
  $('#infobox'+me).css("display", "block")
}

function showPersonInfo(x){
  var me = x.path[0].id.charAt(8)
  // console.log("'#"+me+"'")
  $('#headshot'+me).css("border", "white 3px solid")


}

function hidePersonInfo(x){
  var me = x.path[0].id.charAt(8)
  // console.log("'#"+me+"'")
  $('#headshot'+me).css("border", "none")

}



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
