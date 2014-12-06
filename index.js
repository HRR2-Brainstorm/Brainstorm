var app = require('./server/server.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/brainstormer');

<<<<<<< HEAD
var port = 8000;
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
=======
app.listen(8000);
>>>>>>> Add mongoose
