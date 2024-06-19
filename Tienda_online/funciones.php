<?php

























//<require_once 'vendor/autoload.php';

//<use PhpOffice\PhpSpreadsheet\Spreadsheet;
//<use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// function enviarCorreo($emailDestino, $asunto, $cuerpo, $listaFicherosAdjuntos){
// 	// codigo para enviar un mail

// }

// function cargarExcel(){

// 	$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load("listadoCursos.xlsx");

// 	$lista = [];
// 	for($i=2; $i<500; $i++){//la primera fila es la cabecera
// 		$curso=[];
// 		$codigo = $spreadsheet->getActiveSheet()->getCell('A'.$i)->getValue();

// 		if($codigo=="") {
// 			continue;
// 		}

// 		$curso["codigo"] = $codigo;
// 		$curso["activo"] = $spreadsheet->getActiveSheet()->getCell('B'.$i)->getValue();

// 		if(strtoupper($curso["activo"])!="S"){
// 			continue;
// 		}
// 		$curso["tipo"] = $spreadsheet->getActiveSheet()->getCell('C'.$i)->getValue();
// 		// más filas

// 		array_push($lista,$curso);
// 	}
// 	return $lista;
// }

// function obtenerCurso($codigoCurso){
// 	$listadoCursos = cargarExcel();

// 	foreach($listadoCursos as $curso){		
// 		if($codigoCurso==$curso["codigo"] && $curso["activo"]=="S"){
// 			return $curso;
// 		}
// 	}
// 	die("El curso que está accediendo no existe");// la función die corta el proceso y no continua el programa
// }

// function generarZip($listaFicherosAdjuntos){

// 	$directorioDestino="./resultados";
// 	if (!file_exists($directorioDestino)) {
// 		mkdir($directorioDestino, 0700);
// 	}


// 	$zip = new ZipArchive();
// 	$filename = $directorioDestino."/resultado_".time().".zip";

// 	if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
// 		exit("cannot open <$filename>\n");
// 	}
// 	foreach($listaFicherosAdjuntos as $fichero){
// 		$zip->addFile($fichero);
// 	}

// 	$zip->close();
// }

// function mostrarValor($valor){    
//     if(isset($_POST[$valor]) && !empty($_POST[$valor])){
//         echo $_POST[$valor];
//     }
// }
?>