import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

//import Redux
import { useDispatch, useSelector } from "react-redux";

//import Componenets
import LoginForm from "./../../components/LoginForm/LoginForm";

import { fetchSign } from "./../../helper/requests/userRequest";

function Home() {
	let history = useHistory();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.userReducer);

	useEffect(() => {
		if (!!user) {
			history.push("/chat");
		}
	}, [user]);

	const handleSubmit = (data) => {
		dispatch(fetchSign(data));
	};
	return (
		<Container fluid>
			<Row className="justify-content-center mt-5">
				<Col className="d-flex justify-content-center">
					<img
						src={`${process.env.PUBLIC_URL}/static/RV-black.svg`}
						width="200"
						alt=""
					/>
				</Col>
			</Row>
			<Row className="justify-content-center my-5">
				<Col xs lg="6">
					<Card body className="shadow">
						<LoginForm title="Login" submitSend={handleSubmit} />
						<Link
							to="/singup"
							className="btn btn-secondary btn-block my-2">
							Crear Cuenta
						</Link>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
