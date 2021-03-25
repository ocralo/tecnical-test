import React from "react";
import PropTypes from "prop-types";
import {
	Card,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";

import FloatMessage, {
	FloatMessageFrom,
} from "./../FloatMessage/FloatMessage";

function ChatForm({ id }) {
	return (
		<Card className="text-center">
			<Card.Header>Nombre de la room {id}</Card.Header>
			<Card.Body className="d-flex flex-column">
				<FloatMessage />
				<FloatMessageFrom />
			</Card.Body>
			<Card.Footer className="text-muted p-0">
				<InputGroup>
					<FormControl
						placeholder="..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
					<InputGroup.Append>
						<Button variant="success">Enviar</Button>
					</InputGroup.Append>
				</InputGroup>
			</Card.Footer>
		</Card>
	);
}

ChatForm.propTypes = { id: PropTypes.number };

export default ChatForm;
