$(document).ready(function() {
	$("a#single_image").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		keyboard: true,
		arrows: true,
		loop: true,
		wheel: "auto",
		buttons: [
			"close"
		  ]
	});
	$('#callback').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('title') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.title__change').text(recipient)
	});
});