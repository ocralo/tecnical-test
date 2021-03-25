require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);

const cors = require("cors");

app.use(express.static("public"));
app.use(express.static("files"));

//add cors in project
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

//app.get("/", express.static(__dirname + "/public/index.html"));
