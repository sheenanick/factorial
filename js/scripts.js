//<!-- Back End -->

function createFactorial(number) {
  if(number === 0) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
      factorial *= i;
    } //end of for loop
    return factorial;
  } //end of else
} // end of function


//<!-- Front End  -->
$(document).ready(function(){
 $("form").submit(function(event) {
   event.preventDefault();
   var number = parseInt($("input#toFactorial").val());
   $(".well").text(createFactorial(number));
 });

});
