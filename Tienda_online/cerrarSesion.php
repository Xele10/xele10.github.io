<?php
$titulo = "Cerrar sesión";

session_start();
session_destroy();

header("Location: index.php");
?>