const express= require('express');

const app= express();

app.get('/', function(req,res) {

res.send('Hola mundo');
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'),function() { 
console.log('escuchando')

})