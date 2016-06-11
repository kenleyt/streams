// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 	'6hIro2boWDeFMV3P1BRRH0SC8',
    consumer_secret: 'ASDXB4loBSLGxJ691e0aMoTPbc6BlHpWySrTfYkoOjCE8X4rAS',
    access_token_key: '3917297299-OUiifc5oQ4xEAhksrG4dI6I3oHDPUq7eGUalGCP',
    access_token_secret: '5REE4OgCt9PIJLfnLbH9DZcSqEOqbgcEHqExhMEtpC7Y8'
  });

  return client;
};

module.exports = Helpers;
