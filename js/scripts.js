$(document).ready(function(){
  $("form#triangleInput").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    $("#result").show();
    $("#result").text(checkSides(side1,side2,side3));

  });
});

var checkSides = function(s1,s2,s3) {

  if ((s1===s2)&&(s1===s3)) {
    return "Your triangle is an equilateral triangle.";
  } else if (s1+s2<=s3||s2+s3<=s1||s1+s3<=s2) {
    return "That's not a triangle.";
  } else if ((s1!=s3 && s1!=s2) && s2!=s3) {
    return "Your triangle is a scalene triangle.";
  } else if (s1===s2||s1===s3||s2===s3) {
    return "Your triangle is an isosceles triangle.";
  }
}
