
var selectedCat = 0;

$('#catImg').click(function(e) {
  counts[selectedCat]++;
  $('#catCounter').text(counts[selectedCat]);
});

var counts = [0,0,0,0,0];
var cats = ["Meowda", "Meow Sidious", "Meowbacca", "Meow Solo", "Meow Vader"];
var imgs = ["jedi-cat.gif", "sith-cat.jpg", "chewbacca-cat.png", "hansolo-cat.jpg", "darth-cat.jpg"];

function catUp (num) {
	selectedCat = num;
	$("#catName").text(cats[num]);
	$("#catImg").attr("src", imgs[num]);
	$("#catCounter").text(counts[num]);
	$("#cat-container").show();
}

$(function() {
	for (var i=0; i<cats.length; i++) {
		$("#catSelector").append($('<option>', {
			value: i,
			text : cats[i]
		}));
	}
	catUp(0);
});
