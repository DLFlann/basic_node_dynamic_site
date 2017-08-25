// Problem: We need a simple way to look at a user's badge count and JavaScript poin from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template viea HTTP

const router = require('./router');

// 1. Create a web server
const http = require('http');

http.createServer(function(request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');
