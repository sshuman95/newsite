const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const keys = require("./config/keys");
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
	.connect(
		// I'm not completely sure what is what, but these DO NOT belong in source control
		// if they are keys unique to your database.
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

routes(app);

if (process.env.NODE_ENV === "production") {
	// express will serve production assets ( main.js, main.css )
	// look inside client/build to serve assets
	app.use(express.static("build"));

	// express will serve index.html if it doesn't recognize route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	});
}

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
