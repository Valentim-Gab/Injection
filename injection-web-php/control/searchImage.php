<?php
	include '../model/imageModel.php';

	$searchInput = $_POST["input"];
	$id_image = $_POST["id"];

	switch ($searchInput) {
		case 'all':
			$images = getAllByUser($id_image);
			break;
		default:
			$images = searchImages($id_image, $searchInput);
			break; 
	}

	if (mysqli_num_rows($images) <= 0) {
		echo 'Nenhuma imagem encontrada';
	} else {
		while($image = mysqli_fetch_assoc($images)){
			echo "
				<div>
					<p>$image[TITLE]</p>
					<img src='$image[URL_IMAGE]' alt='' style='width: 200px; border-radius: 0.25rem;' />
				</div>
			";
		}
	}
?>