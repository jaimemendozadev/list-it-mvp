var schema = require('./schema.js');
var mongoose = require('mongoose');
var path = require('path');
var Item = mongoose.model('item', schema.ListModelSchema);

//Have to figure out how Promises work
mongoose.Promise = Promise;  



module.exports.addToList = function(req, res){
  
  var item = req.body.listItem;

  var newListItem = new Item({listItem: item});

  newListItem.save().then(listItem => res.redirect("/"));

}

module.exports.getHomePage = function(req, res) {
  /* If you direct the client to the root / the first
    you hit the server, the server will serve the client
    whatever it is that you specified in that GET
    request (e.g. a homepage or a res object). */

  //Also, figure out how path.resolve works

  res.sendFile(path.resolve('./index.html'));
}

module.exports.getEntireList = function(req, res) {
  Item.find({}).then((list) => res.send(list));
}