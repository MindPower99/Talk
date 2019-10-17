
/*function CriaRequest() {
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
              
              console.log("chegou");
             // Verifica se o arquivo foi encontrado com sucesso
             if (xmlreq.status == 200) {
                 console.log(xmlreq.responseText);
             }else{
                 console.log(xmlreq.statusText);
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
    });               
    */

    $(document).ready(function(){
    $('#errolog').hide(); //Esconde o elemento com id errolog
    $('#formLogin').submit(function(){  //Ao submeter formulário
        var login=$('#txtEmail').val();    //Pega valor do campo email
        var senha=$('#txtPass').val();    //Pega valor do campo senha

        console.log(login);
        console.log(senha);
        $.ajax({            //Função AJAX
            url:"http://127.0.0.1/login.php",            //Arquivo php
            type:"POST",                //Método de envio
            data: "login="+login+"&senha="+senha,   //Dados
            success: function (result){         //Sucesso no AJAX
                        alert(result);
                        if(result==1){                      
                            location.href='inicio.html' 
                            console.log( "passou");
                        }else{
                            $('#errolog').show();   
                            console.log( "n passou");    //Informa o erro
                        }
                    }
        })
        return false;   //Evita que a página seja atualizada
    })
})


