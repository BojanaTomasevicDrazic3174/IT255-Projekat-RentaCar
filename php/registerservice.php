<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("functions.php");

if(isset($_POST['IME_KLIJENTA']) && isset($_POST['PREZIME_KLIJENTA']) && isset($_POST['ADRESA_KLIJENTA']) && isset($_POST['DATUM_RODJENJA'])
&& isset($_POST['TELEFON']) && isset($_POST['EMAIL']) && isset($_POST['USERNAME']) && isset($_POST['PASSWORD'])){

$firstname = $_POST['IME_KLIJENTA'];
$lastname = $_POST['PREZIME_KLIJENTA'];
$adresa = $_POST['ADRESA_KLIJENTA'];
$datum_r = $_POST['DATUM_RODJENJA'];
$telefon = $_POST['TELEFON'];
$email = $_POST['EMAIL'];
$username = $_POST['USERNAME'];
$password = $_POST['PASSWORD'];


echo register($firstname,$lastname,$adresa,$datum_r,$telefon,$email,$username,$password);

}

?>
