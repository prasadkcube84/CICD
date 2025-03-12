// app.js
const http = require('http');  // Import the http module

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server that responds to requests
const server = http.createServer((req, res) => {
  res.statusCode = 200;           // HTTP status code
  res.setHeader('Content-Type', 'text/plain');  // Set the response type
  res.end('Hello, World!\n');     // End the response with a message
});

// Make the server listen on the defined port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
