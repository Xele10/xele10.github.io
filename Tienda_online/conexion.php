<?php
    $conexion = mysqli_connect("localhost", "root", "", "bd-tienda");

    if (mysqli_connect_errno()) {
        echo 'Mysql error al conectar: ' . mysqli_connect_errno();
        exit;
    }
?>