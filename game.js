// 45 active spots on the board so far

var gameSpots= [1,2,3,4,5,6,
                         12,
                         18,
          24,23,22,21,20,19,
          25,
          31,32,33,34,35,36,
                         42,
                         48,
             54,53,52,51,50,
             56,
             62,
             68,69,70,71,
                      77,
          83,82,81,80,79,
          85,
          91,92,93,94,95,96];
 
$(function() {
  console.log( "window loaded" );

  //this part grabs all the cells, changes the background color and adds text, just to test out jquery
  var $boxes = $(".cell");
  // $boxes.css("background-color","white");


  //just a practice toggle button
  $("button").click(function(){
    var switches = $boxes.html("Hello, little boxes");
    $(switches).toggle();
  });

  //Here I use .each on gameSpots array
  $.each(gameSpots, function (index, value) {
    // console.log(index + ":" + value);
  });

  //Here I use .each on cell class
  $('.cell').each(function (index,value) {
    // console.log(index);
  });
  //_______________________________________________

});

function assignIds() {
  // give all cells an id starting with 1 at the top-left cell
  $(".cell").each(function (index, cell) {
    $(cell).attr("id", index + 1);
  });
}

function assignGameSpots() {
  $(gameSpots).each(function (index, value) {
    $("#" + value).addClass("game-spot");
  });
}
