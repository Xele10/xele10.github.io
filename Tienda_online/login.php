<?php
$titulo = "Iniciar sesión";

include("cabecera.php");
?>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br><br>
            <?php
            if (isset($_GET["error"])) {
                echo "<br><br><center><b><h4 style='color: red;'>Usuario o contraseña no válidos.</h4></b></center>";
            }
            ?>

            <div id="login">
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form" action="comprobarlogin.php" method="post">
                                    <h3 class="text-center text-info">Iniciar sesión</h3>
                                    <div class="form-group">
                                        <label for="username" class="text-info">Usuario</label><br>
                                        <input type="text" name="usuario" id="usuario" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="text-info">Contraseña</label><br>
                                        <input type="password" name="contrasena" id="contrasena" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="remember-me" class="text-info"><span>Recuérdame</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                        <input type="submit" name="submit" class="btn btn-info btn-md" value="Enviar">
                                    </div>
                                    <div id="register-link" class="text-right">
                                        <a href="registro.php" class="text-info">Regístrate</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<?php
include("pie.php");
?>