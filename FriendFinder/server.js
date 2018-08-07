var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// var nodemon ./server.js localhost 3000

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// var reservations = [
    
// ];
app.listen(PORT, function () {
    console.log("App listing on PORT: " + PORT);
});

// Basic route that sends the user first to the AJAX Page
