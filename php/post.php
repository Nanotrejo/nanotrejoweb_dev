<?php

$Nombre = $_POST['nombre'];
$Apellido = $_POST['apellido'];
$Email = $_POST['email'];
$Asunto = $_POST['asunto'];
$Mensaje = $_POST['mensaje'];

//echo $Nombre;

echo json_decode('recibido');
  if($Nombre === '' || $Apellido === ''){
//if($Nombre === '' || $Apellido === '' || $Email === '' || $Asunto === '' || $Mensaje === ''){
  //echo ('Rellena todos los campos');
}else{
  //echo ('Mensaje registrado correctamente.');
}

?>
