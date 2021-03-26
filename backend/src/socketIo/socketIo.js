const queryDb = require("./../helpers/queryDb/queryDb");

const selectRooms = (request) =>
	queryDb(`SELECT * FROM Rooms`)
		.then((result) => {
			request({ data: result, error: false });
		})
		.catch((err) => {
			request({
				error: true,
			});
		});

const selectMsg = (request, roomId) =>
	queryDb(
		`SELECT ro.name_room,us.nickname,ms.message_text,ms.create_message_room AS create_message,ms.id_message AS id FROM Messages ms JOIN Rooms ro ON ro.id_room = ms.fk_room_id JOIN Users us ON us.id_user = ms.fk_user_id WHERE ro.id_room = ? ORDER BY ms.create_message_room`,
		[roomId]
	)
		.then((result) => {
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

		socket.on("unsubscribe", (roomId, request) => {
			socket.leave(room);
			request({ error: false });
		});

		socket.on("rooms:get-all", (room, request) => {
			selectRooms(request);
		});

		socket.on("Message:get-all", (roomId, request) => {
			console.log("join", roomId);
			socket.join(roomId);
			selectMsg(request, roomId);
		});

		socket.on("Message:create", (data, request) => {
			const { nameRoom, idUser, msg } = data;
			console.log(data);
			const dateMsg = new Date()
				.toISOString()
				.slice(0, 19)
				.replace("T", " ");

			queryDb(
				`INSERT INTO Messages (message_text, create_message_room, fk_user_id, fk_room_id) VALUES ( ?, ?, ?, ?)`,
				[msg, dateMsg, idUser, nameRoom]
			)
				.then((result) => {
					const send = (data) => {
						console.log({ nameRoom, data });
						io.to(nameRoom).emit("Message:create", data);
					};
					console.log({ gg: nameRoom });
					selectMsg(send, nameRoom);
				})
				.catch((err) => {
					request({
						error: true,
					});
				});
		});

		socket.on("rooms:delete", (room, request) => {
			queryDb(`DELETE FROM Rooms WHERE Rooms.id_room = ?`, [
				room.room,
			])
				.then((result) => {
					request({ error: false });
					const send = (data) => io.emit("rooms:create", data);
					selectRooms(send);
				})
				.catch((err) => {
					request({
						error: true,
					});
				});
		});

		socket.on("rooms:create", (data, request) => {
			const { nameRoom, dateRoom } = data;
			queryDb(
				`INSERT INTO Rooms (name_room, create_date_room) VALUES (?, ?)`,
				[nameRoom, dateRoom]
			)
				.then((result) => {
					const send = (data) => io.emit("rooms:create", data);
					selectRooms(send);
				})
				.catch((err) => {
					request({
						error: true,
					});
				});
		});

		socket.on("disconnect", () => {
			console.log("user disconnected");
		});
	});
};
