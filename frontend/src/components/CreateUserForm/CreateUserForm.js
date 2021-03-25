import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function CreateUserForm({ submitSend }) {
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
		if (!!user.email && !!user.password) {
			submitSend(user);
			setUser({});
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formBasicName">
				<Form.Label>Nombres</Form.Label>
				<Form.Control
					type="text"
					name="name"
					placeholder="Nombre"
					value={user?.name || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicLastName">
				<Form.Label>Apellidos</Form.Label>
				<Form.Control
					type="text"
					name="lastName"
					placeholder="Apellido"
					value={user?.lastName || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicNickName">
				<Form.Label>Nombre de usuario</Form.Label>
				<Form.Control
					type="text"
					name="nickName"
					placeholder="Usuario"
					value={user?.nickName || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Correo Electronico</Form.Label>
				<Form.Control
					type="email"
					name="email"
					placeholder="Correo"
					value={user?.email || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Contraseña</Form.Label>
				<Form.Control
					type="password"
					name="password"
					placeholder="Contraseña"
					value={user?.password || ""}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Button block variant="primary" type="submit">
				Crear Usuario
			</Button>
		</Form>
	);
}

CreateUserForm.propTypes = { submitSend: PropTypes.func.isRequired };

export default CreateUserForm;
