const express = require('express');
const authRoutes = require('./routes/ruta_autori');
const app = express();

//set up

app.set('view engine','ejs');

//set up routes
app.use('/auth', authRoutes);

//home route
app.get('/', (req,res) => {
    res.render('home');
});
app.listen(3000, () => {
    console.log('está en el port 3000');
});