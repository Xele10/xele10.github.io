<?php
$titulo = "Buscador";
session_start();
$logincorrecto = false;

include("conexion.php");
include("cabecera.php");

?>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br><br><br>
            <div class="row justify-content-center padding">
                <div class="col-md-8 ftco-animate fadeInUp ftco-animated">
                    <form action="#" method="POST" class="domain-form">
                        <div class="form-group d-md-flex">
                            <input type="text" class="form-control px-10" name="busqueda" id="busqueda" placeholder="Búsqueda del producto">
                            <input type="submit" class="search-domain btn btn-primary px-10" name="enviar" id="enviar" value="Enviar">
                        </div>
                    </form>
                </div>
            </div>

            <?php
            if ((isset($_POST["enviar"])) && (!empty($_POST["enviar"]))) {

                $busqueda = $_POST["busqueda"];

                $productos = "SELECT * FROM productos WHERE Titulo LIKE '%$busqueda%' OR Descripcion LIKE '%$busqueda%' OR Categoria LIKE '%$busqueda%' OR Categoria2 LIKE '%$busqueda%' OR Modelo LIKE '%$busqueda%'";
                $resultadoProductos = mysqli_query($conexion, $productos);

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
                };

                ?>
                </div>
        </div>
    </div>
    <br><br><br><br><br><br><br>
    <?php
    include("pie.php");
    ?>