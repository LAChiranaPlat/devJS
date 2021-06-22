
<?php

	$dir_subida = 'files/';

	for ($i=0; $i <count($_FILES["images"]["name"]) ; $i++)
	{ 

		$fichero_subido = $dir_subida . basename($_FILES['images']['name'][$i]);

		echo '<pre>';
		if (move_uploaded_file($_FILES['images']['tmp_name'][$i], $fichero_subido)) {
		    echo "El fichero es válido y se subió con éxito.\n";
		} else {
		    echo "¡Posible ataque de subida de ficheros!\n";
		}

		echo 'Más información de depuración:';
	

	}
/*
*/
?>