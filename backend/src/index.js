require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);

const routes = require("./routes/index");

const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(express.static("files"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
require("./routes")(app);

server.listen(7000, () => {
	console.log("server on port 7000");
});

//app.get("/", express.static(__dirname + "/public/index.html"));
