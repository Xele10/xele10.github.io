<?php
session_start();

include("conexion.php");

$id_producto = isset($_GET['id_producto']) ? $_GET['id_producto'] : "";
$Titulo = isset($_GET['Titulo']) ? $_GET['Titulo'] : "";
$id_usuario = 1;

$query = "DELETE FROM carrito WHERE id_producto=? AND id_usuario=?";

$stmt = $con->prepare($query);

$stmt->bindParam(1, $id_producto);
$stmt->bindParam(2, $id_usuario);

if ($stmt->execute()) {
    header('Location: carro.php?action=removed&id_producto=' . $id_producto . '&Titulo=' . $Titulo);
}else {
    header('Location: carro.php?action=failed&id_producto=' . $id_producto . '&Titulo=' . $Titulo);
}
?>