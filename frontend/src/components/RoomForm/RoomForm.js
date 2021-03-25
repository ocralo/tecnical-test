import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function RoomForm({ submitSend, textButtom }) {
	const [room, setRoom] = useState({});

	const handleInputChange = (event) => {
		const target = event.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		setRoom({ ...room, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!!room.nameRoom) {
			submitSend(room);
			setRoom({});
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Nombre Room</Form.Label>
				<Form.Control
					required
					type="text"
					name="nameRoom"
					placeholder="nombre"
					value={room?.nameRoom || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Button block variant="primary" type="submit">
				{textButtom}
			</Button>
		</Form>
	);
}

RoomForm.propTypes = {
	submitSend: PropTypes.func.isRequired,
	textButtom: PropTypes.string,
};

RoomForm.defaultProps = {
	textButtom: "crear",
};

export default RoomForm;
