// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends

const path = require('path'); 
const friends = require("../data/friends");

// Routing

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friends)

  app.get('/api/friends', function(req, res) {
    res.json(friends); 
    console.log(friends); 
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a friends request... this data is then sent to the server...
  // Then the server saves the data to the friendList array)

  app.post('/api/friends', function(req, res) {

  // Initialize variables 
  // Req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
    let newFriend = req.body; // holds parameters that are sent up from the client as part of a POST request.
    let friendInput = newFriend.scores; 
    let match = {
      name: '', 
      image: '', 
      difference: 50
    }; 

    // Loop over all the current friends in the list of object
    for (let i = 0; i < friends.length - 1; i++) {
      let totalDif = 0; 
    // Go through the scores of friends
      for (let j = 0; j < friendInput.length; j++) {
        totalDif += Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendInput[j])); 

    // After all the friends are compared, find the best match
        if (totalDif < match.difference) {
          match.name = friends[i].name; 
          match.image = friends[i].image; 
          match.difference = totalDif; 
        }
      }
    }

    friends.push(newFriend); 

    res.json(match);
  }); 
};  
