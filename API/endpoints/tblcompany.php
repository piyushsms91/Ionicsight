<?php

	include("../connection.php");

	$data = json_decode(file_get_contents("php://input"));
	try{		
		$companyInfo = $db->query("SELECT * FROM tbl_company LIMIT 10");
		
		$companyInfo = $companyInfo->fetchAll(PDO::FETCH_ASSOC);
		
		echo json_encode($companyInfo);
	}
	catch(PDOException $e) {
	  echo $e->getMessage();
	}
	
	
	

?>