<?php
$titulo = "Panel de Administración";

session_start();

include("conexion.php");

include("cabecera.php");

$usuario = $_SESSION["nombreusuario"];
$contrasena = $_SESSION["contrasenausuario"];

$consultaUsuarios = "SELECT * FROM usuarios";
$resultUsuarios = mysqli_query($conexion, $consultaUsuarios);

$consultaProductos = "SELECT * FROM productos";
$resultProductos = mysqli_query($conexion, $consultaProductos);

$consultaLogs = "SELECT * FROM logs";
$resultLogs = mysqli_query($conexion, $consultaLogs);

$consultaCarrito = "SELECT * FROM carrito";
$resultCarrito = mysqli_query($conexion, $consultaCarrito);

$consultaTickets = "SELECT * FROM tickets";
$resultTickets = mysqli_query($conexion, $consultaTickets);

$consultaSuscripciones = "SELECT * FROM suscripciones";
$resultSuscripciones = mysqli_query($conexion, $consultaSuscripciones);


?>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<style>
    .panel-body .btn:not(.btn-block) {
        width: 120px;
        margin-bottom: 10px;
    }

    .filterable {
        margin-top: 15px;
    }

    .filterable .panel-heading .pull-right {
        margin-top: -20px;
    }

    .filterable .filters input[disabled] {
        background-color: transparent;
        border: none;
        cursor: auto;
        box-shadow: none;
        padding: 0;
        height: auto;
    }

    .filterable .filters input[disabled]::-webkit-input-placeholder {
        color: #333;
    }

    .filterable .filters input[disabled]::-moz-placeholder {
        color: #333;
    }

    .filterable .filters input[disabled]:-ms-input-placeholder {
        color: #333;
    }
</style>


