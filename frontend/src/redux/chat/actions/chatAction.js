// redux/actions.js
import {
	SELECT_ROOM,
	SOCKET_GET_ROOMS,
	SOCKET_CREATE_ROOM,
	SOCKET_DELETE_ROOM,
	GET_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM,
} from "../types/chatTypes";

export function selectRoom(roomSelected, roomBeforeSelected) {
	console.log(roomSelected);
	return {
		type: SELECT_ROOM,
		roomSelected,
		roomBeforeSelected,
	};
}

export function getMessageRoom(messages) {
	console.log(messages);
	return {
		type: GET_MESSAGE_ROOM,
		messages,
	};
}

export function sendMessageRoom(messages) {
	console.log(messages);
	return {
		type: SEND_MESSAGE_ROOM,
		messages,
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
