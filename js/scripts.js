$(document).ready(function() {
  $("#beep-boop").submit(function(event) {


    var user = parseInt($("#userInput").val());

    var list = [];

    for (var i = 0; i <= user; i++) {
      list.push(i);
    }


    for (var x = 0; x <= user; x++) {
      if (list[x] % 3 === 0 && list[x] !== 0) {
        list.splice(x, 1, "hal.");
      }
    };


    for (var x = 0; x <= user; x) {
      if ([x].includes(1)) {
        list.splice(x, 1, "Beep");
      }
    };












    $("#result").text(list);
    event.preventDefault();
    });
  });
