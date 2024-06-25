<?php
	include_once 'conexao.php';

	function getAllByUser($id) {
		connect();
		$images = query("SELECT * FROM image WHERE priv = false AND id_user = $id");
		close();
		
		return $images;
	}

	function searchImages($id, $input) {
		connect();
		$sql = "SELECT TITLE, URL_IMAGE, ID_USER FROM image WHERE priv = false AND ID_USER = " . $id . " AND TITLE LIKE '%" . $input . "%'";
		$resultado = query($sql);
		close();
		
		return $resultado;
	}
?>