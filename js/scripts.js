var beepBoop = function(str) {
  if (str === "0") {
    return "beep";
  }

}


$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {

    var number = parseInt($("input#number").val());
    var  = $("#userInput").val().split("");
    for (var i = 0; i < number.length; i++) {
      if(beepBoop(sentence[i])){
      sentence[i] = "-";
    }
  }
  var result = sentence.join("");
  $("#output").append(result);
    var result = beepBoop(number);
    event.preventDefault();
  }
}
