var pingPong = function(numberInput) {
  var negative = "";
  if (numberInput < 0) { //convert negative number input to positive
    numberInput *= -1;
    negative = "-"
  }
  var numberArray = [];
  for (var i = 0; i < numberInput; i++) {   // creates array from 1 to given number
    numberArray.push(i + 1);
  }

  numberArray.forEach(function(element, i, array) { // replaces multiples of 15, 3, and 5 with "ping-pong", "ping", and "pong", respectively
    if (element % 15 === 0) {
      array.splice(i, 1, "ping-pong");
    } else if (element % 3 === 0) {
      array.splice(i, 1, "ping");
    } else if (element % 5 === 0) {
      array.splice(i, 1, "pong");
    } else {
      array.splice(i, 1, negative + element);  //adds "-" to remaining numbers if the input was negative
    }
  });

  var result = numberArray.join(", ");

  return result;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val();
    var result = pingPong(numberInput);
    $("#result").text(result);
    $("#result").slideDown();
  });
  $("input").click(function(){
      $("#result").slideUp();
  });
});
