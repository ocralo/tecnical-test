const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const configJwt = require("../config/jwtKey/keyJWTConfig");

const protectedRoutes = require("../helpers/privateRoutes/privateRoutes");

const queryDb = require("./../helpers/queryDb/queryDb");
const bcryptPassword = require("./../helpers/bcryptPassword/bcryptPassword");

// About page route.
router.get("/about", protectedRoutes, (req, res) => {
	res.send("About this wiki");
});

// About page route.
router.get("/check", protectedRoutes, (req, res) => {
	const { nickName, id_user } = req.decoded;
	console.log("decode", req.decoded);
	res.json({ auth: true, nickName, id_user });
});

// EndPoint create user
router.post("/create", (req, res) => {
	const { name, lastName, email, password, nickName } = req.body;
	console.log({ name, lastName, email, password, nickName });
	if (
		!!!name ||
		!!!lastName ||
		!!!email ||
		!!!password ||
		!!!nickName
	) {
		console.log("faltan datos por enviar en create");
		res
			.status(300)
			.json({ message: "faltan datos por enviar", error: true });
		return;
	}

	bcryptPassword(password)
		.then((passwordBcrypt) => {
			queryDb(
				`INSERT INTO Users ( email, name, lastName, password, nickname) VALUES ( ?, ?, ?, ?, ?)`,
				[email, name, lastName, passwordBcrypt, nickName]
			)
				.then((result) => {
					console.log(result);
					res.status(200).json({ create: true, error: false });
				})
				.catch((err) => {
					res.status(500).json({ message: err, error: true });
				});
		})
		.catch((errBcrypt) => {
			res.status(500).json({ message: errBcrypt, error: true });
		});
});

/**
 * Endpoint for autentication
 *  */
router.post("/login", (req, res) => {
	const { password, nickName } = req.body;
	console.log(password, nickName);

	if (!!!password || !!!nickName) {
		console.log("faltan datos por enviar en login");
		res
			.status(300)
			.json({ message: "faltan datos por enviar", error: true });
		return;
	}

	queryDb(
		`SELECT nickname, password, id_user FROM Users WHERE nickName = ?`,
		[nickName]
	)
		.then((resultDb) => {
			console.log(resultDb[0]);
			//////////////
			bcrypt.compare(
				password,
				resultDb[0].password,
				function (err, resBcrypt) {
					if (resBcrypt == true) {
						const payload = {
							nickName,
							id: resultDb[0].id_user,
						};
						console.log({ nickName, id_user: resultDb[0].id_user });
						const token = jwt.sign(payload, configJwt.key, {
							expiresIn: 1440,
						});
						res.json({
							message: "Autenticación correcta",
							auth: true,
							error: false,
							nickName: { nickName, id_user: resultDb[0].id_user },
							token: token,
						});
					} else {
						res.json({
							message: "Usuario o contraseña incorrectos",
							error: true,
							auth: false,
						});
					}
				}
			);
			////////
		})
		.catch((err) => {
			res.json({
				message: "Usuario inexistente",
				error: true,
				auth: false,
			});
		});
});

module.exports = router;
