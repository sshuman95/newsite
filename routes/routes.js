const emailRoutes = require("./api/email");
const commentRoutes = require("./api/comments");

module.exports = app => {
	emailRoutes(app);
	commentRoutes(app);
};
