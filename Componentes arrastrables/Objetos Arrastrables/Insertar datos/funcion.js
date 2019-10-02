 function handleFileSelect(evt) {
    var files = evt.target.files; // objetos de la lista de archivos
    // va a recorrer el listado de archivos y va a renderizar como miniaturas
    //si es que es una imagen
    for (var i = 0, f; f = files[i]; i++) {


      var reader = new FileReader();

      // funcion que recojera los gastos
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsText(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);