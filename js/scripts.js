//<!-- Back End -->

function createFactorial(number) {
  if(number === 0) {
    return 1;
  } else {
    //with for loop
    // var factorial = 1;
    // for (var i = 1; i <= number; i++) {
    //   factorial *= i;
    // } //end of for loop

    //with recursion
    if(number > 1){
      //console.log("number = " + number);
      var number2 = createFactorial(number-1);
      //console.log("number = " + number + " number2 = " + number2);
      return number * number2;
    }
    //console.log("number = " + number);
    return number;
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
