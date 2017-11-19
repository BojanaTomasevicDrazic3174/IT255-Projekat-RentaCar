<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   if(!empty($_REQUEST['id'])){
   	echo deleteCar($_REQUEST['id']);
   }


  ?>
