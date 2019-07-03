const emailRoutes = require("./api/email");
const commentRoutes = require("./api/comment");

module.exports = app => {
	emailRoutes(app);
	commentRoutes(app);
};
