var pingPong = function(numberInput) {
  var numberArray = [];
  for (var i = 0; i < numberInput; i++) {   // creates array from 1 to given number
    numberArray.push(i + 1);
  }
  // debugger;
  numberArray.forEach(function(element, i, array) {
    if (element % 3 === 0) {
      array.splice(i, 1, "ping");
    }
  });
  var result = numberArray;
  return result;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#input").val();
    var result = pingPong(numberInput);
    $("#result").text(result);
  });
});
