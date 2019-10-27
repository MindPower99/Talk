
<?php
header('Access-Control-Allow-Origin: *');
session_start(); 	//A seção deve ser iniciada em todas as páginas
if (!isset($_SESSION['usuarioID'])) {		//Verifica se há seções
        session_destroy();						//Destroi a seção por segurança
       	header("Location: file:///C:/Users/Pichau/Desktop/Talk/Talk%20App/index.html"); exit;	//Redireciona o visitante para login
}
?>