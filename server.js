'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let greetingMessage = 'Hello World!';

app.get('/', (req, res) => {
  res.render('index', {hello: greetingMessage});
});


app.listen(PORT), () => {
  console.log(`listening on port: ${PORT}`)};

