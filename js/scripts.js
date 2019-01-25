// var checkDigits = function() {
//   if ("0") {
//
//   }
// }

$(document).ready(function() {
  $("#beep-boop").submit(function(event) {

    var user = parseInt($("#userInput").val());

    var list = [];

    for (var i = 0; i <= user; i++) {
      list.push(i);
    }












    $("#result").text(list);
    event.preventDefault();
    });
  });
