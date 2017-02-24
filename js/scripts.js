var pingPong = function(numberInput) {
  var numberArray = [];
  for (var i = 0; i < numberInput; i++) {
    numberArray.push(i + 1);
  }

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
