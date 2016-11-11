var express = require('express'),
	app = express(),
	serveStatic = require('serve-static'),
	path = require('path'),
    http = require('http'),
	httpServer = http.Server(app),
	target = '/app',
	port = 3001,
	host = 'localhost';
	
app.use(serveStatic(path.join(__dirname, target), {
    'index': ['index.html']
}));	
	
app.listen(port, host);
console.log('Server is runnig at ' + host + ':' + port + '\nTarget: ' + target);