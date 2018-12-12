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

app.set('view engine', 'ejs');

let greetingMessage = 'Hello World!';

app.get('/', (req, res) => {
  res.render('../public/views/pages/index', { greeting: greetingMessage });
});
 


// //TODO: double check this is set up correctly
// app.get('/show', (req, res) => {
//   res.render('../public/views/pages/searches/show',);
// });

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
function getBook (req, res) {
  const bookHandler = {
    query:req.body.search_query,
    queryType: req.body.title==='on'
  }
  // const _URL =`https://www.googleapis.com/books/v1/volumes?q=${req.queryType}:${req.query}`;
  // return superagent.get(_URL)
  //   .then(data => {

    //   if(! data.body.results.length) {throw 'No Data';}
    //   else {
    //     let book = new Book(search_query, data.body.results[0]);
    //   return book.save()
    //   .then (result => {
    //     book.id = result.rows[0].id
    //     return book;
    //   })
    //   }
    });
}

app.post('/show', getBook);

//this is here for when we want to ejs a header into index
// app.get('/header', (req, res) => {
//   res.render('../public/views/pages/header', { greeting: greetingMessage });
// });

//TODO: double check if this is set up correctly
// app.post('/show', (req, res) => {
//   res.render('../public/views/pages/searches/show');
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)});