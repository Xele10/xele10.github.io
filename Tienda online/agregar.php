<?php

session_start();

include("conexion.php");

$id_carrito = isset($_GET['id_carrito']) ?  $_GET['id_carrito'] : die;
$Titulo = isset($_GET['Titulo']) ?  $_GET['Titulo'] : die;
$cantidad  = isset($_GET['cantidad']) ?  $_GET['cantidad'] : die;
$id_usuario = 1;
$creado = date('Y-m-d H:i:s');

$query = "INSERT INTO carrito SET id_producto=?, cantidad=?, id_usuario=?, creado=?";

$stmt = $con->prepare($query);

$stmt->bindParam(1, $id_carrito);
$stmt->bindParam(2, $cantidad);
$stmt->bindParam(3, $id_usuario);
$stmt->bindParam(4, $creado);

if ($stmt->execute()) {
    header('Location: productos.php?action=added&id_carrito=' . $id_carrito . '&Titulo=' . $Titulo);
}

else {
    header('Location: productos.php?action=failed&id_carrito=' . $id_carrito . '&Titulo=' . $Titulo);
}

?>