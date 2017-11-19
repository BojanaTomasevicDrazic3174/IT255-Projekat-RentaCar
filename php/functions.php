<?php
include("config.php");

function checkIfLoggedIn(){
	global $conn;
	if(isset($_SERVER['HTTP_TOKEN'])){
		$token = $_SERVER['HTTP_TOKEN'];
		$result = $conn->prepare("SELECT * FROM users WHERE token=?");
		$result->bind_param("s",$token);
		$result->execute();
		$result->store_result();
		$num_rows = $result->num_rows;
		if($num_rows > 0)
		{
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

function login($username, $password){
	global $conn;
	$rarray = array();
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
		$result2->bind_param("ss",$id,$username);
		$result2->execute();
		$rarray['token'] = $id;
	} else{
		header('HTTP/1.1 401 Unauthorized');
		$rarray['error'] = "Invalid username/password";
	}
	return json_encode($rarray);
}

function checkLogin($username, $password){
	global $conn;
	$password = md5($password);
	$result = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
	$result->bind_param("ss",$username,$password);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}

function register($username, $password, $firstname, $lastname){
	global $conn;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Username already exists\r\n";
	}
	if(strlen($username) < 5){
		$errors .= "Username must have at least 5 characters\r\n";
	}
	if(strlen($password) < 5){
		$errors .= "Password must have at least 5 characters\r\n";
	}
	if(strlen($firstname) < 3){
		$errors .= "First name must have at least 3 characters\r\n";
	}
	if(strlen($lastname) < 3){
		$errors .= "Last name must have at least 3 characters\r\n";
	}
	if($errors == ""){
		$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)");
		$pass =md5($password);
		$stmt->bind_param("ssss", $firstname, $lastname, $username, $pass);
		if($stmt->execute()){
			$id = sha1(uniqid());
			$result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();
			$rarray['token'] = $id;
		}else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = "Database connection error";
		}
	} else{
		header('HTTP/1.1 400 Bad request');
		$rarray['error'] = json_encode($errors);
	}

	return json_encode($rarray);
}

function checkIfUserExists($username){
	global $conn;
	$result = $conn->prepare("SELECT * FROM users WHERE username=?");
	$result->bind_param("s",$username);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}


function addCar($ID_AUTOMOBIL,$ID_TARIFNA_KLASA,$ID_OSIGURANJE,$MARKA_AUTOMOBILA,$MODEL_AUTOMOBILA,$DATUM_KUPOVINE,
                $CENA_AUTOMOBILA,$KILOMETRAZA,$GODINA_PROIZVODNJE,$SNAGA_AUTOMOBILA,$URL_SLIKE) {
  	global $conn;
  	$rarray = array();
  	$stmt = $conn->prepare("INSERT INTO `automobil` ( `ID_TARIFNA_KLASA`, `ID_OSIGURANJE`, `MARKA_AUTOMOBILA`, `MODEL_AUTOMOBILA`,
                            `DATUM_KUPOVINE`, `CENA_AUTOMOBILA`, `KILOMETRAZA`, `GODINA_PROIZVODNJE`, `SNAGA_AUTOMOBILA`, `URL_SLIKE`)
                            VALUES ( ?, ?,?, ?, ?,?, ?, ?,?,?)");
  	$stmt->bind_param("iisssiisis",$ID_TARIFNA_KLASA,$ID_OSIGURANJE,$MARKA_AUTOMOBILA,$MODEL_AUTOMOBILA,$DATUM_KUPOVINE,
                                  $CENA_AUTOMOBILA,$KILOMETRAZA,$GODINA_PROIZVODNJE,$SNAGA_AUTOMOBILA,$URL_SLIKE);
  	if($stmt->execute()){
  		$rarray['sucess'] = "ok";
  	}else{
  		$rarray['error'] = $stmt->error;;
  	}
	return json_encode($rarray);
}

