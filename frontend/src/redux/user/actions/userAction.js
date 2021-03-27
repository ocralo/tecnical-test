// redux/actions.js
import {
	FETCH_CHECK_TOKEN_USER,
	FETCH_CHECK_TOKEN_USER_ERROR,
	FETCH_CHECK_TOKEN_USER_PENDING,
	FETCH_SING_IN_PENDING,
	FETCH_SING_IN_SUCCESS,
	FETCH_SING_IN_ERROR,
	FETCH_SING_UP_PENDING,
	FETCH_SING_UP_SUCCESS,
	FETCH_SING_UP_ERROR,
	FETCH_SING_OUT_PENDING,
	FETCH_SING_OUT_SUCCESS,
	FETCH_SING_OUT_ERROR,
} from "../types/usersTypes";

export function fetchSignInPending() {
	return {
		type: FETCH_SING_IN_PENDING,
	};
}

export function fetchSignInSuccess(user, auth) {
	console.log({ user });
	return {
		type: FETCH_SING_IN_SUCCESS,
		user,
		auth,
	};
}

export function fetchSignInError(error) {
	return {
		type: FETCH_SING_IN_ERROR,
		errorUser: error,
	};
}

export function fetchSignUpPending() {
	return {
		type: FETCH_SING_UP_PENDING,
	};
}

export function fetchSignUpSuccess(user, auth) {
	console.log(auth);
	return {
		type: FETCH_SING_UP_SUCCESS,
	};
}

export function fetchSignUpError(error) {
	return {
		type: FETCH_SING_UP_ERROR,
		errorCreateUser: error,
	};
}

export function fetchCheckTokenUserPending() {
	return {
		type: FETCH_CHECK_TOKEN_USER_PENDING,
	};
}

export function fetchCheckTokenUserError(error) {
	return {
		type: FETCH_CHECK_TOKEN_USER_ERROR,
		error,
	};
}

export function fetchCheckTokenUser(user, auth) {
	return {
		type: FETCH_CHECK_TOKEN_USER,
		user,
		auth,
	};
}
