<?php
$titulo = "Carrito de la compra";

include("conexion.php");

include("cabecera.php");

$listarProductos = "SELECT * FROM productos WHERE id_producto= '{$_GET["id_producto"]}'";
$resultadoProductos = mysqli_query($conexion, $listarProductos);

?>
    <?php
    while ($fila = mysqli_fetch_array($resultadoProductos)) {
    ?>

<div class="container">
    <div class="row">
        <div class="col-md-12">


        </div>
    </div>
</div>

<?php
}
?>


<?php
include("pie.php");
?>