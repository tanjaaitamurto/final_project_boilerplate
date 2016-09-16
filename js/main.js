//* JavaScript for index.html*//

$('.scroll-to-section').on('click',function(event) {
	event.preventDefault();
	var thisTarget = $(this).attr('href');
	var targetOffset = $(thisTarget).offset().top;
	$('body').animate({
		scrollTop: targetOffset
	  }, 500);
});


//* Form for Contact.html*//

$('#btn.btn-primary').on('click', function() {
	$('thankyoutext').text('Thank you!');
 });