// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends

const friends = require("../data/friends");
const path = require('path'); 

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

  // Create a new friend entry
  app.post('/api/friends', function(req, res) {

  // Initialize the newFriend object
    let newFriend = req.body;
    console.log(newFriend)
    let friendInput = newFriend.scores; 
    let match = {
      name: '', 
      photo: '', 
      difference: 50
    }; 
    // Take the results of the survey post of the score and parse it. 
    // Loop over all the current friends in the list of object
    for (let i = 0; i < friends.length - 1; i++) {
      let totalDifference = 0; 
    // Go through the scores 
      for (let j = 0; j < friendInput.length; j++) {
        totalDifference = totalDifference + Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendInput[j])); 

    // After all the friends are compared, find the best match
        if (totalDifference < match.difference) {
          difference = totalDifference; 
          match = friends[i]; 
        }
      }
    }

    friends.push(newFriend); 

    res.json(match);
  }); 
};  

// req.params 
// req.params get the data from the segment of the url where the route name starts with " : ". For eg: https://localhost:8081/movie/:movieid becomes https://localhost:8081/movie/5896544

// Now the required code to get the value of req.params.movieid is 5896544

// req.body

// req.body properties come from a form post or body section where the form data has been parsed into properties.
// Contains key-value pairs of data submitted in the request body. By default, it is undefined.

// req.body properties come from a form post where the form data (which is submitted in the body contents) 
// has been parsed into properties of the body tag.

