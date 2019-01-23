﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


  function changeToWhite(clicked_id){
    if(clicked_id == "core_white_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #ffffff');
     }
    else if(clicked_id =="eyes_white_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #ffffff');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #ffffff');
  
    }
    else if(clicked_id == "tail_white_button"){
      document.getElementById('llama-tail').setAttribute('style', 'fill: #fffff');
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
      document.getElementById('llama-tail').setAttribute('style', 'fill: #347AB6');
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
      document.getElementById('llama-tail').setAttribute('style', 'fill: #57BB58');
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
      document.getElementById('llama-tail').setAttribute('style', 'fill: #EFAD4D');
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
      document.getElementById('llama-tail').setAttribute('style', 'fill: #D9544F');
    }
    else if(clicked_id == "ears_red_button") {
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
        document.getElementById('llama-tail').setAttribute('style', 'fill: #C77E5D');
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
        document.getElementById('llama-tail').setAttribute('style', 'fill: #C0C0C0');
      }

}
  
  
  
  
    
  
  