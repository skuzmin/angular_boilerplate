var express = require('express'),
	app = express(),
	port = 3001,
	host = 'localhost';
	
app.listen(port, host);
console.log('Server is runnig at ' + host + ':' + port);