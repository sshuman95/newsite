// in Heroku, make an environment variable that stores the string you use to connect to the db

module.exports = {
	mongoURI: process.env.MONGO_URI
};
