var profile = require("./profile");
var zipcode = process.argv.slice(2);

if (zipcode.length > 0)
	zipcode.forEach(profile.get);
else
	console.log("Please type in a zip code, like this: node app.js <zipcode1> [, <zipcode2>, ...]");
