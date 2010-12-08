/*
Copyright (c) 2010 waco, released under the MIT license
require: JQuery (any version)
version: 0.0.1
*/

// settings
var EasyRollOver = {
  // element to rollover
  element: ".rollover",

  // speed of fading out
  opacity: 0.8
};

$(document).ready(function(){
  var element = $(EasyRollOver.element);
  
  element.mouseover(function () {
    $(this).fadeTo("fast", EasyRollOver.opacity);
  });
  element.mouseout(function () {
    $(this).fadeTo("fast", 1);
  });
  $(document).focus(function(){
    element.fadeTo("fast", 1);
  });
});


