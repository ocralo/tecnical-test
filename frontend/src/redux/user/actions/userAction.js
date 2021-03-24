// redux/actions.js
import {
  FETCH_SING_IN_PENDING,
  FETCH_SING_IN_SUCCESS,
  FETCH_SING_IN_ERROR,
  FETCH_SING_OUT_PENDING,
  FETCH_SING_OUT_SUCCESS,
  FETCH_SING_OUT_ERROR,
} from "../types/usersTypes";

export function fetchSignInPending() {
  return {
    type: FETCH_SING_IN_PENDING,
  };
}

export function fetchSignInSuccess(user) {
  return {
    type: FETCH_SING_IN_SUCCESS,
    user,
  };
}

export function fetchSignInError(error) {
  return {
    type: FETCH_SING_IN_ERROR,
    errorUser: error,
  };
}
