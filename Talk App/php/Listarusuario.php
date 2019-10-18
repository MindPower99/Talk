<?php
include_once "conexão.php"

$result_usuario = "SELECT * FROM usuario ORDER BY id DESC";
$resultado_usuario = mysqli_query($conn,$result_usuario);

if(($resultado_usuario) AND ($resultado_usuario->num_rows != 0)) {
    while($row_usuario = mysqli_fetch_assoc($resultado_usuario)) {
        echo $row_usuario['nome'] . '<br>';
    }
}
else {
    
}
?>