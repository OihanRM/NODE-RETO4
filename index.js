//Filename : index.js

//import Express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

console.log('running index');

//import Router
let apiRoutes = require("./api-routes");

//initialize the app
let app = express();

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://18.204.147.192/afg', { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

if(!db)
{
    console.log("Error connecting db");
}else
{
    console.log("Db connected successfully");
}

//Setup server port
var port = process.env.PORT || 8080;


//Default URL
app.get('/', (req, res) => res.send('WS AFG'));

//Launch app to listen to specified port
app.listen(port, function()
{
    console.log("Running RestHub for AFG on port " + port);
})

app.use('/api', apiRoutes);













