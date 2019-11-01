
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
                        //alert(result);
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


