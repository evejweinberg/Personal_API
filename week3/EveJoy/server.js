// HTTP Portion
var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8000);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
	
	// Read in the file they requested
	
	fs.readFile(__dirname + parsedUrl.pathname, 
		// Callback function for reading
		function (err, data) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(data);
  		}
  	);
}

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
	// We are given a websocket object in our function
	function (socket) {
		console.log("We have a new client: " + socket.id);
		// When this user "send" from clientside javascript, we get a "message"
		// client side: socket.send("the message");  or socket.emit('message', "the message");
		socket.on('answer00', function (data) {
				console.log(data);				
				io.sockets.emit('display00', data);
			}
		);
		
		socket.on('answer01', function (data) {
				console.log(data);				
				io.sockets.emit('display01', data);
			}
		);

		socket.on('answer02', function (data) {
				console.log(data);				
				io.sockets.emit('display02', data);
			}
		);

		socket.on('answer03', function (data) {
				console.log(data);				
				io.sockets.emit('display03', data);
			}
		);

		socket.on('answer04', function (data) {
				console.log(data);				
				io.sockets.emit('display04', data);
			}
		);

		socket.on('answer05', function (data) {
				console.log(data);				
				io.sockets.emit('display05', data);
			}
		);
		socket.on('disconnect', function() {
			console.log("Client has disconnected");
		});
	}
);