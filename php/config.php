<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
	exit();
}
$servername = "localhost";
$username = "root";
$password = "";
$db = "renta_car_unos";
// Kreiraj konekciju
$conn = new mysqli($servername, $username, $password, $db);
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
    exit();
}
?>
