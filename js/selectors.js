'use-strict';
$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

// declare your functions here...
function h1Selector(){
  return $('h1');
}

function liInOlSelector(){
  return $('ol li');
}

function linkSelector(){
  return $('.box5 a');
}

function imageSelector(){
  return $('img[alt="cat sleeping"]')
}

function checkboxInputSelector(){
  var checkboxes = $(':checkbox');
  for(var i = 0; i<checkboxes.length; i++){
    $(checkboxes[i]).wrap("<span class='pinky'></span>");
  }
}
