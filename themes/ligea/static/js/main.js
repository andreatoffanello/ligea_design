$('#content *').css({
	"opacity":"0",
	"transition":".5 ease-out",
});

$(document).ready(function() {

	function pageIn() {
		$('#content *').css({
			"opacity":"1";
		});
	}
	setTimeout(showpanel, 1000)

});