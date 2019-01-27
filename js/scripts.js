$(document).ready(function() {
  $("#beep-boop").submit(function(event) {


    var user = parseInt($("#userInput").val());

    var list = [];

    for (var i = 0; i <= user; i++) {

      if (i % 3 === 0 && i !== 0) {
        list.push("I'm sorry, Dave. I'm afraid I can't d that.");
      }

      else if (i.toString().includes("1")) {
        list.push("Boop");
      }
      else if (i.toString().includes("0")) {
        list.push("Beep");
      }
      else {
        list.push(i);
      }
    }











    $("#result").text(list);
    event.preventDefault();
    });
  });
