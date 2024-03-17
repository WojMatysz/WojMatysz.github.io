$(document).ready(function() { 
	$(document).on('click', '.button', function() {
		let fileName = $(this).data("file");
		changeContent(fileName);
	});
});

function changeContent( fileName ) {
	$("#content").load(fileName);
}
