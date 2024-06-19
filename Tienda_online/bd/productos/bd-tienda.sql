-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2021 a las 20:44:31
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
  `id_log` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `log_inicio` datetime(6) NOT NULL,
  `log_fin` datetime(6) DEFAULT NULL,
  `status_log` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL,
  `Titulo` varchar(30) NOT NULL,
  `Descripcion` varchar(2000) NOT NULL,
  `fotos` varchar(400) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `Oferta` varchar(50) DEFAULT NULL,
  `Precio` decimal(6,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_Cliente` int(20) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefono` int(9) DEFAULT NULL,
  `direccion` varchar(40) DEFAULT NULL,
  `cp` int(5) DEFAULT NULL,
  `provincia` varchar(20) DEFAULT NULL,
  `rol` varchar(10) DEFAULT NULL,
  `Apellidos` varchar(200) NOT NULL,
  `Contrasena` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_Cliente`, `Usuario`, `email`, `telefono`, `direccion`, `cp`, `provincia`, `rol`, `Apellidos`, `Contrasena`) VALUES
(1, 'Jose', 'jose@html.com', 678934567, 'c9 afhwif', 3123, 'Alicante', 'Admin', '', 'josejose1'),
(6, 'Juan', 'juan@html.com', 674256890, 'asdhjadfj', 1234, 'Alicante', 'cliente', '', 'juanjuan2');

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
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_Cliente` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
