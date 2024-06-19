<?php
include("conexion.php");

$usuario = $_POST["usuario"];
$contrasena = $_POST["contrasena"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$direccion = $_POST["direccion"];
$cp = $_POST["cp"];
$provincia = $_POST["provincia"];
$rol = "Cliente";


$insertUsuario = "INSERT INTO usuarios (usuario, contrasena, email, telefono, direccion, cp, provincia, rol)
                    VALUES ('$usuario', '$contrasena', '$email', $telefono, '$direccion', $cp, '$provincia', '$rol')";

$resultado = mysqli_query($conexion, $insertUsuario);

// if (isset($_SESSION["nombreusuario"]) && $_SESSION["contrasenausuario"]) {
//     echo "Usuario/a registrado correctamente";
// };

?>