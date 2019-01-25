// var checkDigits = function() {
//   if ("0") {
//
//   }
// }

$(document).ready(function() {
  $("#beep-boop").submit(function(event) {

    var answersTo = function(user) {
      if (user % 3 === 0) {
        return true;
      } else {
        return false;
      }
    };

     }
    var user = parseInt($("#userInput").val());
    var list = [];
    for (var i = 0; i <= user; i++) {
      list.push(i);
    }












    $("#result").text(list);
    event.preventDefault();
    });
  });
