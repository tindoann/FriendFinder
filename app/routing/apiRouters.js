let friends = require("../data/friends");

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends); 
    console.log(friends); 
  });

  app.get('/api/friends/:friendList', function(req, res) {
    let chosen = req.params.friends; // storing the friend parameter
    console.log(chosen);

    for (let i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName)
    }
    


  })
  
  app.post('/api/friends', function(req, res) {
    friends.push(req.body);
    res.json(true);
  });
}
  