// this is to prevent any jquery from firing before the page loads
$(document).ready(function(){
	// jquery is amde for selecting html elements and performing actions
	// $('selector').action()

$('p').fadeOut();
$('.spooky').fadeOut();

$('button').click(function(){
	$('p').show();
	$('button').hide();
})
$('h2').click(function(){
	$('h4').slideToggle();
})

});