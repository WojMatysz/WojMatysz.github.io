//Global variable that store path to current displayed content
let pathToCurrentLoadedContent = "pages/en/about.html";

$(document).ready(function() { 
	$(document).on('click', '.button', function() {
		let fileName = $(this).data("file");
		changeContent(fileName);
		pathToCurrentLoadedContent = fileName;
	});
});

function changeContent( fileName ) {
	$("#content").load(fileName);
}
