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
	$(".comprehension_a").removeClass("comprehension_selected_a");
	$(".comprehension_d").removeClass("comprehension_selected_d");
	$(".comprehension_b").removeClass("comprehension_selected_b");
	$(".comprehension_c").removeClass("comprehension_selected_c");
	count++;
		var classe = 'c';
		var classe = 'c' + a;
		
		function armazena() {
			console.log(classe);
		}
		$('.'+classe).hide();
		a = a + 1;
		var classe =  'c' + a;
		$('.'+classe).show();
		//console.log(classe);
}


function dragstart_handler(ev) {
  // Adiciona os dados do arraste (drag)
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setData("text/html", "<p>Parágrafo de exemplo</p>");
  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}

function back_to_lessons() {
	$(window.document.location).attr('href',"inicio.html");
}

function comprehension_selected_a() {
	$(".comprehension_a").toggleClass("comprehension_selected_a");
	$(".comprehension_d").removeClass("comprehension_selected_d");
	$(".comprehension_b").removeClass("comprehension_selected_b");
	$(".comprehension_c").removeClass("comprehension_selected_c");
}
function comprehension_selected_b() {
	$(".comprehension_b").toggleClass("comprehension_selected_b");
	$(".comprehension_a").removeClass("comprehension_selected_a");
	$(".comprehension_d").removeClass("comprehension_selected_d");
	$(".comprehension_c").removeClass("comprehension_selected_c");
}
function comprehension_selected_c() {
	$(".comprehension_c").toggleClass("comprehension_selected_c");
	$(".comprehension_a").removeClass("comprehension_selected_a");
	$(".comprehension_b").removeClass("comprehension_selected_b");
	$(".comprehension_d").removeClass("comprehension_selected_d");
}
function comprehension_selected_d() {
	$(".comprehension_d").toggleClass("comprehension_selected_d");
	$(".comprehension_a").removeClass("comprehension_selected_a");
	$(".comprehension_b").removeClass("comprehension_selected_b");
	$(".comprehension_c").removeClass("comprehension_selected_c");
}

new Vue({
  el: 'body',
  data: {
    list: ['Foo', 'Bar', 'Baz', 'bebe']
  },
  methods: {
    onUpdate: function (event) {
      this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0])
    }
  }
});
/*
function change_class_p() {
	$(".put_in_order").toggleClass('active_class addOrRemove');
	console.log("pasd");
	
} */

