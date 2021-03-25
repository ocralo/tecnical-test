const queryDb = require("./../helpers/queryDb/queryDb");

const selectRooms = (request) =>
	queryDb(`SELECT * FROM Rooms`)
		.then((result) => {
			console.log(result);
			request({ data: result, error: false });
		})
		.catch((err) => {
			request({
				error: true,
			});
		});

exports = module.exports = (io) => {
	io.on("connection", (socket) => {
		console.log("conection", socket.client.id);

		socket.on("join_room", (room) => {
			console.log("join", room);
			socket.join(room);
		});

		//INSERT INTO `Rooms` (`name_room`, `create_date_room`) VALUES ('prueba', '2021-03-24 20:13:27');

		socket.on("rooms:get-all", (room, request) => {
			selectRooms(request);
			console.log("rooms");
		});

		socket.on("message:get-all", (room, request) => {
			selectRooms(request);
			console.log("rooms");
		});

		socket.on("rooms:delete", (room, request) => {
			console.log(room);
			queryDb(`DELETE FROM Rooms WHERE Rooms.id_room = ?`, [
				room.room,
			])
				.then((result) => {
					console.log(result);
					request({ error: false });
					const send = (data) => io.emit("rooms:create", data);
					selectRooms(send);
				})
				.catch((err) => {
					request({
						error: true,
					});
				});
			console.log("rooms");
		});

		socket.on("rooms:create", (data, request) => {
			const { nameRoom, dateRoom } = data;
			console.log(data);
			queryDb(
				`INSERT INTO Rooms (name_room, create_date_room) VALUES (?, ?)`,
				[nameRoom, dateRoom]
			)
				.then((result) => {
					console.log({ result });
					selectRooms(request);
					const send = (data) => io.emit("rooms:create", data);
					selectRooms(send);
				})
				.catch((err) => {
					request({
						error: true,
					});
				});
			console.log("rooms");
		});

		socket.on("disconnect", () => {
			console.log("user disconnected");
		});
	});
};
