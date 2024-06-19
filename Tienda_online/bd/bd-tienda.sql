-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2021 a las 19:31:30
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd-tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logs`
--

CREATE TABLE `logs` (
  `id_log` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `log_inicio` varchar(60) NOT NULL,
  `log_fin` varchar(60) DEFAULT NULL,
  `status_log` varchar(50) DEFAULT NULL,
  `Usuario` varchar(30) DEFAULT NULL,
  `Contrasena` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `logs`
--

INSERT INTO `logs` (`id_log`, `log_inicio`, `log_fin`, `status_log`, `Usuario`, `Contrasena`) VALUES
('2021-04-30 17:11:08.662355', '30-04-2021 07:11:08 pm', NULL, 'OK inicio', 'Jose', 'josejose1'),
('2021-04-30 17:11:40.677171', '30-04-2021 07:11:40 pm', NULL, 'OK inicio', 'Jose', 'josejose1'),
('2021-04-30 17:14:58.589039', '30-04-2021 07:14:58 pm', NULL, 'OK inicio', 'Jose', 'josejose1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL,
  `Titulo` varchar(150) NOT NULL,
  `Descripcion` varchar(2000) NOT NULL,
  `Fotos` varchar(300) NOT NULL,
  `Categoria` varchar(30) NOT NULL,
  `Oferta` varchar(50) DEFAULT NULL,
  `Precio` decimal(6,0) NOT NULL,
  `Categoria2` varchar(50) DEFAULT NULL,
  `Fotos2` varchar(300) DEFAULT NULL,
  `PrecioOferta` decimal(6,0) DEFAULT NULL,
  `Cantidad` int(255) DEFAULT NULL,
  `SKU` varchar(400) DEFAULT NULL,
  `Modelo` varchar(30) DEFAULT NULL,
  `Color` varchar(30) DEFAULT NULL,
  `Talla` varchar(30) DEFAULT NULL,
  `Destacado` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `Titulo`, `Descripcion`, `Fotos`, `Categoria`, `Oferta`, `Precio`, `Categoria2`, `Fotos2`, `PrecioOferta`, `Cantidad`, `SKU`, `Modelo`, `Color`, `Talla`, `Destacado`) VALUES
(1, 'Placa Base x99-TF + Xeon E5 2678v3 HUANAN', 'Pack combo kit Placa Base x99-TF + Xeon E5 2678V3 to 3.2Ghz + 32gb de ram Ordenador listo. Tiene un rendimiento muy alto, válido para juegos en ultra 1080p y más, streaming, renderizado. No se elevan las temperaturas, rápido y se le puede hacer OverClock (aumentar más los Ghz, rapidez y rendimiento de RAM y procesador). Un año de garantía. - Placa Base X99-TF server LGA 2011-3 apoyo de M.2 NVME SSD. - CPU procesador Xeon E5 2678V3 de 12 nucleos, 24 hilos a 2.5GHz hasta 3.3GHz caché 3° nivel 30MB 22nm 120W. - 32gb de RAM DDR4 1866 MHz con disipadores. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop.', 'imagenes/productos/x99.jpg', 'teconologia', 'no', '250', NULL, NULL, '240', 20, '2534582o5', 'TF HUANAN', 'Negro', NULL, 'si'),
(2, 'Auriculares inalámbricos Pro i12 TWS', 'Marca: TWS Pro i12 Active Cancelación de ruido: Sí Communicación: Wireless, Bluetooth 5.0. HiFi Volumen Control: Sí Stilo: Ear Hook Sensitivity: 122dB Lista paquete: manual de usuario, cargador, carcasa, auriculares. Rango de impedancia: hasta 32 Connectores: USB Codecs: Apt-X Driver Diameter: 8mm Resistencia: 32 Frequency Rango: 20 - 20000Hz Microphone: Si Charging Method: Charging case portable Magnet Type: Neodymium Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60%.', 'imagenes/productos/i12.jpg', 'tecnologia', 'si', '20', NULL, NULL, '10', 50, '34587to8h3', 'i12', 'Multi', NULL, 'si'),
(3, 'Auriculares inalámbricos TWS iPro i3 Bt5.0 tactil', 'Los mejores auriculares TWS iPro i3 han llegado a GBO al mejor precio. Nueva generación de auriculares inalámbricos de gran calidad con control touch táctil y con muy buen audio y autonomía. - 6 colores diferentes - Más de 3.5 horas de uso - Emparejamiento binaural en un paso - Sonido renderizado HD, cancelación de ruido y Bt 5.0 - Control touch táctil y control smart gesture - Micrófono doble incorporado. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de de descuento', 'imagenes/productos/pro3.jpg', 'tecnologia', 'si', '50', NULL, NULL, '20', 50, 'gofughe4083', 'iPro i3', 'Multi', NULL, 'si'),
(4, 'Smartwatch Y68 reloj deportivo fitness inteligente', 'Marca: ConnectFit Funciones: Monitor del sueño, recordatorio, notificaciones, alarma, frecuencia cardiaca, diferentes modos de deporte para medir tu actividad física, podómetro, presión de sangre, encuentra tu teléfono, nivel de oxígeno en sangre, contador de calorías, distancia recorrida, anti-sedentarismo. Waterproof: IP67 APP: Sí Conectividad: Bluetooth, cualquier teléfono. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de descuento en todos los productos de la tienda.', 'imagenes/productos/smartwatch.jpg', 'deporte', 'no', '20', NULL, NULL, '9', 20, 'sduw4034', 'Y8', 'Multi', NULL, 'si'),
(5, 'Pistola de masaje muscular electrica terapia EMS', 'Os presentamos los nuevos modelos de pistolas de masajes para mejorar su salud y avanzar la recuperación deportiva. Elige de entre los 6 diferentes modelos. Beneficios: - Reduce el tiempo de recuperación - Aumento del flujo de sangre - Descomposición nudos musculares - Relajante experiencia de masaje - Reducción del dolor. - Beneficios para el calentamiento, activación muscular. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de descuento en todos los productos de la tienda.', 'imagenes/productos/pistola.png', 'deporte', 'no', '90', NULL, NULL, '50', 30, 'fsdvjn3408', 'Booster', 'Negro', NULL, 'si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_Cliente` int(255) NOT NULL,
  `Usuario` varchar(30) NOT NULL,
  `email` varchar(80) NOT NULL,
  `Telefono` int(9) DEFAULT NULL,
  `Direccion` varchar(40) DEFAULT NULL,
  `Cp` varchar(9) DEFAULT NULL,
  `Provincia` varchar(40) DEFAULT NULL,
  `Rol` varchar(10) DEFAULT NULL,
  `Apellidos` varchar(200) NOT NULL,
  `Contrasena` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_Cliente`, `Usuario`, `email`, `Telefono`, `Direccion`, `Cp`, `Provincia`, `Rol`, `Apellidos`, `Contrasena`) VALUES
(1, 'Jose', 'jose@html.com', 678934567, 'c9 afhwif', '3123', 'Alicante', 'Admin', 'GG', 'josejose1'),
(6, 'Juan', 'juan@html.com', 674256890, 'asdhjadfj', '1234', 'Alicante', 'cliente', 'HH', 'juanjuan2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id_log`),
  ADD UNIQUE KEY `id_log` (`id_log`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_Cliente`),
  ADD UNIQUE KEY `id_Cliente` (`id_Cliente`),
  ADD UNIQUE KEY `Nombre` (`Usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_Cliente` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
