var pingPong = function(numberInput) {
  var result = numberInput;
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
