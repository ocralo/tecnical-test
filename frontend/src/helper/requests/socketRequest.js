import { dateDaeTime } from "./../../helper/date/date";
import socket from "./../../helper/socketIo/socketIo";

//import actions from redux
import {
	selectRoom,
	socketGetRoom,
	sendMessageRoom,
	getMessageRoom,
	socketDeleteRoom,
	socketCreateRoom,
} from "../../redux/chat/actions/chatAction";

export const selectRoomChat = (roomSelected) => {
	console.log(roomSelected);
	return (dispatch) => {
		dispatch(selectRoom(roomSelected));
	};
};

export const socketGetRooms = () => {
	return (dispatch) => {
		socket.emit("rooms:get-all", { token: "" }, ({ data, error }) => {
			if (error) {
			} else {
				dispatch(socketGetRoom(data, false));
				console.log(data);
			}
		});
	};
};

export const socketGetMessage = (id) => {
	return (dispatch) => {
		console.log({ id });
		socket.emit("Message:get-all", id, ({ data, error }) => {
			if (error) {
			} else {
				dispatch(getMessageRoom(data, false));
				console.log(data);
			}
		});
	};
};

export const socketGetMessageOn = (data) => {
	return (dispatch) => {
		dispatch(getMessageRoom(data, false));
	};
};

export const socketSendMessage = (msgUser) => {
	return (dispatch) => {
		const { nameRoom, idUser, msg } = msgUser;
		console.log({ msgUser });

		socket.emit(
			"Message:create",
			{ nameRoom, idUser, msg },
			({ data, error }) => {
				console.log(data);
				if (!!error) {
				} else {
					dispatch(sendMessageRoom(data, false));
					console.log(data);
				}
			}
		);
	};
};

export const socketOnGetRooms = (data, error = false) => {
	return (dispatch) => {
		dispatch(socketGetRoom(data, error));
	};
};

export const socketCreateRooms = (room) => {
	return (dispatch) => {
		socket.emit(
			"rooms:create",
			{
				...room,
				dateRoom: dateDaeTime(new Date()),
			},
			({ data, error }) => {
				if (!!error) {
				} else {
					dispatch(socketCreateRoom(false));
					alert("se ha creado la room con exito");
					console.log(data);
				}
			}
		);
	};
};

export const socketDeleteRooms = (room) => {
	console.log(room);
	return (dispatch) => {
		console.log(room);
		socket.emit(
			"rooms:delete",
			{
				room,
			},
			(data) => {
				console.log("error s", data);

				if (!!!data) {
				} else {
					console.log("entre");
					alert("se ha eliminado la room con exito");
					dispatch(socketDeleteRoom(data));
				}
			}
		);
	};
};
