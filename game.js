// $(); //document ready in jquery

// var spots= [1,2,3,4,5,6,12,18,24,23,22,21,20,26,32,33,34,35,36,42,48,54,53,52,51,50,56,62,68,69,70,71,77,83,82,81,80,79,85,91,92,93,94,95,96];

// spots.forEach (function (id,i) {
//   var cell= $("#" + id);
//   cell.attr("data-spot-id", i+1); 
//   });
var spots= [1,2,3,4,5,6,12,18,24,23,22,21,20,26,32,33,34,35,36,42,48,54,53,52,51,50,56,62,68,69,70,71,77,83,82,81,80,79,85,91,92,93,94,95,96];

$(function() {
  spots.forEach (function (id,i) {
    var $spot= $("#" + id);
    $spot.attr("data-spot-id", i+1);
  });

 var $boxes = $(".cell");

  $boxes.html("Hello, little boxes");
  $boxes.css("background-color","white");

});








