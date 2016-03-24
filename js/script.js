

//initializing our query click function
$(document).ready(function(){
  $(".btn").click(function(){

//setting our variables

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var age = $("#age").val();
    var party = $("input:radio[name=party]:checked").val();

    switch (party) {
      case "democrat":
        console.log("dem");
        break;
      case "republican":
        console.log("rep");
        break;
      case "independant":
        console.log("ind");
        break;
      default:
        alert("Please select a party");
    }
    // push sentence
    console.log(age);
    if (age > 18 ) {

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
