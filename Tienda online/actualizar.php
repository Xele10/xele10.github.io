<?php
session_start();

include("conexion.php");

$id_producto = isset($_GET['id_producto']) ? $_GET['id_producto'] : "";
$Titulo = isset($_GET['Titulo']) ? $_GET['Titulo'] : "";
$cantidad = isset($_GET['cantidad']) ? $_GET['cantidad'] : "";
$cantidad=intval($cantidad);
$id_usuario=1;
 
$query = "UPDATE carrito SET cantidad=? WHERE d_producto=? AND id_usuario=?";
 
$stmt = $con->prepare($query);
 
$stmt->bindParam(1, $cantidad);
$stmt->bindParam(2, $id_producto);
$stmt->bindParam(3, $id_usuario);
 
if($stmt->execute()){
    header('Location: carrito.php?action=cantidad_updated&id_producto=' . $id_producto . '&Titulo=' . $Titulo);
}
 
else{
    header('Location: carrito.php?action=failed&id_producto=' . $id_producto . '&Titulo=' . $Titulo);
}
