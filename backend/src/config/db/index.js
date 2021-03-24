//const mysql = require("mysql");
const mysql = require("mysql");

// Set database connection credentials
const config = {
	host: process.env.HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	connectionLimit: 10,
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
