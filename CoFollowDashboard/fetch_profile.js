// Server-side Node.js code
const request = require('request');

const options = {
  method: 'POST',
  url: 'https://avatarapi.com/v2/api.aspx',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: '{"username":"igotnobroads","password":"qasxq2ew","email":"jlmandahinog65115@liceo.edu.ph"}'
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // Parse the response body as JSON
  const responseData = JSON.parse(body);

  // Log the response data
  console.log(responseData);
});