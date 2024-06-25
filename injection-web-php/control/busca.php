<?php
	include '../model/userModel.php';

	$searchInput = $_POST["palavra"];

	switch ($searchInput) {
		case 'all':
			$resultado = getAll();
			break;
		default:
			$resultado = search($searchInput);
			break; 
	}

	if (mysqli_num_rows($resultado) <=0 ) {
		echo 'Nenhum usuário encontrado';
	} else {
		while($resultadoSeparado = mysqli_fetch_assoc($resultado)){
			echo "
				<tr>
					<td>$resultadoSeparado[NAME]</td>
					<td>$resultadoSeparado[DESCRIPTION]</td>
					<td><a href='usuario.php?id=$resultadoSeparado[ID]'>Visualizar</a></td>
				</tr>
			";
		}
	}
?>