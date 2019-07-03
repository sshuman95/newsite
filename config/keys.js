// this gives you your api keys per environment

process.env.NODE_ENV === "production"
	? (module.exports = require("./prodKeys"))
	: (module.exports = require("./devKeys"));
