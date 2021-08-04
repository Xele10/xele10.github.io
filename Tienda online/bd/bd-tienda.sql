-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2021 a las 00:45:27
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.15

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
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(255) DEFAULT NULL,
  `creado` datetime DEFAULT NULL,
  `modificado` timestamp NULL DEFAULT NULL,
  `estado` enum('1','0') DEFAULT NULL,
  `total` decimal(65,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario`, `id_producto`, `cantidad`, `creado`, `modificado`, `estado`, `total`) VALUES
(1, 2, 2, 2, NULL, NULL, '1', '40');

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
('2021-04-30 17:14:58.589039', '30-04-2021 07:14:58 pm', NULL, 'OK inicio', 'Jose', 'josejose1'),
('2021-04-30 18:42:19.283376', '30-04-2021 08:42:19 pm', NULL, 'OK inicio', 'Jose', 'josejose1'),
('2021-06-08 15:26:05.961829', '', NULL, 'Inicio fallido', 'asdas', 'dsd'),
('2021-06-08 15:26:19.204165', '08-06-2021 05:26:19 pm', NULL, 'OK inicio', 'Prueba', 'prueba123'),
('2021-06-08 15:42:43.407925', '', NULL, 'Inicio fallido', 'sadsd', 'fwfw'),
('2021-06-08 15:42:57.469426', '08-06-2021 05:42:57 pm', NULL, 'OK inicio', 'prueba', 'prueba123'),
('2021-06-08 16:38:31.260967', '', NULL, 'Inicio fallido', 'dfsdfdfdfdfdfdf', 'fgg'),
('2021-06-08 16:42:18.116213', '', NULL, 'Inicio fallido', 'prueba', 'prueba1234'),
('2021-06-08 16:42:26.001145', '08-06-2021 06:42:25 pm', NULL, 'OK inicio', 'prueba', 'prueba123'),
('2021-06-08 16:51:54.848108', '08-06-2021 06:51:54 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 17:01:40.271785', '08-06-2021 07:01:40 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 17:07:10.994048', '08-06-2021 07:07:10 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 17:08:59.846149', '08-06-2021 07:08:59 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 17:11:00.481954', '', NULL, 'Inicio fallido', 'admin', '123456123'),
('2021-06-08 17:11:12.919447', '08-06-2021 07:11:12 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 18:28:27.644935', '', NULL, 'Inicio fallido', 'aaa', 'aa'),
('2021-06-08 18:29:30.954949', '', NULL, 'Inicio fallido', 'admin', '123456'),
('2021-06-08 18:29:44.498624', '', NULL, 'Inicio fallido', 'admin', '123'),
('2021-06-08 18:29:54.957838', '', NULL, 'Inicio fallido', 'admin', '123456admin123'),
('2021-06-08 18:30:24.732968', '08-06-2021 08:30:24 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-08 18:32:41.046042', '08-06-2021 08:32:41 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-09 14:18:19.577815', '', NULL, 'Inicio fallido', 'admin', 'admin1234'),
('2021-06-09 14:18:31.884148', '09-06-2021 04:18:31 pm', NULL, 'OK inicio', 'admin', 'admin123'),
('2021-06-09 19:38:48.266467', '09-06-2021 09:38:48 pm', NULL, 'OK inicio', 'admin', 'ADMIN123'),
('2021-06-09 19:50:52.260711', '09-06-2021 09:50:52 pm', NULL, 'OK inicio', 'admin', 'ADMIN123'),
('2021-06-09 21:54:27.227366', '09-06-2021 11:54:27 pm', NULL, 'OK inicio', 'admin', 'ADMIN123');

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
  `Destacado` varchar(30) DEFAULT NULL,
  `Fotos3` varchar(300) DEFAULT NULL,
  `Fotos4` varchar(300) DEFAULT NULL,
  `Fotos5` varchar(300) DEFAULT NULL,
  `Fotos6` varchar(300) DEFAULT NULL,
  `Fotos7` varchar(300) DEFAULT NULL,
  `Fotos8` varchar(300) DEFAULT NULL,
  `Fotos9` varchar(300) DEFAULT NULL,
  `Fotos10` varchar(300) DEFAULT NULL,
  `Creado` datetime DEFAULT NULL,
  `Modificado` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `Titulo`, `Descripcion`, `Fotos`, `Categoria`, `Oferta`, `Precio`, `Categoria2`, `Fotos2`, `PrecioOferta`, `Cantidad`, `SKU`, `Modelo`, `Color`, `Talla`, `Destacado`, `Fotos3`, `Fotos4`, `Fotos5`, `Fotos6`, `Fotos7`, `Fotos8`, `Fotos9`, `Fotos10`, `Creado`, `Modificado`) VALUES
(1, 'Placa Base x99-TF + Xeon E5 2678v3 HUANAN', 'Pack combo kit Placa Base x99-TF + Xeon E5 2678V3 to 3.2Ghz + 32gb de ram Ordenador listo. Tiene un rendimiento muy alto, válido para juegos en ultra 1080p y más, streaming, renderizado. No se elevan las temperaturas, rápido y se le puede hacer OverClock (aumentar más los Ghz, rapidez y rendimiento de RAM y procesador). Un año de garantía. - Placa Base X99-TF server LGA 2011-3 apoyo de M.2 NVME SSD. - CPU procesador Xeon E5 2678V3 de 12 nucleos, 24 hilos a 2.5GHz hasta 3.3GHz caché 3° nivel 30MB 22nm 120W. - 32gb de RAM DDR4 1866 MHz con disipadores. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop.', 'imagenes/productos/x99.jpg', 'teconologia', 'no', '250', NULL, NULL, '240', 20, '2534582o5', 'TF HUANAN', 'Negro', NULL, 'si', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Auriculares inalámbricos Pro i12 TWS', 'Marca: TWS Pro i12 Active Cancelación de ruido: Sí Communicación: Wireless, Bluetooth 5.0. HiFi Volumen Control: Sí Stilo: Ear Hook Sensitivity: 122dB Lista paquete: manual de usuario, cargador, carcasa, auriculares. Rango de impedancia: hasta 32 Connectores: USB Codecs: Apt-X Driver Diameter: 8mm Resistencia: 32 Frequency Rango: 20 - 20000Hz Microphone: Si Charging Method: Charging case portable Magnet Type: Neodymium Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60%.', 'imagenes/productos/i12.jpg', 'tecnologia', 'si', '20', NULL, NULL, '10', 50, '34587to8h3', 'i12', 'Multi', NULL, 'si', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Auriculares inalámbricos TWS iPro i3 Bt5.0 tactil', 'Los mejores auriculares TWS iPro i3 han llegado a GBO al mejor precio. Nueva generación de auriculares inalámbricos de gran calidad con control touch táctil y con muy buen audio y autonomía. - 6 colores diferentes - Más de 3.5 horas de uso - Emparejamiento binaural en un paso - Sonido renderizado HD, cancelación de ruido y Bt 5.0 - Control touch táctil y control smart gesture - Micrófono doble incorporado. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de de descuento', 'imagenes/productos/pro3.jpg', 'tecnologia', 'si', '50', NULL, NULL, '20', 50, 'gofughe4083', 'iPro i3', 'Multi', NULL, 'si', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Smartwatch Y68 reloj deportivo fitness inteligente', 'Marca: ConnectFit Funciones: Monitor del sueño, recordatorio, notificaciones, alarma, frecuencia cardiaca, diferentes modos de deporte para medir tu actividad física, podómetro, presión de sangre, encuentra tu teléfono, nivel de oxígeno en sangre, contador de calorías, distancia recorrida, anti-sedentarismo. Waterproof: IP67 APP: Sí Conectividad: Bluetooth, cualquier teléfono. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de descuento en todos los productos de la tienda.', 'imagenes/productos/smartwatch.jpg', 'deporte', 'no', '20', NULL, NULL, '9', 20, 'sduw4034', 'Y8', 'Multi', NULL, 'si', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Pistola de masaje muscular electrica terapia EMS', 'Os presentamos los nuevos modelos de pistolas de masajes para mejorar su salud y avanzar la recuperación deportiva. Elige de entre los 6 diferentes modelos. Beneficios: - Reduce el tiempo de recuperación - Aumento del flujo de sangre - Descomposición nudos musculares - Relajante experiencia de masaje - Reducción del dolor. - Beneficios para el calentamiento, activación muscular. Este artículo lo puedes encontrar y comprar en greatbuyout.es, ebay y wallapop, con garantía, envío gratis, cupón de descuento del 5% (GBO5%), todas las facilidades de pago, incluido PayPal y actualmente con un 60% de descuento en todos los productos de la tienda.', 'imagenes/productos/pistola.png', 'deporte', 'no', '90', NULL, NULL, '50', 30, 'fsdvjn3408', 'Booster', 'Negro', NULL, 'si', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripciones`
--

CREATE TABLE `suscripciones` (
  `id_suscripciones` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `suscripciones`
--

INSERT INTO `suscripciones` (`id_suscripciones`, `fecha`, `email`) VALUES
(2, '0000-00-00 00:00:00', 'jose@html.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id_Ticket` int(11) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `email` varchar(80) NOT NULL,
  `Texto` text NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Estado` enum('1','0') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`id_Ticket`, `Usuario`, `email`, `Texto`, `Fecha`, `Estado`) VALUES
(1, 'Jose', 'jose@html.com', 'prueba mensaje', '2021-06-09 22:43:15', '1');

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
  `Contrasena` varchar(30) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_Cliente`, `Usuario`, `email`, `Telefono`, `Direccion`, `Cp`, `Provincia`, `Rol`, `Apellidos`, `Contrasena`, `Nombre`) VALUES
(1, 'Jose', 'jose@html.com', 678934567, 'c9 afhwif', '3123', 'Alicante', 'Admin', 'GG', 'josejose1', 'Jose'),
(2, 'admin', 'admin@html.com', 456127839, 'asf', '13213', 'Alc', 'Admin', 'II', 'admin123', 'Admin'),
(6, 'Juan', 'juan@html.com', 674256890, 'asdhjadfj', '1234', 'Alicante', 'cliente', 'HH', 'juanjuan2', 'Juan'),
(7, 'Prueba', 'prueba@html.com', 847248625, 'C/none', '1234', 'A', 'Cliente', 'JJ', 'prueba123', 'Prueba');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_producto` (`id_producto`);

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
-- Indices de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  ADD PRIMARY KEY (`id_suscripciones`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id_Ticket`);

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
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  MODIFY `id_suscripciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id_Ticket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_Cliente` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_Cliente`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
