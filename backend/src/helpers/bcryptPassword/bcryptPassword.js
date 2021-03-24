const bcrypt = require("bcrypt");
const saltRounds = 10;

const bcryptPassword = (password) => {
	return new Promise((accep, reject) => {
		bcrypt.genSalt(saltRounds, async (err1, salt) => {
			bcrypt.hash(password, salt, (err2, hash) => {
				// Now we can store the password hash in db.
				accep(hash);
			});
		});
	});
};

module.exports = bcryptPassword;
