//Problem: show users badgecount and javascript points (teamtreehouse users)
//Solution: use node.js to connect to teamtreehouse's API, get profile information to print out

const profile = require('./profile');

const users = process.argv.slice(2);
users.map(profile.get);
