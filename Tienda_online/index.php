<?php
$titulo = "Inicio";
session_start();

include("conexion.php");
$logincorrecto = false;

include("cabecera.php");
include("slider.php");

// if (isset($_SESSION["nombreusuario"]) && $_SESSION["nombreusuario"]) {
echo "<br><br><br><br><center><div class='container'>
    <div class='row'>
        <div class='col-md-12'>
           <!-- <h3>Bienvenido/a</h3> -->";
$listarProductos = "SELECT * FROM productos WHERE destacado='si'";
$resultadoProductos = mysqli_query($conexion, $listarProductos);
echo "<h2>Productos Destacados</h2><br><br>";

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
                        <li><a href="descripcionProductos.php?id_producto=<?= $fila["id_producto"] ?>" data-tip="Ver detalles"><i class="fa fa-eye"></i></a></li>
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

    ?>

    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <center><br><br>
                    <p>Tienda online con productos de ocasión. Te ofrecemos artículos de diferentes temáticas con increíbles ofertas y descuentos constantes jamás vistos en España, con total seguridad y garantía de entrega.

                        Ahora con envío gratis a España y con posibilidad a todas partes del mundo.</p>


                    <h3>
                        Regalo de auricular inalámbrico al añadir a tu carrito un mínimo de 15€ en productos.

                        Aprovecha esta promoción de apertura. Por hacer una compra de mínimo 15€ podrás obtener automáticamente el regalo.

                        Añade una reseña tras realizar el pedido y recibirás un descuento en tu próxima compra.
                    </h3><br><br><br>
                </center>
                <?php
                if (isset($_SESSION["nombreusuario"]) && $_SESSION["nombreusuario"]) {
                    echo "<br><br><center><div class='container'>
    <div class='row'>
        <div class='col-md-12'>
            <h3>PRODUCTOS DESTACADOS</h3>
            
            " . "
        </div>
      </div>
    </div></center><br><br>";
                };
                ?>
                <center>
                    <h4 class="h2">NO TE PIERDAS NADA</h4>
            </div>
            </center>

            <div class="custom-content">



                <div class="custom__item custom__item--text custom__item--1589907298607-0  one-whole align--center">
                    <div class="custom__item-inner custom__item-inner--text">

                        <div class="medium-up--text-center">
                            <center>
                                <h4 class="h3">@greatbuyout</h4>


                                <div class="rte-setting rte">
                                    <p>Visita nuestro Instagram y Facebook para estar al tanto de los últimos productos, descuentos exclusivos, concursos, etc.</p>
                                </div>
                            </center>

                        </div>
                    </div>
                    <?php
                    include("pie.php");
                    ?>