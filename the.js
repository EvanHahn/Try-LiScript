$.fn.ready(function() {

	var fillHeight = function() {
		$("textarea").height($(window).height() + "px");
	};
	$(window).on("resize", fillHeight);
	fillHeight();

	var compile = function() {
		var output = LiScript.compile(this.value);
		$("#output").val(output);
	}
	$("#input").on("keyup change", compile);
	compile();

});