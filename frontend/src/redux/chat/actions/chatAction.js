// redux/actions.js
import {
	SELECT_ROOM,
	SOCKET_GET_ROOMS,
	SOCKET_CREATE_ROOM,
	SOCKET_DELETE_ROOM,
} from "../types/chatTypes";

export function selectRoom(roomSelected) {
	console.log(roomSelected);
	return {
		type: SELECT_ROOM,
		roomSelected,
	};
}

export function socketGetRoom(rooms) {
	return {
		type: SOCKET_GET_ROOMS,
		rooms,
	};
}

export function socketCreateRoom(error) {
	return {
		type: SOCKET_CREATE_ROOM,
		error,
	};
}

export function socketDeleteRoom(error) {
	return {
		type: SOCKET_DELETE_ROOM,
		error,
	};
}
