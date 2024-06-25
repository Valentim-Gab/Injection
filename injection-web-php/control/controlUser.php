<?php
	include '../model/userModel.php';

	$opcao = $_POST["opcao"];

	switch($opcao){
		case 'Login':
			$user = login($_POST["email"], $_POST["password"]);

			if ($user) {
				header("Location: ../view/pages/wellcome.php?id=$user[ID]");
			} else {
				header("Location: ../view/pages/login.php?error=true");
			}	
		break;
	}
?>