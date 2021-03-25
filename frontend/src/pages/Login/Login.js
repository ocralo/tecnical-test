import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

//import Redux
import { useDispatch } from "react-redux";

//import Componenets
import LoginForm from "./../../components/LoginForm/LoginForm";

import { fetchSign } from "./../../helper/requests/userRequest";

function Home() {
	let history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = (data) => {
		console.log("datalog", data);
		dispatch(fetchSign(data));
		history.push("/singup");
	};
	return (
		<Container fluid>
			<Row className="justify-content-center mt-5">
				<Col xs lg="6">
					<Card body className="shadow">
						<LoginForm submitSend={handleSubmit} />
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
