// 45 active spots on the board so far

var gameSpots= [1,2,3,4,5,6,12,18,24,23,22,21,20,26,32,33,34,35,36,42,48,54,53,52,51,50,56,62,68,69,70,71,77,83,82,81,80,79,85,91,92,93,94,95,96]; 

$(function() {
  $( window ).load(function() {
        console.log( "window loaded" );

//this part grabs all the cells, changes the background color and adds text, just to test out jquery
  var $boxes = $(".cell");
  $boxes.html("Hello, little boxes");
  $boxes.css("background-color","white");

//Here I use .each on gameSpots array
  $.each(gameSpots, function (index, value) {
  console.log(index + ":" + value);
  });

//Here I use .each on cell class
  $('.cell').each(function (index,value) {
  console.log(index);
  });

// Here I need to apply data-spot-id w/numbers 1-45 to corresponding cells with the matching index, like gameSpots[44]= cell[95]. Something is working but not what I want
$.each(gameSpots, function (i, id) {
    var cell = $('#' + id); //there is something misssing here
    $('.cell').attr("data-spot-id", i +1);
  });
  

});
});
