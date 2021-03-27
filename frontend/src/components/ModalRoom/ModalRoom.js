import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

//import Redux
import { useDispatch } from "react-redux";
import { socketCreateRooms } from "./../../helper/requests/socketRequest";

import RoomForm from "./../RoomForm/RoomForm";

function ModalRoom(props) {
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (data) => {
		dispatch(socketCreateRooms(data));
		handleClose();
	};

	return (
		<>
			<Button
				className="my-2 rounded-pill"
				variant="primary"
				onClick={handleShow}>
				+ Crear Sala
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Crear Sala</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<RoomForm submitSend={handleSubmit} />
				</Modal.Body>
			</Modal>
		</>
	);
}

ModalRoom.propTypes = {};

export default ModalRoom;
