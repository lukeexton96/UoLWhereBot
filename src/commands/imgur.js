// File used to make API request to Imgur

var request = require('request');

// Imgur API Source: https://api.imgur.com/endpoints/image/
var groundFloorImage = 'https://api.imgur.com/3/image/Fyl0Q';
var firstFloorImage = 'https://api.imgur.com/3/image/AunlR';
var secondFloorImage = 'https://api.imgur.com/3/image/LuGpR';
var thirdFloorImage = 'https://api.imgur.com/3/image/2Rbtg';


request('https://api.imgur.com/3/image/Fyl0Q', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Console log the response from Imgur
    console.log(response)
  }
  if (error){
      consoe.log(error)
  }
})