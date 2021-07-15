/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box
//$(".box").addClass("fun")
// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3

$("#box2").on("click", function(){
	$(".box").removeClass("crazy")
	$("h1").addClass("crazy")
	$("#box3").slideToggle()
})

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$("#box1").on("click", function(){
	$("h1").text("JQuery Ninja")
})
$("#box2").on("click", function(){
	$("h1").text("JQuery Ninja")
})
$("#box3").on("click", function(){
	$("h1").text("JQuery Ninja")
})
// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened.
//So For what happen below, I did a function command. So when I clicked the box1 button a event would happen. As for the command for the event, i put where i wanted the event to happen "image class=motto" and added an attribute command that made have an image.

// 6. when box one is clicked you are changing the attribute of src to moto.jpg
$("#box1").on("click", function(){
	$(".moto").attr("src", 'images/moto.jpg');
})



/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
document.getElementById("dropdownMenu").style.display="none";
// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
	$(document).ready(function(){
		$("#dropdownButton").click(function(){
		  $("#dropdownMenu").slideToggle();
		});
	  });

/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
document.getElementById("answer2").style.display="none";

// 9. Show the item with the id #answer1
document.getElementById("answer1").style.display="visible";

// 10. When #question2 is clicked:
	// a) Slide down #answer2
	$(document).ready(function(){
		$("#question2").click(function(){
		  $("#answer2").slideToggle();
		});
	  });

	// b) Slide up #answer1
	$(document).ready(function(){
		$("#question2").click(function(){
		  $("#answer1").slideToggle();
		});
	  });
	// c) Remove the active class from all list items
	
		$('#question1').removeClass('active');
  
	// d) Add the active class to #question2
	
		$('#question2').addClass('active');


// 11. When #question1 is clicked:
	// a) Slide down #answer1
	$(document).ready(function(){
		$("#question1").click(function(){
		  $("#answer1").slideToggle();
		});
	  });

	// b) Slide up #answer2
	$(document).ready(function(){
		$("#question1").click(function(){
		  $("#answer2").slideToggle();
		});
	  });
	// c) Remove the active class from all list items
	$('#question2').removeClass('active');
	// d) Add the active class to #question1
	$('#question1').addClass('active');