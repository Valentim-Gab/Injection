<?php 
	
	$conexao;
	$nomeUsuario = 'root';
	$senha = '';
	$base = 'injection';

	function connect() {
		global $conexao, $nomeUsuario, $senha, $base;
		$conexao = mysqli_connect('localhost', $nomeUsuario, $senha, $base) or die (mysqli_connect_error());

	}

	function query($sql) {
		global $conexao;
		// mysqli_query($conexao, 'SET CHARACTER SET utf8');
		$query = mysqli_query($conexao, $sql) or die(mysqli_error($conexao));

		return $query;
	}

	function close() {
		global $conexao;
		mysqli_close($conexao);
	}


	// $host = 'localhost';
	// $port = '5432';
	// $dbname = 'empresa';
	// $user = 'postgres'; // Usuário padrão do PostgreSQL
	// $password = '1234'; // A senha que você definiu durante a instalação
	
	// try {
	// 		// Estabelecer a conexão PDO
	// 		$pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
	// 		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	// 		echo "Conexão bem-sucedida!";
	
	// 		$pdo = null;
	// } catch (PDOException $e) {
	// 		die("Erro na conexão com o banco de dados: " . $e->getMessage());
	// }


	// 		function query($sql) {
	// 				global $pdo; 
	// 				try {
	// 						$result = $pdo->query($sql);
	
	// 						$pdo->result($sql);
	
	// 						return $query;
	// 				} catch (PDOException $e) {
	// 						die("Erro na consulta: " . $e->getMessage());
	// 				}
	// 		}
	?>
	