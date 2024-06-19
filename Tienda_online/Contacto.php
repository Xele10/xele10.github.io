<?php
$titulo = "Contacto";

include("cabecera.php");
?>

<style>
    body {
        font-family: 'Rubik', sans-serif;
        color: #757575;
        font-size: 18px;
        line-height: 32px;
    }

    .thm-container {
        width: 100%;
        max-width: 1200px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .contact-form-content {
        background: #F5F6FA;
        padding: 80px 0;
        padding-left: 80px;
        padding-right: 80px;
    }

    .thm-container .title {
        margin-bottom: 50px;
    }

    .thm-container .title span {
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        color: #FF4328;
    }

    .thm-container .title h2 {
        color: #212121;
        font-size: 60px;
        line-height: 60px;
        font-weight: bold;
    }

    .contact-form input,
    .contact-form textarea {
        border: none;
        outline: none;
        width: 100%;
        height: 68px;
        border-radius: 35px;
        background: #fff;
        color: #757575;
        font-size: 16px;
        padding-left: 50px;
        margin-bottom: 20px;
        display: block;
    }

    .contact-form textarea {
        height: 182px;
        padding-top: 20px;
    }

    .thm-btn {
        border: none;
        outline: none;
        display: inline-block;
        vertical-align: middle;
        background: #5a7091;
        color: white;
        border-radius: 35px;
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 16px;
        padding: 18px 69px;
        -webkit-transition: all .4s;
        transition: all .4s;
    }

    .contact-info {
        margin-left: -30px;
        border: 2px solid #EBEDF4;
        padding-top: 75px;
        padding-bottom: 80px;
    }

    .single-contact-info h4 {
        color: #212121;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .contact-info .social a {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: #fff;
        font-size: 18px;
        line-height: 59px;
        text-align: center;
        line-height: 50px;
        margin-top: 10px;
        display: inline-block;
        font-family: FontAwesome;
        margin: 5px;
    }

    .contact-info .social a.fa-twitter {
        background: #FEC931;
    }

    .contact-info .social a.fa-pinterest {
        background: #212121;
    }

    .contact-info .social a.fa-facebook-f {
        background: #2884C6;
    }

    .contact-info .social a.fa-youtube {
        background: #FF4328;
    }
</style>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-8">
                    <div class="contact-form-content">
                        <div class="title">
                            <span>Contáctanos</span>
                            <h2>Enviar mensaje</h2>
                        </div>
                        <form method="POST" action="procesarContacto" class="contact-form" novalidate="novalidate">
                            <input type="text" name="name" placeholder="Nombre y apellidos" required>
                            <input type="text" name="email" placeholder="Email" required>
                            <textarea name="message" placeholder="¿Qué pregunta desea hacernos?" required></textarea>
                            <button type="submit" class="thm-btn blue-bg">Enviar</button>
                            <div class="form-result"></div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-info text-center">
                        <div class="title text-center">
                            <span>Información de contacto</span>
                            <h2>Detalles</h2>
                        </div>
                        <div class="single-contact-info">
                            <h4>Dirección</h4>
                            <p>Alicante, <br>España</p>
                        </div>
                        <div class="single-contact-info">
                            <h4>Teléfono</h4>
                            <p>67217700<br> </p>
                        </div>
                        <div class="single-contact-info">
                            <h4>Email</h4>
                            <p>soporteayuda@greatbuyout.com <br> </p>
                        </div>
                        <div class="single-contact-info">
                            <h4>Síguenos</h4>
                            <div class="social">
                                <a href="#" class="fab fa-twitter hvr-pulse"></a>
                                <a href="#" class="fab fa-facebook-f hvr-pulse"></a>
                                <a href="#" class="fab fa-youtube hvr-pulse"></a>
                            </div>
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