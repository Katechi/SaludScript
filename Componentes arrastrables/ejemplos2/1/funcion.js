//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {

  const xhttp =new XMLHttpRequest();
  xhttp.open('GET', 'ejemplo.json', true);

  xhttp.send();
  xhttp.onreadystatechange= function() {

    if(this.redyState == 4 && this.status == 200) {//preguntar por estado
      //console.log(this.responseText);

      let datos =JSON.parse(this.responseText); //datos en texto se transforma a objeto


      //console.log(datos);
      let res = document.querySelector('#res');
      res.innerHTML= '';

      for(let item of datos) {
        //console.log(item);
        res.innerHTML += `
        <tr> 
          <td>${item.id}</td>
          <td>${item.Tipo}</td>
          <td>${item.Nombre}</td>
          <td>${item.Observacion}</td>
          <td>${item.Ubicacion}</td>
          <td>${item.Rasgos}</td>
          <td>${item.Imagen}</td>
          
        </tr>
        `

       }
      }
  }
}