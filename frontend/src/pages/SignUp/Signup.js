import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

//import Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "./../../helper/requests/userRequest";

//import Componenets
import CreateUserForm from "./../../components/CreateUserForm/CreateUserForm";

function SignUp() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.userReducer);
	const history = useHistory();

	const handleSubmit = (data) => {
		dispatch(fetchSignUp(data));
		history.push("/");
	};
	return (
		<Container fluid>
			<Row className="justify-content-center mt-5">
				<Col xs lg="6">
					<Card body className="shadow">
						<CreateUserForm submitSend={handleSubmit} />
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp;
