import { Container, Row, Col, Card } from "react-bootstrap";

//import Redux
import { useDispatch } from "react-redux";
import { fetchSignUp } from "./../../helper/requests/userRequest";

//import Componenets
import CreateUserForm from "./../../components/CreateUserForm/CreateUserForm";

function SignUp() {
	const dispatch = useDispatch();

	const handleSubmit = (data) => {
		dispatch(fetchSignUp(data));
	};
	return (
		<Container fluid>
			<Row className="justify-content-center mt-5">
				<Col xs lg="6">
					<Card body>
						<CreateUserForm submitSend={handleSubmit} />
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp;
