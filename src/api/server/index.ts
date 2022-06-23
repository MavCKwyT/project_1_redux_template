const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = process.env.PORT || 3021;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.get('/api/hello', (
  request,
  response,
) => {
  response.send({ express: 'Hello from server' });
});
server.post('api/world', (
  request,
  response,
) => {
  response.send(
    `I received your POST request. This is what you sent me: ${response.body.post}`,
  );
});
server.listen(port, () => console.log(`Listening on port ${port}`));
