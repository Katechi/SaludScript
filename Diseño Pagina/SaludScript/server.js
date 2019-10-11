const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session); // guardar en mongodb

const MONGO_URL = 'mongodb://127.0.0.1:27017/SaludScript';
const app = express();

// Middleware
app.use(session({
  secret: 'Secreto',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: MONGO_URL,
    autoReconnect: true
  })
}));

app.get('/', (req, res) => {
  // console.log(req.session);
  // Cuenta es el nombre que le damos y lo agregamos al object session
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1
  res.send(`Bienvenido ${req.session.cuenta}`);
});

app.listen(3000, () => {
  console.log(`Escuchando en el port 3000`);
});