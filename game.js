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
    if (person == ""){
      alert("please re-enter name");
      enterName();
    } 
    else {
      $("#name-data").html(person);
    }
}

function rollDice(){
    var d1 = Math.floor(Math.random() * 6) + 1; //math for rolling dice. 
    var sound = new Audio("shaking_dice.mp3"); // buffers automatically when created
    sound.play();
    diceTotal = d1;
    $("#die1").html(d1);
    var status = $("#status").html("You rolled: "+ diceTotal);
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

  newPosition.toggleClass("player");


  document.getElementById("cash-data").innerHTML = playerCash;
  // document.getElementById("life-point-data").innerHTML = lifePoints;
  var getMoney = $("#c" + newPositionID).attr('data-ma');
  var convertCash = parseInt(getMoney);
  playerCash = (playerCash + convertCash);
  document.getElementById("cash-data").innerHTML = playerCash;

  document.getElementById("cash-data").innerHTML = playerCash;
  // document.getElementById("life-point-data").innerHTML = lifePoints;
  var getMoney = $("#c" + newPositionID).attr('data-md');
  var convertCash = parseInt(getMoney);
  playerCash = (playerCash - convertCash);
  document.getElementById("cash-data").innerHTML = playerCash;


  
  document.getElementById("life-point-data").innerHTML = lifePoints;
  var getPoints = $("#c" + newPositionID).attr('data-lpa');
  var convertPoints = parseInt(getPoints);
  lifePoints = (lifePoints + convertPoints);
  document.getElementById("life-point-data").innerHTML = lifePoints;

}


  // function updateCash() {
  //   var addCash = parseInt($(newPostion).attr('data-ma'));
  //   var bank = document.getElementById("cash-data");

  //   playerCash = playerCash + addCash;
  //   bank.innerHTML = playerCash;
  // }
  //wait some time & move the player to the new position
  

  // var addPlayerCash = (function() {
    

  // var addPlayerLP = (function() {
  //   var addPoints = $(this).attr('data-lpa');

  // });

  // var deductPlayerCash = (function() {
  //   var takeCash= $(this).attr('data-md');
  // });

  // var deductPlayerLifePoints = (function() {
  //   var takePoints = $(this).attr('data-lpd');
  // });


 //end or move

// ---------------------------------------------------





