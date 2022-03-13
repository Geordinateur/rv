const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const tokenConfig = require("../config/tokenConfig.js");

//create and save a new user
exports.create = (req, res) => {
	console.log("CREATE");
	console.log(req.body);
	//validate request
	if(!req.body) {
		res.status(400).send({
			message: "Content can not be emplty",
		});
	}
	if(req.body.password !== req.body.passwordVerify) {
		res.status(500).send({
			message: "Passords isnt identique",
		});
	}

	//create
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(req.body.password, salt);
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hash
	});

	//save user in the database
	User.create(user, (err, data) => {
		if(err) 
			res.status(500).send({
				message: err.message || "Some error occurred while creating the User.",
			});
		else res.send(data);
	});
}

exports.login = (req, res) => {
	console.log("LOGIN");
	//validate request
	if(!req.body.email || !req.body.password) {
		res.status(400).send({
			message: "Content can not be emplty!",
		});
	}
	//login
	User.login(req.body.email, req.body.password, (err, data) => {
		if(err) {
			if(err.kind === "not found") {
				res.status(404).send({
					message: `Not found user with email ${req.body.email}.`,
				});
			} else if(err.kind === "error password") {
				res.status(500).send({
					message: `Error password with email ${req.body.email}`,
				});
			} else {
				res.status(500).send({
					message: `Error retrieving user with email ${req.body.email}`,
				});
			}
		} else {
			res.status(200)
				.send({
					message: "Identification réussite!",
					token: jwt.sign(
						{ userId : data.id },
						tokenConfig.RANDOM_TOKEN_SECRET,
						{ expiresIn: tokenConfig.EXPIRESIN }
					)
				})
		}
	});
};

//delete a user with the specified userId in the request
exports.remove = (req, res) => {
	User.remove(req.params.userId, (err, data) => {
		if(err) {
			if(err.kind === "not found") {
				res.status(404).send({
					message: `Not found user with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					message: "Could not delete user with id " + req.params.userId,
				});
			}
		} else res.send({ message: "User was deleted successfully!" });
	});
};
