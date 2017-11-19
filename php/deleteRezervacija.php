<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   if(!empty($_REQUEST['id'])){
   	echo deleteRezervacija($_REQUEST['id']);
   }


  ?>
