 /*
  * Primary file for the API
  *
  */

  //  Dependencies
  const http = require('http');
  const url = require('url');  // used to parse the url requests

  //  The server should respond to all requests with a string
  const server = http.createServer((req, res) => {

    //  get the url and parse interval
    const parsedUrl = url.parse(req.url, true);

    //  get the path from the url

    //  Send the response
    res.end('Hello World and shit respose!\n')

    //  Log the request

  });

  //  Start the server, and have it listen on port 3000
  server.listen(3000, () =>  {
    console.log('The server is listening on port 3000 now');
  });
