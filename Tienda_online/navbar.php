<?php
include("conexion.php");
$logincorrecto = false;
?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="index.php">&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGreat BuyOut</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class=" nav-item">
                <a class="nav-link" href="index.php" style="font-size: 20px;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Inicio &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="productos.php" style="font-size: 20px;">Productos &nbsp&nbsp&nbsp&nbsp</a>
            </li>
            <form action="buscadr.php" method="POST" class="form-inline">
                <a href="buscador.php"><img src="imagenes/buscar.png" alt="buscar" class="carrito" style="filter: brightness(50%);" onmouseover="this.src='imagenes/buscar2.png';" onmouseout="this.src='imagenes/buscar.png';"></a>

                <li class="nav-item">
                    <a class="nav-link" href="buscador.php" style="font-size: 20px;">Buscador &nbsp&nbsp&nbsp&nbsp</a>
                </li>
            </form>
        </ul>

        <!-- <input class="form-control mr-sm-2" style="width: 150px;" type="search" name="busqueda" id="busqueda" placeholder="Buscar" aria-label="Buscar"> -->

        <!-- <a href="carrito.php"><img src="imagenes/carrito.png" alt="carrito" class="icono" style="width: 40px; filter: brightness(50%);"></a>&nbsp&nbsp&nbsp&nbsp&nbsp -->
        <?php
        if (isset($_SESSION["nombreusuario"]) && $_SESSION["nombreusuario"]) {
            echo "<a href='perfil.php'><img src='imagenes/usuario.png' alt='usuario' class='icono' style='width: 40px; filter: brightness(50%);' onmouseover='this.src='imagenes/usuario2.png';' onmouseout='this.src='imagenes/usuario.png';'></a>&nbsp&nbsp&nbsp&nbsp&nbsp";
        }
        ?>
        <!-- <a href="carrito.php"><img src="imagenes/tienda.png" alt="carrito" class="carrito" style="width: 40px; filter: brightness(50%);" onmouseover="this.src='imagenes/tienda2.png';" onmouseout="this.src='imagenes/tienda.png';"></a>&nbsp&nbsp&nbsp&nbsp&nbsp -->
        <img src="imagenes/tienda.png" alt="carrito" class="carrito" style="width: 40px; filter: brightness(50%);" onmouseover="this.src='imagenes/tienda2.png';" onmouseout="this.src='imagenes/tienda.png';" />
        
        <?php
        if (isset($_SESSION["nombreusuario"]) && $_SESSION["nombreusuario"]) {
        echo "<a class='btn btn-outline-info my-2 my-sm-0' href='cerrarSesion.php' type='submit'>Cerrar sesión</a>&nbsp&nbsp&nbsp&nbsp <!-- style='background-color:#337cc0; color:white' -->";
        }else{
            echo "<a class='btn btn-outline-info my-2 my-sm-0' href='login.php' type='submit'>Login</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <!-- style='background-color:#337cc0; color:white' -->";

        }
        ?>
    </div>
</nav>