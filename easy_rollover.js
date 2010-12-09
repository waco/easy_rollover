/*
Copyright (c) 2010 waco, released under the MIT license
require: JQuery (any version)
version: 0.0.2
*/

// settings
var EasyRollOver = {
  // element to rollover
  element: ".rollover",

  // speed of fading out
  speed: "fast",

  //effects
  effects: {opacity: 0.7}
};

$(document).ready(function(){
  var element = $(EasyRollOver.element);
  var overFlag = false;
  var outFlag= false;
  var defaultStyle = {};

  // save default style
  $.each(EasyRollOver.effects, function(key){
    defaultStyle[key] = element.css(key);
  });

  element.mouseover(function(){over(this)});
  element.mouseout(function(){out(this)});

  function over(obj){
    if(!overFlag){
      overFlag = true;
      $(obj).animate(EasyRollOver.effects, EasyRollOver.speed,
        "linear", function(){ overFlag = false });
    }
  }
  function out(obj){
    if(!outFlag){
      outrFlag = true;
      $(obj).animate(defaultStyle, EasyRollOver.speed,
        "linear", function(){ outFlag = false });
    }
  }
});


