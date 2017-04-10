//Problem: show users badgecount and javascript points (teamtreehouse users)
//Solution: use node.js to connect to teamtreehouse's API, get profile information to print out

const profile = require('./profile');
const weather = require('./weather');

// const users = process.argv.slice(2);
// users.map(profile.get);

const query = process.argv.slice(2).join("_").replace(' ', '_');
weather.get(query);
