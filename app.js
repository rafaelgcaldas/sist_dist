const express = require('express'),
  bodyParser = require('body-parser'),
  mysql = require('mysql'),
  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./middlaware/middlaware.js'));

require('./routes/usuarioRoute.js')(app);

app.listen(80, () =>{
  console.log('Localhost rodando na porta 3000');
});