<div class="container">
    <div class="row">
        <div class="col-md-12">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title justify-content-center">
                                    <br><br><span class="glyphicon glyphicon-bookmark"></span> Accesos directos
                                </h3>
                            </div>
                            <div class="panel-body justify-content-center">
                                <div class="row justify-content-center">
                                    <div class="col-xs-6 col-md-6 justify-content-center">
                                        <a href="#Carrito" class="btn btn-danger btn-lg" role="button"><span class="glyphicon glyphicon-list-alt"></span> <br />Carrito</a>
                                        <a href="#Productos" class="btn btn-warning btn-lg" role="button"><span class="glyphicon glyphicon-bookmark"></span> <br />Productos</a>
                                        <a href="#Suscripciones" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-signal"></span> <br />Suscripciones</a>
                                        <a href="#Tickets" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-comment"></span> <br />Tickets</a>
                                    </div>
                                    <div class="col-xs-6 col-md-6">
                                        <a href="#Usuarios" class="btn btn-success btn-lg" role="button"><span class="glyphicon glyphicon-user"></span> <br />Usuarios</a>
                                        <a href="#Notas" class="btn btn-info btn-lg" role="button"><span class="glyphicon glyphicon-file"></span> <br />Notas</a>
                                        <a href="#Fotos" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-picture"></span> <br />Fotos</a>
                                        <a href="#Logs" class="btn btn-primary btn-lg" role="button"><span class="glyphicon glyphicon-tag"></span> <br />Logs</a>
                                    </div>
                                </div>
                                <a href="index.php" class="btn btn-success btn-lg btn-block" role="button"><span class="glyphicon glyphicon-globe"></span> GreatBuyOut</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Usuarios"></a>
                            <h3 class="panel-title">Usuarios</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_cliente" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Usuario" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="email" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Telefono" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Direccion" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="CP" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Provincia" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Rol" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Apellidos" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Contraseña" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Nombre" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultUsuarios)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_Cliente"] ?></td>
                                        <td><?= $fila["Usuario"] ?></td>
                                        <td><?= $fila["email"] ?></td>
                                        <td><?= $fila["Telefono"] ?></td>
                                        <td><?= $fila["Direccion"] ?></td>
                                        <td><?= $fila["Cp"] ?></td>
                                        <td><?= $fila["Provincia"] ?></td>
                                        <td><?= $fila["Rol"] ?></td>
                                        <td><?= $fila["Apellidos"] ?></td>
                                        <td><?= $fila["Contrasena"] ?></td>
                                        <td><?= $fila["Nombre"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Productos"></a>
                            <h3 class="panel-title">Productos</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_producto" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Titulo" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Descripcion" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Categoria" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Oferta" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Categoria2" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos2" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="PrecioOferta" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Cantidad" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="SKU" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Modelo" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Color" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Talla" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Destacado" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos3" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos4" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos5" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos6" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos7" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos8" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos9" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fotos10" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Creado" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Modificado" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultProductos)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_producto"] ?></td>
                                        <td><?= $fila["Titulo"] ?></td>
                                        <td><?= $fila["Descripcion"] ?></td>
                                        <td><?= $fila["Fotos"] ?></td>
                                        <td><?= $fila["Categoria"] ?></td>
                                        <td><?= $fila["Oferta"] ?></td>
                                        <td><?= $fila["Categoria2"] ?></td>
                                        <td><?= $fila["Fotos2"] ?></td>
                                        <td><?= $fila["PrecioOferta"] ?></td>
                                        <td><?= $fila["SKU"] ?></td>
                                        <td><?= $fila["Modelo"] ?></td>
                                        <td><?= $fila["Color"] ?></td>
                                        <td><?= $fila["Talla"] ?></td>
                                        <td><?= $fila["Destacado"] ?></td>
                                        <td><?= $fila["Fotos3"] ?></td>
                                        <td><?= $fila["Fotos4"] ?></td>
                                        <td><?= $fila["Fotos5"] ?></td>
                                        <td><?= $fila["Fotos6"] ?></td>
                                        <td><?= $fila["Fotos7"] ?></td>
                                        <td><?= $fila["Fotos8"] ?></td>
                                        <td><?= $fila["Fotos9"] ?></td>
                                        <td><?= $fila["Fotos10"] ?></td>
                                        <td><?= $fila["Creado"] ?></td>
                                        <td><?= $fila["Modificado"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Logs"></a>
                            <h3 class="panel-title">Logs</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_log" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="log_inicio" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="log_fin" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="status_log" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Usuario" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Contraseña" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultLogs)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_log"] ?></td>
                                        <td><?= $fila["log_inicio"] ?></td>
                                        <td><?= $fila["log_fin"] ?></td>
                                        <td><?= $fila["status_log"] ?></td>
                                        <td><?= $fila["Usuario"] ?></td>
                                        <td><?= $fila["Contrasena"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Carrito"></a>
                            <h3 class="panel-title">Carrito</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_carrito" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="id_usuario" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="id_producto" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="cantidad" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="creado" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="modificado" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="estado" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="total" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultCarrito)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_carrito"] ?></td>
                                        <td><?= $fila["id_usuario"] ?></td>
                                        <td><?= $fila["id_producto"] ?></td>
                                        <td><?= $fila["cantidad"] ?></td>
                                        <td><?= $fila["creado"] ?></td>
                                        <td><?= $fila["modificado"] ?></td>
                                        <td><?= $fila["estado"] ?></td>
                                        <td><?= $fila["total"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Tickets"></a>
                            <h3 class="panel-title">Tickets</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_Ticket" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Usuario" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="email" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Texto" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Fecha" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="Estado" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultTickets)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_Ticket"] ?></td>
                                        <td><?= $fila["Usuario"] ?></td>
                                        <td><?= $fila["email"] ?></td>
                                        <td><?= $fila["Texto"] ?></td>
                                        <td><?= $fila["Fecha"] ?></td>
                                        <td><?= $fila["Estado"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <hr>
                <div class="row justify-content-center">
                    <div class="panel panel-primary filterable">
                        <div class="panel-heading">
                            <a name="Suscripciones"></a>
                            <h3 class="panel-title">Suscripciones</h3>
                            <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-cog" style="margin-right: 0px;"></span>
                                </button>
                                <ul class="dropdown-menu slidedown">
                                    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>Editar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-trash"></span>Borrar</a></li>
                                    <li><a href="#"><span class="glyphicon glyphicon-flag"></span>Marcar</a></li>
                                </ul>
                            </div>

                            <div class="pull-right">
                                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filtro</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr class="filters">
                                    <th><input type="text" class="form-control" placeholder="id_suscripciones" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="fecha" disabled></th>
                                    <th><input type="text" class="form-control" placeholder="email" disabled></th>
                                    <th><input type="button" class="form-control" value="Opciones" placeholder="Opciones"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                while ($fila = mysqli_fetch_array($resultSuscripciones)) {
                                ?>
                                    <tr>
                                        <td><?= $fila["id_suscripciones"] ?></td>
                                        <td><?= $fila["fecha"] ?></td>
                                        <td><?= $fila["email"] ?></td>
                                        <td>
                                            <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>
                                            <a href="#" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                            <a href="#" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                                        </td>
                                    </tr>
                                <?php
                                }
                                ?>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('.filterable .btn-filter').click(function() {
            var $panel = $(this).parents('.filterable'),
                $filters = $panel.find('.filters input'),
                $tbody = $panel.find('.table tbody');
            if ($filters.prop('disabled') == true) {
                $filters.prop('disabled', false);
                $filters.first().focus();
            } else {
                $filters.val('').prop('disabled', true);
                $tbody.find('.no-result').remove();
                $tbody.find('tr').show();
            }
        });

        $('.filterable .filters input').keyup(function(e) {
            var code = e.keyCode || e.which;
            if (code == '9') return;
            var $input = $(this),
                inputContent = $input.val().toLowerCase(),
                $panel = $input.parents('.filterable'),
                column = $panel.find('.filters th').index($input.parents('th')),
                $table = $panel.find('.table'),
                $rows = $table.find('tbody tr');
            var $filteredRows = $rows.filter(function() {
                var value = $(this).find('td').eq(column).text().toLowerCase();
                return value.indexOf(inputContent) === -1;
            });
            $table.find('tbody .no-result').remove();
            $rows.show();
            $filteredRows.hide();
            if ($filteredRows.length === $rows.length) {
                $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">Sin resultados</td></tr>'));
            }
        });
    });
</script>
<?php
include("pie.php");
?>