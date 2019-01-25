var beepBoop = function(str) {
  if (str === "0") {
    return "beep";
  }
}


$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {

    var number = parseInt($("input#number").val());
    for (var i = 0; i < number.length; i++) {
      if (beepBoop(number[i])) {
        number[i] = "-";
      }
    }

    var result = beepBoop(number);

    $("#output").append(result);

    event.preventDefault();
  });
});
