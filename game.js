// 44 active spots on the board so far

// var spots= [1,2,3,4,5,6,12,18,24,23,22,21,20,26,32,33,34,35,36,42,48,54,53,52,51,50,56,62,68,69,70,71,77,83,82,81,80,79,85,91,92,93,94,95,96];


$(function() {
  $( window ).load(function() {
        console.log( "window loaded" );

  var gameSpots= [1,2,3,4,5,6,12,18,24,23,22,21,20,26,32,33,34,35,36,42,48,54,53,52,51,50,56,62,68,69,70,71,77,83,82,81,80,79,85,91,92,93,94,95,96]; 

  var $boxes = $(".cell");
  $boxes.html("Hello, little boxes");
  $boxes.css("background-color","white");

  // $(gameSpots).each(function (index, value) {
  //   $('.cell').each(function () {
  //     $('.cell').attr("data-spot-id", index +1);
  //   });  
  // });
    
$(gameSpots).each(function (id, index) {
  $('.cell').each(function () {
    $('.cell').attr("data-spot-id", id +1);
  });
});

  //use .each on spots array
  $.each(gameSpots, function (index, value) {
  console.log(index + ":" + value);
  });

  //use .each on cell class
  $('.cell').each(function (index,value) {
  console.log(index);
  });


 

 });
});