function updateCar($ID_AUTOMOBIL,$ID_TARIFNA_KLASA,$ID_OSIGURANJE,$MARKA_AUTOMOBILA,$MODEL_AUTOMOBILA,$DATUM_KUPOVINE,
                $CENA_AUTOMOBILA,$KILOMETRAZA,$GODINA_PROIZVODNJE,$SNAGA_AUTOMOBILA,$URL_SLIKE) {
	global $conn;
	$rarray = array();
		$stmt = $conn->prepare("UPDATE `automobil` SET `ID_TARIFNA_KLASA`=?,`ID_OSIGURANJE`=?,`MARKA_AUTOMOBILA`=?,`MODEL_AUTOMOBILA`=?,`DATUM_KUPOVINE`=?,`CENA_AUTOMOBILA`=?,
    `KILOMETRAZA`=?,`GODINA_PROIZVODNJE`=?,`SNAGA_AUTOMOBILA`=?,`URL_SLIKE`=? WHERE `ID_AUTOMOBIL`=?");
		$stmt->bind_param("iisssiisisi",$ID_TARIFNA_KLASA,$ID_OSIGURANJE,$MARKA_AUTOMOBILA,$MODEL_AUTOMOBILA,$DATUM_KUPOVINE,
                                  $CENA_AUTOMOBILA,$KILOMETRAZA,$GODINA_PROIZVODNJE,$SNAGA_AUTOMOBILA,$URL_SLIKE,$ID_AUTOMOBIL);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	return json_encode($rarray);
}

function addKlijent($ID_KLIJENTA,$IME_KLIJENTA,$PREZIME_KLIJENTA,$ADRESA_KLIJENTA,$DATUM_RODJENJA,$TELEFON,$EMAIL,$USERNAME,$PASSWORD,$tip) {
  	global $conn;
  	$rarray = array();
  	$stmt = $conn->prepare("INSERT INTO `klijent`(`IME_KLIJENTA`, `PREZIME_KLIJENTA`, `ADRESA_KLIJENTA`, `DATUM_RODJENJA`, `TELEFON`, `EMAIL`, `USERNAME`, `PASSWORD`, `tip`)
                            VALUES ( ?, ?,?, ?, ?,?, ?, ?,?)");
  	$stmt->bind_param("sssssssss",$IME_KLIJENTA,$PREZIME_KLIJENTA,$ADRESA_KLIJENTA,$DATUM_RODJENJA,$TELEFON,$EMAIL,$USERNAME,$PASSWORD,$tip);
  	if($stmt->execute()){
  		$rarray['sucess'] = "ok";
  	}else{
  		$rarray['error'] = "Database connection error";
  	}
	return json_encode($rarray);
}

function updateRezervacija($ID_REZERVACIJA,$ID_AUTOMOBIL,$ID_KLIJENTA,$ID_TRAJANJA,$DATUM_REZARVACIJE,
													$DATUM_POCETKA,$DATUM_ZAVRSETKA,$VALIDNA_REZERVACIJA,$NACIN_REZERVISANJA,$PREDJENA_KILOMETRAZA,$CENA,$STATUS) {
	global $conn;
	$rarray = array();
		$stmt = $conn->prepare("UPDATE `rezervacija` SET `ID_AUTOMOBIL`= ? ,`ID_KLIJENTA`= ? ,`ID_TRAJANJA`= ?,
													`DATUM_REZARVACIJE`= ? ,`DATUM_POCETKA`= ? ,`DATUM_ZAVRSETKA`= ? ,`VALIDNA_REZERVACIJA`= ?,
													`NACIN_REZERVISANJA`= ? ,`PREDJENA_KILOMETRAZA`= ? ,`CENA`= ? ,`STATUS`= ? WHERE `ID_REZERVACIJA`=?");
		$stmt->bind_param("iiisssisiisi",$ID_AUTOMOBIL,$ID_KLIJENTA,$ID_TRAJANJA,$DATUM_REZARVACIJE,
															$DATUM_POCETKA,$DATUM_ZAVRSETKA,$VALIDNA_REZERVACIJA,$NACIN_REZERVISANJA,$PREDJENA_KILOMETRAZA,$CENA,$STATUS,$ID_REZERVACIJA);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	return json_encode($rarray);
}


function addRezervacija($ID_REZERVACIJA,$ID_AUTOMOBIL,$ID_KLIJENTA,$ID_TRAJANJA,$DATUM_REZARVACIJE,
													$DATUM_POCETKA,$DATUM_ZAVRSETKA,$VALIDNA_REZERVACIJA,$NACIN_REZERVISANJA,$PREDJENA_KILOMETRAZA,$CENA,$STATUS) {
  	global $conn;
  	$rarray = array();
  	$stmt = $conn->prepare("INSERT INTO `rezervacija` ( `ID_AUTOMOBIL`, `ID_KLIJENTA`, `ID_TRAJANJA`, `DATUM_REZARVACIJE`,
														`DATUM_POCETKA`, `DATUM_ZAVRSETKA`, `VALIDNA_REZERVACIJA`, `NACIN_REZERVISANJA`, `PREDJENA_KILOMETRAZA`, `CENA`, `STATUS`)
                            VALUES ( ?, ?,?, ?, ?,?, ?, ?,?,?,?)");
  	$stmt->bind_param("iiisssisiis",$ID_AUTOMOBIL,$ID_KLIJENTA,$ID_TRAJANJA,$DATUM_REZARVACIJE,
															$DATUM_POCETKA,$DATUM_ZAVRSETKA,$VALIDNA_REZERVACIJA,$NACIN_REZERVISANJA,$PREDJENA_KILOMETRAZA,$CENA,$STATUS);
  	if($stmt->execute()){
  		$rarray['sucess'] = "ok";
  	}else{
  		$rarray['error'] =  "update"; //$stmt->error;
  	}
	return json_encode($rarray);
}




function deleteCar($id){
	global $conn;
	$rarray = array();
	//if(checkIfLoggedIn()){
		$result = $conn->prepare("DELETE FROM `automobil`  WHERE `ID_AUTOMOBIL` = ?");
    $result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	// } else{
	// 	$rarray['error'] = "Please log in";
	// 	header('HTTP/1.1 401 Unauthorized');
	// }
	return json_encode($rarray);
}


function deleteRezervacija($id){
	global $conn;
	$rarray = array();
	//if(checkIfLoggedIn()){
		$result = $conn->prepare("DELETE FROM `rezervacija`  WHERE `ID_REZERVACIJA` = ?");
    $result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	// } else{
	// 	$rarray['error'] = "Please log in";
	// 	header('HTTP/1.1 401 Unauthorized');
	// }
	return json_encode($rarray);
}



?>
