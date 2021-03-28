import axios from "axios";

//import actions from redux
import {
	fetchSignInError,
	fetchSignInPending,
	fetchSignInSuccess,
	fetchSignUpError,
	fetchSignUpPending,
	fetchSignUpSuccess,
	fetchCheckTokenUser,
	fetchCheckTokenUserPending,
	fetchCheckTokenUserError,
} from "../../redux/user/actions/userAction";

export const fetchSign = (dataUser) => {
	return (dispatch) => {
		dispatch(fetchSignInPending());
		axios
			.post(`${process.env.REACT_APP_URL_SERVER}/user/login`, {
				nickName: dataUser.nickName,
				password: dataUser.password,
			})
			.then((result) => {
				const {
					auth,
					nickName: { nickName, id_user: id },
					token,
					error,
				} = result.data;
				if (!!!error) {
					localStorage.setItem("token", token);
					dispatch(fetchSignInSuccess({ nickName, id, token }, auth));
				} else {
					dispatch(fetchSignInError(error));
				}
			})
			.catch((err) => {
				dispatch(fetchSignInError(err));
			});
	};
};

export const fetchCheckToken = () => {
	return (dispatch) => {
		dispatch(fetchCheckTokenUserPending());
		axios
			.get(`${process.env.REACT_APP_URL_SERVER}/user/check`, {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") || ""
					}`,
				},
			})
			.then((result) => {
				const { auth, nickName, id_user, error } = result.data;
				console.log(result.data);
				if (!!!error) {
					if (!!nickName) {
						dispatch(
							fetchCheckTokenUser({ nickName, id: id_user }, auth)
						);
					} else {
						dispatch(fetchCheckTokenUserError(error));
					}
				} else {
					dispatch(fetchCheckTokenUserError(error));
				}
			})
			.catch((err) => {
				dispatch(fetchCheckTokenUserError(err));
			});
	};
};

export const fetchSignUp = (dataUser) => {
	return (dispatch) => {
		dispatch(fetchSignUpPending());
		axios
			.post(`${process.env.REACT_APP_URL_SERVER}/user/create`, {
				name: dataUser.name,
				lastName: dataUser.lastName,
				email: dataUser.email,
				password: dataUser.password,
				nickName: dataUser.nickName,
			})
			.then((result) => {
				const { error } = result.data;
				if (!!!error) {
					dispatch(fetchSignUpSuccess());
				} else {
					dispatch(fetchSignUpError(error));
				}
			})
			.catch((err) => {
				dispatch(fetchSignUpError(err));
			});
	};
};
