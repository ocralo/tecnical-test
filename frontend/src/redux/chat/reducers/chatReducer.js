import {
	SELECT_ROOM,
	SOCKET_GET_ROOMS,
	SOCKET_CREATE_ROOM,
	SOCKET_DELETE_ROOM,
	GET_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM,
} from "../types/chatTypes";

const initialState = {
	socket: null,
	rooms: [],
	errorRooms: false,
	roomSelected: null,
	roomBeforeSelected: null,
	messages: [],
	roomName: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function userReducer(state = initialState, action) {
	const {
		type,
		rooms,
		error,
		roomSelected,
		roomBeforeSelected,
		messages,
	} = action;
	switch (type) {
		case SELECT_ROOM:
			return {
				...state,
				roomSelected,
				roomBeforeSelected,
			};
		case GET_MESSAGE_ROOM:
			return {
				...state,
				messages,
			};
		case SEND_MESSAGE_ROOM:
			return {
				...state,
				messages,
			};
		case SOCKET_GET_ROOMS:
			return {
				...state,
				rooms,
				errorRooms: error,
			};
		case SOCKET_CREATE_ROOM:
			return {
				...state,
				rooms,
				errorRooms: error,
			};
		case SOCKET_DELETE_ROOM:
			return {
				...state,
				rooms,
				errorRooms: error,
			};
		default:
			return state;
	}
}
