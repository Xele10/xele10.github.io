<?php
$titulo = "Registro";

session_start();

// if(isset($_POST["btRegistrar"])){
//     $sql="insert ....";

//     if(insert es correcta){
//         header("location: login.php");
//         die();
//     }

// }


include("cabecera.php");
?>

<div class="container">
    <div class="row">
        <div class="col-md-12">

            <br><br><br>


            <form action="procesarregistro.php" method="POST" class="needs-validation" novalidate>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom01">Nombre de usuario</label>
                        <input type="text" class="form-control" name="usuario" id="usuario" placeholder="Nombre de usuario" value="" required>
                        <div class="valid-feedback">

                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom02">Apellidos</label>
                        <input type="text" class="form-control" name="apellidos" id="apellidos" placeholder="Apellidos" value="" required>
                        <div class="valid-feedback">

                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom02">Contraseña</label>
                        <input type="password" class="form-control" name="contrasena" id="contrasena" placeholder="Contraseña" value="" required>
                        <div class="valid-feedback">

                        </div>
                    </div>

                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03">Dirección</label>
                        <input type="text" class="form-control" name="direccion" id="direccion" placeholder="Dirección" required>
                        <div class="invalid-feedback">

                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom04">Provincia</label>
                        <input type="text" class="form-control" name="provincia" id=provincia" placeholder="Provincia" required>
                        <div class="invalid-feedback">

                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom05">CP</label>
                        <input type="text" class="form-control" name="cp" id="cp" placeholder="CP" required>
                        <div class="invalid-feedback">

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-6">
                            <label for="validationCustom03">Teléfono</label>
                            <input type="tel" class="form-control" name="telefono" id="telefono" style="width: 200px" placeholder="Teléfono" required><br><br>
                            <div class="invalid-feedback">

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername">Email</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="email" class="form-control" name="email" id="email" placeholder="ejemplo@servidor.com" aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback">

                            </div>
                        </div>
                    </div>

                </div>
                <div class="form-group">
                    <a href="login.php">Ya tengo una cuenta.</a><br><br>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                            <a href="Condicionesdelservicio.php">Acepto los términos y condiciones.</a>
                        </label>
                        <div class="invalid-feedback">

                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>

            <script>
                (function() {
                    'use strict';
                    window.addEventListener('load', function() {
                        var forms = document.getElementsByClassName('needs-validation');
                        var validation = Array.prototype.filter.call(forms, function(form) {
                            form.addEventListener('submit', function(event) {
                                if (form.checkValidity() === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                                form.classList.add('was-validated');
                            }, false);
                        });
                    }, false);
                })();
            </script>

        </div>
    </div>
</div>

<?php
include("pie.php");
?>