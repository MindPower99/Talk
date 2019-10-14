
function CriaRequest() {
     try{
         request = new XMLHttpRequest();        
     }catch (IEAtual){
          
         try{
             request = new ActiveXObject("Msxml2.XMLHTTP");       
         }catch(IEAntigo){
          
             try{
                 request = new ActiveXObject("Microsoft.XMLHTTP");          
             }catch(falha){
                 request = false;
             }
         }
     }
     
      if (!request) 
         alert("Seu Navegador não suporta Ajax!");
     else
         return request;

 }


$('#btnLogin').click (function () {
	var vemail = $('#txtEmail').val();
	var vsenha = $('#txtPass').val();
    var xmlreq = CriaRequest();

    console.log(vemail);
    console.log(vsenha);

    xmlreq.open("GET", "http://127.0.0.1/login.php?txtEmail=" + vemail, true);

    xmlreq.onreadystatechange = function(){
          
         // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
         if (xmlreq.readyState == 4) {
              
             // Verifica se o arquivo foi encontrado com sucesso
             if (xmlreq.status == 200) {
                 result.innerHTML = xmlreq.responseText;
             }else{
                 result.innerHTML = "Erro: " + xmlreq.statusText;
             }
         }
     };
     xmlreq.send(null);


	/*
	var request = $.ajax({
                type: "POST",
                url: "http://127.0.0.1/login.php",
                data: {
                    acao: 'login',
                    email: vemail,
                    senha: vsenha
                },

                dataType: "json",
                /*
                success: function(json) {
                    console.log("passou");
                },

                error: function() {
                    console.log("não passou");
                }
                
	           });  

                request.done(function(resposta) {
                    console.log(resposta);
                });

                request.fail(function(jqXHR, textStatus) {
                    console.log("request failed: " + textStatus);
                });

                request.always(function() {
                    console.log("Completo");
                });
               
    */
});

