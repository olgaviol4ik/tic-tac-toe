//listen to event "submit"
$("input[type='submit']").on("click", function(event) {
  event.preventDefault();

  //store values height and weight in variables
  //and Get the current value of the first element 
  //in the set of matched elements or set the value of every matched element.
  const height = $("#height").val();
  const width = $("#width").val();

  //Remove all child nodes of the set of matched elements from the DOM
  $("#pixelCanvas").empty();

  //calling makeGrid() function
  makeGrid(height, width); 
});

//function makeGrid where calculation and construction of grid happens
function makeGrid(height, width) {
  for (let row = 0; row < height; row++) {
    $("#pixelCanvas").append($("<tr></tr>"));
    for (let col = 0; col < width; col++) {
      $("tr")
        .last()
        .append($("<td></td>"));

      $("td").attr("class", "pixel");
    }
  }
}
$("#pixelCanvas").on("click", ".pixel", function() {
  if($(this).html()){
    return;
  }
  let symbol = $(".symbol.active");
  $(this).html(symbol.html());
  $('.symbol').addClass('active');
  symbol.removeClass('active');
});

