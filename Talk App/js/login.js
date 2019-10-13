

$('#btnLogin').click (function () {
	var email = $('#txtEmail').val();
	var senha = $('#txtPass').val();
	
	$.ajax({
            type: "POST",
            url: "http://localhost/login.php",
            data: {
                acao: 'login',
                email: email,
                senha: senha
            },
	});
});