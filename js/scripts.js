var checkDigits = function(str) {
  if (str === "0") {
    return true;
  }
  else {
    return false;
  }
}


$(document).ready(function() {
  $("button#submit").submit(function(event) {

    var value = parseInt($("#number").val());
    for (var i = 0; i < value.length; i++) {
      if(checkDigits(value[i])) {
        value[i] = "-";
      }
    }

    var result = value.join("");

    $("#userOutput").append(result);

    event.preventDefault();
  });
});
