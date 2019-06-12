$(document).ready(function()  {
  $("#survey form").submit(function(event)  {
   
    event.preventDefault();
    var firstName = $("input#FirstName").val();
    var lastName = $("input#LastName").val();
    var favAnimal = $("input#FavoriteAnimal").val();
    var favFood = $("input#FavoriteFood").val();
    var favPlace = $("input#FavoriteNumber").val;
    var favTeam = $("input#FavoriteTeam").val;

    myArray = [firstName, lastName, favAnimal, favFood, favPlace, favTeam]
    alert(myArray)

    $(".FirstName").text(firstName)
    $(".LastName").text(lastName)
    $(".FavoriteAnimal").text()
    $(".FavoriteFood").text()
    $(".FavoritePlace").text()
    $(".FavoriteTeam").text()

  })
})