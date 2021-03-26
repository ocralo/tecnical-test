const express = require("express");
const protectedRoutes = express.Router();
const jwt = require("jsonwebtoken");

const configJwt = require("./../../config/jwtKey/keyJWTConfig");

protectedRoutes.use((req, res, next) => {
	const inToken =
		req.headers["auth"] ||
		req.headers["authorization"] ||
		req.headers["Authorization"];

	const token = inToken ? inToken.replace("Bearer ", "") : "";

	console.log("token", token);

	if (token) {
		jwt.verify(token, configJwt.key, (err, decoded) => {
			if (err) {
				console.log("token invalido", decoded);
				return res.json({ message: "Token inválida", error: true });
			} else {
				req.decoded = decoded;
				console.log("decode", decoded);
				next();
			}
		});
	} else {
		res.send({
			message: "Token no enviado.",
			error: true,
		});
	}
});

module.exports = protectedRoutes;
