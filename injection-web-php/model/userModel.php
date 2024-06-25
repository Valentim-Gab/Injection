<?php
	include_once 'conexao.php';

	function getAll() {
		connect();
		$resultado = query("SELECT * FROM users WHERE active = true and priv = false");
		close();
		
		return $resultado;
	}

	function search($input) {
		connect();
		$sql = "SELECT ID, NAME, DESCRIPTION FROM users WHERE active = true AND priv = false AND name LIKE '%" . $input . "%'";

		// $sql = "SELECT * FROM empresarial WHERE nome LIKE '%$pesquisa%' OR nome_empresa LIKE '%$pesquisa%' OR cnpj LIKE '%$pesquisa%'";

		// $sql = "SELECT * FROM empresarial WHERE nome LIKE '%" . $pesquisa . "%'";

		$resultado = query($sql);
		close();
		
		return $resultado;
	}

	function get($id) {
		connect();
		$resultado = query("SELECT * FROM USERS WHERE active = true AND id=$id");
		close();

		return $resultado;
	}

	function login($email, $password) {
		connect();
		$users = query("SELECT * FROM users WHERE email = '" . $email . "' AND password = '" . $password . "'");
		close();

		$user = mysqli_fetch_assoc($users);

		return $user;
	}

	// // INJECTION 1:  asjhfvdas' or '1' = '1'; #
	// // INJECTION 2: safasf' UNION ALL SELECT ID, CNPJ AS NOME, NOME_EMPRESA, CNPJ FROM empresarial;#
	// function mostrarEmpresasPesquisar($pesquisa) {
	// 	connect();
	// 	$sql = "SELECT * FROM empresarial WHERE nome LIKE '%" . $pesquisa . "%' OR nome_empresa LIKE '%" . $pesquisa . "%' OR cnpj LIKE '%" . $pesquisa . "%'";

	// 	// $sql = "SELECT * FROM empresarial WHERE nome LIKE '%$pesquisa%' OR nome_empresa LIKE '%$pesquisa%' OR cnpj LIKE '%$pesquisa%'";

	// 	// $sql = "SELECT * FROM empresarial WHERE nome LIKE '%" . $pesquisa . "%'";

	// 	$resultado = query($sql);
	// 	close();
		
	// 	return $resultado;
	// }
?>