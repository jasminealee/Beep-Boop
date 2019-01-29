$(document).ready(function() {
  $("#beep-boop").submit(function(event) {

    var name = $("#name").val();
    var user = parseInt($("#userInput").val());

    var sentence = function() {
      if (name) {
        return " I'm sorry, " + name + ". I'm afraid I can't do that.";
      }
      else if (name === "") {
        return " I'm sorry, Dave. I'm afraid I can't do that.";
      }
    }

    var list = [];

    for (var i = 0; i <= user; i++) {

      if (i % 3 === 0 && i !== 0) {
        list.push(sentence());
      }

      else if (i.toString().includes("1")) {
        list.push(" Boop!");
      }
      else if (i.toString().includes("0")) {
        list.push(" Beep!");
      }
      else {
        list.push(" " + i);
      }
    }

    $("#result").show().text(list);
    event.preventDefault();
  });

  $("#refresh").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
  });

});
