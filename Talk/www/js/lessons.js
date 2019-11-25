// Esconder o conteudo enquanto o usuario não passar
$(document).ready(function(){
	$('.c2').hide();
	$('.c3').hide();
	$('.c4').hide();
	$('.c5').hide();
	$('.c6').hide();
	$('.c7').hide();
	$('.c8').hide();
	$('.c9').hide();
	
 });

// trocando as divs que vão exibir o conteudo das lessons
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
}


function dragstart_handler(ev) {
  // Adiciona os dados do arraste (drag)
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setData("text/html", "<p>Parágrafo de exemplo</p>");
  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}
/*
function change_class_p() {
	$(".put_in_order").toggleClass('active_class addOrRemove');
	console.log("pasd");
	
} */

function selecionar_classe() {
  $( "p" ).toggleClass( "active_class" );
  console.log("passou");
};