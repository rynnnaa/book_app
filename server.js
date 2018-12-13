'use strict';

const express = require('express');
const ejs = require('ejs');
const superagent = require('superagent');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.set('view engine', 'ejs');

let greetingMessage = 'Hello World!';

app.get('/', (req, res) => {
  res.render('../public/views/pages/index', { greeting: greetingMessage });
});
 
// app.post('../public/views/pages/searches/show', (req, res));
// //TODO: this is for when results from database need to be displayed
app.get('/show', (req, res) => {
  req.body
  res.render('../public/views/pages/searches/show',);
});

function Book(query, data) {
  this.image = data.imageLinks.thumbnail;
  this.title = data.volumeInfo.title;
  this.author = data.volumeInfo.authors;
  this.description = data.volumeInfo.description;
  this.search_query = query;
}

// TODO: finish out setting up API query, should this be in index.ejs?
// app.get('/book', (req, res) => {
//    getBook: req.queryType.data,
//     query: req.query.data
//     .then (data => res.send(data));
//     .catch(error => errorHandler(error, res));
//     }
//   }
// }


// helper function
function getBooks (req, res) {
  const url =`https://www.googleapis.com/books/v1/volumes?q=${req.queryType}:${req.query}`;
  return superagent.get(url)
    .then(data => {
      return new Book(query, data);
    })
  .catch(error => errorHandler(error));
  };
};

//TODO: double check if this is set up correctly
// app.post('/show', (req, res) => {
//   res.render('../public/views/pages/searches/show');
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)});