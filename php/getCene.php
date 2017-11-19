<?php
   //login forma

   header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  include("konektor.php");

  $qKor = "
    SELECT `ID_TARIFNA_KLASA`
    FROM `automobil`
    WHERE `ID_AUTOMOBIL` = :idAutomobil
    ";
    $korisnici = $konektor -> prepare($qKor);
    $korisnici -> execute(array(
      ':idAutomobil' => $_REQUEST['idCar'],
    ));
    $car = $korisnici ->fetchAll(PDO::FETCH_OBJ);
    foreach($car as $k){
      $idTarKl = $k->ID_TARIFNA_KLASA;
    }

$qKor = "
  SELECT *
  FROM `cena`
  WHERE `ID_TARIFNA_KLASA` = :idTarKlasa AND `ID_TRAJANJA` = :idTrajanje
  ";
  $cene = $konektor -> prepare($qKor);
  $cene -> execute(array(
    ':idTarKlasa' => $idTarKl,
    ':idTrajanje' => $_REQUEST['idTipTrajanja']
  ));
  $fKor = $cene ->fetchAll(PDO::FETCH_OBJ);
  foreach($fKor as $k){
    $cena = $k->OSNOVNA_CENA;
    $cenaExtra = $k->CENA_PO_EXTRA_KM;
    echo $cena;
    echo '|';
    echo $cenaExtra;
  }

  ?>
