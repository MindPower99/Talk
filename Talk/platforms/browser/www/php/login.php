<?php
// permitir que o navegador faça a chamada AJAX
header('Access-Control-Allow-Origin: *');
/*
// verifica se existe uma variavel txtEmail
if (isset($_GET["txtEmail"])) 
{
	    $nome = $_GET["txtEmail"];
	    // Conexao com o banco de dados
	    $server = "localhost";
	    $user = "root";
	    $senha = "";
	    $base = "app";
	    $conexao = mysql_connect($server, $user, $senha) or die("Erro na conexão!");
	    mysql_select_db($base);
	    // Verifica se a variável está vazia
	    if (empty($nome)) {
	        $sql = "SELECT * FROM usuario";
	    } else {
	        $nome .= "%";
	        $sql = "SELECT * FROM usuario WHERE email like '$nome'";
	    }
	    sleep(1);
	    $result = mysql_query($sql);
	    $cont = mysql_affected_rows($conexao);
	    // Verifica se a consulta retornou linhas 
	    if ($cont > 0) {
	        // Atribui o código HTML para montar uma tabela
	        $tabela = "<table border='1'>
	                    <thead>
	                        <tr>
	                            <th>NOME</th>
	                            <th>TELEFONE</th>
	                            <th>CELULAR</th>
	                            <th>EMAIL</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                    <tr>";
	        $return = "$tabela";

	        echo ("passou do if ");

	        // Captura os dados da consulta e inseri na tabela HTML
	        while ($linha = mysql_fetch_array($result)) {
	            $return.= "<td>" . utf8_encode($linha["NOME"]) . "</td>";
	            $return.= "<td>" . utf8_encode($linha["FONE"]) . "</td>";
	            $return.= "<td>" . utf8_encode($linha["CELULAR"]) . "</td>";
	            $return.= "<td>" . utf8_encode($linha["EMAIL"]) . "</td>";
	            $return.= "</tr>";

	            echo ("passou do while");
	        }
	        echo $return.="</tbody></table>";
	    } else {
	        // Se a consulta não retornar nenhum valor, exibi mensagem para o usuário
	        echo "Não foram encontrados registros!";
	    }
}


/*
$request = $_SERVER['REQUEST_METHOD'] == 'GET' ? $_GET : $_POST;

	switch ($request['acao']) {

		case "login":

		$email = $_POST['email'];
		$senha = $_POST['senha'];

		echo $email;
		echo $senha;

		break;

	}
*/

  //mysqli_connect('localhost', 'root','')or die();	//Conecta com o MySQL
  //mysqli_select_db(mysqli_connect(),'app');						//Seleciona banco de dados

  $conecta = new mysqli('localhost', 'root', '', 'app' );
  
  $login=$_POST['login'];	//Pegando dados passados por AJAX
  $senha=$_POST['senha'];
  
  //Consulta no banco de dados
  $sql="select * from usuario where email='".$login."' and senha='".$senha."'"; 
  $resultados = mysqli_query($conecta, $sql)or die (mysql_error());
  $res=mysqli_fetch_array($resultados); //
	if (@mysqli_num_rows($resultados) == 0){
		echo 0;	//Se a consulta não retornar nada é porque as credenciais estão erradas
	}
	
	else{
		echo 1;	//Responde sucesso
		if(!isset($_SESSION)) 	//verifica se há sessão aberta
		session_start();		//Inicia seção
		//Abrindo seções
		$_SESSION['usuarioID']=$res['id']; 		
		$_SESSION['nomeUsuario']=$res['nome'];
		$_SESSION['email']=$res['email'];	
		exit;	
	}

?>


