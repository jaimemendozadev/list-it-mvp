//Import the mongoose module
var mongoose = require('mongoose');
const DB_PATH = require('./db-path.js');


//Set up default mongoose connection
var mongoDB = DB_PATH;
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;