<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   $method2  = file_get_contents('php://input');
   $data = json_decode($method2);

   $ID_KLIJENTA =$data -> ID_KLIJENTA;
   $IME_KLIJENTA =$data -> IME_KLIJENTA;
   $PREZIME_KLIJENTA =$data -> PREZIME_KLIJENTA;
   $ADRESA_KLIJENTA =$data -> ADRESA_KLIJENTA ;
   $DATUM_RODJENJA =$data -> DATUM_RODJENJA;
   $TELEFON =$data -> TELEFON;
   $EMAIL =$data -> EMAIL;
   $USERNAME =$data -> USERNAME;
   $PASSWORD =$data -> PASSWORD;
   $tip =$data -> tip;

   echo addKlijent($ID_KLIJENTA,$IME_KLIJENTA,$PREZIME_KLIJENTA,$ADRESA_KLIJENTA,$DATUM_RODJENJA,$TELEFON,$EMAIL,$USERNAME,$PASSWORD,$tip);


  ?>
