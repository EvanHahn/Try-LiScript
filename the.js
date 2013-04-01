$(document).ready(function() {

	var fillHeight = function() {
		$("textarea").height($(window).height() + "px");
	};
	$(window).on("resize", fillHeight);
	fillHeight();

	var compile = function() {
		var output = LiScript.compile($("#input").val());
		$("#output").val(output);
		return output;
	};
	$("#input").on("keyup change", compile);
	compile();

	var run = function() {
		eval(compile());
	};
	$("#run").on("click", run);

});