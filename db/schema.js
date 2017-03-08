//Require Mongoose
var mongoose = require('mongoose');
var db = require('./db.js');
var autoIncrement = require('mongoose-auto-increment');

//Define a schema
var Schema = mongoose.Schema;


var ListModelSchema = new Schema({
  listItem: String,
});

// var Item = mongoose.model('item', ListModelSchema);

module.exports = {
  ListModelSchema: ListModelSchema
}