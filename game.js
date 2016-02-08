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

var playerCash=0;
var lifePoints=0;

// function toggle(div_id) {
//   var el = document.getElementById(div_id);
//   if ( el.style.display == 'none' ) { el.style.display = 'block';}
//   else {el.style.display = 'none';}
// }

// function blanket_size(popUpDivVar) {
//   if (typeof window.innerWidth != 'undefined') {
//     viewportheight = window.innerHeight;
//   } else {
//     viewportheight = document.documentElement.clientHeight;
//   }
//   if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
//     blanket_height = viewportheight;
//   } else {
//     if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
//       blanket_height = document.body.parentNode.clientHeight;
//     } else {
//       blanket_height = document.body.parentNode.scrollHeight;
//     }
//   }
//   var blanket = document.getElementById('blanket');
//   blanket.style.height = blanket_height + 'px';
//   var popUpDiv = document.getElementById(popUpDivVar);
//   popUpDiv_height=blanket_height/2 - 250;//200 is half popup's height
//   popUpDiv.style.top = popUpDiv_height + 'px';
// }

// function window_pos(popUpDivVar) {
//   if (typeof window.innerWidth != 'undefined') {
//     viewportwidth = window.innerHeight;
//   } else {
//     viewportwidth = document.documentElement.clientHeight;
//   }
//   if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
//     window_width = viewportwidth;
//   } else {
//     if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
//       window_width = document.body.parentNode.clientWidth;
//     } else {
//       window_width = document.body.parentNode.scrollWidth;
//     }
//   }
//   var popUpDiv = document.getElementById(popUpDivVar);
//   window_width=window_width/2-200;//200 is half popup's width
//   popUpDiv.style.left = window_width + 'px';
// }

// function popup(windowname) {
//   blanket_size(windowname);
//   window_pos(windowname);
//   toggle('blanket');
//   toggle(windowname);   
// }


 
$(function() {
  console.log( "window loaded" );

// playerCash = 0;
// document.getElementById("cash-data").innerHTML = playerCash;

// // lifePoints= 0;
// document.getElementById("life-point-data").innerHTML = lifePoints;
  //this part grabs all the cells, changes the background color and adds text, just to test out jquery
  // var $boxes = $(".cell");
  // $boxes.css("background-color","white");


  //just a practice toggle button
  // $("button").click(function(){
  //   var switches = $boxes.html("Hello, little boxes");
  //   $(switches).toggle();
  // });
});


function assignIds() {
  // give all cells an id starting with 1 at the top-left cell
  $(".cell").each(function (index, cell) {
    var id = index + 1;
    $(cell).attr("id", "c" + id);
  });
  assignGameSpots();
}

function assignGameSpots() {
  $(gameSpots).each(function (index, value) {
    $("#c" + value).addClass("game-spot"); 
  });
  removeIds();
}

function removeIds() {
  $(".cell").each(function (index, cell) {
    $(cell).removeAttr('id');
  });
  assignFinalIds();
}

function assignFinalIds() {
  $(".game-spot").each(function (index, spot) {
    var id= index + 1;
    $(spot).attr("id", "c" + id);
  });
  }

// function assignFinalIds() {
//   $(gameSpots).attr("id", function (index, cell) {
//     var id= index + 1;
//     return ("#c" + id);
//   });
// }

// function assignFinalIds() {
//   $.each(gameSpots, function (index, cell) {
//     var id= index + 1;
//     $("#c" + id).attr('id');
//   }); 
// }


function enterName() {
  var person = prompt("Please enter your name", "Hipster #1");
  document.getElementById("name-data").innerHTML =
    person;
}

function rollDice(){
    var sound = new Audio("shaking_dice.mp3"); // buffers automatically when created
    sound.play();

    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;
    diceTotal = d1;
    die1.innerHTML = d1;
    
    status.innerHTML = "You rolled: \&nbsp;"+ diceTotal;
    move(diceTotal);
}

function move(roll) {
  //grab current player
  var player = $(".player");
  //grab player's id
  var id = player.attr("id");
  //pick up player
  player.toggleClass("player");
  //figure out what position on the board player is on from it's id
  var idLength = id.length;
  var newId = parseInt(id.split('').splice(1,idLength).join(""));
  //calculate a new position based on the roll
  var newPositionID = newId + roll;
  //target the position the player will move to
  var newPosition = $("#c" + newPositionID);

  // if (newPositionID > 47) {}
  newPosition.toggleClass("player");

  document.getElementById("cash-data").innerHTML = playerCash;
  var getMoney = $("#c" + newPositionID).attr('data-ma');
  var convertCash = parseInt(getMoney);
  playerCash = (playerCash + convertCash);
  document.getElementById("cash-data").innerHTML = playerCash;

  document.getElementById("cash-data").innerHTML = playerCash;
  var loseMoney = $("#c" + newPositionID).attr('data-md');
  var divertCash = parseInt(loseMoney);
  playerCash = (playerCash - divertCash);
  document.getElementById("cash-data").innerHTML = playerCash;

  document.getElementById("life-point-data").innerHTML = lifePoints;
  var getPoints = $("#c" + newPositionID).attr('data-lpa');
  var convertPoints = parseInt(getPoints);
  lifePoints = (lifePoints + convertPoints);
  document.getElementById("life-point-data").innerHTML = lifePoints;

  document.getElementById("life-point-data").innerHTML = lifePoints;
  var losePoints = $("#c" + newPositionID).attr('data-lpd');
  var divertPoints = parseInt(losePoints);
  lifePoints = (lifePoints - divertPoints);
  document.getElementById("life-point-data").innerHTML = lifePoints;
}

// ---------------------------------------------------





