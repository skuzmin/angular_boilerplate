var express = require('express'),
	app = express(),
	path = require('path'),
    http = require('http'),
	httpServer = http.Server(app),
	target = '/app',
	port = 3001,
	host = 'localhost';
	
app.listen(port, host);
console.log('Server is runnig at ' + host + ':' + port + '\nTarget: ' + target);