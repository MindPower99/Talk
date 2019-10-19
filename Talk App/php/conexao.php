<?php
header('Access-Control-Allow-Origin: *');
$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbname = "app";

$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);

?>