<?php

	include("../connection.php");

	$data = json_decode(file_get_contents("php://input"));
	try{
		$username = $data->username;
		$password = $data->password;
		
		$q = "INSERT INTO users (email,password) VALUES (:email,:password)";
		$query = $db->prepare($q);
		
		$execute = $query->execute(array(
				':email' => $username,
				':password' => $password
		));
	}
	catch(PDOException $e) {
	  //this will echo error code with detail
	  //example: SQLSTATE[42S22]: Column not found: 1054 Unknown column 'nasme' in 'field list'
	  echo $e->getMessage();
	}
	print_r($execute);
	echo json_decode($username);
	

?>