
const path = require('path')
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

// ROUTING

module.exports = function(app) {
  
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html')); 
  });

// Default route is set to home 
  app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html')); 
  });
 }; 