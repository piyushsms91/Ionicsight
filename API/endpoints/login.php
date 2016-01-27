<?php

	include("../connection.php");

	$data = json_decode(file_get_contents("php://input"));
	try{
		$username = $data->username;
		$password = $data->password;
		
		
		$userInfo = $db->query("SELECT email FROM users WHERE email='$username' AND password='$password'");
		
		$userInfo = $userInfo->fetchAll();
		
		echo json_encode($userInfo);
	}
	catch(PDOException $e) {
	  echo $e->getMessage();
	}
	
	echo json_decode($userInfo);
	

?>