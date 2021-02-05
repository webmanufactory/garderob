$(document).ready(function() {
	$("a.single_image").fancybox({
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
		var button = $(event.relatedTarget) 
		var recipient = button.data('title') 
		var modal = $(this)
		modal.find('.title__change').text(recipient)
	});
});
