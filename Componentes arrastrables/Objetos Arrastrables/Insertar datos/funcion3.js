function cargar() {
    var k =document.getElementById('subir');

for(var i=0;i<k.length;i++) {
    document.write("<br>Tipo:"+k[i].Tipo);
    document.write("<br>Nombre:"+k[i].Nombre);
    document.write("<br>Observacion:"+k[i].Observacion);
    document.write("<br>Ubicacion: "+k[i].Ubicacion);
    document.write("<br>Rasgos: "+k[i].Rasgos);


    }
}