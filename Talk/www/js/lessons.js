$(document).ready(function(){
	$('.c2').hide();
	$('.c3').hide();
	
 });
 var count = 0;
function next_content() {
	/*console.log("eae");
	var div = $('.c2');
	$('.container-fluid').html(div);*/
	count++;
	var a = 1;
	if (count == a) {
		var classe = 'c';
		var classe = 'c' + a;
		console.log(classe);
		$('.'+classe).hide();
		$('.c2').show();
	}/*
	var a = $('.c1').attr("value");
	$('.c1').hide();
	
	console.log(a);
	console.log(count); */
}
