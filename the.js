$.fn.ready(function() {

	var fillHeight = function() {
		$("textarea").height($(window).height() + "px");
	};
	$(window).on("resize", fillHeight);
	fillHeight();

	$("#input").on("keyup, change", function() {
		var output = LiScript.compile(this.value);
		$("#output").val(output);
	});

});