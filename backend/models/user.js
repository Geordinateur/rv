const sql = require("./db.js");
const bcrypt = require("bcryptjs");

//constructor
function User (user) {
	this.email = user.email;
	this.username = user.name;
	this.password = user.password;
};

User.create = (newUser, result) => {
	sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
		if(err) {
			console.error("error", err);
			result(err, null);
			return;
		}
		console.log("created user: ", { id: res.insertId, ...newUser });
		result(null, { message: 'User created with succefull', id: res.insertId, ...newUser });
	});
};

User.update = (id, user, result) => {
	sql.query("UPDATE users SET name= ?, email = ? WHERE id = ? ",
		[user.email, user.name, id],
		(err, res) => {
			if(err) {
				console.error("error: ", err);
				result(null, err);
				return;
			}
			if(res.affectedRows == 0) {
				//not found User with the id
				result({ kind: "not_found" }, null);
				return;
			}
			console.log("updated user: ", { id: id, ...user });
			result(null, { id: id, ...user });
		}
	);
};

User.login = (email, password, result) => {
	sql.query(`SELECT * FROM users WHERE email = "${email}"`, (err, res) => {
		if(err) {
			console.error("error: ", err);
			result(err, null);
			return;
		}
		if(res.length) {
			if(bcrypt.compareSync(password, res[0].password)) {
				result(null, res[0]);
				return;
			} else {
				//error to compare passwords
				result({ kind: "error password" }, null);
				return;
			}
		}
		//not found user with the email
		result({ kind: "not found" }, null);
		return;
	});
};

User.remove = (id, result) => {
	sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
		if(err) {
			console.error("error: ", err);
			result(null, err);
			return;
		}
		if(res.affectedRows == 0) {
			//not found User with the id
			result({ kind: "not found" }, null);
			return;
		}
		console.log("deleted user with id: ", id);
		result(null, res);
	});
};

module.exports = User;
