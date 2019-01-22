// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function callMagenta(){
    document.getElementById('llama-core').setAttribute('style', 'fill: #ff00ff');
   
  }
  
  function changeToWhite(clicked_id){
    document.getElementById('llama-core').setAttribute('style', 'fill: #ffffff');
    
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
  }
  
  function changeToGreen(clicked_id){
    if(clicked_id == "core_blue_button"){
      document.getElementById('llama-core').setAttribute('style', 'fill: #57BB58');
     }
    else if(clicked_id =="eyes_blue_button"){
      document.getElementById('llama-right-eye').setAttribute('style', 'fill: #57BB58');
      document.getElementById('llama-left-eye').setAttribute('style', 'fill: #57BB58');
    }
    else if(clicked_id == "tail_blue_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #57BB58');
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
    else if(clicked_id == "tail_light_blue_button"){
      document.getElementById('llama-tail-outer-shadow').setAttribute('style', 'fill: #5BC0DE');
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
  
  }
  
  
  
  
    
  
  