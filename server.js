'use strict';

const express = require('express');
const ejs = require('ejs');
const superagent = require('superagent');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.set('view engine', 'ejs');

let greetingMessage = 'Hello World!';

app.get('/', (req, res) => {
  res.render('../public/views/pages/index', { greeting: greetingMessage });
});

// //TODO: double check this is set up correctly
// app.get('/show', (req, res) => {
//   res.render('../public/views/pages/searches/show',);
// });

// TODO: finish out setting up API query, should this be in index.ejs?

// helper function
function getBook (req, res) {
  superagent.get('https://www.googleapis.books/v1/volumes?q=${request.queryType}:${request.query}')
  .then(result => {
      const
  })
}

//this is here for when we want to ejs a header into index
// app.get('/header', (req, res) => {
//   res.render('../public/views/pages/header', { greeting: greetingMessage });
// });

//TODO: double check if this is set up correctly
app.post('/show', (req, res) => {
  res.render('../public/views/pages/searches/show',);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)});

