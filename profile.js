var http = require('http');
var apiKey = "e9d1b97503847346";

// Print out conditions to console
function printConditions(temp, weather, city, state) {
  console.log('It is currently ' + temp + ' F' + ' and ' + weather.toLowerCase() + ' in ' + city + ', ' + state+'. ');
}

// Get current conditions
function getConditions(zip) {
  var requestConditions = http.get('http://api.wunderground.com/api/' + apiKey + '/conditions/q/' +zip+ '.json', function(response){
    var body = '';
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      if (response.statusCode === 200) {
        try {
          var profile = JSON.parse(body);
          printConditions(profile.current_observation.temp_f, profile.current_observation.weather, profile.current_observation.display_location.city, profile.current_observation.display_location.state);
        } catch (error) {
          console.error(error.message);
        }
      }
    });
  });
}

module.exports.get = getConditions;
