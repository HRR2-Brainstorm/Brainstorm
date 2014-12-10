var app = require('./server/productionServer.js');

var port = 8000;
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
