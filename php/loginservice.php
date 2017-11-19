<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("functions.php");


if(isset($_POST['USERNAME']) && isset($_POST['PASSWORD'])){

$username = $_POST['USERNAME'];
$password = $_POST['PASSWORD'];
echo login($username,$password);

}
?>
