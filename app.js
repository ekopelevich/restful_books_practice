var express = require( 'express' ),
    mongoose = require( 'mongoose' ),
    db = mongoose.connect( 'mongodb://localhost/bookAPI' ),
    Book = require( './models/bookModel' ),
    bodyParser = require( 'body-parser' ),
    app = express(),
    bookRouter = require( './routes/bookRoutes' )( Book ),
    port = process.env.PORT || 3000;

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
