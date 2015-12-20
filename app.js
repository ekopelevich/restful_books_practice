var express = require( 'express' ),
    mongoose = require( 'mongoose' ),
    Book = require( './models/bookModel' ),
    bodyParser = require( 'body-parser' ),
    app = express(),
    bookRouter = require( './routes/bookRoutes' )( Book ),
    port = process.env.PORT || 3000;

var db;

if (process.env.ENV == 'Test') {
  db = mongoose.connect( 'mongodb://localhost/bookAPI_test' );
} else {
  db = mongoose.connect( 'mongodb://localhost/bookAPI' );
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( '/api/books', bookRouter );
//app.use( '/api/authors', authorRouter );

app.get('/', function( req, res ){
  res.send('hi');
});

app.listen(port, function( req, res ) {
  console.log('Listening on PORT: ' + port);
});

module.exports = app;
