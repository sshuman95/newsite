const Email = require("../../emailModel");

module.exports = app => {
	app.post("/", (req, res) => {
		const newEmail = new Email({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
		});
		newEmail.save().then(comment => res.json(comment));
		res.redirect("back");
	});
};
