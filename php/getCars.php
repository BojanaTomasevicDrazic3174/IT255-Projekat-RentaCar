<?php
   //login forma

   header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include("konektor.php");

$qKor = "
  SELECT *
  FROM `automobil`
  ";
  $korisnici = $konektor -> prepare($qKor);
  $korisnici -> execute(array(

  ));
  $fKor = $korisnici ->fetchAll(PDO::FETCH_OBJ);
  echo json_encode($fKor);
//echo "<pre>",print_r($fKor),"</pre><br>";


  ?>
