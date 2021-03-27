import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

//import redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCheckToken } from "./helper/requests/userRequest";

//import pages
import Login from "./pages/Login/Login";
import SingUp from "./pages/SignUp/Signup";
import Chat from "./pages/Chat/Chat";

//import components
import Navbar from "./components/NavberMenu/NavberMenu";
import Spinner from "./components/Spinner/Spinner";
import PrivateRoute from "./components/PrivateRoute/index";

const RouterPages = () => {
	const dispatch = useDispatch();
	const { pending, errorToken } = useSelector(
		(state) => state.userReducer
	);

	useEffect(() => {
		dispatch(fetchCheckToken());
	}, []);

	console.log(pending);

	return (
		<>
			{!!!pending ? (
				<Router>
					<div>
						<Navbar></Navbar>
						<Switch>
							<Route exact path="/">
								<Login />
							</Route>
							<Route exact path="/singup">
								<SingUp />
							</Route>
							<PrivateRoute component={Chat} />
							{/* <Route exact path="/chat">
								<Chat />
							</Route> */}
						</Switch>
					</div>
				</Router>
			) : (
				<Spinner />
			)}
		</>
	);
};

RouterPages.propTypes = {};

export default RouterPages;
