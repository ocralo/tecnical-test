const user = require("./user");
exports = module.exports = (app) => {
	app.use("/user", user);
};
