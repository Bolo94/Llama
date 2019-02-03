// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
<<<<<<< HEAD


  function changeToWhite(clicked_id){
    if(clicked_id == "core_white_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #ffffff');
     }
    else if(clicked_id =="eyes_white_button"){
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #ffffff');
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #ffffff');
    }
    else if(clicked_id == "tail_white_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #fffff');
    }
    else if(clicked_id == "ears_white_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #ffffff');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #ffffff');
    }
    
  }

  function changeToYellow(clicked_id){
    if(clicked_id == "core_yellow_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #FFFF0D');
     }
    else if(clicked_id =="eyes_yellow_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #FFFF0D');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #FFFF0D');
    }
    else if(clicked_id == "tail_yellow_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #FFFF0D');
    }
    else if(clicked_id == "ears_yellow_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #FFFF0D');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #FFFF0D');
    } 
  }
  
  function changeToBlue(clicked_id)
  {
    if(clicked_id == "core_blue_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #347AB6');
     }
    else if(clicked_id =="eyes_blue_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #347AB6');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #347AB6');
    }
    else if(clicked_id == "tail_blue_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #347AB6');
    }
    else if(clicked_id == "ears_blue_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #347AB6');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #347AB6');
    }
  }

  function changeToFuchsia(clicked_id){
    if(clicked_id == "core_fuchsia_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #ff0030');
     }
    else if(clicked_id =="eyes_fuchsia_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #ff0030');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #ff0030');
    }
    else if(clicked_id == "tail_fuchsia_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #ff0030');
    } 
    else if(clicked_id == "ears_fuchsia_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #ff0030');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #ff0030');
    }
  }
  
  function changeToGreen(clicked_id){
    if(clicked_id == "core_green_button"){ 
      document.getElementById('llama-core').setAttribute('style', 'fill: #57BB58');
     }
    else if(clicked_id =="eyes_green_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #57BB58');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #57BB58');
    }
    else if(clicked_id == "tail_green_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #57BB58');
    }
    else if(clicked_id == "ears_green_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #57BB58');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #57BB58');
    }
  }
  
  function changeToLBlue(clicked_id){
    if(clicked_id == "core_light_blue_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #5BC0DE');
     }
    else if(clicked_id == "eyes_light_blue_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #5BC0DE');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #5BC0DE');
    }
    else if(clicked_id == "tail_blue_button"){
      document.getElementById('llama-tail').setAttribute('style', 'fill: #347AB6');
  }

}
  
  function changeToOrange(clicked_id){
    if(clicked_id == "core_orange_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #EFAD4D');
     }
    else if(clicked_id =="eyes_orange_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #EFAD4D');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #EFAD4D');
    }
    else if(clicked_id == "tail_orange_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #EFAD4D');
    }
    else if(clicked_id == "ears_orange_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #EFAD4D');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #EFAD4D');
    }
  
  }
  
  function changeToRed(clicked_id){
    if(clicked_id == "core_red_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #D9544F');
    }
    else if(clicked_id =="eyes_red_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #D9544F');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #D9544F');
    }
    else if(clicked_id == "tail_red_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #D9544F');
    }
    else if(clicked_id == "ears_red_button") {
     document.getElementById('llama-left-ear').setAttribute('style', 'fill: #D9544F');
     document.getElementById('llama-right-ear').setAttribute('style', 'fill: #D9544F');
    }
    else if(clicked_id == "ears_red_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #D9544F');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #D9544F');
    }
}

function changeToLBrown(clicked_id){
    if(clicked_id == "core_lbrown_button"){
        document.getElementById('llama-core').setAttribute('style', 'fill: #C77E5D');
    }
    else if(clicked_id =="eyes_lbrown_button"){
        document.getElementById('llama-right-eye').setAttribute('style', 'fill: #C77E5D');
        document.getElementById('llama-left-eye').setAttribute('style', 'fill: #C77E5D');
    }
    else if(clicked_id == "tail_lbrown_button"){
        document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #C77E5D');
    }
    else if(clicked_id == "ears_lbrown_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #C77E5D');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #C77E5D');
    }

}

function changeToGray(clicked_id){
    if(clicked_id == "core_gray_button"){
        document.getElementById('llama-core').setAttribute('style', 'fill: #C0C0C0');        

    }
    else if(clicked_id =="eyes_gray_button"){
        document.getElementById('llama-right-eye').setAttribute('style', 'fill: #C0C0C0');
        document.getElementById('llama-left-eye').setAttribute('style', 'fill: #C0C0C0');
    }
    else if(clicked_id == "tail_gray_button"){
        document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #C0C0C0');
    }
    else if(clicked_id == "ears_gray_button"){
      document.getElementById('llama-left-ear').setAttribute('style', 'fill: #C0C0C0');
      document.getElementById('llama-right-ear').setAttribute('style', 'fill: #C0C0C0');
    }
}

document.getElementById("text").onclick = function () {
  var div = document.createElement('div');
     div.style.position = "absolute";
     div.style.left = "135px";
     div.style.top = "100px";
     div.style.height = "100px";
     div.style.width = "400px";
      div.id = "test"

     document.getElementsByTagName('body')[0].appendChild(div);

}

function addSantaHat(){

    //Create new div element
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.right = "41px";
    div.style.top = "-50px";
    div.style.height = "100px";
    div.style.width = "400px";
    div.id = "test"

    //Insert new div before llama drawing
  var siblingElem = document.getElementById("llamaDrawing");
  var parentReference = siblingElem.parentNode;
  parentReference.insertBefore(div, siblingElem);


  //Add image to div
  var element = document.createElement('object');
  element.style.position = "absolute";
  element.id = "test"
  element.setAttribute("data", "/images/smallHat.svg"); 
  element.setAttribute("type", "image/svg+xml"); 
  element.setAttribute("class", "hatStyling");
  document.getElementById("test").appendChild(element);  


}
  
  
  
  
    
  
  
=======
// Show/hide password onClick of button using Javascript only

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;


document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
>>>>>>> origin/dev
