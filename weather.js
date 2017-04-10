const https = require('https');
const http = require('http');
const api = require('./api.json');

printWeather = weather => {
  const message = `De temperatuur in ${weather.location.city} is ${weather.current_observation.temp_c} graden Celsius.`;
  console.log(message);
}

printError = error => {
  console.error(error.message);
}

getWeather = query => {
  const readableQuery = query.replace('_', ' ');

  try {
    const request = https.get(
      `https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`,
      response => {
        if (response.statusCode === 200) {
          let body = "";
          response.on('data', data => {
            body += data;
          });
          response.on('end', () => {
            try {
              const weather = JSON.parse(body);
              if (weather.location) {
                printWeather(weather);
              } else {
                const queryError = new Error(`The location "${readableQuery}" was not found.`);
                printError(queryError);
              }
            } catch (error) {
              printError(error);
            }
          });
        } else {
            const statusCodeError = new Error(`There was an error getting the message for ${readableQuery}.
              (${http.STATUS_CODES[response.statusCode]})`);
            printError(statusCodeError);
        }
    });
  } catch (error) {
    printError(error);
  }
}

module.exports.get = getWeather;
