function subir(){
    var i=document.getElementById('files');
 
    if(window.FileReader){
        for(var j=0;j<i.files.length;j++){//como mi input file es múltiple, recorro sus elementos (archivos) que pueden ser varios
            for (k=0;k<j,files.length;k++){
            var reader = new FileReader();//instanciamos FileReader
            reader.onloadend = (function(f){//creamos la función que recogerá los datos
                return function(e){
                    var content = e.target.result.split(",",2)[1];//obtenemos el contenido del archivo, estará codificado en Base64
                   // enviarArchivo(f.name,content);//le paso a una función el nombre del archivo y su contenido. Esta función puede pasar el contenido por ajax u otro medio al servidor
                }
            })(i.files[j]);
            reader.readAsText(i.files[j].length());//
        }
    }
    }
}
