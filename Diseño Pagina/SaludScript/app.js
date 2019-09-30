const express = require('express');

const app = express();

//set up

app.set('view engine','ejs');

//home route
app.get('/', (req,res) => {
    res.render('index');
});
app.listen(3000, () => {
    console.log('está en el port 3000');
});