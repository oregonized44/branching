

//initializing our query click function
$(document).ready(function(){
  $(".btn").click(function(){

//setting our variables

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var age = $("#age").val();
    var party = $("input:radio[name=party]:checked").val();
    var fullName = firstName + " " + lastName;

    $(".name").text(fullName);

    switch (party) {
      case "democrat":
        $(".link").remove();
        $(".site").append('<a class="link"  href="http://www.msnbc.com/">MSNBC</a>');
        break;
        console.log(dem);
      case "republican":
        $(".link").remove();
        $(".site").append('<a class="link" href="http://www.foxnews.com/">Fox News</a>');
        break;
      case "independant":
        $(".link").remove();
        $(".site").append('<a class="link"  href="http://www.independent.co.uk/">The Independent</a>');
        break;
      default:
        alert("Please select a party");
    }
    // push sentence
    console.log(age);
    if (age > 18 ) {
      $(".results").show();
    } else {
      alert("You must be atleast 18 years old to participate!");
      console.log("underage");
    }




  });
});
// this is Republican site http://www.foxnews.com/
// http://www.msnbc.com/
// http://www.independent.co.uk/
//
// var party =
