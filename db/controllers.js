var Item = require('./schema.js');


module.exports.addToList = function(req, res, next){
  console.log("we're inside addToList");
  console.log("req.body.listItem is " + req.body.listItem);
  
  var item = req.body.listItem;

  var newListItem = new Item({listItem: item});

  newListItem.save(function(err){
    if (err){
      res.send("There was a problem posting to your list.");  
      res.redirect("https://media.giphy.com/media/2Fazja9DUP7yBZFZK/giphy.gif"); 
    } else {
      res.send("List item successfully posted.");
      res.redirect('/');
    }  
  });

}