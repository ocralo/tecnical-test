require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);

const cors = require("cors");
const path = require("path");

//add cors in project
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public");

app.get(["/", "/chat", "/singup"], (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// add socket.io
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});
const ioFile = require("./socketIo/socketIo")(io);

//routes
require("./routes")(app);

server.listen(7000, () => {
	console.log("server on port 7000");
});
