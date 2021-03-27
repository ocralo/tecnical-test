import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function LoginForm({ submitSend }) {
	const [user, setUser] = useState({});

	const handleInputChange = (event) => {
		const target = event.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!!user.nickName && !!user.password) {
			submitSend(user);
			setUser({});
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Usuario</Form.Label>
				<Form.Control
					required
					type="type"
					name="nickName"
					placeholder="Usuario"
					value={user?.nickName || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Contraseña</Form.Label>
				<Form.Control
					required
					type="password"
					name="password"
					placeholder="Contraseña"
					value={user?.password || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Button block variant="primary" type="submit">
				Ingresar
			</Button>
		</Form>
	);
}

LoginForm.propTypes = { submitSend: PropTypes.func.isRequired };

export default LoginForm;
