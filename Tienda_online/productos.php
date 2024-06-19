<?php
$titulo = "Productos";
session_start();

include("conexion.php");
$logincorrecto = false;

include("cabecera.php");

echo "<br><br><br><br><center><div class='container'>
    <div class='row'>
        <div class='col-md-12'>";

$listarProductos = "SELECT * FROM productos";
$resultadoProductos = mysqli_query($conexion, $listarProductos);

echo "<h2>Todos los productos</h2><br><br>";

?>
<div class="row">
    <?php
    while ($fila = mysqli_fetch_array($resultadoProductos)) {
    ?>

        <div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="<?= $fila["Fotos"] ?>">
                        <img class="pic-2" src="<?= $fila["Fotos2"] ?>">
                    </a>
                    <ul class="social">
                        <li><a href="descripcionProductos.php" data-tip="Ver detalles"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Añadir a Deseos"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="carrito.php" data-tip="Añadir al carrito"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a class="add-to-cart" href="carrito.php">Añadir al carrito</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="descripcionProductos.php"><?= $fila["Titulo"] ?></a></h3>
                    <span class="price text-danger"><?= $fila["Precio"] ?> €</span>
                </div>
            </div>
        </div>

    <?php
    }
    echo "</div>
        </div>
      </div>
    </div></center><br><br>";
    // };

    include("pie.php");
    ?>