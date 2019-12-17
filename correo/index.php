<?php
    $random = "";
	$mensaje="";
	if(isset($_POST["envio"])){
			include("php/envioCorreo.php"); //nuestro php que envia el correo
			$email = new email("Soporte Salud Script","soporte.saludscript@gmail.com","IntegracionSaludScript"); //enviamos - nombre - correo - contraseña_del_correo -
			$email->agregar($_POST["email"],$_POST["nombre"]);
			
            $random = random_int(1000, 9999); //se genera numero aleatorio como password para 2da autentificacion			
			if ($email->enviar('Clave Secreta de Autentificación:',$random)){
					// enviamos nuestro numero generado aleatoriamente		
					$mensaje = $random;
            }			
			else{
					//en caso de error:	   
			   $mensaje= 'Mensaje no enviado';
			   $email->ErrorInfo;
			}
}
?>
<!doctype html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <meta charset="utf-8">
    <title>PRUEBA DE ENVIO</title>
    <link rel="stylesheet" href="css/style.css"/>
    <script>
        
    </script>
</head>

<body>
    <div id="pagina">
    	<section>
        	<div>
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="application/x-www-form-urlencoded" name="envio">
                    <table id="tb">
                        <tr>
                            <td>
                            	<label for="email">Correo de Destino</label>
                            </td>
                            <td>
                            	<input type="text" name="email" id="email" placeholder="correo@dominio.com" autofocus maxlength="50" size="20">
                            </td>
                        </tr>
                        <tr>
                        	<td>
                        		<label for="nombre">Destinatario</label>
                        	</td>
                        	<td>
                        		<input type="text" name="nombre" id="nombre" placeholder="Nombre del Destinatario" autofocus maxlength="50" size="20">
                        	</td>
                        	<td>
                            	
                                <input name="envio" value="si" hidden="hidden">
                            </td>
                            <td>
                            	<button type="submit">Enviar</button>
                            </td>
                        </tr>
                    </table>
            	</form>
            </div>
            <?php
                // muestra la clave que se envio para verificar coincidencia con la que llego al correo
				echo "(test) Clave de Autentificación: ${mensaje}";
			?>
        </section>
    </div>
</body>
</html>