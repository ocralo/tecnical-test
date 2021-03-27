import {
	FETCH_CHECK_TOKEN_USER,
	FETCH_CHECK_TOKEN_USER_ERROR,
	FETCH_CHECK_TOKEN_USER_PENDING,
	FETCH_SING_IN_SUCCESS,
	FETCH_SING_IN_PENDING,
	FETCH_SING_IN_ERROR,
	FETCH_SING_UP_PENDING,
	FETCH_SING_UP_SUCCESS,
	FETCH_SING_UP_ERROR,
} from "../types/usersTypes";

const initialState = {
	pendingUser: true,
	pendingCreateUser: true,
	pending: true,
	user: null,
	auth: false,
	errorUser: null,
	errorCreateUser: null,
	errorToken: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function userReducer(state = initialState, action) {
	const { type, user, auth, error } = action;

	switch (type) {
		case FETCH_CHECK_TOKEN_USER:
			return {
				...state,
				pending: false,
				user,
				auth,
			};
		case FETCH_CHECK_TOKEN_USER_ERROR:
			return {
				...state,
				pending: false,
				errorToken: error,
			};
		case FETCH_CHECK_TOKEN_USER_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_SING_IN_PENDING:
			return {
				...state,
				pendingUser: true,
			};
		case FETCH_SING_IN_SUCCESS:
			return {
				...state,
				pendingUser: false,
				user,
				auth,
			};
		case FETCH_SING_IN_ERROR:
			return {
				...state,
				pendingUser: false,
				errorUser: error,
			};
		case FETCH_SING_UP_PENDING:
			return {
				...state,
				pendingCreateUser: true,
			};
		case FETCH_SING_UP_SUCCESS:
			return {
				...state,
				pendingCreateUser: false,
			};
		case FETCH_SING_UP_ERROR:
			return {
				...state,
				pendingCreateUser: false,
				errorCreateUser: error,
			};
		default:
			return state;
	}
}
