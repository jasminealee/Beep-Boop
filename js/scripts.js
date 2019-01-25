$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {

    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    event.preventDefault();
  }
}
