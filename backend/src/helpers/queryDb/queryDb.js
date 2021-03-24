const pool = require("./../../config/db/index");

const queryDb = (sqlSelect, data) => {
	return new Promise((accep, reject) => {
		pool.query(sqlSelect, data, function (error, rows, field) {
			if (!error) {
				if (!!error) {
					console.log("error en el query");
					reject("error en el query");
				} else {
					accep(rows);
				}
			} else {
				console.log("error coneccion DB");
				reject("error con la conexion en la DB");
			}
		});
	});
};

module.exports = queryDb;
