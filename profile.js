const https = require('https');
// const username = "richardnadji";

printMessage = (username, badgeCount, points) => {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in javascript.`;
  console.log(message);
}

//STEPS:
getProfile = username => {
  try {
    //Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      let body = "";
      //Read the data
      response.on('data', data => {
        body += data.toString();
      });

      response.on('end', () => {
        //Parse the data
        const profile = JSON.parse(body);
        // console.log(profile);
        //Print the data
        printMessage(username, profile.badges.length, profile.points.JavaScript);
        // console.log(body);
        // console.log(typeof body);
      });
    });
    request.on('error', error => {
      console.error(`Problem with request: ${error.message}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// console.dir(process.argv);

// const users = ["richardnadji", "chalkers"];
// users.forEach(user => {
//   getProfile(user);
// })

module.exports.get = getProfile;
