// console.log("Test");
// console.dir(document); // How the DOM works

// var dom = $(document);
// console.dir(dom); // You get more here with jQuery than do you do just targeting the document directly

// jQuery = window.jQuery = $ = window.$
// $ means jQuery and () means to target

// The document belongs to the window
// The DOM is only HTML/CSS/JS. Images, videos, etc belong to the window, which is why they tend to load slower

// 1. Wait until the document is fully loaded... i.e. READY
// 2. Once the DOM is loaded, run the anonymous function
// Wait until all of the HTML/CSS has loaded before running
$(document).ready(function(){
	// var thing = document.getElementById("thing");
	// console.log(document.querySelector('#image'));
	// var thing = $('#thing'); // This line and the two lines above mean the same thing. Use CSS rules to select thing
	// console.log(thing);

	// var classThing = document.getElementsByClassName("thing");
	// var classThing = $('.thing'); // This line and the line above mean the same thing.
	// console.dir(classThing);

	// var body = document.getElementsByTagName('body');
	// body = $('body');

	// addEventListener(document.getElementsByTagName('button', 'click', function(){}); // Same as jQuery below
	$('button').click(function(){
		// console.log("Test"); // Will log "test" every time you click a button
		// console.log(this);
		console.log($(this).attr('toDo')) // Will return the toDo attribute for the toDo element
		var whatToDo = $(this).attr('toDo');
		if (whatToDo == 'hide'){
			$('#thing').hide(); // hide() is a jQuery method
			// If you click on the Hide button, it will hide the "Do something to me in jQuery" button
			// This is just adding the CSS display: none property
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle(); // To replace hide() and show()
		}else if(whatToDo == 'html'){
			$('#thing').html("<strong>I am new innerHTML.</strong>"); // Replaces innerHTML, would overwrite what's in there
			// If you don't pass html() an arg, it will simply return innerHTML
			// If you pass html() an arg, innerHTML will change to that
			// html() will interpret HTML
			console.log($('#thing').html());
		}else if(whatToDo == 'text'){
			$('#thing').text("<strong>I am new innerHTML.</strong>");
			// text() does not interpret the HTML tags. Will write out <strong> tags
		}else if(whatToDo == 'prepend'){
			// Get the innerHTML, and += to the beginning
			// innerHTML = newText + innerHTML
			$('#thing').prepend("<strong>I am new innerHTML.</strong>");
		}else if(whatToDo == 'append'){
			// Get the innerHTML, and += to the end
			// innerHTML += newText
			$('#thing').append("<strong>I am new innerHTML.</strong>");
		}else if(whatToDo == 'css'){
			// css method takes an argument, an object, just like css
			// it will apply the css as a style attribute
			$('#thing').css({
				// 'property': 'value',
				'color': 'orange',
				'font-size': '80px',
				'background-color': 'blue',
				'border-radius': '50%'
				// Only way to overwrite this is by using !important;
			});
		}else if(whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
			// This will add the class that is in the <style> tag
		}else if(whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css');
		}else if(whatToDo == 'slideToggle'){
			$('#thing').slideToggle();
		}else if(whatToDo == 'fadeToggle'){
			$('#thing').fadeToggle('slow', ()=>{
				console.log("Fading is finished!")
			});
		}else if(whatToDo == 'hover'){
			$('#thing').hover(function(){
				$(this).fadeOut(100);
				$(this).fadeIn(500);
			});
		}else if(whatToDo == 'scroll'){
			$('#thing').scroll();
		}else if(whatToDo == 'animate'){
			$('#thing').animate({
				'width': '40%',
				'opacity': '0.3',
				'fontSize': '40px',
				'border-width': '10px'
			}, 1500);
		}else if(whatToDo == 'goodbye'){
			$('#thing').animate({
				'margin-left': '-2500px'
			}, 1000);
		}else if(whatToDo == 'hello'){
			$('#thing').animate({
				'margin-left': '0px'
			}, 1000);
		}else if(whatToDo == 'loop'){
			$('button').each(()=>{
				// .each gives you the ability to go through a bunch of stuff
				console.log(this.whatever);
			})
		}
	});

});


// 1. Wait until ABSOLUTELY EVERYTHING has loaded (pictures, video, etc.)
// $(window).on("load", function(){
// 	console.log("The window has loaded");
// 	var thing = document.getElementById("thing");
// 	console.log(thing);
// });