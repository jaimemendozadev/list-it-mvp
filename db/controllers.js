var schema = require('./schema.js');
var mongoose = require('mongoose');
var Item = mongoose.model('item', schema.ListModelSchema);

mongoose.Promise = Promise;  



module.exports.addToList = function(req, res){
  console.log("we're inside addToList");
  console.log("req.body.listItem is " + req.body.listItem);
  
  var item = req.body.listItem;

  var newListItem = new Item({listItem: item});

  newListItem.save().then(listItem => res.redirect("/"));

}