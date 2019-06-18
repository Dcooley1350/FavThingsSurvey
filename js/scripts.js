$(document).ready(function()  {
  $("#survey form").submit(function(event)  {
   
    event.preventDefault();

    var datas = ["FirstName","LastName","FavoriteAnimal","FavoriteFood","FavoritePlace","FavoriteNumber","FavoriteTeam"];
    datas.forEach(function(data) {
      var userInput = $("input#" + data).val();
        $("." + data).text(userInput)
    })

    $(".summary").fadeIn();
  })
})