<?php
session_start();

include("conexion.php");
$logincorrecto = false;
$usuario = $_POST["usuario"];
$contrasena = $_POST["contrasena"];

$consultaUsuario = "SELECT usuario, contrasena FROM usuarios WHERE usuario ='$usuario' AND contrasena='$contrasena'";
$resultadoConsulta = mysqli_query($conexion, $consultaUsuario);

while ($fila = mysqli_fetch_array($resultadoConsulta)) {
    $logincorrecto = true;
}


if ($logincorrecto) {
    $_SESSION["estaregistrado"] = true;
    $_SESSION["nombreusuario"] = $_POST["usuario"];
    $_SESSION["contrasenausuario"] = $_POST["contrasena"];
    $fechaActual = date('d-m-Y h:i:s a', time());

    $insertLog = "INSERT INTO logs (log_inicio, status_log, Usuario, Contrasena) VALUES ('$fechaActual', 'OK inicio', '$usuario', '$contrasena')";
    $insertUsuario = mysqli_query($conexion, $insertLog);

    header('location: index.php');
} else {
    $insertLog = "INSERT INTO logs (log_inicio, status_log, Usuario, Contrasena) VALUES ('$fechaActual', 'Inicio fallido', '$usuario', '$contrasena')";
    $insertUsuario = mysqli_query($conexion, $insertLog);

    header('location: login.php?error=S');
}