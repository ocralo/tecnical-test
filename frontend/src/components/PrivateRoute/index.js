import React from "react";
import { Route, Redirect } from "react-router-dom";

//import redux
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useSelector((state) => state.userReducer);
	return (
		<Route
			{...rest}
			render={(props) =>
				!!user ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
