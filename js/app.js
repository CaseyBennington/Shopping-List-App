$(document).ready(function(){
// use enter to add list items
	$('#new-list-item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});

//add list items
	$('#add').on('click', function(){
		var txtbox = document.getElementById('new-list-item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#new-list-item').val())) {
			alert('Please enter item to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<img class="check-mark" src="images/check_mark2.png"><p>' + txtval + '</p><img class="delete" src="images/delete.png">');
			document.getElementById('new-list-item').value = '';
		};
	});

// hover to show delete button and style to show item emphasis
	$("#list").on('mouseover', 'li', function(){
			$(this).find("p").addClass("listHover");
			$(this).find(".delete").css({"display": "inline"});
	});

	$("#list").on('mouseleave', 'li', function(){
			$(this).find("p").removeClass("listHover");
			$(this).find(".delete").css({"display": "none"});
	});

// hover to show item emphasis
	$("#list").on('mouseover', '.delete', function(){
			$(this).addClass("listHover");
	});
	$("#list").on('mouseleave', '.delete', function(){
			$(this).removeClass("listHover");
	});
// hover to show item emphasis
	$("#list").on('mouseover', '.check-mark', function(){
			$(this).toggleClass("listHover");
		});
	$("#list").on('mouseleave', '.check-mark', function(){
			$(this).removeClass("listHover");
	});

// mark as completed
	$("#list").on('click', '.check-mark', function() {
		  $(this).parent().find("p").toggleClass("completed");
	});

// remove list item
	$("#list").on('click', '.delete', function() {
		  $(this).parent().remove();
	});

//sortable list items
	$('#list').sortable({ axis: "y" });
});