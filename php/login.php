<?php
   //login forma

   header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once("konektor.php");

  $err = "";
     if($_SERVER['REQUEST_METHOD'] == "POST"){
       //dugme je kliknuto
       if(!empty($_REQUEST['USERNAME']) ){
         $qUserName = "SELECT * from `klijent`
                        WHERE `USERNAME` = :username";
          $korisnici = $konektor -> prepare($qUserName);
          $korisnici -> execute(array(
                        ':username' => $_REQUEST['USERNAME']
          ));
          //prebrojavanje username u bazi
          if($korisnici -> rowCount() == 1){
            //prijava korisnika

          }else if($korisnici -> rowCount() >= 2){
            //greska u sistemu
            $err .= "--Doslo je do greske kontaktirajte admina sajta -- ";
          }else {
            $err .= "--Username ne postoji u bazi, molimo Vas registrujte se -- ";
          }

       }else{
         $err .= " -- Morate popuniti vas username -- ";
       }
        //provera passworda
       if(!empty($_REQUEST['PASSWORD']) ){
         if(isset($_REQUEST['USERNAME'])){
           $qAccount = "SELECT ID_KLIJENTA, tip FROM `klijent`
                         WHERE `USERNAME` = :username
                         AND `PASSWORD` = :password";
           $korisnici = $konektor -> prepare($qAccount);
           $korisnici -> execute(array(
             ':username' => $_REQUEST['USERNAME'],
             ':password' => $_REQUEST['PASSWORD']
           ));

            //prebrojavanje username - passworda u bazi
            if($korisnici -> rowCount() == 1){
              //prijava korisnika
              $fKor = $korisnici ->fetchAll(PDO::FETCH_OBJ);
              foreach($fKor as $k){
                $tip = $k->tip;
                $id = $k->ID_KLIJENTA;
                echo $tip;
                echo '|';
                echo $id;
              }


            }else if($korisnici -> rowCount() >= 2){
              //greska u sistemu
              $err .= "--Doslo je do greske kontaktirajte admina sajta -- ";
            }else {
              $err .= "--Password je netacan. Pokusajte ponovo -- ";
            }

         }

       }else{
         $err .= " -- Morate popuniti polje za vasu lozinku -- ";
       }
       // da li postoji greska
       if($err == ""){
         //ne postoji greska vrsi se provera
       }else {
         echo $err;
       }
     }

 ?>
