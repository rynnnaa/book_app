'use strict';

const express = require('express');
const ejs = require('ejs');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let greetingMessage = 'Hello World!';

app.get('/', (req, res) => {
  res.render('../public/views/pages/index', { greeting: greetingMessage });
});

//this is here for when we want to ejs a header into index
// app.get('/header', (req, res) => {
//   res.render('../public/views/pages/header', { greeting: greetingMessage });
// });


app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)});

