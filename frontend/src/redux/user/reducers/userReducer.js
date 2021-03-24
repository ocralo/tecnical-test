import {
	FETCH_SING_IN_SUCCESS,
	FETCH_SING_IN_PENDING,
	FETCH_SING_IN_ERROR,
	FETCH_SING_OUT_SUCCESS,
	FETCH_SING_OUT_PENDING,
	FETCH_SING_OUT_ERROR,
} from "../types/usersTypes";

const initialState = {
	pendingUser: false,
	user: null,
	auth: false,
	errorUser: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function productsReducer(
	state = initialState,
	action
) {
	const { type, user, error } = action;
	switch (type) {
		case FETCH_SING_IN_PENDING:
			return {
				...state,
				pendingUser: true,
			};
		case FETCH_SING_IN_SUCCESS:
			return {
				...state,
				pendingUser: false,
				user: user,
			};
		case FETCH_SING_IN_ERROR:
			return {
				...state,
				pendingUser: false,
				errorUser: error,
			};
		default:
			return state;
	}
}

export const getUser = (state) => state.user;
export const getAuth = (state) => state.auth;
export const getUsserPending = (state) => state.pendingUser;
export const getUserError = (state) => state.errorUser;
