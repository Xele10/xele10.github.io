<?php
        // $conexion = mysqli_connect("localhost", "root", "", "bd-tienda");
		$conexion = mysqli_connect('sql202.byethost7.com', 'b7_28536422', 'joseTienda1.', 'b7_28536422_bdtienda');

        if (mysqli_connect_errno()) {
            echo 'Mysql error al conectar: ' . mysqli_connect_errno();
            exit;
        }
?>