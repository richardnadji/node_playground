//Problem: show users badgecount and javascript points (teamtreehouse users)
//Solution: use node.js to connect to teamtreehouse's API, get profile information to print out

const https = require('https');
const username = "richardnadji"

printMessage = (username, badgeCount, points) => {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in javascript.`;
  console.log(message);
}

//STEPS:
//Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
  console.log(res.statusCode);
  //Read the data
  //Parse the data
  //Print the data

}).on('error', (e) => {
  console.error(e);
});
