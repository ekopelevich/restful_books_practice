var express = require('express'),
    mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

bookRouter.route('/Books')
  .get( function( req, res ){
    var query = {};
    res.send('hello');
    if(req.query.genre) {
      query.genre = req.query.genre;
    }

  Book.find( query, function( err, books ){
    if(err)
      res.status( 500 ).send( err );
    else
      res.json( books );
    });
  });

bookRouter.route( '/Books/:bookId' )
  .get( function( req, res ){
    Book.findById( req.params.bookId, function( err, book ){
      if( err )
        res.status( 500 ).send( err );
      else
        res.json(book);
      });
    });

app.listen(port, function( req, res) {
  console.log('Listening on PORT: ' + port);
});
