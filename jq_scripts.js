$(document).ready(function(){

	// Div genearator when hitting 'generate' button in html.
	// Set button div ID to sequence number of when button was pressed
	// With each new div, generate a 'change color' button and a 'remove' button.
	$('#generate').on('click', function(){
		// alert('jq scripts')
		createDiv();
		createButton('color');
		createButton('remove');

	});

	$('#main').on('click', '#remove', function(){
		console.log($(this).parent().attr('id'));
		$(this).parent().hide();

	});

	$('#main').on('click', '#color', function(){
		$(this).parent().addClass('change');

	});




});
