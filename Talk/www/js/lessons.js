$(document).ready(function(){
	$('.c2').hide();
	$('.c3').hide();
	$('.c4').hide();
	$('.c5').hide();
	
 });
 var count = 0;
 var a = 1;
function next_content() {
	/*console.log("eae");
	var div = $('.c2');
	$('.container-fluid').html(div);*/
	count++;
		var classe = 'c';
		var classe = 'c' + a;
		console.log(classe);
		$('.'+classe).hide();
		a = a + 1;
		var classe =  'c' + a;
		$('.'+classe).show();
		console.log(classe);
		/*if (count > 1) {
			$('.'+classe).hide();
			a = a + 1;
			var classe =  'c' + a;
			$('.'+classe).show();
			console.log(classe);
	
	}/*
	var a = $('.c1').attr("value");
	$('.c1').hide();
	
	console.log(a);
	console.log(count); */
}
